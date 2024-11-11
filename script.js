
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("light-theme");
    body.classList.toggle("dark-theme");
}

const typedTexts = ["Веб-разработчик", "Создатель игр", "Творец сея страница"];
let currentTextIndex = 0;
let currentCharIndex = 0;

function type() {
    const typedTextElement = document.querySelector(".typed-text");
    if (currentCharIndex < typedTexts[currentTextIndex].length) {
        typedTextElement.textContent += typedTexts[currentTextIndex][currentCharIndex];
        currentCharIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    const typedTextElement = document.querySelector(".typed-text");
    if (currentCharIndex > 0) {
        typedTextElement.textContent = typedTexts[currentTextIndex].substring(0, currentCharIndex - 1);
        currentCharIndex--;
        setTimeout(erase, 50);
    } else {
        currentTextIndex = (currentTextIndex + 1) % typedTexts.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 1000);
});

window.addEventListener("scroll", () => {
    const progressBar = document.querySelector(".progress-bar");
    const scrollAmount = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollAmount / pageHeight) * 100;
    progressBar.style.width = scrollPercentage + "%";
});

const starCount = 100;


function createStars() {
    const container = document.querySelector(".stars-container");

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.classList.add("star");

        
        const size = Math.random() * 3 + 1 + "px"; 
        star.style.width = size;
        star.style.height = size;
        star.style.top = Math.random() * 100 + "vh";
        star.style.left = Math.random() * 100 + "vw";
        star.style.animationDuration = Math.random() * 2 + 1 + "s";

        container.appendChild(star);
    }
}

// Вызываем функцию для создания звезд после загрузки страницы
document.addEventListener("DOMContentLoaded", createStars);
