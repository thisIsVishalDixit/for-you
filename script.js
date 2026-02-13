const messages = [

    "Sach bolu… mujhe kabhi nahi laga tha ki koi itna special ho sakta hai mere liye.",

    "Pehle life bas chal rahi thi… routine thi… normal si.",

    "Phir tum aaye… aur sab kuch dheere dheere change hone laga.",

    "Ab har chhoti baat tumse share karne ka mann karta hai.",

    "Koi funny moment ho… ya thoda sa sad feel karu… sabse pehle tum yaad aate ho.",

    "Tumhari awaaz me ek ajeeb sa sukoon hai… jaise dimag ka noise band ho jaata hai.",

    "Tumhari smile… pata nahi kyun… par genuinely mere dil ko halka kar deti hai.",

    "Main perfect nahi hoon… kabhi overthink karta hoon… kabhi stupid ho jaata hoon…",

    "Par ek cheez pakki hai… jo feel karta hoon woh fake nahi hai.",

    "Mujhe tumhari care karna accha lagta hai… bina reason bhi tumhari fikr hoti hai.",

    "Aur shayad yahi pyaar hota hai… jab kisi ki khushi apni khushi se zyada important lagne lage.",

    "Mujhe future ka exact idea nahi hai…",

    "Par agar future me tum saath ho… to mujhe kisi cheez ka darr nahi lagta.",

    "Tum meri comfort ho… meri safe jagah ho… jahan main bina pretend kiye reh sakta hoon.",

    "Main bas itna chahta hoon… jab bhi tumhe kisi apne ki zarurat ho…",

    "Sabse pehle mera naam aaye.",

    "Aur jab life kabhi thodi mushkil ho…",

    "To main tumhara haath pakad kar kahu… 'Main hoon na.'",

    "Isliye aaj dil se ek simple si baat poochni hai…",

    "Kya tum meri life ka permanent part banogi? ❤️"
];

let index = 0;

const text = document.getElementById("text");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const btnContainer = document.getElementById("buttons");
const card = document.getElementById("card");

function updateText() {
    text.style.opacity = 0;

    setTimeout(() => {
        text.innerText = messages[index];
        text.style.opacity = 1;

        prevBtn.disabled = index === 0;

    }, 200);
}

updateText();

nextBtn.addEventListener("click", () => {

    if (index < messages.length - 1) {
        index++;
        updateText();
    } else {

        text.innerText = "Please choose honestly… 💖";

        btnContainer.innerHTML = `
            <button id="yesBtn">Yes ❤️</button>
            <button id="noBtn">No 🙈</button>
        `;

        document.getElementById("yesBtn").addEventListener("click", () => {
            card.classList.add("happy");
            text.innerText = "Happy Valentine’s Day My Love ❤️\n\nYou just made my world complete.";
            btnContainer.innerHTML = "";
        });

        document.getElementById("noBtn").addEventListener("mouseover", function () {
            this.style.position = "absolute";
            this.style.left = Math.random() * 70 + "%";
            this.style.top = Math.random() * 70 + "%";
        });
    }

});

prevBtn.addEventListener("click", () => {
    if (index > 0) {
        index--;
        updateText();
    }
});
