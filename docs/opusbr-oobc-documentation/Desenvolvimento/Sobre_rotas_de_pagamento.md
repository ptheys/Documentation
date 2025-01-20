# Especificidades das rotas de pagamento

Este documento irá comentar certas particularidades de campos específicos dos payloads e como podem afetar o processamento dos mesmos nas rotas entre legado e produto da Opus.

## Recomendações gerais sobre as rotas

Para que os conectores de fato funcionem, o essencial é que as rotas que serão de fato utilizadas pelo produto sejam implementadas, isso claro, dependendo de que fases a instituição deseja participar. As rotas que precisam ser implementadas estão dividas por recurso na Documentação Plataforma OPUS Open Finance em diferentes pastas: open-data esta em `integração-plugin/open-data/`(rotas de compartilhamento de dados abertos), consent em `integração-plugin/consent/`(rotas de consentimento para compartilhamento ou pagamento), financial-data em `integração-plugin/financial-data/`(rotas de compartilhamento de dados de cliente) e payment em `integração-plugin/payments/`(rotas para pagamento).

Dependendo da diferença de como os dados são tratados no legado da instiuição comparado com os dados do produto/OFB, muitas das rotas irão precisar das mesmas transformações desses dados para que as duas pontas possam se comunicar. Caso isso ocorra, recomenda-se criar rotas auxiliares para que o código dentro das rotas principais não fique muito poluído e repetitivo também.

Para informações mais gerais, como, por exemplo, pegar tokens ou chaves de acesso para pontos do legado, também é válida a criação de rotas auxiliares, geralmente colocadas na pasta utils. Fica a critério do desenvolvedor como melhor organizar essas rotas auxiliares, porém elas são muito importantes caso muitas transformações sejam necessárias.

Para o funcionamento correto do produto, ele precisa que alguns headers associados aos componentes Camel HTTP ou ao Netty, como o CamelHttpUri fiquem intactos durante a passagem pelo conector. Alguns headers desses componentes podem acabar sobrescrevendo alguns detalhes da chamada, como, por exemplo, o CamelHttpQuery pode sobrescrever parâmetros passados na URI. Portanto, a recomendação é guardar esses headers assim que chegam na rota em propriedades (mencionaremos como mais adiante) para que, no final da rota, possamos colocá-los de volta.

## Recomendações gerais sobre os campos de requisição/resposta

