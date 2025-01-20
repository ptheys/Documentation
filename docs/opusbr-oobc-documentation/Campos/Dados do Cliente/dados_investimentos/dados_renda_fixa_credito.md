# Dados para endpoints de renda fixa crédito

Este documento descreve as informações que o conector precisa acessar para possibilitar o compartilhamento de dados de **renda fixa crédito**.

O nome dos dados e valores enumerados (enums) apresentados a seguir são apenas exemplos. Sendo assim, **para os conectores desenvolvidos pela OPUS, solicitamos que nos envie um documento especificando quais dados e enums do legado correspondem aos listados abaixo**.

> 🛈 **Nota: Referência para o desenvolvimento dos conectores**: Esquemas e exemplos de entradas e saídas dos conectores compartilhamento de dados de **renda fixa crédito** estão presentes no diretório `integração-plugin/schemas/v3/financial-data/credit-fixed-incomes` da Documentação Plataforma OPUS Open Finance. Por outro lado, o formato final de fato compartilhado pelo OPUS Open Finance será conforme especificado na [documentação Oficial do Open Finance Brasil](https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/360775958/Informa+es+T+cnicas+-+DC+Renda+Fixa+Cr+dito-+v1.0.2).

## Lista de operações da Renda Fixa Crédito

Lista de títulos de renda fixa crédito mantidos pelo cliente na instituição. Os dados esperados de cada título são os seguintes

- **`brandName`**: Nome da Marca reportada pelo participante no Open Finance
- **`companyCnpj`**: Número completo do CNPJ da instituição responsável pelo Cadastro - o CNPJ corresponde ao número de inscrição no Cadastro de Pessoa Jurídica
- **`investmentType`**: Especificação do ativo em questão. Exemplos:
    - DEBENTURES
    - CRI
    - CRA
- **`investmentId`**: Identifica de forma única o relacionamento do cliente com o produto, mantendo as regras de imutabilidade dentro da instituição transmissora

## Dados da operação da Renda Fixa Crédito

Obtém dados da operação de renda fixa crédito pelo campo **`investmentId`**. Os dados obtidos aqui devem ser possíveis de se recuperar para cada conta listada na seção anterior. Os dados que precisam ser enviados são os seguintes:

- **`issuerInstitutionCnpjNumber`**: CNPJ da instituição emissora
- **`isinCode`**: Código ISIN (International Securities Identification Number) é um código universal que identifica cada valor mobiliário ou instrumento financeiro. Envio obrigatório caso **`clearingCode`** não for preenchido
- **`clearingCode`**: Código de registro do ativo na Clearing. Envio obrigatório caso **`isinCode`** não for preenchido
- **`investmentType`**: Especificação do ativo em questão. Exemplos:
    - DEBENTURES
    - CRI
    - CRA
- **`debtorCnpjNumber/debtorName`**: CNPJ e nome do devedor. Caso a transmissora possua a informação para os produtos CRI e CRA, o envio deste campo é obrigatório
- **`taxExemptProduct`**: Indicador de um produto incentivado, podendo ser sim ou não
- **`remuneration`**: Objeto que relaciona diversas informações sobre a remuneração. Espera-se as seguintes informações
    - **`preFixedRate`**: Valor da taxa de emissão do contrato. Obrigatório quando o produto for pré-fixado ou híbrido
    - **`postFixedIndexerPercentage`**: Percentual do indexador de emissão do contrato. Obrigatório quando o produto não for pré-fixado ou híbrido
    - **`rateType`**: Tipo da taxa de remuneração, podendo ser linear ou exponencial
    - **`ratePeriodicity`**: Periodicidade da taxa de remuneração podendo ser mensal, anual, diário ou semestral
    - **`calculation`**: Base de cálculo, sendo dias úteis ou dias corridos
    - **`indexer`**: Índice utilizado como referência para a correção da rentabilidade e/ou rendimentos do ativo. Exemplos:
        - CDI
        - DI
        - TR
        - IPCA
        - IGP_M
        - IGP_DI
        - INPC
        - BCP
        - TLC
        - SELIC
        - PRE_FIXADO
        - OUTROS (nesse caso especificar qual outro índice)
