---
layout: default
title: "Pagamentos"
parent: "Integração da Plataforma"
nav_order: 2
---

## Pagamentos

A integração com o pilar de pagamentos do _Open Finance Brasil_ é necessária apenas para o perfil de Detentor de Conta. Essa integração permite que o produto Opus direcione uma requisição para os sistemas de retaguarda necessários para o fluxo do pagamento. O fluxo de pagamento, em alto nível, se divide em dois, o **consentimento** e a **liquidação do pagamento** e ambos tem suas integrações necessárias. A integração com o produto funciona através de uma camada que chamamos de _conectores_. 

## Integração

![Conector](./images/Conector.png)

A imagem acima direciona como o conector funcionará: Quando uma instituição participante do Open Finance enviar uma requisição para o ecossistema, o produto Opus Open Finance recebe e trata de todos os protocolos de segurança exigidos pela regulação. Uma vez que isso foi feito, a requisição será direcionada à camada dos conectores, os quais serão resposáveis por chamar os sistemas de retaguarda do Detentor de Conta. Em geral, são 5 conectores que precisam ser construídos e eles são desenvolvidos em Camel.

## Camada dos conectores

Conectores são rotas definidas em Apache Camel que conectam endpoints de clientes (que geralmente é chamado de sistemas de retaguarda) ao produto da Opus que consegue integrar a instituição ao [Open Finance Brasil (OFB)](https://openfinancebrasil.atlassian.net/wiki/spaces/OF/overview?homepageId=17367041).

Os conectores são responsáveis por corretamente conectar os endpoints do produto com os endpoints corretos do legado que possuem as informações necessárias para realizar a iniciação de pagamento. Além disso, os conectores podem fazer pequenas transformações nos dados passados para respeitar formatos tanto do produto da Opus quanto formatos esperados da API do legado. Por fim, os conectores podem fazer as mudanças necessárias, omitindo ou adicionando campos das requisições e repostas, para que ambas estejam de acordo com aquilo esperado em ambos os lados da comunicação.

Para pagamentos, existem atualmente rotas para: criar a iniciação do pagamento (POST) depois de já terem o consentimento, recuperar iniciações de pagamentos (GET) já realizadas, cancelar a iniciação de pagamento (PATCH), descobrir e listar contas e validar pagamentos.

Lembrando que esse pagamento será apenas iniciado pelo OFB e cabe à instituição de fato realizar ou agendar o pagamento e retornar o que foi feito para o produto da Opus. Os conectores aqui podem auxiliar fazendo diversas transformações nos dados para respeitarem as APIs de ambos os lados do produto e consequentemente do OFB e do legado da instituição.

## Rotas dos conectores

A seguir, uma breve explicação de cada rota de integração do pagamento. Como o produto segue as especificações do OFB em todas as fases, caso alguma dúvida surja e a documentação da Opus não seja suficiente, pode-se utilizar a documentação oficial. Para essa parte de iniciação de pagamentos, pode-se referir a documentação de [Pagamentos V4](https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/347079010/Informa+es+T+cnicas+-+SV+Pagamentos+-+v4.0.0) e de [Pagamentos Automáticos V1](https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/345178397/Informa+es+T+cnicas+-+SV+Pagamentos+Autom+ticos+-+v2.0.0).

### Realizar um pagamento

A rota `POST pix payment` é a rota de iniciação de um pagamento Pix. É importante observar que, no Open Finance, o único meio de pagamento aceito hoje é o Pix. Esse conector é ativado durante a jornada do pagamento em si, isto é, o consentimento já foi autorizado.

Os schemas podem ser encontrados aqui:

|Schema                             | Link        |
|-----------------------------------|:-----------:|
|Request exemplo  |[link](./Schemas_conector_pgto/payment/paymentsPostPixPayments_v3/request-example.json)|
|Request pagamentos automáticos V2  |[link](./Schemas_conector_pgto/payment/paymentsPostPixPayments_v3/request-recurring-example-v2.json)|
|Request schema  |[link](./Schemas_conector_pgto/payment/paymentsPostPixPayments_v3/request-schema.json)|
|Response error exemplo  |[link](./Schemas_conector_pgto/payment/paymentsPostPixPayments_v3/response-error-example.json)|
|Response error schema  |[link](./Schemas_conector_pgto/payment/paymentsPostPixPayments_v3/response-error-schema.json)|
|Response exemplo  |[link](./Schemas_conector_pgto/payment/paymentsPostPixPayments_v3/response-example.json)|
|Response pagamentos automático exemplo  |[link](./Schemas_conector_pgto/payment/paymentsPostPixPayments_v3/response-recurring-example.json)|
|Response schema  |[link](./Schemas_conector_pgto/payment/paymentsPostPixPayments_v3/response-schema.json)|

### Cancelar um pagamento agendado

A rota `PATCH pix payment` realiza o cancelamento de um pix agendado. Segundo a regulação, participantes do Open Finance devem ter seus sistemas de pix agendado em produção. Esse concetor será chamada apenas se o usuário correntista utilizar a área de gestão do consentimento para cancelar um pagamento agendado, isto é, o consentimento já deve ter sido autorizado e o pagamento agendado.

Os schemas podem ser encontrados aqui:

|Schema                             | Link        |
|-----------------------------------|:-----------:|
|Request exemplo  |[link](./Schemas_conector_pgto/payment/paymentsPatchPixPaymentsPaymentId_v3/request-example.json)|
|Request pagamentos automáticos V2  |[link](./Schemas_conector_pgto/payment/paymentsPatchPixPaymentsPaymentId_v3/request-recurring-example-v2.json)|
|Request schema  |[link](./Schemas_conector_pgto/payment/paymentsPatchPixPaymentsPaymentId_v3/request-schema.json)|
|Response error exemplo  |[link](./Schemas_conector_pgto/payment/paymentsPatchPixPaymentsPaymentId_v3/response-error-example.json)|
|Response error schema  |[link](./Schemas_conector_pgto/payment/paymentsPatchPixPaymentsPaymentId_v3/response-error-schema.json)|
|Response exemplo  |[link](./Schemas_conector_pgto/payment/paymentsPatchPixPaymentsPaymentId_v3/response-example.json)|
|Response pagamentos automático exemplo  |[link](./Schemas_conector_pgto/payment/paymentsPatchPixPaymentsPaymentId_v3/response-recurring-example.json)|
|Response schema  |[link](./Schemas_conector_pgto/payment/paymentsPatchPixPaymentsPaymentId_v3/response-schema.json)|

### Validar um pagamento

A rota `GET validate payment data` realiza uma série de validações durante a etapa do consentimento do correntista, para, caso a validação encontre algum erro, o consentimento não será iniciado. Esse conector faz parte de uma etapa regulatória e define algumas validações como: 

- Valor do pagamento não deve exceder o limite transacional (geralmente 999999999.99);
Se tiver QR Code estático:
- Campo localInstrument do pagamento deve ser QRES;
- Valor no pagamento deve coincidir com o valor no QR Code;
- Proxy no pagamento deve coincidir com o proxy no QR Code;
Se o QR Code for dinâmico:
- Campo localInstrument do pagamento deve ser QRDN;
- O QR Code não deve ter sido usado ainda;

Os schemas podem ser encontrados aqui:

|Schema                             | Link        |
|-----------------------------------|:-----------:|
|Request exemplo  |[link](./Schemas_conector_pgto/consent/validatePaymentData/request-example.json)|
|Request schema  |[link](./Schemas_conector_pgto/consent/validatePaymentData/request-schema.json)|
|Request pagamento automático V2  |[link](./Schemas_conector_pgto/consent/validatePaymentData/request-recurring-example-v2.json)|
|Response error exemplo  |[link](./Schemas_conector_pgto/consent/validatePaymentData/response-error-example.json)|
|Response error schema  |[link](./Schemas_conector_pgto/consent/validatePaymentData/response-error-schema.json)|
|Response exemplo  |[link](./Schemas_conector_pgto/consent/validatePaymentData/response-example.json)|
|Response schema  |[link](./Schemas_conector_pgto/consent/validatePaymentData/response-schema.json)|

### Recuperar contas do correntista

A rota `GET discovery` recupera as informações de conta do usuário correntista que está fazendo a iniciação de pagamento. Isso ocorre durante a etapa do consentimento, na qual o correntista terá a possibilidade de alterar a conta da insituição que será feito o débito do valor do pagamento. 

Os schemas podem ser encontrados aqui:

|Schema                             | Link        |
|-----------------------------------|:-----------:|
|Request exemplo  |[link](./Schemas_conector_pgto/consent/discoverPayments_v2/request-example-pix.json)|
|Request pagamentos automáticos V2  |[link](./Schemas_conector_pgto/consent/discoverPayments_v2/request-example-recurring-pix-v2.json)|
|Request schema  |[link](./Schemas_conector_pgto/consent/discoverPayments_v2/request-schema.json)|
|Response exemplo  |[link](./Schemas_conector_pgto/consent/discoverPayments_v2/response-example.json)|
|Response schema  |[link](./Schemas_conector_pgto/consent/discoverPayments_v2/response-schema.json)|

### Recuperar o status do pagamento

Pela regulação, é necessário implementar uma rota de `GET pix payment`, a qual retorna o status que um pagamento pix se encontra. Essa chamada, naturalmente, só será feita após um pagamento ter sido efetuado.

Os schemas podem ser encontrados aqui:

|Schema                             | Link        |
|-----------------------------------|:-----------:|
|Request exemplo  |[link](./Schemas_conector_pgto/payment/paymentsGetPixPaymentsPaymentId_v3/request-example.json)|
|Request pagamentos automáticos V2  |[link](./Schemas_conector_pgto/payment/paymentsGetPixPaymentsPaymentId_v3/request-recurring-example-v2.json)|
|Request schema  |[link](./Schemas_conector_pgto/payment/paymentsGetPixPaymentsPaymentId_v3/request-schema.json)|
|Response exemplo  |[link](./Schemas_conector_pgto/payment/paymentsGetPixPaymentsPaymentId_v3/response-example.json)|
|Response pagamentos automático exemplo  |[link](./Schemas_conector_pgto/payment/paymentsGetPixPaymentsPaymentId_v3/response-recurring-example.json)|
|Response schema  |[link](./Schemas_conector_pgto/payment/paymentsGetPixPaymentsPaymentId_v3/response-schema.json)|
