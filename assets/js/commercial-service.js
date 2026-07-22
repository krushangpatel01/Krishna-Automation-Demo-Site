/*==========================================
        COMMERCIAL FAQ ACCORDION
==========================================*/

const commercialFaqItems = document.querySelectorAll(".commercial-faq-item");

commercialFaqItems.forEach(item => {

    const button = item.querySelector(".commercial-faq-question");

    button.addEventListener("click", () => {

        commercialFaqItems.forEach(faq => {

            if(faq !== item){

                faq.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});