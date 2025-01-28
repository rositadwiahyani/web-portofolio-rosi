document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.querySelector("nav");
    const menuOverlay = document.getElementById("menu-overlay");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("show");
        menuToggle.classList.toggle("active");
        menuOverlay.classList.toggle("active");
    });

    menuOverlay.addEventListener("click", function () {
        navMenu.classList.remove("show");
        menuToggle.classList.remove("active");
        menuOverlay.classList.remove("active");
    });

    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("show");
            menuToggle.classList.remove("active");
            menuOverlay.classList.remove("active");
        });
    });
});

const text = `Hello, I'm Rosita, a Computer Engineering student with a passion for programming and technology.
On this page, I will share my stories, works, and journey of exploration in the world of technology and creativity.
From programming projects to simple ideas inspired by everyday life.
I hope you find something interesting here.
Feel free to explore further or leave a message if you have something to discuss.
`;

const typingText = document.getElementById("typing-text");
let index = 0;

function typeEffect() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50); // Kecepatan mengetik
    }
}

window.onload = typeEffect;
