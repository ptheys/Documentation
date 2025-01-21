---
layout: default
title: "API de Cartão de Crédito"
parent: "Compartilhamento de Dados"
nav_order: 2
---

# API de Cartão de Crédito

API da *camada de integração* que retorna informações de contas de pagamento pós-paga mantidas nas instituições transmissoras por seus clientes, incluindo dados como denominação, produto, bandeira, limites de crédito, informações sobre transações de pagamento efetuadas e faturas.

Essa API não faz separação entre pessoa natural e pessoa jurídica.

Antes de qualquer *endpoint* ser acionado, a plataforma já verificou a autenticidade da origem da chamada e a validade, data de expiração, permissões e escopo do consentimento enviado pelo receptor, garantindo que se trata de uma requisição autorizada.

Existem *endpoints* para:

- Obter a lista de contas pós-pagas do mantidas pelo cliente na instituição transmissora;
- Obter dados de identificação de um cartão;
- Obter lista de faturas de um cartão;
- Obter a lista de transações de um cartão;
- Obter os limites de um cartão;
- Obter a lista de transações recentes (últimos 7 dias) de  um cartão.

A documentação da API de cartão de crédito (em formato *Open API Specification*) a ser construída na *camada de integração* pode ser encontrada [aqui][API-Cartão-de-crédito].

[API-Cartão-de-crédito]: ../swagger-ui/index.html?api=Cartão-de-crédito
