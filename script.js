// Функция для переключения темы
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("light-theme");
    body.classList.toggle("dark-theme");
}
// Массив текстов для "набора" и переменные для настройки эффекта
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
