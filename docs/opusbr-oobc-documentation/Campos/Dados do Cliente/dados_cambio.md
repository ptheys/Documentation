# Dados para endpoints de câmbio

Este documento descreve as informações que o conector precisa acessar para possibilitar o compartilhamento de dados de **câmbio**.

O nome dos dados e valores enumerados (enums) apresentados a seguir são apenas exemplos. Sendo assim, **para os conectores desenvolvidos pela OPUS, solicitamos que nos envie um documento especificando quais dados e enums do legado correspondem aos listados abaixo**.

> 🛈 **Nota: Referência para o desenvolvimento dos conectores**: Esquemas e exemplos de entradas e saídas dos conectores compartilhamento de dados de **câmbio** estão presentes no diretório `integração-plugin/schemas/v3/financial-data/exchanges` da Documentação Plataforma OPUS Open Finance. Por outro lado, o formato final de fato compartilhado pelo OPUS Open Finance será conforme especificado na [documentação Oficial do Open Finance Brasil](https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/345113312/Informa+es+T+cnicas+-+DC+C+mbio+-+v1.0.0).

## Listagem de operações de câmbio

Lista as operações de câmbio mantidas pelo cliente na instituição. Os dados que precisam ser fornecidos são os seguintes:

- **`brandName`**: Nome da Marca reportada pelo participante no Open Finance
- **`companyCnpj`**: Número completo do CNPJ da instituição responsável pelo Cadastro - o CNPJ corresponde ao número de inscrição no Cadastro de Pessoa Jurídica
- **`operationId`**: Identifica de forma única o relacionamento do cliente com o produto, mantendo as regras de imutabilidade dentro da instituição transmissora

## Dados da operação de câmbio

Obtém os dados da operação de Câmbio identificada por **`operationId`**. Os dados obtidos aqui devem ser possíveis de se recuperar para cada operação listada na seção anterior. Os dados que precisam ser enviados são os seguintes:

- **`authorizedInstitution`**: Nome e CNPJ da instituição autorizada a operar no mercado de câmbio
- **`intermediaryInstitution`**: Nome e CNPJ da instituição intermediadora autorizada a operar no mercado de câmbio. Campo de envio obrigatório nos casos em que houver instituição intermediadora
- **`operation`**: Número no Bacen, tipo (compra ou venda), data de fechamento do contrato e data prevista de liquidação da operação. O número no Bacen deve ser preenchido no compartilhamento, após registro no Sistema de Câmbio e número disponível na transmissora/detentora
- **`localCurrencyOperation`**: Valor negociado e valor da taxa de câmbio aplicada ao contrato ambos em moeda nacional. Especificar moeda seguindo o modelo ISO-4217
- **`foreignOperationValue`**: Valor da operação em moeda estrangeira. Especificar moeda seguindo o modelo ISO-4217
- **`operationOutstandingBalance`**: Valor do saldo da operação a liquidar em moeda estrangeira. Objeto de envio obrigatório nos casos de operações de câmbio com liquidação futura. Especificar moeda seguindo o modelo ISO-4217
- **`vetAmount`**: Representa o custo de uma operação de câmbio em reais por moeda estrangeira, englobando a taxa de câmbio, as tarifas e tributos incidentes sobre essa operação. Campo de envio obrigatório nas operações de câmbio pronto que atingirem até o limite de US$100.000 ou equivalente em outras moedas. Especificar moeda seguindo o modelo ISO-4217
- **`localCurrencyAdvancePercentage`**: Percentual do valor de moeda estrangeira concedido ao cliente antecipadamente. Se possível trazer o valor entre 1 ou 6 casas decimais
- **`deliveryForeignCurrency`**: Forma de entrega da moeda estrangeira. Exemplos:
    - CARTA_CREDITO_A_VISTA
    - CARTA_CREDITO_A_PRAZO
    - CONTA_DEPOSITO
    - CONTA_DEPOSITO_MOEDA_ESTRANGEIRA_PAIS
    - CONTA_DEPOSITO_EXPORTADOR_MANTIDA_NO_EXTERIOR
    - CONTA_DEPOSITO_OU_PAGAMENTO_EXPORTADOR_INSTITUICAO_EXTERIOR
    - CONVENIO_PAGAMENTOS_E_CREDITOS_RECIPROCOS
    - CHEQUE
    - ESPECIE_CHEQUES_VIAGEM
    - CARTAO_PREPAGO
    - TELETRANSMISSAO
    - TITULOS_VALORES
    - SIMBOLICA
    - SEM_MOVIMENTACAO_VALORES
    - DEMAIS
    - OUTRO_NAO_MAPEADO_OFB  
