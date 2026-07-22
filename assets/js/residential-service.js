/*==========================================
        RESIDENTIAL FAQ
==========================================*/

const residentialFaqItems = document.querySelectorAll(".residential-faq-item");

residentialFaqItems.forEach(item => {

    const button = item.querySelector(".residential-faq-question");

    button.addEventListener("click", () => {

        residentialFaqItems.forEach(faq => {

            if(faq !== item){

                faq.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});