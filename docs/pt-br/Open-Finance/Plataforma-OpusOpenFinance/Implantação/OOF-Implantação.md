---
layout: default
title: "implantação da Plataforma Opus Open Finance"
parent: "Opus Open Finance"
nav_order: 7
---
## Introdução

Para começar a utilizar o **Opus Open Finance**, é necessário passar pelo processo de implantação. A equipe da Opus acompanha todo o processo para garantir que a integração com os sistemas do cliente seja ágil e eficiente.

Durante a implantação, um **Delivery Manager** do time da Opus é designado para gerenciar o processo de ponta a ponta, mantendo o contato contínuo com o cliente. Após a implantação, esse **Delivery Manager** ou alguém de sua equipe será o ponto focal para o dia a dia do relacionamento.

---

## Roadmap de Implantação

![Roadmap](./images/implantação.png)

### 1. **Kickoff**

- Apresentação do plano de projeto com detalhamento de atividades e cronograma.
- Definição da equipe necessária para cada etapa do processo.
- Introdução à equipe de implantação.

---

### 2. **Configuração dos Ambientes**

- Provisionamento dos ambientes:
  - Desenvolvimento
  - Homologação
  - Produção
- Configuração do **Opus Open Finance** nos ambientes.
- Configuração do diretório de participantes **sandbox**.

---

### 3. **Certificação OpenID**

- Execução de testes para validação do ambiente de homologação.
- Preparação das evidências para envio à OpenID ([certificações RP e OP](../Conceitos-fundamentais-Open-Finance/Certificações/readme.md)).
- Efetuação do pagamento da taxa de certificação.
- Publicação da instituição no [site oficial da OpenID](https://openid.net/certification/#FAPI_OPs).

---

### 4. **Integração das Telas**

- Construção das telas da [jornada de consentimento](../Conceitos-fundamentais-Open-Finance/JornadaConsentimento/readme.md):
  - Para web, aplicativo e handoff (caso necessário).
  - De acordo com o [guia de experiência do usuário](https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/17378535/Guia+de+Experi+ncia+do+Usu+rio).
- Execução de testes da jornada de consentimento.
- Integração completa da jornada nos canais da instituição.

---

### 5. **Layer de Integração**

- Integração dos sistemas legados da instituição com o produto, de acordo com o [perfil de participação escolhido](../Conceitos-fundamentais-Open-Finance/PerfisOFB/readme.md).
- Construção do layer de integração adaptado à retaguarda da instituição.
- **Nota:** Não é necessário adaptar os sistemas legados, apenas mapeá-los. A camada de integração abstrai as formatações necessárias.

---

### 6. **Migração**

- Migração de consentimentos e DCRs para a nova base do produto.
- Necessária apenas para instituições que já participam do Open Finance com outra solução ou tecnologia própria.

---

### 7. **Configurações Finais**

- Testes da jornada completa com layer de integração e telas prontas.
- Execução de testes funcionais.
- Configuração do diretório de participantes de produção.

---

### 8. **Certificados Digitais**

- Aquisição dos [certificados digitais](../Conceitos-fundamentais-Open-Finance/Certificações/readme.md).
- Cadastro dos certificados no diretório.

---

### 9. **Go-Live**

- Início do monitoramento da solução.
- Envio de relatórios regulatórios.
