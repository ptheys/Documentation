# Documentação dos Conectores no OPUS Open Finance

Conectores são rotas definidas em Apache Camel que conectam endpoints de clientes (que geralmente é chamado de legado) ao produto da Opus que consegue integrar a instituição ao [Open Finance Brasil](https://openfinancebrasil.atlassian.net/wiki/spaces/OF/overview?homepageId=17367041) (OFB).

Se prevê que diferentes fases aconteçam durante o andamento do projeto do OFB. Até o momento, temos documentadas 4 diferentes fases. A fase 1 e 4A estão relacionadas ao compartilhamento de dados abertos das instituições financeiras. A fase 2 está relacionada ao compartilhamento de dados de cliente. A fase 3 está relacionada a serviços, principalmente a iniciação de pagamentos. E, por fim, a fase 4, dividida em A e B, possui dados abertos e de clientes relacionados a novos produtos como investimentos e câmbio.

Para participar do OFB, a instituição deve aderir ao princípio da reciprocidade. Isso significa que, no que se refere ao compartilhamento de dados (fases 2 e 4B), uma instituição que deseja receber dados (i.e. ser Receptora de dados) deve também ser capaz de compartilhar dados de seus clientes (i.e. ser Transmissora de dados). O mesmo princípio se aplica a serviços e pagamentos (fase 3). Assim, para iniciar um pagamento no ecossistema do OFB (i.e. ser Iniciador de Transação de Pagamento - ITP), a instituição deve também ser capaz de efetuar pagamentos (i.e. ser Detentora de contas) conforme as regras do OFB para outras instituições participantes. Para facilitar a participação como detentora e/ou transmissora a instituição deve implementar um certo conjunto de conectores que integram o sistema legado existente com a solução do Opus Open Finance. Para mais detalhes sobre as fases, pode-se acessar a [documentação oficial](https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/17367659/Especifica+es+de+APIs).

Os conectores, além de serem responsáveis por mapear as funcionalidades esperadas do Open Finance nos pontos corretos do legado (endpoints), são responsáveis por fazer as alterações necessárias nesses dados para que a API da instituição consiga conversar com a API do OFB, representada no caso pelo produto da Opus.

A documentação do OFB possui as especificações das APIs em questão, possuindo 3 grandes grupos. Ela inclui tanto payloads de requisição quanto de resposta esperados e bem definidos para os diferentes cenários. O formato adotado pelo OFB se assemelha àquele que o produto da Opus utiliza para suas requisições e respostas.

## [Dados Abertos](https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/17367790/Dados+Abertos+-+DA) (Open Data)

Os dados abertos estão relacionados a dados da instituição financeira que serão muitas vezes um conjunto de dados fixos que pode ser fornecido uma vez pela instituição e prontamente entregue para o OFB pelo produto sem nem ter a necessidade de acessar o legado.

Mais sobre as rotas Camel de dados abertos podem ser encontrados na Documentação Plataforma OPUS Open Finance, no arquivo `integração-plugin/open-data/readme.md`. Nessa mesma parte da documentação estão as especificações técnicas das rotas, ou seja, o que o produto envia e espera receber.

## [Dados de clientes](https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/17369300/Dados+do+Cliente+-+DC)

Clientes de instituições participantes do OFB podem solicitar o compartilhamento de dados entre elas. Esses dados incluem informações cadastrais, detalhes de transações em contas e cartões de crédito, além de informações sobre produtos de crédito, investimentos e operações de câmbio.

Os conectores refletem o conjunto de APIs do OFB relativos aos dados de cliente listados acima. A função deles é realizar essa conexão entre os pontos do legado que possuem as informações que podem ser compartilhadas e o produto que de fato possui as regras do OFB e garante que essas informações sejam de fato compartilhadas quando realmente requeridas.

Mais sobre as rotas Camel de dados de clientes podem ser encontradas na Documentação Plataforma OPUS Open Finance, no arquivo `integração-plugin/financial-data/readme.md`. Nessa mesma parte da documentação estão as especificações técnicas das rotas, ou seja, o que o produto envia e espera receber.

## [Serviços](https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/17375910/SV+Inicia+o+de+Pagamentos)

O conjunto de APIs de serviço do OFB visa à criação de consentimentos e iniciação de pagamentos via PIX. Para realizar uma iniciação de pagamento, existe a necessidade de obter o consentimento prévio do cliente, levando a API de consentimentos também ser utilizada aqui.

Para pagamentos, existem atualmente rotas para: criar a iniciação do pagamento (POST) depois de já terem o consentimento, recuperar iniciações de pagamentos (GET) já realizadas, cancelar a iniciação de pagamento (PATCH), descobrir e listar contas e validar pagamentos.

Lembrando que esse pagamento será apenas iniciado pelo OFB e cabe à instituição de fato realizar ou agendar o pagamento e retornar o que foi feito para o produto da Opus. Os conectores aqui podem auxiliar fazendo diversas transformações nos dados para respeitarem as APIs de ambos os lados do produto e consequentemente do OFB e do legado da instituição.

Atualmente, o OFB permite pagamentos únicos imediatos ou agendados e agendamentos recorrentes (diferenças entre os tipos de pagamento podem ser encontradas nesta [documentação oficial](https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/213876817/Agendamento+Recorrente)). Aqui precisamos deixar claro que os payloads enviados pelo produto da Opus podem diferir dos que são especificados pelo Open Finance. A referência técnica desses esquemas pode ser encontrada na pasta `integração-plugin/schemas/v3/payment`. Esse payloads podem ser utilizados para diferenciar esses tipos de pagamento e usar pontos diferentes do legado caso necessário.

Os conectores são responsáveis por corretamente conectar os endpoints do produto com os endpoints corretos do legado que possuem as informações necessárias para realizar a iniciação de pagamento. Além disso, os conectores podem fazer pequenas transformações nos dados passados para respeitar formatos tanto do produto da Opus quanto formatos esperados da API do legado. Por fim, os conectores podem fazer as mudanças necessárias, omitindo ou adicionando campos das requisições e repostas, para que ambas estejam de acordo com aquilo esperado em ambos os lados da comunicação.

Mais sobre as rotas Camel de dados de clientes podem ser encontradas na Documentação Plataforma OPUS Open Finance, no arquivo `integração-plugin/payments/readme.md`. Nessa mesma parte da documentação estão as especificações técnicas das rotas, ou seja, o que o produto envia e espera receber.

## Sobre o repositório

Este repositório contém documentos que ajudam a entender os conectores, tanto para o desenvolvimento dos mesmos quanto para entender o que fazem. Aqui temos documentos explicando de forma geral o que são os conectores, recomendações para o desenvolvimento dos mesmos e dados necessários para seu funcionamento correto.

## Índice das Documentações

1. Campos esperados do legado
    1. Para dados abertos
    1. Para pagamentos
        1. Documentação de campos para listagem de contas
        1. Documentação de campos para validação de pagamentos
        1. Documentação de campos para operações de pagamentos
    1. [Para compartilhamento de dados](./Campos/Dados%20do%20Cliente/Sobre_compartilhamento_e_produtos.md)
1. Auxilio no desenvolvimento dos conectores
    1. [Conectores de Iniciação de Pagamento](./Desenvolvimento/Sobre_rotas_de_pagamento.md)
