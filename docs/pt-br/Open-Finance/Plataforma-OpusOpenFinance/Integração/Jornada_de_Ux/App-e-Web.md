---
layout: default
title: "Canais de atendimento"
parent: "Integração com a Plataforma"
nav_order: 3
has_children: true
---

## Introdução

Quando um pedido de criação de consentimento vindo de outra instituição financeira é recebido pela plataforma - seja um consentimento para compartilhamento de dados ou para a realização de um pagamento - a plataforma aciona indiretamente o aplicativo móvel do cliente final ou o Internet Banking Web, e esses artefatos devem estar preparados para tratar esse acionamento.

Para garantir que o canais de atendimento estejam preparados, é necessário cumprir realizar as seguintes etapas:
1. Construir as telas da jornada de experiência do usuário de acordo com os canais de autenticação existentes na insituição. São eles: Aplicativo móvel e internet banking.
2. Atender, durante a construção das telas, os requisitos apresentados pelo Banco Central para a jornada de consentimento e, também, a gestão do consentimento.
3. Realizar a integração das telas com o Opus Open Finance.

A seguir, vamos explorar cada um desses aspectos:

## Canais de atendimento

Os seguintes canais de atendimento são possíveis para o Open Finance:
- Aplicativo mobile
- Internet Banking
- Handoff  
> Quando a instituição financeira não oferece um canal Web para seu cliente (e o pedido de criação de consentimento veio através da Web), deve ser exibida uma tela de *handoff*. Os exemplos do fluxo de handoff podem ser encontrados no [guia de experiência do usuário](https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/17378535/Guia+de+Experi+ncia+do+Usu+rio).

## Requisitos de UX

A jornada de experiência do usuário deve respeitar uma série de requisitos regulatórios, de maneira similar a como funciona o Pix hoje em dia. Existem duas frentes que precisam ser construídas para a jornada de UX, são elas:

- **Jornada de consentimento**

A [jornada de consentimento](../../../Open-Finance-Brasil/JornadaConsentimento/OFB-JornadaConsentimento.md) representa a etapa que o usuário correntista terá que autorizar o consentimento. A jornada é bem semelhante para o pilar de compartilhamento de dados ou pagamentos, entretanto, as mesmas variam em algumas funcionalidades e particularidades que podem alterar essa jornada. Todos os detalhes estão escritos no [guia de experiência do usuário](https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/17378535/Guia+de+Experi+ncia+do+Usu+rio).

- **Gestão do consentimento**

A gestão do consentimento representa a possibilidade de um usuário correntista acessar seus consentimentos de compartilhamento de dados ou pagamentos. Essa gestão permite a visualização do histórico completo de consentimentos e o poder de revogar/estender um consentimento. Todos os detalhes da gestão dos consentimentos pode ser encontrato no mesmo material do [guia de experiência do usuário](https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/17378535/Guia+de+Experi+ncia+do+Usu+rio).

## Integração com os canais de autenticação

### App

Para realizar a integração da jornada de experiência do usuário com a Plataforma Opus Open Finance, [acesse aqui](./consentimento/app2as/readme.md).

### Internet Banking

O canal do internet banking é a conta digital do correnstista acessada via web. Para realizar a integração da jornada de experiência do usuário com a Plataforma Opus Open Finance, [acesse aqui](./consentimento/web2as/readme.md).