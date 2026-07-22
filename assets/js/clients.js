const clientSwiper = new Swiper(".clients-slider",{

    loop:true,

    speed:1200,

    spaceBetween:30,

    autoplay:{
        delay:2000,
        disableOnInteraction:false
    },

    grabCursor:true,

    breakpoints:{

        320:{
            slidesPerView:2
        },

        576:{
            slidesPerView:3
        },

        768:{
            slidesPerView:4
        },

        992:{
            slidesPerView:5
        },

        1200:{
            slidesPerView:6
        }

    }

});