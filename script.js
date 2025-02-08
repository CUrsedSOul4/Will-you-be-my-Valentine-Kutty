const messages = [
    "Venama 😲?",
    "Ok Sollu Kutty",
    "Oiiiiii Kutty",
    "Please Kutty...",
    "Please Please Kutty",
    "Nee No Sonna, Naa Sad aaiduvan 😭...",
    "Romba Romba sad aaiduvan 😢...",
    "Ok Sollu Kutty...",
    "Seri Ok, vidu...",
    "Summa sonna 😁, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
