"use strict";

// ... (código das funções globalInsert, instanceStyle e init) ...

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
  controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'],
  settings: ['captions', 'quality', 'speed', 'loop'],
  autoplay: false
};

// Obtendo o ID do vídeo da URL
const urlParams = new URLSearchParams(window.location.search);
playerOptions.embed = urlParams.get('embed');

start(playerOptions);
