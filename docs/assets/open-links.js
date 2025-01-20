document.addEventListener("DOMContentLoaded", function () {
    // Observa mudanças no DOM, para lidar com carregamento dinâmico
    const observer = new MutationObserver(() => {
        const links = document.querySelectorAll("a[href^='http']"); // Captura http e https
        links.forEach(link => {
            if (!link.href.includes(window.location.hostname)) { // Verifica se o link é externo
                link.setAttribute("target", "_blank"); // Abre em nova aba
                link.setAttribute("rel", "noopener noreferrer"); // Melhora segurança
            }
        });
    });

    // Inicia o observador
    observer.observe(document.body, { childList: true, subtree: true });
});
