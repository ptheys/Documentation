# Dados para endpoints de investimentos

Este documento descreve as informações que o conector precisa acessar para possibilitar o compartilhamento de dados de **investimentos**.

O nome dos dados e valores enumerados (enums) apresentados a seguir são apenas exemplos. Sendo assim, **para os conectores desenvolvidos pela OPUS, solicitamos que nos envie um documento especificando quais dados e enums do legado correspondem aos listados abaixo**.

> 🛈 **Nota: Referência para o desenvolvimento dos conectores**: Esquemas e exemplos de entradas e saídas dos conectores compartilhamento de dados de **investimentos** estão presentes no diretório `integração-plugin/schemas/v3/financial-data/` da Documentação Plataforma OPUS Open Finance. Por outro lado, o formato final de fato compartilhado pelo OPUS Open Finance será conforme especificado na [documentação Oficial do Open Finance Brasil](https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/103284839/DC+APIs+-+Investimentos).

Os investimentos possuem 5 diferentes sub-modalidades. Os dados diferem bastante para cada endpoint então teremos um arquivo específico para cada sub-modalidade:

- [Renda Fixa Bancária](dados_renda_fixa_bancaria.md)
- [Renda Fixa Crédito](dados_renda_fixa_credito.md)
- [Renda Variável](dados_renda_variavel.md)
- [Título de Tesouro Direto](dados_titulo_tesouro_direto.md)
- [Fundos de Investimento](dados_titulo_investimento.md)
