function alienAppear() {
    const alienContainer = document.getElementById("alien-container");
    const alienSpeech = document.getElementById("alien-speech");

    // Задаем случайный угол для вылета инопланетянина
    const corners = [
        { top: '0', left: '0' },          // Верхний левый угол
        { top: '0', right: '0' },         // Верхний правый угол
        { bottom: '0', left: '0' },       // Нижний левый угол
        { bottom: '0', right: '0' }       // Нижний правый угол
    ];
    const randomCorner = corners[Math.floor(Math.random() * corners.length)];

    // Устанавливаем позицию инопланетянина
    Object.assign(alienContainer.style, {
        top: randomCorner.top || '',
        right: randomCorner.right || '',
        bottom: randomCorner.bottom || '',
        left: randomCorner.left || '',
        opacity: '1',
        animation: 'flyInOut 3s ease-in-out'
    });

    // Показываем текст "Shit!"
    alienSpeech.style.display = "block";

    // Скрываем инопланетянина и сбрасываем анимацию после завершения
    setTimeout(() => {
        alienContainer.style.opacity = "0";
        alienSpeech.style.display = "none";
        alienContainer.style.animation = ""; // Сброс анимации для повторного запуска
    }, 3000);
}

// Запуск через случайное время
function startAlienMovement() {
    setInterval(() => {
        const randomTime = Math.random() * 30000 + 10000; // Интервал от 10 до 30 секунд
        setTimeout(alienAppear, randomTime);
    }, 40000); // Попытка запустить каждые 40 секунд
}

// Запуск функции при загрузке страницы
document.addEventListener("DOMContentLoaded", startAlienMovement);


function toggleTheme() {
    const body = document.body;
    body.classList.toggle("light-theme");
    body.classList.toggle("dark-theme");
}

const typedTexts = ["Веб-разработчик", "Создатель игр", "Творец сея страница", "Плейбой, Филантроп, Миллиардер и просто Гений", "Ни разу не упасть — не самая большая заслуга в жизни. Главное каждый раз подниматься", "Юра", "Друг", "Учитель", "Ученик", "Честно говоря, моя дорогая, мне наплевать.", "Обожаю запах напалма по утрам.", "Расказчик", "Тайлер", "Имея много мыла можно взорвать что угодно", "	То, из чего сделаны мечты.", "В конце концов, завтра другой день!", "Бонд. Джеймс Бонд.", "Я ещё вернусь.", "Сегодня, я считаю себя самым удачливым человеком на земле.", "Хьюстон, у нас проблема.", "Держи своих друзей близко, но врагов ещё ближе.", "Элементарно, мой дорогой Ватсон." ];
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


document.addEventListener("DOMContentLoaded", createStars);

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

document.querySelectorAll('.fater').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

window.addEventListener("load", () => {
    document.getElementById("preloader").style.display = "none";
});
