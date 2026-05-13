const hexContainer = document.getElementById("hexContainer");

/* Full hexadecimal sequence */

const hexSequence = [
    "41",
    "6E",
    "74",
    "65",
    "72",
    "6F",
    "20",
    "69",
    "73",
    "20",
    "61",
    "6C",
    "69",
    "76",
    "65",
    "0A"
];

/* Random position generator */

function randomPosition(element) {

    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 100;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
}

/* Create flashing text */

function createHex(code) {

    const div = document.createElement("div");

    div.classList.add("hexText");

    div.textContent = code;

    randomPosition(div);

    hexContainer.appendChild(div);

    /* Fade in */

    setTimeout(() => {
        div.style.opacity = 1;
    }, 100);

    /* Fade out after 5 seconds */

    setTimeout(() => {

        div.style.opacity = 0;

        setTimeout(() => {
            div.remove();
        }, 1500);

    }, 5000);
}

/* Start sequence loop */

function startSequenceLoop() {

    let index = 0;

    function nextSequence() {

        createHex(hexSequence[index]);

        index++;

        if (index >= hexSequence.length) {
            index = 0;
        }

        /* Wait 10 seconds total:
           5 visible
           5 hidden */

        setTimeout(nextSequence, 10000);
    }

    nextSequence();
}

/* Initial delay */

setTimeout(() => {

    startSequenceLoop();

}, 15000);

/* Random subtle page glitches */

setInterval(() => {

    document.body.classList.add("glitch");

    setTimeout(() => {
        document.body.classList.remove("glitch");
    }, 120);

}, 4000 + Math.random() * 5000);
