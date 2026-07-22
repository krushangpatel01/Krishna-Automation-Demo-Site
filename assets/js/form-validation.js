const form = document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",function(e){

    const name = document.querySelector("#name").value.trim();

    const phone = document.querySelector("#phone").value.trim();

    if(name==="" || phone===""){

        e.preventDefault();

        alert("Please fill all required fields.");

    }

});

}