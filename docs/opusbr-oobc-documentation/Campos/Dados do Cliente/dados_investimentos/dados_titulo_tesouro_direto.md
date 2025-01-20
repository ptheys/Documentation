# Dados para endpoints de títulos de tesouro direto

Este documento descreve as informações que o conector precisa acessar para possibilitar o compartilhamento de dados de **títulos de tesouro direto**.

O nome dos dados e valores enumerados (enums) apresentados a seguir são apenas exemplos. Sendo assim, **para os conectores desenvolvidos pela OPUS, solicitamos que nos envie um documento especificando quais dados e enums do legado correspondem aos listados abaixo**.

> 🛈 **Nota: Referência para o desenvolvimento dos conectores**: Esquemas e exemplos de entradas e saídas dos conectores compartilhamento de dados de **títulos de tesouro direto** estão presentes no diretório `integração-plugin/schemas/v3/financial-data/treasure-titles` da Documentação Plataforma OPUS Open Finance. Por outro lado, o formato final de fato compartilhado pelo OPUS Open Finance será conforme especificado na [documentação Oficial do Open Finance Brasil](https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/163513644/Informa+es+T+cnicas+-+DC+T+tulos+do+Tesouro+Direto+-+v1.0.1).

## Lista de operações de Título de Tesouro Direto

Lista de títulos de tesouro direto mantidos pelo cliente na instituição. Os dados esperados de cada título são os seguintes

- **`brandName`**: Nome da Marca reportada pelo participante no Open Finance
- **`companyCnpj`**: Número completo do CNPJ da instituição responsável pelo Cadastro - o CNPJ corresponde ao número de inscrição no Cadastro de Pessoa Jurídica
- **`investmentId`**: Identifica de forma única o relacionamento do cliente com o produto, mantendo as regras de imutabilidade dentro da instituição transmissora

## Dados da operação de Título de Tesouro Direto

Obtém dados da operação de Título de Tesouro Direto identificada pelo campo **`investmentId`**. Os dados obtidos aqui devem ser possíveis de se recuperar para cada conta listada na seção anterior. Os dados que precisam ser enviados são os seguintes:

- **`isinCode`**: Código ISIN da emissão, Código ISIN (International Securities Identification Number) do produto, Código da emissora - código universal que identifica cada valor mobiliário ou instrumento financeiro
- **`productName`**: Nome do título em questão, conforme listado no [site](https://www.tesourodireto.com.br/) do Tesouro Direto
- **`remuneration`**: Objeto para detalhamento de remuneração do titulo. As informações aqui necessárias são
    - **`preFixedRate`**: Taxa de remuneração pré fixada de emissão do título. É obrigatório quando o índice de correção da rentabilidade e/ou rendimento for pré-fixada
    - **`postFixedIndexerPercentage`**: Percentual do indexador pós fixado de emissão do título. É obrigatório quando o índice de correção da rentabilidade e/ou rendimento for pós-fixada
    - **`ratePeriodicity`**: Periodicidade da remuneração, podendo ser diário, mensal, anual ou semestral
    - **`calculation`**: Base de cálculo podendo ser dias úteis ou corridos
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
        - OUTROS (nesse caso dizer o outro índice)
- **`dueDate`**: Data de vencimento do título
- **`purchaseDate`**: Data de aquisição do cliente
- **`voucherPaymentIndicator/voucherPaymentPeriodicity`**: Indicativo se há pagamento de cupom (Sim ou não) e caso haver pagamento de cupom descrever a periodicidade. Exemplos:
    - MENSAL
    - TRIMESTRAL
    - SEMESTRAL
    - ANUAL
    - IRREGULAR
    - OUTROS (nesse caso informar o outro tipo de periodicidade)

## Posição da operação de Título de Tesouro Direto

Obtém a posição da operação de Título de Tesouro Direto identificada por **`investmentId`**. Os dados obtidos aqui devem ser possíveis de se recuperar para cada conta listada na primeria seção. Os dados que precisam ser enviados são os seguintes:

- **`referenceDateTime`**: Data da última posição consolidada disponível a que se referem os dados transacionais do cliente disponíveis nos canais eletrônicos
- **`updatedUnitPrice`**: Valor bruto unitário e moeda atualizado (a mercado) na data de referência
- **`grossAmount`**: Valor e moeda do investimento anterior à dedução de impostos, taxas e tarifas (se houver), atualizado (a mercado) na data de referência
- **`netAmount`**: Valor e moeda do investimento posterior a dedução de impostos, taxas e tarifas (se houver), atualizado (a mercado) na data de referência
- **`incomeTax`**: Valor e moeda do imposto de renda provisionado considerando a alíquota vigente na data de referência
- **`financialTransactionTax`**: Valor e moeda do IOF provisionado
- **`blockedBalance`**: Valor não disponível e moeda para movimentação naquele momento por qualquer motivo (bloqueio judicial, bloqueio em garantia, entre outros)
- **`purchaseUnitPrice`**: Valor unitário e moeda negociado com o cliente na data de aquisição
- **`quantity`**: Quantidade de títulos detidos na data da posição do cliente

## Movimentações da operação de Título de Tesouro Direto histórico e recente

Obtém as movimentações da operação de Título de Tesouro Direto identificada por **`investmentId`**. Aqui é necessário ter a possibilidade de filtrar a lista de transações recuperadas, proporcionando as listagens de todas as movimentações dos últimos 12 meses e últimos 7 dias. Os dados que precisam ser retornados para cada transação são:

Lista de movimentações podendo recuperar o histórico dos últimos 12 meses ou dos 7 dias anteriores. Para cada movimentação deve-se entregar os seguintes dados

- **`type`**: Tipo de movimentação na visão de investimento podendo ser de entrada ou saída
- **`transactionType`**: Tipo da transação. Exemplos:
    - COMPRA
    - VENDA
    - CANCELAMENTO
    - VENCIMENTO
    - PAGAMENTO_JUROS
    - AMORTIZACAO
    - TRANSFERENCIA_TITULARIDADE
    - TRANSFERENCIA_CUSTODIA
    - OUTROS (nesse caso especificar o outro tipo)
- **`transactionDate`**: Data da movimentação
- **`transactionUnitPrice`**: Preço unitário bruto e moeda negociado na transação
- **`transactionQuantity`**: Quantidade de títulos envolvidos na movimentação
- **`transactionGrossValue`**: Valor bruto e moeda da movimentação
- **`incomeTax`**: Valor e moeda do imposto de renda recolhido na transação
- **`financialTransactionTax`**: Valor e moeda do IOF recolhido na transação
- **`transactionNetValue`**: Valor líquido e moeda da transação
- **`remunerationTransactionRate`**: Taxa de remuneração e moeda da movimentação. Obrigatório quando o tipo for de entrada
- **`transactionId`**: Código ou identificador único prestado pela instituição para individualizar o movimento
