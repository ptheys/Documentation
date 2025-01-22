# Dados para endpoints de contas

Este documento descreve as informações que o conector precisa acessar para possibilitar o compartilhamento de dados de **contas**.

O nome dos dados e valores enumerados (enums) apresentados a seguir são apenas exemplos. Sendo assim, **para os conectores desenvolvidos pela OPUS, solicitamos que nos envie um documento especificando quais dados e enums do legado correspondem aos listados abaixo**.

> 🛈 **Nota: Referência para o desenvolvimento dos conectores**: Esquemas e exemplos de entradas e saídas dos conectores compartilhamento de dados de **contas** estão presentes no diretório `integração-plugin/schemas/v3/financial-data/accounts` da Documentação Plataforma OPUS Open Finance. Por outro lado, o formato final de fato compartilhado pelo OPUS Open Finance será conforme especificado na [documentação Oficial do Open Finance Brasil](https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/512721055/Informa+es+T+cnicas+-+DC+Contas+-+v2.4.0).

## Listagem de contas consentidas pelo cliente

Lista de contas depósito à vista, poupança e pagamento pré-pagas mantidas pelo cliente na instituição transmissora. Os dados de cada conta que precisam ser fornecidos são os seguintes:

- **`brandName`**: Nome da Marca reportada pelo participante no Open Finance
- **`companyCnpj`**: Número completo do CNPJ da instituição responsável pelo Cadastro - o CNPJ corresponde ao número de inscrição no Cadastro de Pessoa Jurídica
- **`type`**: Tipo da conta. Exemplos:
    - CONTA_DEPOSITO_A_VISTA
    - CONTA_POUPANCA
    - CONTA_PAGAMENTO_PRE_PAGA
- **`compeCode`**: Código identificador atribuído pelo Banco Central do Brasil às instituições participantes do STR (Sistema de Transferência de reservas)
- **`branchCode`**: Código da Agência detentora da conta
- **`number`**: Número da conta
- **`checkDigit`**: Dígito da conta
- **`accountId`**: Identifica de forma única a conta do cliente, mantendo as regras de imutabilidade dentro da instituição transmissora

## Dados de identificação da conta

Obtém os dados de identificação da conta de depósito à vista, poupança ou pagamento pré-paga identificada por **`accountId`** mantida pelo cliente na instituição transmissora. Os dados obtidos aqui devem ser possíveis de se recuperar para cada conta listada na seção anterior. Os dados que precisam ser enviados são os seguintes:

- **`compeCode`**: Código identificador atribuído pelo Banco Central do Brasil às instituições participantes do STR (Sistema de Transferência de reservas)
- **`branchCode`**: Código da Agência detentora da conta
- **`number`**: Número da conta
- **`checkDigit`**: Dígito da conta
- **`type`**: Tipo da conta. Exemplos:
    - CONTA_DEPOSITO_A_VISTA
    - CONTA_POUPANCA
    - CONTA_PAGAMENTO_PRE_PAGA
- **`subtype`**: Subtipo de conta. Exemplos:
    - INDIVIDUAL
    - CONJUNTA_SIMPLES
    - CONJUNTA_SOLIDARIA
- **`currency`**: Moeda referente ao valor da transação

## Saldo de contas

Obtém os saldos da conta de depósito à vista, poupança ou pagamento pré-paga identificada por **`accountId`** mantida pelo cliente na instituição transmissora. Os dados obtidos aqui devem ser possíveis de se recuperar para cada conta listada na primeira seção do documento. Os dados que precisam ser enviados são os seguintes:

- **`availableAmount`**: Saldo disponível para utilização imediata. No caso de conta de depósito a vista, sem considerar cheque especial e investimentos atrelados a conta
- **`blockedAmount`**: Saldo bloqueado, não disponível para utilização imediata, por motivo de bloqueio apresentado para o cliente nos canais eletrônicos
- **`automaticallyInvestedAmount`**: Saldo disponível com aplicação automática - corresponde a soma do saldo disponível acrescido do valor obtido a partir da aplicação automática
- **`updateDateTime`**: Data e hora da última atualização do saldo. É esperado que a instituição informe a última vez que capturou o saldo para compartilhamento no Open Finance

## Listagem de transações e transações recentes

Obtém lista de transações de uma conta identificada por **`accountId`**. Aqui é necessário ter a possibilidade de filtrar a lista de transações recuperadas, proporcionando as listagens de todas as faturas dos últimos 12 meses até 12 meses no futuro e últimos 7 dias até 12 meses no futuro. Os dados que precisam ser retornados para cada transação são:

- **`transactionId`**: Código ou identificador único prestado pela instituição que mantém a conta para representar a transação individual
- **`completedAuthorisedPaymentType`**: Indicador da transação. Exemplos:
    - TRANSACAO_EFETIVADA
    - LANCAMENTO_FUTURO
    - TRANSACAO_PROCESSANDO
- **`creditDebitType`**: Indicador do tipo de lançamento, podendo ser crédito ou débito
- **`transactionName`**: Literal usada na instituição financeira para identificar a transação
- **`type`**: O campo deve classificar a transação. Exemplos:
    - TED
    - DOC
    - PIX
    - TRANSFERENCIA_MESMA_INSTITUICAO
    - BOLETO
    - CONVENIO_ARRECADACAO
    - PACOTE_TARIFA_SERVICOS
    - TARIFA_SERVICOS_AVULSOS
    - FOLHA_PAGAMENTO
    - DEPOSITO
    - SAQUE
    - CARTAO
    - ENCARGOS_JUROS_CHEQUE_ESPECIAL
    - RENDIMENTO_APLIC_FINANCEIRA
    - PORTABILIDADE_SALARIO
    - RESGATE_APLIC_FINANCEIRA
    - OPERACAO_CREDITO
    - OUTROS
- **`transactionAmount`**: Valor da transação e moeda
- **`transactionDateTime`**: Data e hora original da transação
- **`partieCnpjCpf`**: Identificação da pessoa envolvida na transação
- **`partieCompeCode`**: Código identificador atribuído pelo Banco Central do Brasil às instituições participantes do STR (Sistema de Transferência de reservas) referente à pessoa envolvida na transação
- **`partieBranchCode`**: Código da Agência detentora da conta da pessoa envolvida na transação
- **`partieNumber`**: Número da conta da pessoa envolvida na transação
- **`partieCheckDigit`**: Dígito da conta da pessoa envolvida na transação

## Limites de conta

 Obtém os limites da conta de depósito à vista, poupança ou pagamento pré-paga identificada por accountId mantida pelo cliente na instituição transmissora. No caso da conta não ter um limite, basta enviar um objeto vazio. Os dados obtidos aqui devem ser possíveis de se recuperar para cada conta listada na primeira seção do documento. Os dados que precisam ser enviados são os seguintes:

- **`overdraftContractedLimit`**: Valor do limite contratado do cheque especial
- **`overdraftUsedLimit`**: Valor utilizado total do limite do cheque especial e o adiantamento a depositante
- **`unarrangedOverdraftAmount`**: Valor de operação contratada em caráter emergencial para cobertura de saldo devedor em conta de depósitos à vista e de excesso sobre o limite pactuado de cheque especial
