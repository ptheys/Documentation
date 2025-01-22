---
layout: default
title: "API de Dados Cadastrais"
parent: "Compartilhamento de Dados"
nav_order: 1
---

# API de Dados cadastrais

API da *camada de integração* que retorna dados cadastrais de clientes e seus representantes, incluindo dados de identificação, de qualificação financeira, informações sobre representantes cadastrados e sobre o relacionamento financeiro do cliente com a instituição financeira transmissora de dados.

Essa API separa pessoa natural de pessoa jurídica, estabelecendo *endpoints* distintos para cada tipo.

Antes de qualquer *endpoint* ser acionado, a plataforma já verificou a autenticidade da origem da chamada e a validade, data de expiração, permissões e escopo do consentimento enviado pelo receptor, garantindo que se trata de uma requisição autorizada.

Em linhas gerais, existem *endpoints* para:

- Obter os registros de identificação de pessoa natural;
- Obter os registros de qualificação de pessoa natural;
- Obter os registros de relacionamento com a instituição financeira e de representantes da pessoa natural
- Obter os registros de identificação de pessoa jurídica;
- Obter os registros de qualificação de pessoa jurídica;
- Obter os registros de relacionamento com a instituição financeira e de representantes da pessoa jurídica

## *Open API Specification* da API

A documentação da API de Dados Cadastrais a ser construída na *camada de integração* pode ser encontrada [aqui][API-Dados-cadastrais]

[API-Dados-cadastrais]: ../swagger-ui/index.html?api=Dados-cadastrais
