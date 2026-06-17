const glitchBlocks =
    document.querySelectorAll(".glitchBlock");

function glitchText(block) {

    const original =
        block.getAttribute("data-text");

    const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let current =
        original.split("");

    const changes =
        Math.floor(Math.random() * 3) + 1;

    for (let i = 0; i < changes; i++) {

        const index =
            Math.floor(Math.random() * original.length);

        current[index] =
            chars[
                Math.floor(Math.random() * chars.length)
            ];
    }

    block.textContent =
        current.join("");

    setTimeout(() => {

        block.textContent = original;

    }, 150);
}

setInterval(() => {

    glitchBlocks.forEach(block => {

        if (Math.random() < 0.35) {

            glitchText(block);
        }
    });

}, 2500);
