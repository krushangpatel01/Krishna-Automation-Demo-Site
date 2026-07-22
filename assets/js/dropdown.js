const dropdown = document.querySelector(".dropdown");

if (dropdown) {

    dropdown.addEventListener("mouseenter", () => {
        dropdown.classList.add("show");
    });

    dropdown.addEventListener("mouseleave", () => {
        dropdown.classList.remove("show");
    });

}

const dropBtn = document.querySelector(".dropdown-toggle");

if (dropBtn) {

    dropBtn.addEventListener("click", (e) => {

        if (window.innerWidth < 992) {

            e.preventDefault();

            dropBtn.parentElement.classList.toggle("show");

        }

    });

}