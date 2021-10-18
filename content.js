document.body.addEventListener('keydown',
    event => {
        if (event.key === ' ' && event.code === "Space") {
            event.preventDefault();
            document.querySelectorAll(".PlayerPauseButton, .PlayerPlayButton")[0].click();
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

// let video = document.getElementsByClassName('VideoSymbolContainer-canvas')[0];
// video.addEventListener('click', function(event){
//     event.preventDefault();
//     document.getElementsByClassName("PlayerPauseButton")[0].click();
// });