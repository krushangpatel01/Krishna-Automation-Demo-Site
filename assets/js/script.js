window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});

window.addEventListener("scroll",()=>{

    const scrollTopBtn=document.querySelector(".scroll-top");

    if(!scrollTopBtn) return;

    if(window.scrollY>500){

        scrollTopBtn.classList.add("show");

    }else{

        scrollTopBtn.classList.remove("show");

    }

});

const scrollTop=document.querySelector(".scroll-top");

if(scrollTop){

scrollTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}