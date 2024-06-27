"use strict";

let gInserted = false;
let gInsertedScript = false;
let unmute = false;

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
  color: 'red', // Cor do player em vermelho
  radius: '10',
  controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'],
  settings: ['captions', 'quality', 'speed', 'loop'],
  autoplay: false, // Desabilita o autoplay para dispositivos móveis
  i18n: {
    speed: 'Velocidade',
    quality: 'Qualidade'
  },
  youtube: {
    noCookie: true, // Evita que o YouTube armazene cookies
    showinfo: 0,    // Oculta informações do vídeo (título, etc.)
    rel: 0         // Não mostra vídeos relacionados ao final
  }
};

// Obtendo o ID do vídeo da URL
const urlParams = new URLSearchParams(window.location.search);
playerOptions.embed = urlParams.get('embed');

start(playerOptions);
