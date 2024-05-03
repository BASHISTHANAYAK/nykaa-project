//PROCEED button
let REGISTER = document.querySelector(".REGISTER");

//let get the input
let Name = document.querySelector(".Name");
let Phone = document.querySelector(".number");
let Email = document.querySelector(".email");

REGISTER.addEventListener("click", function () {
    if (Name.value.length === 0 && Phone.value.length === 0 && Email.value.length === 0) {
        alert("fields can't be empty")
        return;
    }

    if (isNaN(Phone.value) || Phone.value.length !== 10) {
        alert("Enter 10 digit phone number")
        return
    }

    alert(`Successfully registered name ${Name.value} phone ${Phone.value} Email ${Email.value}`)
    window.location.href = "/index.html"
})