const messages = [

"Sach bolu… mujhe kabhi nahi laga tha ki koi itna special ho sakta hai mere liye.",

"Jab se tum meri life me aaye ho, sab kuch thoda sa bright ho gaya hai.",

"Pehle jo din normal lagte the… ab unme bhi excitement hoti hai.",

"Tumhari smile mera pura mood change kar deti hai.",

"Main perfect nahi hoon… par tumhare liye jo feel karta hoon woh bilkul real hai.",

"Tum meri comfort ho… meri safe jagah ho.",

"Agar tum saath ho… to life ka har problem manageable lagta hai.",

"Bas dil se ek baat poochni thi…",

"Kya tum meri banogi? ❤️"
];

let index = 0;

const text = document.getElementById("text");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const btnContainer = document.getElementById("buttons");
const card = document.getElementById("card");

/* Update Text */
function updateText(){
    text.style.opacity = 0;

    setTimeout(() => {
        text.innerText = messages[index];
        text.style.opacity = 1;

        if(prevBtn) prevBtn.disabled = index === 0;

    }, 200);
}

updateText();

/* Next Button */
nextBtn.addEventListener("click", () => {

    if(index < messages.length - 1){
        index++;
        updateText();
    } 
    else {

        text.innerText = "Please choose honestly… 💖";

        btnContainer.innerHTML = `
            <button id="yesBtn">Yes ❤️</button>
            <button id="noBtn">No 🙈</button>
        `;

        const yesBtn = document.getElementById("yesBtn");
        const noBtn = document.getElementById("noBtn");

        /* YES */
        yesBtn.addEventListener("click", () => {
            card.classList.add("happy");
            text.innerText = "Happy Valentine’s Day My Love ❤️\n\nYou just made my world complete.";
            btnContainer.innerHTML = "";
        });

        /* NO RUN BUTTON */
        function moveNoButton() {

            const btnWidth = noBtn.offsetWidth;
            const btnHeight = noBtn.offsetHeight;

            const maxX = card.clientWidth - btnWidth - 20;
            const maxY = card.clientHeight - btnHeight - 20;

            const randomX = Math.random() * maxX;
            const randomY = Math.random() * maxY;

            noBtn.style.position = "absolute";
            noBtn.style.left = randomX + "px";
            noBtn.style.top = randomY + "px";
        }

        /* Desktop */
        noBtn.addEventListener("mouseover", moveNoButton);

        /* Mobile */
        noBtn.addEventListener("touchstart", moveNoButton);
    }
});

/* Previous */
if(prevBtn){
    prevBtn.addEventListener("click", () => {
        if(index > 0){
            index--;
            updateText();
        }
    });
}
