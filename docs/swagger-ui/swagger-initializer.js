window.onload = () => {
  // Obter o parâmetro "api" da URL
  const urlParams = new URLSearchParams(window.location.search);
  const apiName = urlParams.get("api");

  // Lista de APIs disponíveis
  const apis = {
    "Dados-cadastrais": "../apis/customers-2-1-0.yml",
    "Cartão-de-crédito": "../apis/credit-cards-2-3-1.yml",
    "Contas": "../apis/accounts-2-4-0.yml",
    "Crédito": "../apis/loans-2-3-0.yml",
    "Câmbio": "../apis/exchange-1-0-0.yml",
    "Opus-Commons": "../apis/opus-commons-1-0-0.yml",
    // Adicione outras APIs aqui
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
