(function () {
    document.addEventListener("DOMContentLoaded", function () {
    // Observa mudanças no DOM, para lidar com carregamento dinâmico.
        console.log("Script isolado carregado!");
        const links = document.querySelectorAll("a[href^='http']"); // Captura http e https.
        links.forEach(function (link) {
            if (!link.href.includes(window.location.hostname)) {    // Verifica se link é externo.
                link.setAttribute("target", "_blank");              // Abre em nova aba.
                link.setAttribute("rel", "noopener noreferrer");    // Melhora a segurança.
            }
        });
    });
})();

