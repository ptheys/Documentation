# Dados para endpoints de cartão de crédito

Este documento descreve as informações que o conector precisa acessar para possibilitar o compartilhamento de dados de **cartão de crédito**.

O nome dos dados e valores enumerados (enums) apresentados a seguir são apenas exemplos. Sendo assim, **para os conectores desenvolvidos pela OPUS, solicitamos que nos envie um documento especificando quais dados e enums do legado correspondem aos listados abaixo**.

> 🛈 **Nota: Referência para o desenvolvimento dos conectores**: Esquemas e exemplos de entradas e saídas dos conectores compartilhamento de dados de **cartão de crédito** estão presentes no diretório `integração-plugin/schemas/v3/financial-data/credit-cards` da Documentação Plataforma OPUS Open Finance. Por outro lado, o formato final de fato compartilhado pelo OPUS Open Finance será conforme especificado na [documentação Oficial do Open Finance Brasil](https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/450625720/Informa+es+T+cnicas+-+DC+Cart+o+de+Cr+dito+-+v2.3.1).

## Listagem de contas de pagamento pós-pago

Lista de contas de pagamento pós-paga mantidas pelo cliente na instituição transmissora. Os dados que precisam ser fornecidos são os seguintes:

- **`creditCardAccountId`**: Identifica de forma única a conta de pagamento pós-paga do cliente
- **`brandName`**: Nome da Marca reportada pelo participante no Open Finance
- **`companyCnpj`**: Número completo do CNPJ da instituição responsável pelo Cadastro - o CNPJ corresponde ao número de inscrição no Cadastro de Pessoa Jurídica
- **`name`**: Denominação/Identificação do nome da conta de pagamento pós-paga (cartão)
- **`productType`**: Categoria atribuída a um cartão de pagamento, sob uma certa denominação, que lhe agrega um conjunto de vantagens, diferenciando-o de acordo com o perfil do portador. Exemplos:
    - CLASSIC_NACIONAL
    - CLASSIC_INTERNACIONAL
    - GOLD
    - PLATINUM
    - INFINITE
    - ELECTRON
    - STANDARD_NACIONAL
    - STANDARD_INTERNACIONAL
    - ELETRONIC
    - BLACK
    - REDESHOP
    - MAESTRO_MASTERCARD_MAESTRO
    - GREEN
    - BLUE
    - BLUEBOX
    - PROFISSIONAL_LIBERAL
    - CHEQUE_ELETRONICO
    - CORPORATIVO
    - EMPRESARIAL
    - COMPRAS
    - BASICO_NACIONAL
    - BASICO_INTERNACIONAL
    - NANQUIM
    - GRAFITE
    - MAIS
    - OUTROS (nesse caso especifique o outro tipo de cartão)
- **`creditCardNetwork`**: Categoria de Bandeiras de Cartões de Crédito (Instituidor do arranjo de pagamento). Bandeira é a detentora de todos os direitos e deveres da utilização da marca estampada no cartão, inclusive as bandeiras pertencentes aos emissores. Exemplos:
    - VISA
    - MASTERCARD
    - AMERICAN_EXPRESS
    - DINERS_CLUB
    - HIPERCARD
    - BANDEIRA_PROPRIA
    - CHEQUE_ELETRONICO
    - ELO
    - OUTRAS (nesse caso especifique qual seria a bandeira)

## Dados de identificação da conta

Obtém dados de identificação da conta identificada pelo campo **`creditCardAccountId`**. Os dados obtidos aqui devem ser possíveis de se recuperar para cada conta listada na seção anterior. Os dados que precisam ser enviados são os seguintes:

