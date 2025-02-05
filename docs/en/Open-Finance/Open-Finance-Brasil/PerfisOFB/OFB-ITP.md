---
layout: default
title: "Payment Transaction Initiator (ITP)"
parent: "Participation Profiles-"
nav_order: 5
has_children: true
lang: "en"
alternate_lang: "/docs/pt-br/Open-Finance/Open-Finance-Brasil/PerfisOFB/OFB-ITP/"
---

# Payment Transaction Initiator

The Payment Transaction Initiator (ITP) is the Open Finance profile authorized to perform payment initiations within the ecosystem. The ITP will initiate consent journeys (for making payments) in participating Open Finance institutions that are Account Holders. This profile enables a range of new use cases, as the ITP does not need to be the custodian of the money at any point during the transaction and also does not need to be the owner of the bank account that will settle the payment.

---

## Payment Methods in Open Finance

Currently, the payment methods foreseen in Open Finance include:

- **Pix**
- **Boleto*** 
- **Debit in Account*** 
- **TED/TEF*** 
- **Credit Card*** 

*The items marked with an asterisk are not yet available in Open Finance and have no scheduled release date.*

---

## Consent Journey

The authorization process to make payments is done through a **complete consent journey**. More details can be found [here](../JornadaConsentimento/OFB-JornadaConsentimento.html).

> Additionally, the [sequence diagram](../../Plataforma-OpusOpenFinance/ITP/images/consent-sequence.png) illustrates the consent flow according to each [API offered by the product][API-pagamentos];

---

## Regulatory Roadmap

### Available Features

- **Instant Pix payment**
- **Scheduled Pix payment**
- **Recurring scheduled payments**
- **Automatic transfers between accounts of the same account holder** (known as *sweeping accounts*)

### Planned Features

- **Batch payments (1:n)**
- **Payments without redirection** (no redirection to the Account Holder from the user's perspective)
- **Recurring payments** (Variable Recurring Payment - VRP)
- **Pix via proximity**

The [developer portal](https://openfinancebrasil.atlassian.net/wiki/spaces/DraftOF/calendars) offers a calendar with upcoming deliveries.

---

## Opus Open Finance Platform

To start using the software, there are some prerequisites:

1. Complete the [setup (deployment)](../../Plataforma-OpusOpenFinance/Implantação/OOF-Implantação.html);

2. Complete the entire certification of the Account Holder profile. (We recommend evaluating this criterion with your institution’s compliance department);

3. Create the user experience so that the consent journey is possible for customers. The user experience guide provides more details about this journey.

4. Complete the entire [ITP onboarding process](../PerfisOFB/OnbordingITP.html)

---
> For ITP, there is no need to build the integration layer.
---
> The **Opus Open Finance Platform** payment initiation module offers APIs for building applications. Descriptions of these APIs can be found [here (payments)][API-pagamentos] and [here (automatic payments)][API-pagamentos-automáticos].  
---
> To review the user experience guide, [click here][GuiaUX]

[GuiaUX]: https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/17378535/Guia+de+Experi+ncia+do+Usu+ri
[API-pagamentos]: ../../../../swagger-ui/index.html?api=OAS-ITP-pagamentos
[API-pagamentos-automáticos]: ../../../../swagger-ui/index.html?api=OAS-ITP-pagamentos-automaticos
