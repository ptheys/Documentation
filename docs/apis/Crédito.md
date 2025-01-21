---
layout: default
title: "Operações de Crédito"
parent: "Compartilhamento de Dados"
nav_order: 4
---

# Operações de Crédito

API da *camada de integração* que retorna informações de operações de credito do tipo empréstimo, mantidas nas instituições transmissoras por seus clientes, incluindo dados como denominação, modalidade, número do contrato, tarifas, prazo, prestações, pagamentos(ao menos para os últimos 12 meses), amortizações, garantias, encargos e taxas de juros remuneratórios.

Essa API não faz separação entre pessoa natural e pessoa jurídica.

Antes de qualquer *endpoint* ser acionado, a plataforma já verificou a autenticidade da origem da chamada e a validade, data de expiração, permissões e escopo do consentimento enviado pelo receptor, garantindo que se trata de uma requisição autorizada.

Existem *endpoints* para:

- Obter o conjunto de informações de contratos de empréstimo mantidos pelo cliente na instituição transmissora;
- Obter os dados de um contrato de empréstimo;
- Obter os dados do cronograma de parcelas de um contrato de empréstimo;
- Obter a lista de garantias vinculadas a um contrato de empréstimo;
- Obter os dados de pagamento de um contrato de empréstimo.

A documentação da API de Operações de Crédito (em formato *Open API Specification*) a ser construída na *camada de integração* pode ser encontrada [aqui][API-Crédito].

[API-Crédito]: ../swagger-ui/index.html?api=Crédito
