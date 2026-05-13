const playButton = document.getElementById("playButton");
const audioPlayer = document.getElementById("audioPlayer");

let isPlaying = false;

playButton.addEventListener("click", () => {

    if (!isPlaying) {

        audioPlayer.play();

        playButton.textContent = "STOP TRANSMISSION";

        isPlaying = true;

    } else {

        audioPlayer.pause();

        audioPlayer.currentTime = 0;

        playButton.textContent = "PLAY TRANSMISSION";

        isPlaying = false;
    }
});

audioPlayer.addEventListener("ended", () => {

    playButton.textContent = "PLAY TRANSMISSION";

    isPlaying = false;
});

/* Random subtle page glitch */

setInterval(() => {

    document.body.style.opacity = "0.96";

    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 60);

}, 7000 + Math.random() * 5000);
