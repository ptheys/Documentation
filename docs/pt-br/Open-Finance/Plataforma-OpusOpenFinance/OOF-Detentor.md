---
layout: default
title: "Perfil Detentor de Conta"
parent: "Opus Open Finance"
nav_order: 2
---

## Introdução

O perfil de **Detentora de Conta** representa a instituição que recebe solicitações de pagamento de um **Iniciador de Transação de Pagamento (ITP)**. Este perfil na **Plataforma Opus Open Finance** é responsável por atender todas as exigências regulatórias estabelecidas pelo Banco Central.

---

## Ecossistema Open Finance - Detentor de Conta

As Detentoras de Contas são as instituições onde os clientes possuem contas que podem ser acessadas no contexto do Open Finance para processar iniciações de pagamento. Uma vez homologada como ITP, a instituição poderá iniciar solicitações de pagamento para uma Detentora de Conta dentro do ambiente regulado do Open Finance.

---

## Meios de Pagamento no Open Finance

Atualmente, os meios de pagamento previstos no Open Finance incluem:

- **Pix**
- **Boleto*** 
- **Débito em Conta***
- **TED/TEF***
- **Cartão de Crédito***

*Os itens marcados com asterisco ainda não estão disponíveis no Open Finance e não possuem previsão de entrada.*

---

## Jornada de Consentimento

O processo de autorização para efetuar pagamentos é feito por meio de uma **jornada completa de consentimento**. Mais detalhes podem ser encontrados [aqui](../Open-Finance-Brasil/JornadaConsentimento/OFB-JornadaConsentimento.html).

---

## Roadmap Regulatório

### Funcionalidades já disponíveis:
- **Pagamento Pix imediato**
- **Pagamento Pix agendado**
- **Recorrência de pagamentos agendados**
- **Transferências automáticas entre contas de mesma titularidade** (conhecidas como *sweeping accounts*)

### Funcionalidades previstas:
- **Pagamentos em lote (1:n)**
- **Pagamentos sem redirecionamento** (ausência do redirecionamento para a Detentora de Conta na perspectiva do usuário)
- **Pagamentos recorrentes** (Variable Recurring Payment - VRP)
- **Pix por aproximação**

O [portal do desenvolvedor](https://openfinancebrasil.atlassian.net/wiki/spaces/DraftOF/calendars) oferece um calendário com as próximas entregas.

---

## APIs Regulatórias

### APIs Vigentes:
| **Descrição**                         | **Link para o Portal do Desenvolvedor**                                                                                           |
|---------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| **Iniciação de Pagamento**            | [Acesse aqui](https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/17375943/SV+API+-+Pagamentos)                       |
| **Iniciação de Pagamentos Automáticos** | [Acesse aqui](https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/198410569/SV+API+-+Pagamentos+Autom+ticos)         |
| **Jornada sem Redirecionamento**      | [Acesse aqui](https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/141557761/SV+API+-+Pagamentos+sem+Redirecionamento)|

Para explorar cada API regulatória, [clique aqui](https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/17367659/Especifica+es+de+APIs).
