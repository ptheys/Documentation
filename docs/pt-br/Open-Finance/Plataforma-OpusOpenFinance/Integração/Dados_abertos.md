---
layout: default
title: "Dados Abertos"
parent: "Integração da Plataforma"
nav_order: 1
---

# Introdução 

O perfil de dados abertos, ou fase 1 + 4A, corresponde aos dados públicos que as intituições participantes do Open Finance devem divulgar ao ecossistema. Para saber mais informações sobre o perfil de dados abertos, [veja aqui](../../Open-Finance-Brasil/PerfisOFB/Dados-abertos.html). 
O perfil de dados abertos também exige uma integração com o produto, entretanto funciona de maneira muito mais simples. A proposta do perfil de dados abertos é ter informações não sigilosas do participante divulgadas publicamente. Para tal, não se faz necessário uma integração super sofisticada.

## Integração

A integração do perfil de dados abertos não exige conexão com os sistemas de retaguarda do cliente. O que nós sugerimos é a construção de um arquivo json estático ou dinâmico para integrar ao produto. A integração é feita a partir da camada dos conetores e, portanto, cada uma das APIs regulatórias de dados abertos terá seu conector correspondente. Dessa forma, é necessário escrever um json para cada uma das APIs disponíveis. Claro, apenas os produtos que as instituições oferecem.

## APIs de dados abertos

### Canais de atendimento
A API de canais de atendimento disponibiliza quais as informações dos canais de atendimento da insituição, como:
1. Agências físicas
2. Canais de atendimento eletrônico
3. Canais de atendimento telefônico
4. Correspondentes bancários da IF
5. Terminais de autoatendimento

### Produtos
As APIs de produtos são referentes aos produtos que a instituição oferece, elas podem ser:
1. Contas
2. Empréstimos
3. Financiamentos
4. Direitos creditórios descontados (antecipação de recebíveis)
5. Adiantamento a depositantes (cheque especial)
6. Cartão de crédito
7. Investimento
8. Seguros
9. Credenciamento
10. Titulos de capitalização
11. Previdência
12. Câmbio

## Arquivo Json para integração

Como explicado no tópico integração, a integração é feita através do conector que pega os dados de um json estático ou dinâmico. Para construir esse arquivo, basta se apoiar nos campos de "response" esperados nas especificações da tabela abaixo. Uma vez que o arquivo foi construído e respeita todos os modelos dos produtos oferecidos pela instituição, é necessário construir o conector e plugá-lo ao produto. Tabela de especificações:

|API                               |Link Open API          |
|----------------------------------|:---------------------:|
|Canais de atendimento             |[Link][Channels]       |
|Contas                            |[Link][Accounts]       |
|Empréstimos                       |[Link][Loans]          |
|Financiamentos                    |[Link][Financings]     |
|Direitos Creditórios descontados  |[Link][Unarranged]     |
|Adiantamento a depositantes       |[Link][Inv-financings] |
|Cartão de crédito                 |[Link][Credit]         |
|Investimentos                     |[Link][Investments]    |
|Seguros                           |[Link][Insurance]      |
|Credenciamento                    |[Link][Acquiring]      |
|Títulos de capitalização          |[Link][Capitalization] |
|Previdência                       |[Link][Pension]        |
|Câmbio                            |[Link][Exchanges]      |

[Acquiring]: ../../../../swagger-ui/index.html?api=open-data-acquiring
[Accounts]: ../../../../swagger-ui/index.html?api=open-data-accounts
[Capitalization]: ../../../../swagger-ui/index.html?api=open-data-capitalization
[Channels]: ../../../../swagger-ui/index.html?api=open-data-channels
[Credit]: ../../../../swagger-ui/index.html?api=open-data-credit-cards
[Exchanges]: ../../../../swagger-ui/index.html?api=open-data-exchanges
[Financings]: ../../../../swagger-ui/index.html?api=open-data-financings
[Insurance]: ../../../../swagger-ui/index.html?api=open-data-insurance
[Investments]: ../../../../swagger-ui/index.html?api=open-data-investments
[Inv-financings]: ../../../../swagger-ui/index.html?api=open-data-invoice-financings
[Loans]: ../../../../swagger-ui/index.html?api=open-data-loans
[Pension]: ../../../../swagger-ui/index.html?api=open-data-pension
[Unarranged]: ../../../../swagger-ui/index.html?api=open-data-unarranged