- **`name`**: Denominação/Identificação do nome da conta de pagamento pós-paga (cartão)
- **`productType`**: Categoria atribuída a um cartão de pagamento, sob uma certa denominação, que lhe agrega um conjunto de vantagens, diferenciando-o de acordo com o perfil do portador. Exemplos:
    - CLASSIC_NACIONAL
    - CLASSIC_INTERNACIONAL
    - GOLD
    - PLATINUM
    - INFINITE
    - ELECTRON
    - STANDARD_NACIONAL
    - STANDARD_INTERNACIONAL
    - ELETRONIC
    - BLACK
    - REDESHOP
    - MAESTRO_MASTERCARD_MAESTRO
    - GREEN
    - BLUE
    - BLUEBOX
    - PROFISSIONAL_LIBERAL
    - CHEQUE_ELETRONICO
    - CORPORATIVO
    - EMPRESARIAL
    - COMPRAS
    - BASICO_NACIONAL
    - BASICO_INTERNACIONAL
    - NANQUIM
    - GRAFITE
    - MAIS
    - OUTROS (nesse caso especifique o outro tipo de cartão)
- **`creditCardNetwork`**: Categoria de Bandeiras de Cartões de Crédito (Instituidor do arranjo de pagamento). Bandeira é a detentora de todos os direitos e deveres da utilização da marca estampada no cartão, inclusive as bandeiras pertencentes aos emissores. Exemplos:
    - VISA
    - MASTERCARD
    - AMERICAN_EXPRESS
    - DINERS_CLUB
    - HIPERCARD
    - BANDEIRA_PROPRIA
    - CHEQUE_ELETRONICO
    - ELO
    - OUTRAS (nesse caso especifique qual seria a bandeira)
- **`paymentMethod`**: Listagem dos cartões (ex.: virtual/adicional/titular) associados a conta cartão consentida, conforme disponíveis ao usuário nos canais proprietários. Cada item da lista precisa ter o número que identifica o cartão e se ele é múltiplo ou não (se possuem função de crédito **e** débito). Os cartões físicos e virtuais ativos de titulares, dependentes ou adicionais são obrigatórios e cartões já excluídos são opcionais

## Listagem de faturas da conta

Obtém a lista de faturas da conta de pagamento pós-paga identificada por **`creditCardAccountId`**. Só deve ser informada uma fatura já fechada. Qualquer pagamento deve ser contado para a última fatura fechada. Os dados que devem ser informados são os seguintes:

- **`billId`**: Informação que identifica a fatura
- **`dueDate`**: Data de vencimento da Fatura, que aparece para pagamento pelo cliente
- **`billTotalAmount`**: Valor total das faturas e moeda da mesma
- **`billMinimumAmount`**: Valor do pagamento mínimo da fatura e moeda do mesmo
- **`isInstalment`**: Indica se a fatura permite parcelamento
- **`financeCharges`**: Lista de encargos cobrados na fatura, sendo necessário ter o tipo, valor cobrado e moeda. Exemplos:
    - JUROS_REMUNERATORIOS_ATRASO_PAGAMENTO_FATURA
    - MULTA_ATRASO_PAGAMENTO_FATURA
    - JUROS_MORA_ATRASO_PAGAMENTO_FATURA
    - IOF
    - OUTROS (nesse caso informe que outro tipo de encargo)
- **`payments`**: Lista com valores relativos aos pagamentos da fatura, dizendo o tipo de pagamento(VALOR_PAGAMENTO_FATURA_PARCELADO, VALOR_PAGAMENTO_FATURA_REALIZADO, OUTRO_VALOR_PAGO_FATURA), data efetiva da realização do pagamento, modo do pagamento, valor e moeda do pagamento. Exemplos:
    - DEBITO_CONTA_CORRENTE
    - BOLETO_BANCARIO
    - AVERBACAO_FOLHA
    - PIX

## Listagem de transações da conta

Obtém lista de transações de uma conta identificada por **`creditCardAccountId`**. Aqui é necessário ter a possibilidade de filtrar a lista de transações recuperadas, proporcionando uma listagem por fatura identificada por **`billId`**, as listagens de todas as faturas dos últimos 12 meses e últimos 7 dias. Os dados que precisam ser retornados para cada transação são:

