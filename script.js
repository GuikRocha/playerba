"use strict";

let gInserted = false;
let gInsertedScript = false;
let unmute = false;

function globalInsert() {
  // ... (código da função globalInsert) ...
}

function instanceStyle(id, color, radius) {
  // ... (código da função instanceStyle) ...
}

function init(options) {
  const {
    id,
    embed,
    loop = true,
    color,
    radius,
    controls = ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
    settings = ["captions", "quality", "speed", "loop"],
    autoplay = false
  } = options;

  instanceStyle(id, color, radius);

  const container = document.getElementById(id);
  container.classList.add("plyr__video-embed");

  const iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube.com/embed/${embed}`;
  iframe.allowFullscreen = true;
  iframe.allowtransparency = true;
  iframe.setAttribute("allow", "autoplay");

  const unmuteButton = document.createElement("button");
  unmuteButton.className = `${id}-unmute unmute-button`;
  unmuteButton.innerHTML = "&#128266; Ativar Áudio";

  container.appendChild(iframe);

  const player = new Plyr(`#${id}`, {
    loop: { active: loop },
    controls,
    settings,
    muted: autoplay ? false : true,
    keyboard: { focused: false, global: false },
    i18n: {
      speed: 'Velocidade',
      quality: 'Qualidade' // Tradução para a opção de qualidade
    }
  });

  // ... (restante do código da função init) ...
}

function start(options) {
  globalInsert();
  if (gInsertedScript) {
    gInsertedScript.addEventListener("load", function () {
      init(options);
    });
  } else {
    init(options);
  }
}

// Configuração do player (o embed é obtido da URL)
const playerOptions = {
  id: 'player',
  loop: true,
  color: 'red',
  radius: '10',
  controls,
  settings,
  autoplay: false
};

// Obtendo o ID do vídeo da URL
const urlParams = new URLSearchParams(window.location.search);
playerOptions.embed = urlParams.get('embed');

start(playerOptions);
