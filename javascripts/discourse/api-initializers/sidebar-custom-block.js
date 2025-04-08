import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("0.11.1", (api) => {

    const banner = document.createElement("a");
    banner.href = "https://www.loftely.com";
    banner.target = "_blank";
    banner.className = "loftely-sidebar-banner";
    banner.innerHTML = `
    <div class="loftely-logo-banner"></div>
    <p class="loftely-text-banner">Essayez Loftely gratuitement</p>
  `;

    // Insérer avant le conteneur de navigation (ancien menu gauche)
    document.addEventListener("DOMContentLoaded", () => {
        const container = document.querySelector(".sidebar-sections");
        if (container && !document.querySelector(".loftely-sidebar-banner")) {
            container.parentNode.insertBefore(banner, container);
        }
    });
});