Os payloads trocados possuem diversos campos e alguns deles podem ser preenchidos de algumas maneiras diferentes. Muitas vezes o formato das mensagens de requisição e resposta do legado difere do formato esperado pelo produto e por consequência pelo OFB. Para conseguir facilmente montar essas respostas em padrões para ambos os lados, recomenda-se o uso de templates em [Velocity](https://camel.apache.org/camel-quarkus/latest/reference/extensions/velocity.html) (arquivos .vm) dentro dos conectores para poder facilmente montar essas mensagens com os dados vindos dos conectores.

Dentre esses campos, alguns são opcionais e outros são obrigatórios. Tem-se como boa prática garantir que campos opcionais, quando não apareçam, não sejam preenchidos nem em requisições ou respostas. Pode-se garantir isso por meio de condições nos arquivos velocity (.vm) que irão mapear os dados de requisições e respostas que passam pelo conector, como no exemplo abaixo:

```json
#if(${body.requestBody.data.ibgeTownCode})
    "ibgeTownCode": "${body.requestBody.data.ibgeTownCode}",
#end
```

O exemplo acima foi um trecho retirado de um template em velocity onde tem como entrada a requisição vinda do produto da Opus e tem como saída o template para a requisição do legado. Nesse caso, só adicionamos ao corpo do payload o campo ibgeTownCode caso ele tenha sido enviado para o mapeamento. Esse arquivo estaria mapeando uma requisição vinda do produto da Opus para o legado da instituição.

Dentro das rotas, podemos guardar informações que podem ser necessárias por propriedades. Para salvar um dado para ser utilizado durante o processamento da rota, podemos fazer algo como:

```xml
<setProperty name="payload">
  <simple>${body}</simple>
</setProperty>
```

No caso acima, estamos salvando o body inteiro da requisição que chegou na rota em uma propriedade chamada payload. Pode-se armazenar valores de campos específicos assim como o corpo inteiro, isso tudo depende de quantas informações serão necessárias durante o processamento da rota.

Recomenda-se guardar o body da requisição original em uma propriedade, pois o mesmo pode mudar no decorrer da rota com as diferentes chamadas a diferentes endpoints. Digamos, por exemplo, que seja necessário checar o QRCode em uma rota específica do legado. Para conseguir alterar o corpo da requisição para o corpo esperado no legado no ponto de decodificação do QRCode e depois retornar o corpo da requisição de iniciação de pagamento, será necessário guardar o corpo original em uma propriedade.

Para posteriormente utilizar essas propriedades, basta fazer algo como o exemplo abaixo:

```xml
<setBody>
  <simple>${exchangeProperty[payload]}</simple>
</setBody>     
```

Aqui estamos apenas fazendo com que o corpo da requisição volte a ser aquilo que guardamos em *payload*.

Através da linguagem [**simple**](https://camel.apache.org/components/4.0.x/languages/simple-language.html) podemos também acessar e guardar campos específicos. Isso se torna importante quando temos que realizar algum tipo de alteração nos dados ao passar a requisição de um ponto para outro, por exemplo, digamos que as datas no legado estão em formato diferente das datas no produto da Opus. Cabe ao conector fazer essa transformação:

```xml
<setProperty name="getUpdateTime">
  <simple>${body[data][updateAt].substring(0,19)}</simple>
</setProperty>
<setProperty name="datePart">
  <simple>${bean:camelHelper.getSplittedStringFromPosition("${exchangeProperty[getUpdateTime]}", "T", 0)}</simple>
</setProperty>
<setProperty name="timePart">
  <simple>${bean:camelHelper.getSplittedStringFromPosition("${exchangeProperty[getUpdateTime]}", "T", 1)}</simple>
</setProperty>
<setProperty name="updateUtcDateTime">
  <simple>${bean:camelHelper.getUTCFromDateTimeZoned("${exchangeProperty[datePart]} ${exchangeProperty[timePart]}", "yyyy-MM-dd HH:mm:ss", "America/Sao_Paulo")}</simple>
</setProperty>
<setHeader name="UpdateDateTime">
  <simple>${exchangeProperty[updateUtcDateTime]}</simple>
</setHeader>

<to uri="velocity:file:///work/models_v3/response-get-pix-instant_v3.vm?allowContextMapAll=true"/>

<removeHeaders pattern="UpdateDateTime" />
```

No exemplo acima, estamos criando 3 propriedades diferentes vindas da resposta do legado. Utilizamos duas delas para montar o formato esperado pelo produto na propriedade updateUtcDateTime. Colocamos essa última propriedade em um header chamado UpdateDateTime que será utilizado no template velocity logo em seguida e, por fim, removemos esse header da requisição para que ele não perdure.

Nele também estamos utilizando em algumas linhas funções auxiliares que estão disponíveis na rota através do CamelHelper, uma classe de suporte feita pela Opus com diversas funções que podem auxiliar na transformação dos dados. Pode-se chamar essa classe no desenvolvimento de rotas de payment pelo nome CamelHelper e no desenvolvimento de rotas de consent utilizando CamelUtils e se pode ter uma melhor ideia das funcionalidades dessa classe acessando o arquivo `integração-plugin/readme.md` na seção **Classe utilitária camelHelper**.

No trecho, não só estamos usando esse bean como também um método Java de substring. Esta funcionalidade é possível porque, ao utilizar a linguagem Simple, campos de texto são automaticamente convertidos para o tipo String. Além disso, existe o suporte para expressões OGNL para ajudar nas transformações e checagens, caso haja um maior interesse pode-se consultar a [documentação oficial](https://camel.apache.org/components/4.4.x/languages/simple-language.html#_ognl_expression_support).

Podemos utilizar para acessar os campos outra poderosa ferramenta, o [jsonpath](https://camel.apache.org/components/4.0.x/languages/jsonpath-language.html). Ela nos permite realizar consultas mais sofisticadas em cima do body da requisição. Abaixo segue um exemplo do seu uso em uma rota Camel:

```xml
<setProperty name="HasSchedule">
  <jsonpath suppressExceptions="true">$.consent.payment.schedule</jsonpath>
</setProperty>
```

Aqui estamos armazenando uma propriedade que irá ter o objeto *schedule* vindo do corpo da requisição, ou permanecerá vazia caso a consulta falhe, por exemplo, caso o campo 'schedule' não estiver presente. Isso ocorre porque a opção `suppressExceptions="true"` permite que, em vez de gerar um erro, simplesmente atribua `null` à propriedade e a execução prossiga sem interrupções. Portanto, o uso do jsonpath pode ser uma alternativa mais prática para realizar a verificação da existência de campos não obrigatórios.

Por fim, vale ressaltar que os arquivos velocity são externos às rotas, portanto não têm acesso às propriedades (no caso de usar exchangeProperty[]), mas apenas aos headers e ao body da requisição que estavam presentes antes de serem enviados para o arquivo. Caso seja necessário acessar algum dado em uma propriedade, recomendamos o envio para o velocity através de um header. Após o uso, aconselhamos remover esses headers para manter a eficiência e boa estrutura das requisições HTTP, além de evitar o vazamento de informações.

## Sobre a Iniciação de pagamentos

Como o produto segue as especificações do OFB em todas as fases, caso alguma dúvida surja e a documentação da Opus não seja suficiente, pode-se utilizar a documentação oficial. Para essa parte de iniciação de pagamentos, pode-se referir a [documentação de Pagamentos V4](https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/347079010/Informa+es+T+cnicas+-+SV+Pagamentos+-+v4.0.0) e [de Pagamentos Automáticos V1](https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/345178397/Informa+es+T+cnicas+-+SV+Pagamentos+Autom+ticos+-+v1.0.0).

### Verificações que precisam ser feitas no oob-consent direct:validatePaymentData_V3

Para que o pagamento possa ser de fato iniciado, uma série de validações se mostram necessárias dependendo do tipo de pagamento que está sendo utilizado. Para isso, é necessário a criação da rota direct:validatePaymentData_V3, fazendo as seguintes validações quando as informações do pagamento forem enviadas:

- Valor do pagamento não deve exceder o limite transacional (geralmente 999999999.99);
- Se tiver QR Code estático:
    - Campo `localInstrument` do pagamento deve ser QRES;
    - Valor no pagamento deve coincidir com o valor no QR Code;
    - Proxy no pagamento deve coincidir com o proxy no QR Code;
- Se o QR Code for dinâmico:
    - Campo `localInstrument` do pagamento deve ser QRDN;
    - O QR Code não deve ter sido usado ainda;

### Verificações que precisam ser feitas no oob-payment direct:paymentsPostPixPayments_v3

A instituição pode optar ou não por disponibilizar um serviço para adquirir os dados da conta com base em chave pix, para que os conectores possam fazer a validação do pagamento. Isso nos leva a dois casos que exigem uma devida atenção.

- Se a Instituição fornecer o serviço: Os dados do conta do recebedor devem ser validados sempre que forem mandados junto com a chave pix. Se só a chave pix for enviada, a requisição de pagamento para o legado pode ser preenchida com os dados da conta do recebedor, recuperada usando o serviço
- Se a Instituição não fornecer o serviço: Os dados das contas do recebedor devem ser validados sempre que forem mandados junto com a chave pix. Além disso, haverá cenários em que só a chave pix será enviada na requisição de pagamento para o legado sem os dados da conta do recebedor

Para o caso do legado ter diferentes endpoints para diferentes formas de pagamentos, a avaliação do valor do campo **localInstrument** torna-se necessária para rotear corretamente as requisições ao endpoint apropriado. No caso do valor do campo ser **MANU** não é necessário chamar o serviço para adquirir os dados da conta, pois ele deve ser prontamente informado no payload. Para todos os outros casos, o serviço precisa ser chamado (caso seja possível) para preencher os dados da conta ou verificar se estão corretos caso os dados venham preenchidos.

Sobre o campo **schedule/date**: Esses dois campos são utilizados para recuperar a data do pagamento em diferentes cenários. Para recuperar essa informação existem 3 cenários distintos. Vamos listar os 3 abaixo e informar aonde a informação esta no payload em cada caso
    - No caso de um pagamento instantâneo, pegando do campo `consent/payment/date`
    - No caso de um agendamento simples, pegando do campo `consent/payment/schedule/single/date`
    - No caso de um agendamento recorrente e o Automático V1, pegando do `requestBody/data/date`
