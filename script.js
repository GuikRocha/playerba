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
  // ... (código da função init) ...
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
  loop: false,
  color: 'red',
  radius: '10',
  controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'],
  settings: ['captions', 'quality', 'speed', 'loop'],
  autoplay: false,
};

// Obtendo o ID do vídeo da URL
const urlParams = new URLSearchParams(window.location.search);
playerOptions.embed = urlParams.get('embed'); 

start(playerOptions);
