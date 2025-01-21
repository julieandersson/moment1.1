// Popup vid klick av knapparna på startsidan

function navigateWithPopup(url, message) {
    // först, hitta popup-elementet
    const popup = document.getElementById("popup");

    // startar nedräkning från 3
    let countdown = 3;

    // sätter initialt meddelande med nedräkning
    popup.textContent = `${message} ${countdown}`;

    // visar popupen
    popup.style.display = "block";

    // uppdaterar popupen varje sekund
    const interval = setInterval(() => {
        countdown--;
        popup.textContent = `${message} ${countdown}`;

        // när nedräkningen är klar
        if (countdown <= 0) {
            clearInterval(interval); // stoppa intervallet
            window.location.href = url; // navigerar till den nya sidan
        }
    }, 1000); // uppdaterar varje sekund
}