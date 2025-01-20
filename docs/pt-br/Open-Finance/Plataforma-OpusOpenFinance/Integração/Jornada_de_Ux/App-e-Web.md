---
layout: default
title: "Autenticação"
parent: "Integração da Plataforma"
nav_order: 3
has_children: true
---

## Autenticação do usuário

Quando um pedido de criação de consentimento vindo de outra instituição financeira é recebido pela plataforma - seja um consentimento para compartilhamento de dados ou para a realização de um pagamento - a plataforma aciona indiretamente o aplicativo móvel do cliente final ou o Internet Banking Web, e esses artefatos devem estar preparados para tratar esse acionamento.

## Requisitos de UX

A jornada de experiência do usuário deve respeitar uma série de requisitos regulatórios, assim como o pix é hoje. Existem duas frentes que precisam ser construídas para a jornada de UX, são elas:

1. **Jornada de consentimento**

A [jornada de consentimento](../../../Open-Finance-Brasil/JornadaConsentimento/OFB-JornadaConsentimento.md) representa a etapa que o usuário correntista terá que iniciar ou autorizar o consentimento. A jornada é bem semelhante para o pilar de compartilhamento de dados ou pagamentos. Existem algumas funcionalidades e particularidades de cada pilar do Open Finance que podem alterar essa jornada. Todos os detalhes estão escritos no [guia de experiência do usuário](https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/17378535/Guia+de+Experi+ncia+do+Usu+rio).

2. **Gestão do consentimento**

A gestão do consentimento representa a possibilidade de um usuário correntista acessar seus consentimentos de compartilhamento de dados ou pagamentos. Essa gestão permite a visualização do histórico completo de consentimentos e o poder de revogar/estender um consentimento. Todos os detalhes da gestão dos consentimentos pode ser encontrato no mesmo material do [guia de experiência do usuário](https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/17378535/Guia+de+Experi+ncia+do+Usu+rio).

## Canais de autenticação

### App

O canal do aplicativo é a conta digital mobile do correnstista. Para realizar a integração da jornada de experiência do usuário com a Plataforma Opus Open Finance, [acesse aqui](./consentimento/app2as/readme.md).

### Internet Banking

O canal do internet banking é a conta digital do correnstista acessada via web. Para realizar a integração da jornada de experiência do usuário com a Plataforma Opus Open Finance, [acesse aqui](./consentimento/web2as/readme.md).

> Muitas instituições não oferecem internet banking. Dessa forma, é necessário implementar o handoff.

### Handoff

Quando a instituição financeira não oferece um canal Web para seu cliente (e o pedido de criação de consentimento veio através da Web), deve ser exibida uma tela de *handoff*. Os exemplos do fluxo de handoff podem ser encontrados no [guia de experiência do usuário](https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/17378535/Guia+de+Experi+ncia+do+Usu+rio).
