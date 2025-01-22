# Dados para endpoints de renda variável

Este documento descreve as informações que o conector precisa acessar para possibilitar o compartilhamento de dados de **renda variável**.

O nome dos dados e valores enumerados (enums) apresentados a seguir são apenas exemplos. Sendo assim, **para os conectores desenvolvidos pela OPUS, solicitamos que nos envie um documento especificando quais dados e enums do legado correspondem aos listados abaixo**.

> 🛈 **Nota: Referência para o desenvolvimento dos conectores**: Esquemas e exemplos de entradas e saídas dos conectores compartilhamento de dados de **renda variável** estão presentes no diretório `integração-plugin/schemas/v3/financial-data/variable-incomes` da Documentação Plataforma OPUS Open Finance. Por outro lado, o formato final de fato compartilhado pelo OPUS Open Finance será conforme especificado na [documentação Oficial do Open Finance Brasil](https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/492208525/Informa+es+T+cnicas+-+DC+Renda+Vari+vel+-+v1.2.0).

## Lista de operações da Renda Variável

Lista de ativos de renda variável mantidos pelo cliente na instituição. Os dados esperados de cada título são os seguintes

- **`brandName`**: Nome da Marca reportada pelo participante no Open Finance
- **`companyCnpj`**: Número completo do CNPJ da instituição responsável pelo Cadastro - o CNPJ corresponde ao número de inscrição no Cadastro de Pessoa Jurídica
- **`investmentId`**: Identifica de forma única o relacionamento do cliente com o produto, mantendo as regras de imutabilidade dentro da instituição transmissora. Caso o cliente compre novamente o ativo que já investiu em períodos passados, manter o mesmo  **`investmentId`** anteriormente utilizado

## Dados da operação da Renda Variável

Obtém dados da operação de renda variável identificada pelo campo **`investmentId`**. Os dados obtidos aqui devem ser possíveis de se recuperar para cada conta listada na seção anterior. Os dados que precisam ser enviados são os seguintes:

- **`issuerInstitutionCnpjNumber`**: CNPJ da instituição emissora
- **`isinCode`**: Código ISIN (International Securities Identification Number) da emissão, Código ISIN do produto, Código da emissora - código universal que identifica cada valor mobiliário ou instrumento financeiro
- **`ticker`**: Código de negociação para identificação de ativos negociados em bolsa

## Posição da operação da Renda Variável

Obtém a posição da operação de Renda Variável identificada por **`investmentId`**. Os dados obtidos aqui devem ser possíveis de se recuperar para cada conta listada na primeria seção. Os dados que precisam ser enviados são os seguintes:

- **`referenceDate`**: Posição fechada para o ativo da data do dia anterior
- **`priceFactor`**: Fator que indica o número de ações utilizadas para a formação do preço. Valor informado deve ser maior que zero
- **`grossAmount`**: Valor e moeda do investimento anterior à dedução de impostos, taxas e tarifas (se houver), atualizado na data de referência
- **`blockedBalance`**: Valor não disponível e moeda para movimentação naquele momento por qualquer motivo
- **`quantity`**: Quatidade total do ativo na data de referência
- **`closingPrice`**: Preço de fechamento e moeda na data de referência

## Movimentações da operação da Renda Variável histórico e recente

Obtém as movimentações da operação de Renda Variável identificada por **`investmentId`**. Aqui é necessário ter a possibilidade de filtrar a lista de transações recuperadas, proporcionando as listagens de todas as movimentações dos últimos 12 meses e últimos 7 dias. Os dados que precisam ser retornados para cada transação são:

- **`type`**: Tipo de movimentação na visão de investimento, podendo ser de entrada ou saída
- **`transactionType`**: O campo deve classificar a movimentação. Exemplos:
    - COMPRA
    - VENDA
    - DIVIDENDOS
    - JCP
    - ALUGUEIS
    - TRANSFERENCIA_CUSTODIA
    - TRANSFERENCIA_TITULARIDADE
    - OUTROS (nesse caso especificar o outro tipo)
- **`transactionDate`**: Data da movimentação. É necessário compartilhar movimentos até a data da posição.
- **`priceFactor`**: Fator que indica o número de ações utilizadas para a formação do preço. Valor informado deve ser maior que zero
- **`transactionUnitPrice`**: Preço unitário e moeda da movimentação - valor da unidade do produto na movimentação do investimento
- **`transactionQuantity`**: Quantidade de ativos movimentados. Obrigatório quando o tipo da transação for compra ou venda
- **`transactionValue`**: Valor e moeda da operação realizada pelo cliente
- **`transactionId`**: Código ou identificador único prestado pela instituição que mantém a representação individual do movimento
- **`brokerNoteId`**: Identificador da nota de negociação. Obrigatório caso a movimentação seja de compra ou venda

## Informações da nota de negociação

Obtém as informações da nota de negociação identificado nas movimentações de compra e venda de ativos em bolsa identificado pelo campo **`brokerNoteId`**. Os dados que precisam ser enviados são os seguintes:

- **`brokerNoteNumber`**: Identificador da nota de negociação
- **`grossValue`**: O valor e moeda da nota de negociação é o somatório das operações realizadas. Total de compra e venda do dia
- **`brokerageFee`**: O valor e moeda da taxa de corretagem incide sobre o valor bruto da nota de negociação, e é livremente pactuada entre o investidor e o seu intermediário
- **`clearingSettlementFee`**: Valor e moeda cobrado para liquidação na custódia
- **`clearingRegistrationFee`**: Valor e moeda cobrado para registro na custódia
- **`stockExchangeAssetTradeNoticeFee`**: Valor e moeda cobrada pela bolsa pelo aviso de negociação de ativo
- **`stockExchangeFee`**: Valor e moeda cobrado pela bolsa para remunerar os serviços de registro prestados
- **`clearingCustodyFee`**: Taxa e moeda cobrada pelas IF para custódia
- **`taxes`**: Valor e moeda dos impostos cobrados na operação, inclusive imposto de renda day-trade, exceto imposto de renda retido na fonte
- **`incomeTax`**: Valor e moeda do imposto de renda retido na fonte
- **`netValue`**: Valor líquido e moeda  da nota de negociação após despesas com taxa de corretagem, taxa de liquidação, taxa de registro, taxa A.N.A, emolumentos, taxa de custódia, impostos e IRRF
