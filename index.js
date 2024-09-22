const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const emailPattern = /^[\w-_!]+@[\w-_!]+\.[a-z]{2,8}$/;

    if(firstName.value === "") {
        firstName.parentElement.classList.add("error"); 
        firstName.attributes.placeholder.textContent = "";      
    }
    else {
        firstName.parentElement.classList.remove("error");
        firstName.style.border = "2px solid green";      
    }

    if(lastName.value === ""){
        lastName.parentElement.classList.add("error");  
        lastName.attributes.placeholder.textContent = "";      
    }
    else{
        lastName.parentElement.classList.remove("error");
        lastName.style.border = "2px solid green";
    }
    if(!emailPattern.test(email.value) || email.value === ""){
        email.parentElement.classList.add("error");
        email.attributes.placeholder.textContent = "email@example.com";
    }
    else {
        email.parentElement.classList.remove("error");
        email.attributes.placeholder.textContent = null;
        email.style.border = "2px solid green";        
    }
    if(password.value === ""){
        password.parentElement.classList.add("error");
        password.attributes.placeholder.textContent = "";
    }
    else if (password.value.length < 8){
        password.parentElement.classList.add("error");
        password.parentElement.lastElementChild.textContent = "Password must be at least 8 characters";
    }
    else {
        password.parentElement.classList.remove("error");
        password.style.border = "2px solid green";
    }
  
})








