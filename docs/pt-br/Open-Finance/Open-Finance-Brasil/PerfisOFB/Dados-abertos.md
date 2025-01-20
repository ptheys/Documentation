---
layout: default
title: "Dados abertos"
parent: "Perfis de participação"
nav_order: 1
---

## Dados abertos

A frente de dados abertos do Open Finance faz referência a [fase 1 do Open Finance](../Ecossistema/OFB-Ecossistema.md). A Fase 1 possibilita que as intituições participantes do Open Finance publiquem seus de forma pública, para que qualquer requisição possa recuperar essa informações. Os dados são referentes a informações não sensíveis das próprias instituições.

## Dados listados

### Canais de atendimento
- Dependências próprias
- Canais de atendimento eletrônico
- Canais de atendimento telefônico
- Correspondentes bancários da insituição
- Terminais de autoatendimento compartilhado

### Produtos
- Contas
- Empréstimos
- Financiamentos
- Antecipação de recebíveis
- Cartão de crédito
- Adiantamento a depositantes
- Investimentos
- Câmbio
- Credenciamento
- Titulos de capitalização
- Seguros
- Previdência

> - Todos são divididos em pessoa natual e jurídica.  
> - Todos os valores monetários ou de taxas representados dentro das estruturas abaixo são separados em diferentes faixas. Ao todo são 4 faixas de igual proporção que dividem o intervalo do menor até o maior valor. Há um valor correspondente para cada faixa que é o valor da mediana de cada uma dessas faixas. Acompanhado a cada faixa, tem-se o percentual de clientes em cada uma dessas faixas (para o serviço x, 10% dos clientes daquele serviço x estão na faixa 1, 15% na faixa 2, 20% na faixa 3 e 55% na faixa 4).

## Critério de obrigatoriedade

O perfil de dados abertos é obrigatório a todas as intituições que são participantes (obrigatórios ou voluntários) do perfil de dados transacionais (fase 2).

## Utilização do produto

O produto resolve toda a camada de reporte dos dados abertos e, basta uma integração para que a fase 1 esteja operacional, além das seguintes etapas:
1. Ter concluído a [implantação do produto](../../Plataforma-OpusOpenFinance/Implantação/OOF-Implantação.md).
2. Realizar a integração concomitante a integração do Transmissor de Dados. (ideal é que ambos os perfis entrem em produção ao mesmo tempo)
> A integração é realiza por meio de json dinâmico ou estático para reportar os dados ao ecossistema do Open Finance.