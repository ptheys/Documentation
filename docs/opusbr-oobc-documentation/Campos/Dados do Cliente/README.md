# Observações gerais

Essa fase permite que clientes da instituição solicitem o compartilhamento de seus dados entre instituições que participam do Open Finance Brasil (OFB). Esses dados incluem informações cadastrais, detalhes de transações em contas e cartões de crédito, além de informações sobre produtos de crédito, investimentos e operações de câmbio.

Para esta fase, vários endpoints de consulta precisam ser fornecidos para que a instituição possa compartilhar os dados necessários e então ter acesso aos dados das outras instituições participantes. Uma boa documentação desses endpoints, com exemplos de casos de sucesso e falha, assim como o formato das mensagens, facilita no desenvolvimento dos conectores, uma vez que esses endpoints serão acessados com frequência pelas rotas. Documentar bem os casos de falhas dos endpoints é de grande ajuda para que uma boa resposta detalhada do erro possa ser retornada quando ocorra.

Abaixo vamos listar os dados necessários para cada um dos diferentes produtos que podem ser compartilhados. Vamos dar uma pequena descrição dos produtos, assim como as informações necessárias para cada caso em outras páginas. Essas páginas tem uma breve descrição dessas informações e mencionam se são obrigatórias ou opcionais para montar as requisições e respostas entre produto e instituição.

Vale ressaltar que a instituição não necessariamente irá ter todos os produtos previstos pelo OFB, portanto, a instituição só precisaria de um subconjunto dos endpoints que aqui vão ser descritos.

## Fase 2 - Dados cadastrais e transacionais

Na documentação do OFB temos a definição das APIs de **consentimento** e **recursos**, porém esses estão relacionados a manutenção do que o cliente da insituição de fato decide compartilhar, não sendo produtos disponíveis para serem compartilhados. Os produtos de fato estão abaixo.

### Dados Cadastrais

Dados cadastrais de clientes e de seus representantes, incluindo dados de identificação, de qualificação financeira, informações sobre representantes cadastrados e sobre o relacionamento financeiro do cliente com a instituição transmissora dos dados.
Possui segregação entre pessoa natural e pessoa jurídica.

Informações detalhadas sobre os dados necessários para este produto podem ser encontrados [página específica para dados cadastrais](dados_cadastrais.md).

### Cartão de Crédito

Informações de contas de pagamento pós-paga mantidas nas instituições transmissoras por seus clientes, incluindo dados como denominação, produto, bandeira, limites de crédito, informações sobre transações de pagamento efetuadas e faturas. Não possui segregação entre pessoa natural e pessoa jurídica.

Informações detalhadas sobre os dados necessários para este produto podem ser encontrados [página específica para cartão de crédito](dados_cartao_credito.md).

### Contas

Informações de contas de depósito à vista, contas de poupança e contas de pagamento pré-pagas mantidas nas instituições transmissoras por seus clientes, incluindo dados de identificação da conta, saldos, limites e transações. Não possui segregação entre pessoa natural e pessoa jurídica.

Informações detalhadas sobre os dados necessários para este produto podem ser encontrados [página específica para contas](dados_contas.md).

### Operações de crédito

No caso de operações de crédito o cliente efetua o compartilhamento por agrupamento de produtos ou seja, todas as modalidades de operações de crédito são compartilhadas escopo do open finance. Abaixo temos uma listagem das operações:

- Empréstimos
- Financiamento
- Adiantamneto a depositantes
- Creditórios Descontados

Informações detalhadas sobre os dados necessários para cada uma dessas operações podem ser encontrados [página específica para operações de crédito](dados_operacoes_credito.md).

### Investimentos

Os investimentos também são divididos em diferentes produtos. Abaixo tem-se uma lista dos produtos possíveis de investimento assim como o link leva ao documenta detalhado sobre os dados do produto em questão:

- [Renda fixa bancária](./dados_investimentos/dados_renda_fixa_bancaria.md)
- [Renda fixa crédito](./dados_investimentos/dados_renda_fixa_credito.md)
- [Renda variável](./dados_investimentos/dados_renda_variavel.md)
- [Títulos do tesouro direto](./dados_investimentos/dados_titulo_tesouro_direto.md)
- [Fundos de investimento](./dados_investimentos/dados_fundos_investimento.md)

Informações detalhadas sobre os dados necessários para este produto podem ser encontrados [página específica para investimentos](./dados_investimentos/README.md).

### Câmbio

Informações de operações de Câmbio realizadas nas instituições transmissoras por seus clientes, incluindo dados como informações da operação contratada, valor da operação em moeda nacional e moeda estrangeira, classificação da operação, forma de entrega, VET e, quando aplicável, valor a liquidar. Também serão compartilhados os eventos de alteração da operação, caso existam, com as informações modificadas. Não possui segregação entre pessoa natural e pessoa jurídica.

Informações detalhadas sobre os dados necessários para este produto podem ser encontrados na [página específica para câmbio](dados_cambio.md).