- **`operationCategoryCode`**: Código da natureza fato do fechamento da operação. Deve respeitar os códigos de natureza referenciados na resolução 277 ou na Circular 3690, conforme se aplicar ao contrato de câmbio

## Dados dos eventos da operação de câmbio

Obtém os dados dos eventos da operação de Câmbio identificada por **`operationId`**. Os dados obtidos aqui devem ser possíveis de se recuperar para cada operação listada na primeira anterior. Os dados que precisam ser enviados são os seguintes:

- **`event`**: Número de sequência do registro no Bacen do evento, data do evento relacionado e tipo de contratação. Exemplos do tipo:
    - **1** - Contratação no Mercado Primário.
    - **2** - Alteração de Operação Cambial no Mercado Primário.
    - **3** - Cancelamento de Operação Cambial no Mercado Primário.
    - **4** - Liquidação de Operação Cambial no Mercado Primário.
    - **5** - Baixa de Valor a Liquidar de Operação Cambial no Mercado Primário.
    - **6** - Restabelecimento de Baixa de Valor a Liquidar de Operação Cambial no Mercado Primário.
    - **9** - Anulação de Operação Cambial no Mercado Primário (utilizado, por exemplo, na anulação de um evento de liquidação/cancelamento)
- **`dueDate`**: Data em que a operação (compra ou venda), após evento, está prevista para ser liquidada
- **`localCurrencyOperation`**: Valor negociado e valor da taxa de câmbio aplicada ao contrato ambos em moeda nacional. Especificar moeda seguindo o modelo ISO-4217
- **`foreignOperationValue`**: Valor da operação em moeda estrangeira. Especificar moeda seguindo o modelo ISO-4217
- **`operationOutstandingBalance`**: Valor do saldo da operação a liquidar em moeda estrangeira. Especificar moeda seguindo o modelo ISO-4217
- **`vetAmount`**: Representa o custo de uma operação de câmbio em reais por moeda estrangeira, englobando a taxa de câmbio, as tarifas e tributos incidentes sobre essa operação. Campo de envio obrigatório nas operações de câmbio pronto que atingirem até o limite de US$100.000 ou equivalente em outras moedas. Especificar moeda seguindo o modelo ISO-4217
- **`localCurrencyAdvancePercentage`**: Percentual do valor de moeda estrangeira concedido ao cliente antecipadamente. Se possível trazer o valor entre 1 ou 6 casas decimais
- **`deliveryForeignCurrency`**: Forma de entrega da moeda estrangeira. Exemplos:
    - CARTA_CREDITO_A_VISTA
    - CARTA_CREDITO_A_PRAZO
    - CONTA_DEPOSITO
    - CONTA_DEPOSITO_MOEDA_ESTRANGEIRA_PAIS
    - CONTA_DEPOSITO_EXPORTADOR_MANTIDA_NO_EXTERIOR
    - CONTA_DEPOSITO_OU_PAGAMENTO_EXPORTADOR_INSTITUICAO_EXTERIOR
    - CONVENIO_PAGAMENTOS_E_CREDITOS_RECIPROCOS
    - CHEQUE
    - ESPECIE_CHEQUES_VIAGEM
    - CARTAO_PREPAGO
    - TELETRANSMISSAO
    - TITULOS_VALORES
    - SIMBOLICA
    - SEM_MOVIMENTACAO_VALORES
    - DEMAIS
    - OUTRO_NAO_MAPEADO_OFB  
- **`operationCategoryCode`**: Código da natureza fato do fechamento da operação. Deve respeitar os códigos de natureza referenciados na resolução 277 ou na Circular 3690, conforme se aplicar ao contrato de câmbio
- **`foreignPartie`**: Informações da parte exterior envolvida. Especificar a relação de vínculo respeitando os referenciados na resolução 277 ou na Circular 3690, nome do pagador ou recebedor e código do país, segundo a norma ISO 3166-1. Caso a instituição possua a informação, ela é de envio obrigatório
