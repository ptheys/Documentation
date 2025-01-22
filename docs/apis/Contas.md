---
layout: default
title: "API de Contas"
parent: "Compartilhamento de Dados"
nav_order: 3
---

# API de Contas

API da *camada de integração* que retorna informações de contas de depósito à vista, contas de poupança e contas de pagamento pré-pagas mantidas nas instituições transmissoras por seus clientes, incluindo dados de identificação da conta, saldos, limites e transações.

Essa API não faz separação entre pessoa natural e pessoa jurídica.

Antes de qualquer *endpoint* ser acionado, a plataforma já verificou a autenticidade da origem da chamada e a validade, data de expiração, permissões e escopo do consentimento enviado pelo receptor, garantindo que se trata de uma requisição autorizada.

Existem *endpoints* para:

- Obter a lista de contas de depósito à vista, poupança e pagamento pré-pagas mantidas pelo cliente na instituição;
- Obter dados de identificação de uma conta;
- Obter saldos de uma conta;
- Obter a lista de transações de uma conta;
- Obter a lista de transações recentes (últimos 7 dias) de uma conta;
- Obter os limites de uma conta.

## *Open API Specification* da API

A documentação da API de Contas a ser construída na *camada de integração* pode ser encontrada [aqui][API-Contas].

[API-Contas]: ../swagger-ui/index.html?api=Contas
