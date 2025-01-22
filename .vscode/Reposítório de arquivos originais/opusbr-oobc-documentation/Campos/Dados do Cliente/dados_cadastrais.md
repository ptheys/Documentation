# Dados para endpoints de dados cadastrais

Este documento descreve as informações que o conector precisa acessar para possibilitar o compartilhamento de **dados cadastrais**.

O nome dos dados e valores enumerados (enums) apresentados a seguir são apenas exemplos. Sendo assim, **para os conectores desenvolvidos pela OPUS, solicitamos que nos envie um documento especificando quais dados e enums do legado correspondem aos listados abaixo**.

> 🛈 **Nota: Referência para o desenvolvimento dos conectores**: Esquemas e exemplos de entradas e saídas dos conectores compartilhamento de dados de **dados cadastrais** estão presentes no diretório `integração-plugin/schemas/v3/financial-data/customers` da Documentação Plataforma OPUS Open Finance. Por outro lado, o formato final de fato compartilhado pelo OPUS Open Finance será conforme especificado na [documentação Oficial do Open Finance Brasil](https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/512458931/Informa+es+T+cnicas+-+DC+Dados+Cadastrais+-+v2.1.0).

## Identificação da pessoa natural

Obtém os registros de identificação da pessoa natural mantidos na instituição transmissora. Os dados que precisam ser enviados são os seguintes:

- **`updateDateTime`**: Data e hora da atualização dos campos. Quando não existente uma data vinculada especificamente ao bloco, assumir a data e hora de atualização do cadastro como um todo
- **`personalId`**: Um identificador único e imutável usado para identificar o recurso cliente pessoa natural. Este identificador não tem significado para o cliente que deu o consentimento
- **`brandName`**: Nome da Marca reportada pelo participante no Open Finance
- **`civilName`**: Nome civil completo da pessoa natural
- **`socialName`**: Opcional. Nome social da pessoa natural, se houver
- **`birthDate`**: Data de nascimento, conforme especificação
- **`maritalStatusCode`**: Opcional. Estado marital do cliente. Exemplos:
    - SOLTEIRO
    - CASADO
    - VIUVO
    - SEPARADO_JUDICIALMENTE
    - DIVORCIADO
    - UNIAO_ESTAVEL
    - OUTRO (nesse caso especificar o outro estado)
- **`sex`**: Opcional. Sexo como masculino, feminino ou outro
- **`companiesCnpj`**: Número completo do CNPJ da instituição responsável pelo Cadastro - o CNPJ corresponde ao número de inscrição no Cadastro de Pessoa Jurídica. Deve-se ter apenas os números do CNPJ, sem máscara
- **`documents`**: Informações relativas a documentos da pessoa natural, como CPF e passaporte(caso não tenha CPF os dados do passaporte são obrigatórios)
- **`otherDocuments`**: Opcional. Lista de outros documentos contendo as seguintes informações para cada documento
    - **`type`**: Relação dos Códigos dos demais documentos pessoa natural. Exemplos:
        - CNH
        - RG
        - NIF
        - RNE
        - OUTROS (nesse caso especificar outro documento)
    - **`number`**: Identificação/Número do documento informado
    - **`checkDigit`**: Dígito verificador do documento informado. De preenchimento obrigatório se o documento informado tiver dígito verificador
    - **`additionalInfo`**: Para documentos em que se aplique o uso do local de emissão o mesmo deve ser enviado mandatoriamente, com a informação de órgão e UF
    - **`expirationDate`**: Opcional. Data de validade do documento informado
- **`hasBrazilianNationality`**: booleano que informa se o cliente tem nacionalidade brasileira. Pode-se enviar outros detalhes sobre a nacionalidade
- **`nationality`**: Lista de outras nacionalidades. Obrigatório caso não brasileiro e opcional para brasileiro com múltiplas nacionalidades. Para cada nacionalidade são necesárias as seguintes informações
    - **`otherNationalitiesInfo`**: Preencher indicando todas suas demais nacionalidades, se possível no formato alhpa3 do ISO-3166
    - **`documents`**: Lista de documentos da nacionalidade específica. As seguintes informações são necessárias para cada documento
        - **`type`**: Tipo de documento. Informar tipo e número do documento, além da, vigência e demais informações complementares para se identificar o documento de pessoa estrangeira
        - **`number`**: Número de identificação do documento. Informar o número do documento e demais informações complementares para se identificar o documento de pessoa estrangeira
        - **`expirationDate`**: Data de validade do documento informado
        - **`issueDate`**: Data de emissão do documento
        - **`country`**: Nome do país
        - **`additionalInfo`**: Campo livre de preenchimento quando necessário
- **`filiation`**: Opcional, como Mãe e Pai, precisando do nome do afiliado em questão
- **`contacts`**: Conjunto de informações referentes às formas de contato. Trazer telefones, emails e endereços postais. Para cada um dos três, se houver mais de um contato informar qual o principal. Espera-se o seguinte conjunto de informações
    - **`postalAddresses`**: Retornar em campos separados o endereço, complemento, bairro, cidade, país e CEP. Se puder informar também a sigla da unidade da federação, o código do IBGE do município e o código do pais no formato alpha3 do ISO-3166
    - **`phones`**: Retornar em campos separados o tipo (fixo, movél ou outro a ser específicado), DDD e número. Se o número for internacional informar o DDI e caso possua o ramal também informar
    - **`email`**: Apenas necessário o endereço de email

