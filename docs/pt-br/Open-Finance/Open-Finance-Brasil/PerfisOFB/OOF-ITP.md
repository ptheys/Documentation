---
layout: default
title: "ITP"
parent: "Perfis de participação"
nav_order: 5
has_children: true
---

## Iniciador de Transação de Pagamentos

O Iniciador de Transação de Pagamento (ITP) é o perfil do Open Finance autorizado para realizar iniciações de pagamento no ecossistema. O ITP iniciará jornadas de consentimento (para realização de pagamentos) em instituições participantes do Open Finance que são detentores de Conta. Esse perfil possibilita uma série de novos casos de uso, pois o ITP não precisa ser custodiante do dinheiro em nenhum momento durante a transação e, também, não precisa ser o dono da conta corrente que fará a liquidação do pagamento.

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

O processo de autorização para efetuar pagamentos é feito por meio de uma **jornada completa de consentimento**. Mais detalhes podem ser encontrados [aqui](../../Open-Finance-Brasil/JornadaConsentimento/OFB-JornadaConsentimento.html).

> Além disso, o [diagrama de sequência](./consent-sequence.png) ilustra o fludo de consentimento de acordo com cada [API oferecida pelo produto](./oas-opustpp-pagamentos.yaml);

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

## Utilização

Para iniciar a utilização do software, existem alguns pré-requisitos:
1. Completar o processo de [setup (implantação)](../../Visão-geral/Implantação/readme.md)

> Para ITP, não há necessidade de construir a camada de integração.

2. Ter completado toda a homologação do perfil de Detentor de Conta. (recomendamos a avaliação desse critério com o compliance de sua instituição)

3. Criar a experiência de usuário para que a jornada de consentimento seja possível para os clientes. O Guia de experiência do usuário traz mais detalhes sobre essa jornada.

> Para a experiência ficar completa, é necessário realizar chamadas conforme as APIs regulatórias do Open Finance, as quais estão descritas no nosso produto. O arquivo pode ser [encontrado aqui (pagamentos)](./oas-opustpp-pagamentos.yaml) e [aqui (pagamentos automáticos)](./oas-opustpp-pagamentos-automaticos.yaml).  
> Para avaliar o guia de experiência do usuário, [clique aqui](https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/17378535/Guia+de+Experi+ncia+do+Usu+rio)

4. Completar todo o processo de [onboarding de ITP](../../Visão-geral/OnboardingITP/readme.md)