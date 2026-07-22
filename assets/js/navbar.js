/*==========================================
            MOBILE MENU
==========================================*/

const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".navbar__menu");

menuButton.addEventListener("click", () => {

    menu.classList.toggle("active");

    menuButton.querySelector("i").classList.toggle("fa-bars");
    menuButton.querySelector("i").classList.toggle("fa-xmark");

});

const header = document.querySelector(".header");
const menuBtn = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 50);
});

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuBtn.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuBtn.classList.remove("active");
    });
});