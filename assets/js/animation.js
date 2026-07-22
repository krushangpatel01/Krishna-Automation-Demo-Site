/* CTA BAR
==================================== */

document.addEventListener("DOMContentLoaded", () => {

    const icons = document.querySelectorAll(".cta-bar__icon");

    icons.forEach((icon) => {

        icon.addEventListener("mouseenter", () => {

            icon.style.transform = "translateY(-4px) scale(1.05)";

        });

        icon.addEventListener("mouseleave", () => {

            icon.style.transform = "translateY(0) scale(1)";

        });

    });

});

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.2
});

document.querySelectorAll("section").forEach(section=>{

    observer.observe(section);

});