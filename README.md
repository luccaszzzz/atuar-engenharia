# Atuar Engenharia

Institutional landing page for Atuar Engenharia, a civil engineering company based in Natal, RN. The site presents the company's services, differentials, Instagram feed, and location, with a direct WhatsApp quote request integration.

Built as a freelance project with pure HTML, CSS, and JavaScript — no framework or build tool required.

> Status: this project is currently archived and no longer under active development. It is kept as a reference implementation of the landing page.

---

## Features

| Feature | Description |
|---|---|
| Video Hero | Background video with loading spinner on the homepage |
| Services Grid | 6 service cards: façade maintenance, structural recovery, waterproofing, building painting, AC unit installation, and building inspection |
| Scroll Animations | AOS (Animate On Scroll) library for entrance animations throughout the page |
| Responsive Menu | Hamburger menu for mobile with smooth open/close toggle |
| Instagram Feed | Embedded feed via Elfsight |
| WhatsApp Button | Floating button with pre-filled quote request message |
| Location Section | Static map image with address details |
| Single-page layout | Navigation links point to sections of the same page |

---

## Screenshots

**Home**
![Home](docs/screenshots/home.png)

**Services**
![Services](docs/screenshots/servicos.png)

**About**
![About](docs/screenshots/quem-somos.png)

---

## Project Structure

```
├── index.html                 # Main landing page
├── assets/
│   ├── styles/
│   │   └── style.css          # Main stylesheet
│   ├── img/                   # Images and icons
│   ├── video/
│   │   └── video_edificio.mp4 # Hero background video
│   └── main.js                # Animations, menu, and smooth scroll
└── docs/
    └── screenshots/           # Project screenshots
```

---

## Technologies

- HTML5
- CSS3 (per-page stylesheets)
- JavaScript (vanilla)
- [AOS](https://michalsnik.github.io/aos/) 2.3.4 — scroll animations
- [Elfsight](https://elfsight.com/) — Instagram feed embed

---

## How to Run

No installation required. Open `index.html` directly in a browser, or use VS Code Live Server for a better development experience:

1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code
2. Right-click `index.html`
3. Select **Open with Live Server**

> The background video requires the file `assets/video/video_edificio.mp4` to be present locally.

---

## Author

Developed by [Lucas Emanoel da Silva Freitas](https://www.linkedin.com/in/lucas-emanoel-38a440238/)

---

[Leia em Português](README.pt-br.md)