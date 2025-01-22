# Dados para endpoints de fundos de investimento

Este documento descreve as informações que o conector precisa acessar para possibilitar o compartilhamento de dados de **fundos de investimento**.

O nome dos dados e valores enumerados (enums) apresentados a seguir são apenas exemplos. Sendo assim, **para os conectores desenvolvidos pela OPUS, solicitamos que nos envie um documento especificando quais dados e enums do legado correspondem aos listados abaixo**.

> 🛈 **Nota: Referência para o desenvolvimento dos conectores**: Esquemas e exemplos de entradas e saídas dos conectores compartilhamento de dados de **fundos de investimento** estão presentes no diretório `integração-plugin/schemas/v3/financial-data/funds` da Documentação Plataforma OPUS Open Finance. Por outro lado, o formato final de fato compartilhado pelo OPUS Open Finance será conforme especificado na [documentação Oficial do Open Finance Brasil](https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/184058368/Informa+es+T+cnicas+-+DC+Fundos+de+Investimento+-+v1.0.2).

## Lista de operações de Fundos de Investimento

Lista de títulos de tesouro direto mantidos pelo cliente na instituição. Os dados esperados de cada título são os seguintes

- **`brandName`**: Nome da Marca reportada pelo participante no Open Finance
- **`companyCnpj`**: Número completo do CNPJ da instituição responsável pelo Cadastro - o CNPJ corresponde ao número de inscrição no Cadastro de Pessoa Jurídica
- **`anbimaCategory`**: Categoria. Exemplos:
    - RENDA_FIXA
    - ACOES
    - MULTIMERCADO
    - CAMBIAL
- **`investmentId`**: Identifica de forma única o relacionamento do cliente com o produto, mantendo as regras de imutabilidade dentro da instituição transmissora. Caso o cliente compre novamente o ativo que já investiu em períodos passados, manter o mesmo  **`investmentId`** anteriormente utilizado

## Dados da operação de Fundos de Investimento

Obtém dados da operação de Fundos de Investimento identificada pelo campo **`investmentId`**. Os dados obtidos aqui devem ser possíveis de se recuperar para cada conta listada na seção anterior. Os dados que precisam ser enviados são os seguintes:

- **`name`**: Nome oficial do fundo de investimento conforme exibido para os clientes nos canais eletrônicos
- **`cnpjNumber`**: CNPJ do fundo de investimento
- **`isinCode`**: Código universal ISIN (International Securities Identification Number) que identifica cada valor mobiliário ou instrumento financeiro
- **`anbimaCategory`**: Categoria. Exemplos:
    - RENDA_FIXA
    - ACOES
    - MULTIMERCADO
    - CAMBIAL

## Posição da operação de Fundos de Investimento

Obtém a posição da operação de Fundos de Investimento identificada por **`investmentId`**. Os dados obtidos aqui devem ser possíveis de se recuperar para cada conta listada na primeria seção. Os dados que precisam ser enviados são os seguintes:

- **`referenceDate`**: Data da última posição consolidada disponível a que se referem os dados transacionais do cliente disponíveis nos canais eletrônicos
- **`grossAmount`**: Valor e moeda do investimento que se refere a quantidade da cota x valor da cota, atualizado na data de referência
- **`netAmount`**: Valor e moeda do investimento atualizado na data de referência, posterior a dedução de impostos (IOF e IR) e taxa de saída, caso a instituição considere este valor na composição do saldo líquido
- **`incomeTaxProvision`**: Valor e moeda do imposto de renda provisionado considerando a alíquota vigente na data de referência
- **`financialTransactionTaxProvision`**: Valor e moeda do imposto considerando a alíquota vigente na data de referência
- **`blockedAmount`**: Valor e moeda não disponível para movimentação naquele momento por qualquer motivo (bloqueio judicial, bloqueio em garantia, entre outros)
- **`quotaQuantity`**: Quantidade de cotas detidas em posição do cliente
- **`quotaGrossPriceValue`**: Valor bruto e moeda da cota atualizado na data de referência

## Movimentações da operação de Fundos de Investimento histórico e recente

Obtém as movimentações da operação de Fundos de Investimento identificada por **`investmentId`**. Aqui é necessário ter a possibilidade de filtrar a lista de transações recuperadas, proporcionando as listagens de todas as movimentações dos últimos 12 meses e últimos 7 dias. Os dados que precisam ser retornados para cada transação são:

- **`transactionId`**: Código ou identificador único prestado pela instituição que mantém a representação individual do movimento na posição do fundo
- **`type`**: Tipo de movimentação, sendo de entrada ou saída
- **`transactionType`**: O campo deve classificar a transação de movimentação de investimento em um dos tipos descritos. Exemplos:
    - AMORTIZACAO
    - TRANSFERENCIA_COTAS
    - APLICACAO
    - RESGATE
    - COME_COTAS
    - OUTROS (nesse caso informar o outro tipo)
- **`transactionConversionDate`**: Data da conversão da transação de movimentação do fundo de investimento
- **`transactionQuotaPrice`**: Valor e moeda da cota utilizada na conversão para a realização da movimentação do cliente no fundo
- **`transactionQuotaQuantity`**: Número de cotas convertidas na data da movimentação
- **`transactionValue`**: Valor e moeda solicitado pelo cliente
- **`transactionGrossValue`**: Valor e moeda  da movimentação que se refere a quantidade da cota x valor da cota da movimentação
- **`incomeTax`**: Valor e moeda  do Imposto de Renda (IR) retido na fonte considerando a alíquota vigente na data da movimentação
- **`financialTransactionTax`**: Valor e moeda do Imposto sobre Operações Financeiras (IOF) retido na fonte considerando a alíquota vigente na data da movimentação
- **`transactionExitFee`**: Valor e moeda da taxa de saída considerado na movimentação
- **`transactionNetValue`**: Valor líquido e moeda da movimentação posterior à dedução de impostos (IOF e IR) e taxa de saída
