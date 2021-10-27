document.body.addEventListener('keydown',
    event => {
        if (event.key === ' ' && event.code === "Space") {
            event.preventDefault();
            document.querySelectorAll(".PlayerPauseButton, .PlayerPlayButton")[0].click();
        }
        if (event.key === '0' && event.code === "Digit0") {
            document.querySelectorAll(".SeekToHeadButton")[0].click();
        }
    }
);

document.body.addEventListener('click', 
    event => {
        if (event.target.className === "VideoSymbolContainer-canvas") {
            document.querySelectorAll(".PlayerPauseButton, .PlayerPlayButton")[0].click();
        }
    }
);