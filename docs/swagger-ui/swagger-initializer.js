window.onload = () => {
  // Obter o parâmetro "api" da URL
  const urlParams = new URLSearchParams(window.location.search);
  const apiName = urlParams.get("api");

  // Lista de APIs disponíveis
  const apis = {
    "Dados-cadastrais": "../apis/customers-v-2-1-0.yaml",
    "Cartão-de-Crédito": "../apis/credit-cards-v-2-3-1.yaml"
    // Adicione outras APIs aqui
  };

  // Determinar qual API carregar
  const apiUrl = apis[apiName] || apis["Dados-cadastrais"]; // Carrega "Dados Cadastrais" por padrão

  // Log para depuração
  console.log("Carregando API:", apiName, "URL:", apiUrl);

  // Inicializar o Swagger UI
  const ui = SwaggerUIBundle({
    url: apiUrl,
    dom_id: "#swagger-ui",
    presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
    layout: "BaseLayout",
  });
  window.ui = ui;
};
