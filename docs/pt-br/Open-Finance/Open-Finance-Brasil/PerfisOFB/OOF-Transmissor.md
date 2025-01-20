---
layout: default
title: "Transmissor de Dados"
parent: "Perfis de participação"
nav_order: 2
---

## Perfil Transmissor de Dados

## Introdução

O perfil de **Transmissora de Dados** representa a instituição que recebe solicitações de compartilhamento de dados de um **Receptor de Dados**. Este perfil na **Plataforma Opus Open Finance** atende a todas as exigências regulatórias estabelecidas pelo Banco Central.

---

## Ecossistema Open Finance - Transmissor de Dados

As **Transmissoras de Dados** são instituições onde os clientes mantêm contas que podem ser acessadas no contexto do Open Finance para atender a solicitações de compartilhamento de dados. Isso significa que, dentro do ecossistema regulado, uma instituição homologada como **Receptor de Dados** pode iniciar solicitações de compartilhamento para a **Transmissora de Dados**.

---

## Dados Compartilhados

Quando ocorre um compartilhamento, o ecossistema é preparado para fornecer as seguintes informações:

### **Dados cadastrais do correntista**

- Dados cadastrais

### **Conta Corrente**

- Extrato
- Saldo

### **Cartão de crédito**

- Fatura
- Limites
- Transações

### **Operações de crédito**

- Empréstimos
- Financiamentos
- Adiantamento a depositantes (cheque especial)
- Direitos creditórios descontados (antecipação de recebíveis)

### **Câmbio**

- Operações de câmbio

### **Investimentos**

- Renda fixa bancária (CDB, LCI, LCA - protegidos pelo FGC)
- Renda fixa crédito (CRI, CRA, Debenture)
- Renda variável
- Títulos do tesouro direto
- Fundos de investimento

**Nota:** É responsabilidade do **Transmissor de Dados** fornecer todas as informações listadas acima que são oferecidas pela instituição.

---

## Jornada de Consentimento

O processo de autorização para compartilhamento de dados segue uma **jornada completa de consentimento**. Para mais informações, clique [aqui](../JornadaConsentimento/OFB-JornadaConsentimento.md)

---

## Roadmap regulatório

### Funcionalidades já disponíveis

- Consulta de todos os dados listados acima.

### Funcionalidades previstas

- Sistemática de notificações: existe um desejo de aumentar a eficiência do compartilhamento de dados. Atualmente, para saber se um cliente realizou novas transações em um determinado período de tempo é necessário explicitamente realizar uma chamada à instituição financeira transmissora de dados periodicamente. A sistemática de notificações deverá permitir ao receptor de dados indicar ao transmissor quais os clientes - dos quais ele já possui consentimento de compartilhamento de dados válido - ele gostaria de monitorar. Dessa forma, periodicamente - provavelmente uma vez por dia - o transmissor poderá enviar diretamente ao receptor as eventuais transações ou alterações de dados cadastrais realizadas pelo cliente. Esse mecanismo certamente economizará um grande número de chamadas desnecessárias, reduzindo o custo para todos os participantes do ecossistema.

O [portal do desenvolvedor](https://openfinancebrasil.atlassian.net/wiki/spaces/DraftOF/calendars) também oferece um calendário com as próximas entregas.

## Utilização do produto

Para utilizar a solução de Transmissor da Dados, é necessário concluir as seguintes etapas:
1. Completar todo o processo de [implantação](../../Plataforma-OpusOpenFinance/Implantação/OOF-Implantação.md).
2. Construir a experiência do usuário para aplicativo e internet banking (se houver). [O guia de experiência do usuário](https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/17378535/Guia+de+Experi+ncia+do+Usu+rio) dá mais detalhes sobre o fluxo.
3. Contruir a camada de integração com os sistemas de retaguarda - de acordo com os produtos oferecidos pela instituição para seus clientes. (listados acima)
