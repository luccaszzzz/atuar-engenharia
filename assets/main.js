// Inicializa animações
AOS.init();

// Carrega o vídeo de fundo após o carregamento da página
document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".background-video");
  const videoContainer = document.querySelector(".video-container");

  // Quando o vídeo estiver carregado, remova o spinner
  video.addEventListener("loadeddata", () => {
    videoContainer.classList.add("loaded"); // Adiciona a classe para ocultar o spinner
  });
});

// Configura rolagem suave para links âncora
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Menu responsivo
const menuToggle = document.querySelector(".menu-toggle");
const navContent = document.querySelector(".nav-content");

menuToggle.addEventListener("click", () => {
  const isActive = navContent.classList.toggle("active");
  document.body.style.overflow = isActive ? "hidden" : "auto";

  // Alterna entre o ícone do menu e o "X"
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");
  if (isActive) {
    menuIcon.style.display = "none"; // Esconde o ícone do menu
    closeIcon.style.display = "inline"; // Mostra o "X"
  } else {
    menuIcon.style.display = "inline"; // Mostra o ícone do menu
    closeIcon.style.display = "none"; // Esconde o "X"
  }

  // Fecha o menu ao clicar em um item
  document
    .querySelectorAll(".menu-items a, .social-icons a")
    .forEach((item) => {
      item.addEventListener("click", (e) => {
        // Fecha o menu
        navContent.classList.remove("active");
        document.body.style.overflow = "auto";

        // Reseta o botão do menu
        document.querySelector(".menu-icon").style.display = "inline";
        document.querySelector(".close-icon").style.display = "none";
        document.querySelector(".menu-toggle").style.color = "white";

        // Rolagem suave para a seção (mantendo seu código existente)
        const target = e.currentTarget.getAttribute("href");
        if (target.startsWith("#")) {
          e.preventDefault();
          document.querySelector(target).scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });
});