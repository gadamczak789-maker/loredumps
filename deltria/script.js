const message = document.getElementById("message");

function showMessage() {

    // Show after 303 seconds
    setTimeout(() => {

        message.style.opacity = 1;

        // Hide after 27 seconds
        setTimeout(() => {

            message.style.opacity = 0;

            // Restart loop
            showMessage();

        }, 27000);

    }, 303000);
}

showMessage();
