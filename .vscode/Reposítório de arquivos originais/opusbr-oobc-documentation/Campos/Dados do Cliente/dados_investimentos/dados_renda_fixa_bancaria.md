# Dados para endpoints de renda fixa bancária

Este documento descreve as informações que o conector precisa acessar para possibilitar o compartilhamento de dados de **renda fixa bancária**.

O nome dos dados e valores enumerados (enums) apresentados a seguir são apenas exemplos. Sendo assim, **para os conectores desenvolvidos pela OPUS, solicitamos que nos envie um documento especificando quais dados e enums do legado correspondem aos listados abaixo**.

> 🛈 **Nota: Referência para o desenvolvimento dos conectores**: Esquemas e exemplos de entradas e saídas dos conectores compartilhamento de dados de **renda fixa bancária** estão presentes no diretório `integração-plugin/schemas/v3/financial-data/bank-fixed-incomes` da Documentação Plataforma OPUS Open Finance. Por outro lado, o formato final de fato compartilhado pelo OPUS Open Finance será conforme especificado na [documentação Oficial do Open Finance Brasil](https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/360743060/Informa+es+T+cnicas+-+DC+Renda+Fixa+Banc+ria+-+v1.0.3).

## Lista de operações da Renda Fixa Bancária

Lista de títulos de renda fixa bancária mantidos pelo cliente na instituição. Os dados esperados de cada título são os seguintes

- **`brandName`**: Nome da Marca reportada pelo participante no Open Finance
- **`companyCnpj`**: Número completo do CNPJ da instituição responsável pelo Cadastro - o CNPJ corresponde ao número de inscrição no Cadastro de Pessoa Jurídica
- **`investmentType`**: Especificação do ativo. Exemplos:
    - CDB
    - RDB
    - LCI
    - LCA
- **`investmentId`**: Identifica de forma única o relacionamento do cliente com o produto, mantendo as regras de imutabilidade dentro da instituição transmissora

## Dados da operação da Renda Fixa Bancária

Obtém dados da operação de renda fixa identificada pelo campo **`investmentId`**. Os dados obtidos aqui devem ser possíveis de se recuperar para cada conta listada na seção anterior. Os dados que precisam ser enviados são os seguintes:

- **`issuerInstitutionCnpjNumber`**: CNPJ da instituição emissora
- **`isinCode`**: Código ISIN da emissão, Código ISIN do produto, Código da emissora (campo opcional): código universal que identifica cada valor mobiliário ou instrumento financeiro
- **`investmentType`**: Especificação do ativo. Exemplos:
    - CDB
    - RDB
    - LCI
    - LCA
- **`remuneration`**: Objeto para detalhamento de remuneração do titulo. As informações aqui necessárias são
    - **`preFixedRate`**: Taxa de remuneração pré fixada de emissão do título. É obrigatório quando o índice de correção da rentabilidade e/ou rendimento for pré-fixada ou se tratar de um produto com remuneração híbrida
    - **`postFixedIndexerPercentage`**: Percentual do indexador pós fixado de emissão do título. É obrigatório quando o índice de correção da rentabilidade e/ou rendimento for pós-fixada ou se tratar de um produto com remuneração híbrida
    - **`rateType`**: Tipo da taxa de remuneração, podendo ser linear ou exponencial
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
- **`issueUnitPrice/issueDate/dueDate`**: Valor e moeda, data de emissão e data de vencimento do título
- **`clearingCode`**: Código de registro do ativo na clearing
- **`purchaseDate`**: Data de aquisição do cliente
- **`gracePeriodDate`**: Data até a qual o cliente não poderá resgatar antecipadamente seu investimento

## Posição da operação da Renda Fixa Bancária

Obtém a posição da operação de Renda Fixa Bancária identificada por **`investmentId`**. Os dados obtidos aqui devem ser possíveis de se recuperar para cada conta listada na primeria seção. Os dados que precisam ser enviados são os seguintes:

- **`referenceDateTime`**: data e hora da última posição consolidada disponível a que se referem os dados transacionais do cliente disponíveis nos canais eletrônicos
- **`quantity`**: Quantidade de títulos detidos na data da posição do cliente
- **`updatedUnitPrice`**: Valor bruto unitário atualizado na data de referência
- **`grossAmount`**: Valor do investimento que se refere a quantidade multiplicado pelo PU atualizado na data de referência
- **`netAmount`**: Valor do investimento atualizado na data de referência, posterior a dedução de impostos (IOF e IR)
- **`incomeTax`**: Valor do imposto de renda provisionado considerando a alíquota vigente na data de referência
- **`financialTransactionTax`**: Valor do imposto (IOF) provisionado considerando a alíquota vigente na data de referência
- **`blockedBalance`**: Valor não disponível para movimentação naquele momento por qualquer motivo
- **`purchaseUnitPrice`**: Valor unitário negociado com o cliente na data de aquisição
- **`preFixedRate`**: Opcional. Taxa de remuneração acordada com o cliente na contratação
- **`postFixedIndexerPercentage`**: Opcional. Percentual do indexador acordado com o cliente na contratação

## Movimentações da operação da Renda Fixa Bancária histórico e recente

Obtém as movimentações da operação de Renda Fixa Bancária identificada por **`investmentId`**. Aqui é necessário ter a possibilidade de filtrar a lista de transações recuperadas, proporcionando as listagens de todas as movimentações dos últimos 12 meses e últimos 7 dias. Os dados que precisam ser retornados para cada transação são:

- **`type`**: Tipo de movimentação na visão de investimento, podendo ser de entrada ou saída
- **`transactionType`**: Tipo de transação. Exemplos:
    - APLICACAO
    - RESGATE
    - CANCELAMENTO
    - VENCIMENTO
    - PAGAMENTO_JUROS
    - AMORTIZACAO
    - TRANSFERENCIA_TITULARIDADE
    - TRANSFERENCIA_CUSTODIA
    - OUTROS (nesse caso especifique o outro tipo)
- **`transactionDate`**: Data da movimentação
- **`transactionUnitPrice`**: Preço unitário bruto negociado na transação e moeda referente ao valor monetário
- **`transactionQuantity`**: Quantidade de títulos envolvidos na movimentação
- **`transactionGrossValue`**: Valor bruto da transação (Preço unitário da movimentação x Quantidade) e moeda referente ao valor monetário
- **`incomeTax`**: Valor do imposto de renda recolhido na transação, obrigatório quando for de saida e moeda referente ao valor monetário
- **`financialTransactionTax`**: Valor do IOF recolhido na transação, obrigatório quando for de saida e moeda referente ao valor monetário
- **`transactionNetValue`**: Valor líquido da transação e moeda referente ao valor monetário
- **`remunerationTransactionRate`**: Taxa de remuneração da transação. Obrigatório quando o tipo for entrada e produto for pré-fixado ou híbrido
- **`indexerPercentage`**: Percentual máximo do indexador acordado com o cliente na contratação. Obrigatório quando o tipo for entrada e produto for pós-fixado ou híbrido
- **`transactionId`**: Código ou identificador único prestado pela instituição que mantém a representação individual do movimento
