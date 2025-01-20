# Dados para endpoints de operações de crédito

Este documento descreve as informações que o conector precisa acessar para possibilitar o compartilhamento de dados de **operações de crédito**.

O nome dos dados e valores enumerados (enums) apresentados a seguir são apenas exemplos. Sendo assim, **para os conectores desenvolvidos pela OPUS, solicitamos que nos envie um documento especificando quais dados e enums do legado correspondem aos listados abaixo**.

> 🛈 **Nota: Referência para o desenvolvimento dos conectores**: Esquemas e exemplos de entradas e saídas dos conectores compartilhamento de dados de **operações de crédito** estão presentes no diretório `integração-plugin/schemas/v3/financial-data/` da Documentação Plataforma OPUS Open Finance. Por outro lado, o formato final de fato compartilhado pelo OPUS Open Finance será conforme especificado na [documentação Oficial do Open Finance Brasil](https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/320176130/DC+APIs+-+Opera+es+de+Cr+dito). A tabela abaixo possui a referência específica para cada submodalidade na documentação interna e na documentação oficial
>
> | Submodalidade | Diretório na documentação do Opus OFB               | Documentação oficial |
> | ------------- | --------------------------------------------------- | ----------------------------------------------------- |
> |  empréstimos  | `integração-plugin/schemas/v3/financial-data/loans` | [API de empréstimos](https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/387515225/Informa+es+T+cnicas+-+DC+Empr+stimos+-+v2.2.0) |
> |  financiamento | `integração-plugin/schemas/v3/financial-data/financings` | [API de financiamento](https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/474415286/Informa+es+T+cnicas+-+DC+Financiamento+-+v2.2.0) |
> |  Adiantamento a Depositantes  | `integração-plugin/schemas/v3/financial-data/unarranged-accounts-overdraft` | [API de Adiantamento a Depositantes](https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/474546348/Informa+es+T+cnicas+-+DC+Adiantamento+a+Depositantes+-+v2.2.0) |
> |  Direitos Creditórios Descontados  | `integração-plugin/schemas/v3/financial-data/invoice-financings` | [API de Direitos Creditórios Descontados](https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/474579114/Informa+es+T+cnicas+-+DC+Direitos+Credit+rios+Descontados+-+v2.2.0) |

As operações de crédito possuem 4 diferentes submodalidades. Cada submodalidade possui uma lista de produtos e subprodutos relacionados que vão ser requisitados em alguns campos. Aqui vamos listar esses valores de produtos e subprodutos para serem utilizados nesses campos.

## Tabela de submodalidades, produtos e subprodutos

| Submodalidade                    | productType                                                                | productSubType                                                                                                                                                                                                                                                                                             |
| -------------------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Empréstimos                      | EMPRESTIMOS                                                                | HOME_EQUITY </br>CHEQUE_ESPECIAL </br>CONTA_GARANTIDA </br>CAPITAL_GIRO_TETO_ROTATIVO </br>CREDITO_PESSOAL_SEM_CONSIGNACAO </br>CREDITO_PESSOAL_COM_CONSIGNACAO </br>MICROCREDITO_PRODUTIVO_ORIENTADO </br>CAPITAL_GIRO_PRAZO_VENCIMENTO_ATE_365_DIAS </br>CAPITAL_GIRO_PRAZO_VENCIMENTO_SUPERIOR_365_DIAS |
| Financiamento                    | FINANCIAMENTOS </br>FINANCIAMENTOS_RURAIS </br>FINANCIAMENTOS_IMOBILIARIOS | AQUISICAO_BENS_VEICULOS_AUTOMOTORES </br>AQUISICAO_BENS_OUTROS_BENS </br>MICROCREDITO </br>CUSTEIO </br>INVESTIMENTO </br>INDUSTRIALIZACAO </br>COMERCIALIZACAO </br>FINANCIAMENTO_HABITACIONAL_SFH </br>FINANCIAMENTO_HABITACIONAL_EXCETO_SFH                                                             |
| Adiantamento a Depositantes      | ADIANTAMENTO_A_DEPOSITANTES                                                | ADIANTAMENTO_A_DEPOSITANTES                                                                                                                                                                                                                                                                                |
| Direitos Creditórios Descontados | DIREITOS_CREDITORIOS_DESCONTADOS                                           | DESCONTO_DUPLICATAS </br>DESCONTO_CHEQUES </br>ANTECIPACAO_FATURA_CARTAO_CREDITO </br>OUTROS_DIREITOS_CREDITORIOS_DESCONTADOS </br>OUTROS_TITULOS_DESCONTADOS                                                                                                                                              |

