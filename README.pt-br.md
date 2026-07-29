# Atuar Engenharia

Landing page institucional para a Atuar Engenharia, empresa de engenharia civil sediada em Natal, RN. O site apresenta os serviços da empresa, diferenciais, feed do Instagram e localização, com integração direta para solicitação de orçamento via WhatsApp.

Desenvolvido como projeto freelance em HTML, CSS e JavaScript puro — sem framework ou build tool necessário.

> Status: este projeto está arquivado e não está mais em desenvolvimento ativo. Ele foi mantido como uma referência da landing page.

---

## Funcionalidades

| Funcionalidade | Descrição |
|---|---|
| Vídeo Hero | Vídeo de fundo com spinner de carregamento na página inicial |
| Grid de Serviços | 6 cards de serviços: manutenção de fachada, recuperação estrutural, impermeabilização, pintura predial, instalação de caixa de ar-condicionado e inspeção predial |
| Animações de Scroll | Biblioteca AOS (Animate On Scroll) para animações de entrada ao longo da página |
| Menu Responsivo | Menu hamburguer para mobile com toggle de abertura/fechamento suave |
| Feed do Instagram | Feed incorporado via Elfsight |
| Botão WhatsApp | Botão flutuante com mensagem de solicitação de orçamento pré-preenchida |
| Seção de Localização | Imagem de mapa estático com endereço completo |
| Layout single-page | Os links de navegação apontam para seções da própria página |

---

## Preview

Você pode visualizar a versão online da landing page aqui:

- https://luccaszzzz.github.io/atuar-engenharia/

---

## Estrutura do Projeto

```
├── index.html                 # Página principal (landing page)
├── assets/
│   ├── styles/
│   │   └── style.css          # Folha de estilo principal
│   ├── img/                   # Imagens e ícones
│   ├── video/
│   │   └── video_edificio.mp4 # Vídeo de fundo do hero
│   └── main.js                # Animações, menu e rolagem suave
└── docs/
    └── screenshots/           # Screenshots do projeto
```

---

## Tecnologias

- HTML5
- CSS3 (folhas de estilo por página)
- JavaScript (vanilla)
- [AOS](https://michalsnik.github.io/aos/) 2.3.4 — animações de scroll
- [Elfsight](https://elfsight.com/) — embed do Instagram

---

## Como Executar

Nenhuma instalação necessária. Abra o `index.html` diretamente no navegador, ou use o Live Server do VS Code para uma melhor experiência de desenvolvimento:

1. Instale a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no VS Code
2. Clique com o botão direito em `index.html`
3. Selecione **Open with Live Server**

> O vídeo de fundo requer o arquivo `assets/video/video_edificio.mp4` presente localmente.

---

## Autor

Desenvolvido por [Lucas Emanoel da Silva Freitas](https://www.linkedin.com/in/lucas-emanoel-38a440238/)

---

[Read in English](README.md)