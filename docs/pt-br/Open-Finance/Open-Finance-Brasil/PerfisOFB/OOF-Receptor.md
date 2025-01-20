---
layout: default
title: "Receptor de Dados"
parent: "Perfis de participação"
nav_order: 4
---

## Receptor de Dados

O Receptor de Dados corresponde a um perfil do Open Finance que tem autoridade para requisitar dados de outras instituições que são Transmissoras de Dados. De acordo com a regulação do Open Finance, existem diversos produtos listados pelas Transmissoras que podem ser recolhidos pela Receptora.

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

> As Transmissoras apenas disponibilizam os produtos que oferecem para seus clientes

---

## Jornada de Consentimento

O processo de autorização para compartilhamento de dados segue uma **jornada completa de consentimento**. Para mais informações, clique [aqui](../../Open-Finance-Brasil/JornadaConsentimento/OFB-JornadaConsentimento.html)

> Além disso, o [diagrama de sequência](./consent-sequence.png) ilustra o fluxo de consentimento de acordo com cada [API oferecida pelo produto](./oas-opustpp-pagamentos.yaml);

---

## Certificação obrigatória

Para uma instituição se tornar Receptor de Dados, é necessário passar pelos testes da certificação OpenID RP - *Relying parties*. Mais detalhes sobre a certificação podem ser encontrados [aqui](../../Open-Finance-Brasil/OFB-Certificações.html)

---

## Utilização

Para iniciar a utilização do software, existem alguns pré-requisitos:

1. Completar o processo de [setup (implantação)](../Implantação/OOF-Implantação.html)

2. Ter completado toda a homologação do perfil de Transmissor de Dados.

3. Criar a experiência de usuário para que a jornada de consentimento seja possível para os clientes. O Guia de experiência do usuário traz mais detalhes sobre essa jornada.  
> - Para Recepção, não há necessidade de construir a camada de integração.  
> - Para a experiência ficar completa, é necessário realizar chamadas conforme as APIs regulatórias do Open Finance, as quais estão descritas no nosso produto. O arquivo pode ser [encontrado aqui](./oas-opustpp-dados.yaml).  
> - Para avaliar o guia de experiência do usuário, <a href=https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/17378535/Guia+de+Experi+ncia+do+Usu+ri target=_blank>clique aqui</a>.
