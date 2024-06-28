"use strict";

// ... (código das funções globalInsert, instanceStyle e init) ...

async function start(options) {
  await globalInsert(); // Aguarda a inserção do script externo

  if (gInsertedScript) {
    gInsertedScript.addEventListener("load", () => init(options));
  } else {
    init(options);
  }
}

// Configuração do player
const playerOptions = {
  id: "player",
  loop: true,
  color: "yellow",
  radius: 10, // Número em vez de string
  controls: [
    "play-large",
    "play",
    "progress",
    "current-time",
    "mute",
    "volume",
    "captions",
    "settings",
    "pip",
    "airplay",
    "fullscreen",
  ],
  settings: ["captions", "quality", "speed", "loop"],
  autoplay: false,
};

// Obtém o ID do vídeo da URL
const urlParams = new URLSearchParams(window.location.search);
playerOptions.embed = urlParams.get("embed");

start(playerOptions);
