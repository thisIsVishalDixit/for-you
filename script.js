function revealMessage() {
    document.getElementById("message").classList.remove("hidden");
    document.getElementById("signature").classList.remove("hidden");
}

// Floating hearts
const heartsContainer = document.querySelector(".hearts");

setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (4 + Math.random() * 3) + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
}, 500);

function revealMessage() {
    const message = document.getElementById("message");
    const signature = document.getElementById("signature");

    message.classList.remove("hidden");
    signature.classList.remove("hidden");

    // 💫 Smooth scroll to message
    setTimeout(() => {
        message.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }, 300);
}