- **`issueUnitPrice/issueDate/dueDate`**: Valor e moeda, data de emissão e data de vencimento do título
- **`voucherPaymentIndicator/voucherPaymentPeriodicity`**: Indicativo se há pagamento de cupom e caso houver, descrever a periodicidade. Exemplos:
    - MENSAL
    - TRIMESTRAL
    - SEMESTRAL
    - ANUAL
    - IRREGULAR
    - OUTROS (nesse caso mencionar a outra periodicidade)
- **`purchaseDate`**: Data de aquisição do cliente
- **`gracePeriodDate`**: Data até a qual o cliente não poderá resgatar antecipadamente seu investimento

## Posição da operação da Renda Fixa Crédito

Obtém a posição da operação de Renda Fixa Crédito identificada por **`investmentId`**. Os dados obtidos aqui devem ser possíveis de se recuperar para cada conta listada na primeria seção. Os dados que precisam ser enviados são os seguintes:

- **`referenceDateTime`**: data e hora da última posição consolidada disponível a que se referem os dados transacionais do cliente disponíveis nos canais eletrônicos
- **`updatedUnitPrice`**: Valor bruto unitário e moeda atualizado na data de referência
- **`quantity`**: Quantidade de títulos detidos na data da posição do cliente
- **`grossAmount`**: Valor e moeda do investimento que se refere a quantidade x PU atualizado na data de referência
- **`netAmount`**: Valor e moeda do investimento atualizado na data de referência, posterior a dedução de impostos (IOF e IR)
- **`incomeTax`**: Valor e moeda do imposto de renda provisionado considerando a alíquota vigente na data de referência
- **`financialTransactionTax`**: Valor e moeda do imposto (IOF) provisionado considerando a alíquota vigente na data de referência
- **`blockedBalance`**: Valor não disponível e moeda para movimentação naquele momento por qualquer motivo (bloqueio judicial, bloqueio em garantia, entre outros)
- **`purchaseUnitPrice`**: Valor unitário e moeda negociado com o cliente na data de aquisição
- **`preFixedRate`**: Taxa de remuneração acordada com o cliente na contratação. Em casos de produtos progressivos, considerar taxa vigente
- **`postFixedIndexerPercentage`**: Percentual do indexador acordado com o cliente na contratação. Em casos de produtos progressivos, considerar taxa vigente
- **`fine`**: Valor de multa e moeda devido ao atraso do pagamento acordado em contrato
- **`latePayment`**: Valor de mora e moeda devido ao atraso do pagamento acordado em contrato

## Movimentações da operação da Renda Fixa Crédito histórico e recente

Obtém as movimentações da operação de Renda Fixa Crédito identificada por **`investmentId`**. Aqui é necessário ter a possibilidade de filtrar a lista de transações recuperadas, proporcionando as listagens de todas as movimentações dos últimos 12 meses e últimos 7 dias. Os dados que precisam ser retornados para cada transação são:

- **`type`**: Tipo de movimentação na visão de investimento, podendo ser de entrada ou saída
- **`transactionType`**: Tipo da transação. Exemplos:
    - COMPRA
    - VENDA
    - CANCELAMENTO
    - VENCIMENTO
    - PAGAMENTO_JUROS
    - AMORTIZACAO
    - PREMIO
    - TRANSFERENCIA_TITULARIDADE
    - TRANSFERENCIA_CUSTODIA
    - MULTA
    - MORA
    - OUTROS (nesse caso especificar qual outro tipo)
- **`transactionDate`**: Data da movimentação
- **`transactionUnitPrice`**: Valor unitário e moeda negociado com o cliente na data de aquisição
- **`transactionQuantity`**: Quantidade de títulos envolvidos na movimentação
- **`transactionGrossValue`**: Valor bruto e moeda da transação (Preço unitário da movimentação x Quantidade)
- **`incomeTax`**: Valor e moeda do imposto de renda recolhido na transação
- **`financialTransactionTax`**: Valor e moeda do IOF recolhido na transação
- **`transactionNetValue`**: Valor líquido e moeda da transação
- **`remunerationTransactionRate`**: Taxa de remuneração acordada com o cliente na contratação. Obrigatório quando o tipo for entrada e produto for pré-fixado ou híbrido
- **`indexerPercentage`**: Percentual máximo do indexador na transação acordado com o cliente na contratação. Obrigatório quando o tipo for entrada e produto for pós-fixado ou híbrido
- **`transactionId`**: Código ou identificador único prestado pela instituição para individualizar o movimento