## Qualificação de pessoa natural

Obtém os registros de qualificação da pessoa natural mantidos na instituição transmissora. Os dados que precisam ser enviados são os seguintes:

- **`updateDateTime`**: Data e hora da atualização dos campos. Quando não existente uma data vinculada especificamente ao bloco, assumir a data e hora de atualização do cadastro como um todo
- **`companyCnpj`**: Número completo do CNPJ da instituição responsável pelo Cadastro - o CNPJ corresponde ao número de inscrição no Cadastro de Pessoa Jurídica
- **`occupationCode`**: Opcional. Traz a relação dos códigos relativos à ocupação. Exemplos:
    - RECEITA_FEDERAL
    - CBO
    - OUTRO (nesse caso especificar a outra ocupação)
- **`occupationDescription`**: Opcional. Campo que depende do preenchimento de **`occupationCode`**. Qualquer valor diferente de OUTRO precisa do do código da ocupação correto de acordo com o valor escolhido e, caso for outro, informar um descritivo da ocupação
- **`informedIncome`**: informalções sobre a renda com data, frequência (diaria, semanal, quinzenal, etc.) e valor informado
- **`informedPatrimony`**: Ano e valor do patrimônio informado

## Relacionamentos com instituição financeira e representantes da pessoa natural

Obtém registros de relacionamentos com a instituição financeira e de representantes da pessoa natural mantidos na instituição transmissora. Os dados que precisam ser enviados são os seguintes:

- **`updateDateTime`**: Data e hora da atualização dos campos. Quando não existente uma data vinculada especificamente ao bloco, assumir a data e hora de atualização do cadastro como um todo
- **`startDate`**: Data de início de relacionamento com a Instituição Financeira
- **`productsServicesType`**: Lista com a relação dos produtos e serviços com contrato vigente. Exemplos:
    - CONTA_DEPOSITO_A_VISTA
    - CONTA_POUPANCA
    - CONTA_PAGAMENTO_PRE_PAGA
    - CARTAO_CREDITO
    - OPERACAO_CREDITO
    - SEGURO
    - PREVIDENCIA
    - INVESTIMENTO
    - OPERACOES_CAMBIO
    - CONTA_SALARIO
    - CREDENCIAMENTO
    - OUTROS (nesse caso informar o outro tipo de serviço)
- **`procurators`**: Lista com informações de representantes do cliente, com nome e CPF dos representantes
- **`accounts`**: Lista com informações de conta depósito à vista, poupança e pagamento pré-pagas mantidas pelo cliente na instituição.
- **`portabilitiesReceived`**: Lista de informações de empregador recebidos através de portabilidade de salário solicitada pelo cliente da transmissora à instituição detentora(s) de sua conta salário, ativos ou que já estiveram ativos. Espera-se as seguintes informações
    - **`employerName`**: Nome do empregador conforme recebido pela comunicação de portabilidade. O empregador pode ser pessoa natural ou pessoa jurídica, quando se tratar de pessoa jurídica, deve haver o envio da razão social
    - **`employerCnpjCpf`**: Número de inscrição (CPF/CNPJ) do empregador (contratante dos serviços de pagamento), conforme recebido pela comunicação de portabilidade
    - **`paycheckBankDetainerCnpj`**: Número de inscrição no Cadastro Nacional da Pessoa Jurídica (CNPJ) do banco folha (instituição financeira detentora da conta salário), conforme recebido pela comunicação de portabilidade
    - **`paycheckBankDetainerIspb`**: Número do ISPB do Banco Folha (instituição financeira detentora da conta salário), conforme recebido pela comunicação de portabilidade
    - **`portabilityApprovalDate`**: Data de aprovação da portabilidade, conforme recebido pela comunicação de portabilidade
- **`paychecksBankLink`**: Lista de informações de contas salário relacionadas com vínculos empregatícios, existentes ou que já existiram, firmados entre o cliente pessoa natural e um ou mais empregadores, Espera-se o seguinte conjunto de informações
    - **`employerName`**: Nome do empregador conforme recebido pela comunicação de portabilidade. O empregador pode ser pessoa natural ou pessoa jurídica, quando se tratar de pessoa jurídica, deve haver o envio da razão social
    - **`employerCnpjCpf`**: Documento do empregador (CNPJ/CPF), conforme registrado na abertura da conta salário
    - **`paycheckBankDetainerCnpj`**: CNPJ da instituição financeira contratada para prestar serviço de pagamento de salário (banco-folha)
    - **`paycheckBankDetainerIspb`**: Número ISPB (Identificador do Sistema de Pagamentos Brasileiros) do instituição financeira contratada para prestar serviço de pagamento de salário (banco-folha)
    - **`portabilityApprovalDate`**: Data de abertura da conta salário.

## Idenitficação da pessoa jurídica

