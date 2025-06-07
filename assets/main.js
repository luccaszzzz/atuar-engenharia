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

// Configuração do mapa
const map = L.map("map", {
  scrollWheelZoom: false, // Desativa o zoom com a roda do mouse
}).setView([-5.805398, -35.205209], 16); // Define a posição inicial do mapa (latitude, longitude) e o nível de zoom

// Seleciona os elementos do mapa e da camada de sobreposição
const mapContainer = document.querySelector(".map-container"); // Contêiner principal do mapa
const mapOverlay = document.querySelector(".map-overlay"); // Camada transparente sobre o mapa

// Ativa a interação com o mapa ao clicar na camada de sobreposição
mapOverlay.addEventListener("click", () => {
  mapContainer.classList.add("active"); // Adiciona a classe 'active' para permitir a interação com o mapa
});

// Remove a interação com o mapa quando o usuário rolar a página
document.addEventListener("scroll", () => {
  mapContainer.classList.remove("active"); // Remove a classe 'active' para desativar a interação com o mapa
});

// Adiciona o tile layer do OpenStreetMap ao mapa
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', // Créditos do OpenStreetMap
}).addTo(map);

// Configuração do marcador personalizado
const fotoIcon = new L.Icon({
  iconUrl: "assets/img/person-icon.png", // Caminho para a foto desejada (ajuste conforme necessário)
  iconSize: [40, 40], // Tamanho da foto no mapa
  iconAnchor: [20, 40], // Ponto de ancoragem na base da imagem
  popupAnchor: [0, -40], // Posição do popup em relação ao ícone
  shadowUrl: null // Sem sombra
});


// Adiciona um marcador ao mapa com um popup
const marker = L.marker([-5.805398, -35.205209], { icon: fotoIcon })
  .addTo(map) // Adiciona o marcador na posição especificada
  .bindPopup("<b>Atuar Engenharia</b><br>R. Cesimar Borges, 1023"); // Define o conteúdo do popup
marker.openPopup(); // Abre o popup automaticamente

// Atualiza o ano no copyright automaticamente
document.getElementById("current-year").textContent = new Date().getFullYear();