- **`transactionId`**: Código ou identificador único prestado pela instituição que mantém a conta para representar a transação individual
- **`identificationNumber`**: Número de identificação do cartão: corresponde aos 4 últimos dígitos do cartão para PF, ou então, preencher com um identificador para PJ, com as caracteristicas definidas para os IDs no Open Finance
- **`transactionName`**: Literal usada na instituição financeira para identificar a transação
- **`billId`**: Informação que identifica a fatura onde consta a transação informada. Preencher apenas para casos de transação em fatura fechada, ou seja, este campo não é esperado em casos de transação em fatura aberta
- **`creditDebitType`**: Indicador do tipo de lançamento sendo crédito ou débito
- **`transactionType`**: Traz os tipos da transação. Exemplos:
    - PAGAMENTO
    - TARIFA
    - OPERACOES_CREDITO_CONTRATADAS_CARTAO
    - ESTORNO
    - CASHBACK
    - OUTROS
- **`paymentType`**: Traz tipo de pagamento sendo à vista ou prazo
- **`feeType`**: Traz os tipos de tarifas. Exemplos:
    - ANUIDADE
    - SAQUE_CARTAO_BRASIL
    - SAQUE_CARTAO_EXTERIOR
    - AVALIACAO_EMERGENCIAL_CREDITO
    - EMISSAO_SEGUNDA_VIA
    - TARIFA_PAGAMENTO_CONTAS
    - SMS
    - OUTRA (nesse caso informe qual seria o outro tipo de tarifa)
- **`otherCreditsType`**: Traz outros tipos de crédito contratados no cartão. Exemplos:
    - CREDITO_ROTATIVO
    - PARCELAMENTO_FATURA
    - EMPRESTIMO
    - OUTROS (nesse caso informe o outro tipo de crédito)
- **`chargeIdentificator`**: Número da parcela que está sendo informada
- **`chargeNumber`**: Quantidade de parcelas
- **`brazilianAmount`**: Valor da transação assim como a moeda
- **`amount`**: Valor original da transação assim como a moeda
- **`transactionDateTime`**: Data e hora da transação disponível para os clientes nos canais digitais da instituição
- **`billPostDate`**: Data em que a transação foi inserida na fatura
- **`payeeMCC`**: O MCC ou o código da categoria do estabelecimento comercial. Os MCCs são agrupados segundo suas similaridades. O MCC é usado para classificar o negócio pelo tipo fornecido de bens ou serviços

## Limites da conta

Obtém os limites da conta de pagamento pós-paga identificada por **`creditCardAccountId`**. Os dados que precisam ser enviados são os seguintes:

- **`creditLineLimitType`**: Indicador do tipo de limite. Exemplos:
    - LIMITE_CREDITO_TOTAL
    - LIMITE_CREDITO_MODALIDADE_OPERACAO
- **`consolidationType`**: Indicador que permite informar se o valor do limite é consolidado ou individual
- **`identificationNumber`**: Número de identificação do cartão: corresponde aos 4 últimos dígitos do cartão para PF, ou então, preencher com um identificador para PJ, com as características definidas para os IDs no Open Finance
- **`lineName`**: Opcional. campo indicando tipo de crédito. Exemplos:
    - CREDITO_A_VISTA
    - CREDITO_PARCELADO
    - SAQUE_CREDITO_BRASIL
    - SAQUE_CREDITO_EXTERIOR
    - EMPRESTIMO_CARTAO_CONSIGNADO
    - OUTROS (nesse caso especificar o outro tipo de crédito)
- **`isLimitFlexible`**: Indica se a conta possui limite total flexível ou um limite pré-determinado
- **`limitAmount`**: Valor e moeda do limite informado caso não tenha um limite flexível ou pré-determinado. Caso for zero, uma razão precisa ser fornecida
- **`usedAmount`**: Valor e moeda do limite informado
- **`availableAmount`**: Valor e moeda disponível do limite informado, sendo obrigatório quando não tem limite flexível ou pré-determinado
- **`customizedLimitAmount`**: Valor total do limite customizado pelo cliente nos canais eletrônicos da instituição. Esse objeto é de envio obrigatório nos casos em que a instituição permita ao cliente alterar o seu limite. Valor e moeda do limite
