"use strict";

function globalInsert() {
    const cssLink = document.createElement("link");
    cssLink.type = "text/css";
    cssLink.rel = "stylesheet";
    cssLink.href = "https://cdn.plyr.io/3.7.8/plyr.css";
    document.head.appendChild(cssLink);

    const script = document.createElement("script");
    script.src = "https://cdn.plyr.io/3.7.8/plyr.js";
    document.body.appendChild(script);

    return new Promise((resolve) => {
        script.onload = resolve;
    });
}

function instanceStyle(id, color, radius) {
    const style = document.createElement("style");
    style.innerHTML = `
        #${id} {
            --plyr-color-main: ${color || "#00b3ff"};
            border-radius: ${radius || "10"}px;
        }
    `;
    document.head.appendChild(style);
}

async function initializePlayer(options) {
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

    await globalInsert();

    instanceStyle(id, color, radius);

    const container = document.getElementById(id);
    container.classList.add("plyr__video-embed");

    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${embed}?enablejsapi=1&controls=0&modestbranding=1&showinfo=0&loop=${loop ? 1 : 0}&playlist=${embed}`;
    iframe.allowFullscreen = true;
    iframe.allowtransparency = true;
    iframe.setAttribute("allow", "autoplay; encrypted-media");
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    container.appendChild(iframe);

    const unmuteButton = document.createElement("button");
    unmuteButton.className = "unmute-button";
    unmuteButton.innerHTML = "&#128266; Ativar Áudio";
    container.appendChild(unmuteButton);

    const player = new Plyr(`#${id}`, {
        loop: { active: loop },
        controls,
        settings,
        muted: true,
        keyboard: { focused: false, global: false }
    });

    player.on("ready", function () {
        player.muted = true;

        unmuteButton.addEventListener("click", function () {
            player.muted = false;
            unmuteButton.style.display = "none";
        });

        player.on("click", function () {
            if (player.muted) {
                player.muted = false;
                unmuteButton.style.display = "none";
            }
        });
    });

    // Ensure the player starts muted but can be unmuted by the user
    player.on("volumechange", function () {
        if (!player.muted) {
            unmuteButton.style.display = "none";
        }
    });
}
