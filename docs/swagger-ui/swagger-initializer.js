window.onload = () => {
  // Obter o parâmetro "api" da URL
  const urlParams = new URLSearchParams(window.location.search);
  const apiName = urlParams.get("api");

  // Lista de APIs disponíveis
  const apis = {
    "Dados-cadastrais": "../apis/customers-2-1-0.yml",
    "Cartão-de-crédito": "../apis/credit-cards-2-3-1.yml",
    "Contas": "../apis/accounts-2-4-0.yml",
    "Empréstimo": "../apis/loans-2-3-0.yml",
    "Câmbio": "../apis/exchange-1-0-0.yml",
    "Financiamento": "../apis/financings-2-3-0.yml",
    "Adiantamento": "../apis/overdraft-2-3-0.yml",
    "Direitos-Creditórios": "../apis/invoice-financings-2-3-0.yml",
    "Opus-Commons": "../apis/opus-commons-1-0-0.yml",
    "OAS-Receptor": "../apis/oas-opustpp-dados.yml",
    "OAS-ITP-pagamentos": "../apis/oas-opustpp-pagamentos.yml",
    "OAS-ITP-pagamentos-automaticos": "../apis/oas-opustpp-pagamentos-automaticos.yml",
    "OAS-back-dados": "../apis/oas-oof-dados.yml",
    "Mobile": "../apis/oas-webapp2as.yml",
    "open-data-acquiring": "../apis-dados-abertos/open-data-acquiring-services.yml",
    "open-data-accounts": "../apis-dados-abertos/open-data-accounts.yml",
    "open-data-capitalization": "../apis-dados-abertos/open-data-capitalization-bonds.yml",
    "open-data-channels": "../apis-dados-abertos/open-data-channels.yml",
    "open-data-credit-cards": "../apis-dados-abertos/open-data-credit-cards.yml",
    "open-data-exchanges": "../apis-dados-abertos/open-data-exchanges.yml",
    "open-data-financings": "../apis-dados-abertos/open-data-financings.yml",
    "open-data-insurance": "../apis-dados-abertos/open-data-insurance.yml",
    "open-data-investments": "../apis-dados-abertos/open-data-investments.yml",
    "open-data-invoice-financings": "../apis-dados-abertos/open-data-invoice-financings.yml",
    "open-data-loans": "../apis-dados-abertos/open-data-loans.yml",
    "open-data-pension": "../apis-dados-abertos/open-data-pension.yml",
    "open-data-unarranged": "../apis-dados-abertos/open-data-unarranged-account-overdraft.yml",
    "data-funds": "../apis/dados-investimento/oas-funds.yml",
    "data-bank-fixed-incomes": "../apis/dados-investimento/oas-bank-fixed-incomes.yml",
    "data-credit-fixed-incomes": "../apis/dados-investimento/oas-credit-fixed-incomes.yml",
    "data-treasure-titles": "../apis/dados-investimento/oas-treasure-titles.yml",
    "data-variable-incomes": "../apis/dados-investimento/oas-variable-incomes.yml",
    // Adicione outras APIs aqui. As linhas são terminadas por "," mesmo qdo é o último item...
  };

  // Determinar qual API carregar
  const apiUrl = apis[apiName] || apis["Dados-cadastrais"]; // Carrega "Dados Cadastrais" por padrão

  // Inicializar o Swagger UI
  const ui = SwaggerUIBundle({
    url: apiUrl,
    dom_id: "#swagger-ui",
    presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
    layout: "BaseLayout",
    supportedSubmitMethods: [] // Remove o botão "Try it out"
  });
  window.ui = ui;
};
