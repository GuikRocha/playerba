const player = new Plyr('#player', {
  youtube: {
    noCookie: true,   // Evita cookies do YouTube
    modestbranding: 1, // Oculta o logo do YouTube
    showinfo: 0,      // Oculta informações do vídeo
    rel: 0,           // Não mostra vídeos relacionados
    iv_load_policy: 3 // Oculta anotações em vídeo
  },
  controls: [
    'play-large', 
    'play', 
    'progress', 
    'current-time', 
    'mute', 
    'volume',
    'fullscreen'
  ],
  i18n: {
    speed: 'Velocidade',
    quality: 'Qualidade'
  }
});