A maioria dos campos que iremos citar precisam dos mesmos dados para essas diferentes submodalidades. Nos casos específicos onde é os dados são diferentes, vamos listar as diferentes possibilidades.

## Listagem de informações sobre contratos da submodalidade

Lista de contratos da submodalidade mantidos pelo cliente na instituição. Os dados de cada contrato que precisam ser fornecidos são

- **`contractId`**: Identifica de forma única o contrato da operação de crédito do cliente, mantendo as regras de imutabilidade dentro da instituição transmissora
- **`brandName`**: Nome da Marca reportada pelo participante no Open Finance
- **`companyCnpj`**: Número completo do CNPJ da instituição responsável pelo Cadastro - o CNPJ corresponde ao número de inscrição no Cadastro de Pessoa Jurídica
- **`productType`**: Tipo da modalidade de crédito contratada. Campo que depende da submodalidade, ver [tabela](#tabela-de-submodalidades-produtos-e-subprodutos)
- **`productSubType`**: Sub tipo da modalidades de crédito Empréstimos contratadas. Campo que depende da submodalidade, ver [tabela](#tabela-de-submodalidades-produtos-e-subprodutos)
- **`ipocCode`**: Número padronizado do contrato - IPOC (Identificação Padronizada da Operação de Crédito)

## Dados de um contrato da submodalidade

Obtém os dados do contrato da submodalidade identificado por **`contractId`** mantido pelo cliente na instituição transmissora. Os dados obtidos aqui devem ser possíveis de se recuperar para cada conta listada na seção anterior. Os dados que precisam ser enviados são os seguintes:

- **`contractNumber`**: Número do contrato dado pela instituição contratante
- **`ipocCode`**: Número padronizado do contrato - IPOC (Identificação Padronizada da Operação de Crédito)
- **`productName`**: Denominação/Identificação do nome da Modalidade da Operação de Crédito divulgado ao cliente
- **`productType`**: Tipo da modalidade de crédito contratada. Campo que depende da submodalidade, ver [tabela](#tabela-de-submodalidades-produtos-e-subprodutos)
- **`productSubType`**: Sub tipo da modalidades de crédito Empréstimos contratadas. Campo que depende da submodalidade, ver [tabela](#tabela-de-submodalidades-produtos-e-subprodutos). Para o subproduto CREDITO_PESSOAL_COM_CONSIGNACAO é preciso informar o CNPJ do consignante
- **`contractDate`**: Data de contratação da operação de crédito
- **`disbursementDates`**: Lista que traz as Datas de Desembolso do valor contratado
- **`settlementDate`**: Data de liquidação da operação
- **`contractAmount`**: Valor contratado da operação
- **`currency`**: Moeda referente ao valor da garantia
- **`dueDate`**: Data de vencimento Final da operação. Envio obrigatório caso exista
- **`instalmentPeriodicity`**: Informação relativa a periodicidade das parcelas. Exemplos:
    - SEM_PERIODICIDADE_REGULAR
    - SEMANAL
    - QUINZENAL
    - MENSAL
    - BIMESTRAL
    - TRIMESTRAL
    - SEMESTRAL
    - ANUAL
    - OUTROS (nesse caso especificar qual outro tipo de periodicidade)
- **`firstInstalmentDueDate`**: Data de vencimento primeira parcela do principal. Informação deve ser enviada caso ela exista
- **`CET`**: Custo Efetivo Total deve ser expresso na forma de taxa percentual anual e incorpora todos os encargos e despesas incidentes nas operações de crédito (taxa de juro, mas também tarifas, tributos, seguros e outras despesas cobradas). É obrigatório exceto pelos casos a seguir
    - Em contratos anteriores a 2008 (para o público PF);
    - Em contratos anteriores a 2011 (para o público PJ);
    - Em contratos anteriores a 2019 para os casos de operações de crédito rural (ambos os públicos PF e PJ);
    - Público PJ de médio ou grande porte.
- **`amortizationScheduled`**: Sistema de amortização. Exemplos:
    - SAC
    - PRICE
    - SAM
    - SEM_SISTEMA_AMORTIZACAO
    - OUTROS (nesse caso especificar qual outro tipo de amortização)
- **`interestRates`**: conjunto de informações necessárias para demonstrar a composição das taxas de juros remuneratórios da Modalidade de crédito. Caso o contrato não possua taxas de juros, deve ser compartilhada uma lista vazia. Caso o contrato possua uma taxa de juros com valor 0, deve ser compartilhado um objeto com o valor 0 de forma explícita. Para cada taxa espera-se as seguintes informações
    - **`taxType`**: Dizer se a taxa é nominal ou efetiva
    - **`interestRateType`**: Dizer se o tipo de juros é simples ou composto
    - **`taxPeriodicity`**: Dizer se é uma taxa ao més ou ao ano
    - **`calculation`**: Informar se base de cálculo é 21/252, 30/360 ou 30/365
    - **`referentialRateIndexerType`**: Informar tipo de taxa referencial ou indexador (caso disponível informar o subtipo também). Exemplos:
        - SEM_TIPO_INDEXADOR
        - PRE_FIXADO
        - POS_FIXADO
        - FLUTUANTES
        - INDICES_PRECOS
        - CREDITO_RURAL
        - OUTROS_INDEXADORES (nesse caso informar qual outro indexador)
    - **`preFixedRate`**: Taxa pré fixada aplicada sob o contrato da modalidade crédito
    - **`postFixedRate`**: Taxa pós fixada aplicada sob o contrato da modalidade crédito
    - **`additionalInfo`**: Texto com informações adicionais sobre a composição das taxas de juros pactuadas caso possua
- **`contractedFees`**: Lista que traz as informações das tarifas pactuadas no contrato. Espera-se para cada tarifa as seguintes informações
    - **`feeName`**: Denominação da Tarifa pactuada
    - **`feeCode`**: Sigla identificadora da tarifa pactuada
    - **`feeChargeType`**: Tipo de cobrança para a tarifa pactuada no contrato, podendo ser única ou por parcela
    - **`feeCharge`**: Forma de cobrança podendeo ser mínimo, máximo, fixo ou percentual
    - **`feeAmount/feeRate`**: Valor monetário ou percentual da tarifa pactuada no contrato
- **`contractedFinanceCharges`**: Lista que traz os encargos pactuados no contrato, se espera os seguintes dados para cada encargo
    - **`chargeType`**: Tipo de encargo pactuado no contrato. Exemplos:
        - JUROS_REMUNERATORIOS_POR_ATRASO
        - MULTA_ATRASO_PAGAMENTO
        - JUROS_MORA_ATRASO
        - IOF_CONTRATACAO
        - IOF_POR_ATRASO
        - SEM_ENCARGO
        - OUTROS (nesse caso informar que outro encago)
    - **`chargeRate`**: Representa o valor do encargo em percentual pactuado no contrato

## Listagem de garantias vinculadas ao contrato da submodalidade

Para cada uma das garantias que serão listadas, os seguintes dados são requisitados

Obtém a lista de garantias vinculadas ao contrato da submodalidade identificado por **`contractId`** mantido pelo cliente na instituição transmissora. Para produtos sem garantias, basta enviar um objeto vazio. Os dados obtidos aqui devem ser possíveis de se recuperar para cada conta listada na primeira seção. Os dados que precisam ser enviados são os seguintes:

- **`currency`**: Moeda referente ao valor da garantia, segundo modelo ISO-4217
- **`warrantyType`**: Denominação/Identificação do tipo da garantia que avaliza a Modalidade da Operação de Crédito contratada. Exemplos:
    - CESSAO_DIREITOS_CREDITORIOS
    - CAUCAO
    - PENHOR
    - ALIENACAO_FIDUCIARIA
    - HIPOTECA
    - OPERACOES_GARANTIDAS_PELO_GOVERNO
    - OUTRAS_GARANTIAS_NAO_FIDEJUSSORIAS
    - SEGUROS_ASSEMELHADOS
    - GARANTIA_FIDEJUSSORIA
    - BENS_ARRENDADOS
    - GARANTIAS_INTERNACIONAIS
    - OPERACOES_GARANTIDAS_OUTRAS_ENTIDADES
    - ACORDOS_COMPENSACAO
- **`warrantySubType`**: Denominação/Identificação do sub tipo da garantia que avaliza a Modalidade da Operação de Crédito contratada. Exemplos:
    - ACOES_DEBENTURES
    - ACORDOS_COMPENSACAO_LIQUIDACAO_OBRIGACOES
    - APLICACOES_FINANCEIRAS_RENDA_FIXA
    - APLICACOES_FINANCEIRAS_RENDA_VARIAVEL
    - APOLICES_CREDITO_EXPORTACAO
    - CCR_CONVENIO_CREDITOS_RECIPROCOS
    - CHEQUES
    - CIVIL
    - DIREITOS_SOBRE_ALUGUEIS
    - DEPOSITOS_A_VISTA_A_PRAZO_POUPANCA_OURO_TITULOS_PUBLICOS_FEDERAIS_ART_36
    - DEPOSITO_TITULOS_EMITIDOS_ENTIDADES_ART_23
    - DUPLICATAS
    - EMD_ENTIDADES_MULTILATERAIS_DESENVOLVIMENTO_ART_37
    - EQUIPAMENTOS
    - ESTADUAL_OU_DISTRITAL
    - FATURA_CARTAO_CREDITO
    - FEDERAL
    - FCVS_FUNDO_COMPENSACAO_VARIACOES_SALARIAIS
    - FGI_FUNDO_GARANTIDOR_INVESTIMENTOS
    - FGPC_FUNDO_GARANTIA_PROMOCAO_COMPETIT
    - FGTS_FUNDO_GARANTIA_TEMPO_SERVICO
    - FUNDO_GARANTIDOR_AVAL
    - GARANTIA_PRESTADA_FGPC_LEI_9531_ART_37
    - GARANTIA_PRESTADA_FUNDOS_QUAISQUER_OUTROS_MECANISMOS_COBERTURA_RISCO_CREDITO_ART_37
    - GARANTIA_PRESTADA_TESOURO_NACIONAL_OU_BACEN_ART_37_BENS_DIREITOS_INTEGRANTES_PATRIMONIO_AFETACAO
    - IMOVEIS
    - IMOVEIS_RESIDENCIAIS
    - MITIGADORAS
    - MUNICIPAL
    - NAO_MITIGADORAS
    - NOTAS_PROMISSORIAS_OUTROS_DIREITOS_CREDITO
    - OUTRAS
    - OUTROS
    - OUTROS_BENS
    - OUTROS_GRAUS
    - OUTROS_IMOVEIS
    - OUTROS_SEGUROS_ASSEMELHADOS
    - PESSOA_FISICA
    - PESSOA_FISICA_EXTERIOR
    - PESSOA_JURIDICA
    - PESSOA_JURIDICA_EXTERIOR
    - PRIMEIRO_GRAU_BENS_DIREITOS_INTEGRANTES_PATRIMONIO_AFETACAO
    - PRIMEIRO_GRAU_IMOVEIS_RESIDENCIAIS
    - PRIMEIRO_GRAU_OUTROS
    - PROAGRO
    - PRODUTOS_AGROPECUARIOS_COM_WARRANT
    - PRODUTOS_AGROPECUARIOS_SEM_WARRANT
    - SBCE_SOCIEDADE_BRASILEIRA_CREDITO_EXPORTAÇÃO
    - SEGURO_RURAL
    - SEM_SUB_TIPO_GARANTIA
    - TRIBUTOS_RECEITAS_ORCAMENTARIAS
    - VEICULOS
    - VEICULOS_AUTOMOTORES
- **`warrantyAmount`**: Valor original da garantia. Os casos de garantia fidejussória para os quais não é possível determinar um valor monetário para a garantia devem ser preenchidos com 0.00

## Dados do cronograma de parcelas do contrato da submodalidade

Obtém os dados do cronograma de parcelas do contrato da submodalidade identificado por **`contractId`** mantido pelo cliente na instituição transmissora. Os dados obtidos aqui devem ser possíveis de se recuperar para cada conta listada na primeira seção. Os dados que precisam ser enviados são os seguintes:

- **`totalNumberOfInstalments`**: Prazo Total referente à Modalidade de Crédito informada e seu tipo (dia, semana, mês, ano ou sem prazo)
- **`contractRemaining`**: Prazo Remanescente referente à Modalidade de Crédito informada e seu tipo (dia, semana, mês, ano ou sem prazo)
- **`paidInstalments/dueInstalments/pastDueInstalments`**: Campos distintos especificando a quantidade de prestações pagas, a vencer e vencidas (No caso de modalidades que não possuam parcelas, o número de prestações é igual a zero)
- **`balloonPayments`**: Lista que traz as datas de vencimento e valor das parcelas não regulares do contrato da modalidade de crédito consultada

## Dados de pagamento do contrato da submodalidade

Obtém os dados de pagamentos do contrato da submodalidade identificado por **`contractId`** mantido pelo cliente na instituição transmissora. Os dados obtidos aqui devem ser possíveis de se recuperar para cada conta listada na primeira seção. Os dados que precisam ser enviados são os seguintes:

- **`paidInstalments`**: Quantidade total de parcelas pagas do contrato referente à Modalidade de Crédito informada
- **`contractOutstandingBalance`**: Valor necessário para o cliente liquidar a dívida
- **`releases`**: Lista dos pagamentos realizados no período. Espera-se encontrar os seguintes dados para cada pagamento
    - **`paymentId`**: Identificador de pagamento de responsabilidade de cada Instituição transmissora
    - **`isOverParcelPayment`**: Identifica se é um pagamento pactuado (false) ou avulso (true)
    - **`instalmentId`**: Identificador de parcela, de responsabilidade de cada Instituição transmissora, obrigatório quando pagamento pactuado
    - **`paidDate`**: Data efetiva do pagamento referente ao contrato da modalidade de crédito consultada
    - **`currency`**: Moeda referente ao valor monetário informado
    - **`paidAmount`**: Valor do pagamento referente ao contrato da modalidade de crédito consultada
    - **`overParcel`**: Informações de tarifas e encargos caso existam pagos fora da parcela, espera-se dados dos seguintes objetos
        - **`fees`**: Espera-se a denominação da tarifa compactuada, sua sigla e o valor monetário
        - **`charges`**: Espera-se o **valor** do pagamento do encargo fora da parcela e o **tipo**. Exemplos dos tipos:
            - JUROS_REMUNERATORIOS_POR_ATRASO
            - MULTA_ATRASO_PAGAMENTO
            - JUROS_MORA_ATRASO
            - IOF_CONTRATACAO
            - IOF_POR_ATRASO
            - SEM_ENCARGO
            - OUTROS (nesse caso informar qual outro tipo de encargo)
