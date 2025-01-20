window.onload = () => {
  // Obter o parâmetro "api" da URL
  const urlParams = new URLSearchParams(window.location.search);
  const apiName = urlParams.get("api");

  // Define o nome do repositório, que é a base da URL gerada pelo Github Pages.
  const baseurl = "/Documentation";     // Ajuste para o nome de seu repositório se necessário.

  // Lista de APIs disponíveis
  const apis = {
    "Dados-cadastrais": `${baseurl}/docs/apis/customers-v-2-1-0.yaml`,
    "Cartão-de-Crédito": `${baseurl}/docs/apis/credit-cards-v-2-3-1.yaml`
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