Obtém os registros de identificação da pessoa jurídica mantidos na instituição transmissora. Os dados que precisam ser enviados são os seguintes:

- **`updateDateTime`**: Data e hora da atualização dos campos. Quando não existir uma data vinculada especificamente ao bloco, assumir a data e hora de atualização do cadastro como um todo
- **`businessId`**: Um identificador único e imutável usado para identificar o recurso cliente pessoa jurídica
- **`brandName`**: Nome da Marca reportada pelo participante no Open Finance
- **`companyName`**: Razão social da empresa consultada é o termo registrado sob o qual uma pessoa jurídica (PJ) se individualiza e exerce suas atividades
- **`tradeName`**: Opcional. Nome fantasia da pessoa jurídica, se houver. (É o nome popular da empresa, utilizado para divulgação da empresa e melhor fixação com o público). De preenchimento obrigatório se houver
- **`incorporationDate`**: Data de constituição da empresa
- **`cnpjNumber`**: Número completo do CNPJ da Empresa consultada - o CNPJ corresponde ao número de inscrição no Cadastro de Pessoa Jurídica
- **`companiesCnpj`**: Número completo do CNPJ da instituição responsável pelo Cadastro - o CNPJ corresponde ao número de inscrição no Cadastro de Pessoa Jurídica
- **`otherDocuments`**: Opcional. Relação dos demais documentos com tipo, número, país de emissão do documento e data de expiração
- **`parties`**: Lista relativa às informações das partes envolvidas dizendo se é sócio e/ou administrador. É necessário o número e tipo do documento dessas partes e indicar se é um sócio ou administrador. Quando a parte for uma pessoa natural, indicar o seu nome civil e, se houver, nome social. Caso seja pessoa jurídica, informar a razão social e, se houver, o nome fantasia. Caso a parte seja um sócio com participação acima de 25%, indicar o percentual de participação. Se possível também informar a data de ínicio da participação
- **`contacts`**: Conjunto de informações referentes às formas de contato. Trazer telefones, emails e endereços postais. Para cada um dos três, se houver mais de um contato informar qual o principal. Espera-se o seguinte conjunto de informações
    - **`postalAddresses`**: Retornar em campos separados o endereço, complemento, bairro, cidade, país e CEP. Se puder informar também a sigla da unidade da federação, o código do IBGE do município e o código do pais no formato alpha3 do ISO-3166
    - **`phones`**: Retornar em campos separados o tipo (fixo, movél ou outro a ser específicado), DDD e número. Se o número for internacional informar o DDI e caso possua o ramal também informar
    - **`email`**: Apenas necessário o endereço de email

## Qualificação de pessoa jurídica

Obtém os registros de qualificação da pessoa jurídica mantidos na instituição transmissora. Os dados que precisam ser enviados são os seguintes:

- **`updateDateTime`**: Data e hora da atualização dos campos. Quando não existir uma data vinculada especificamente ao bloco, assumir a data e hora de atualização do cadastro como um todo
- **`economicActivities`**: Lista dos demais códigos relativos às demais atividades econômicas da empresa, segundo padrão CNAE (Classificação Nacional de Atividades Econômicas). De preenchimento obrigatório, se houver. Se houver mais de um, indicar qual o principal
- **`informedRevenue`**: Informações do faturamento, especificando a frequência com que ele é informado, o ano e quantidade.
- **`informedPatrimony`**: Valor do patrimônio informado, assim como data de referência para o patrimônio informado

## Relacionamentos com instituição financeira e representantes da pessoa jurídica

obter registros de relacionamentos com a instituição financeira e de representantes da pessoa jurídica mantidos na instituição transmissora. Os dados que precisam ser enviados são os seguintes:

- **`updateDateTime`**: Data e hora da atualização dos campos. Quando não existente uma data vinculada especificamente ao bloco, assumir a data e hora de atualização do cadastro como um todo
- **`startDate`**: Data de início de relacionamento com a Instituição Financeira. Deve trazer o menor valor entre a informação reportada ao BACEN pelo DOC 3040 e CCS
- **`productsServicesType`**: Lista com a relação dos produtos e serviços com contrato vigente. Exemplos:
    - CONTA_DEPOSITO_A_VISTA
    - CONTA_POUPANCA
    - CONTA_PAGAMENTO_PRE_PAGA
    - CARTAO_CREDITO
    - OPERACAO_CREDITO
    - SEGURO
    - PREVIDENCIA
    - INVESTIMENTO
    - OPERACOES_CAMBIO
    - CONTA_SALARIO
    - CREDENCIAMENTO
    - OUTROS
- **`procurators`**: Lista dos representantes. De preenchimento obrigatório se houver representante com informações sobre os mesmos como nome legal do representante, cpf ou cnpj e tipo do representante (representante legal ou procurador)
- **`accounts`**: Lista de contas depósito à vista, poupança e pagamento pré-pagas mantidas pelo cliente na instituição transmissora. Para cada conta dar as informações como tipo da conta (à vista, poupança ou pagamento pré-paga), número e dígito da conta, código da agência, e código Compe atribuído pelo Banco Central
