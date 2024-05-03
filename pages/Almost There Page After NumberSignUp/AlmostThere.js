//SAVE button
let SAVE = document.querySelector(".SAVE");

//let get the input
let fullName = document.querySelector(".name");
let email = document.querySelector(".email");

SAVE.addEventListener("click", function () {
    console.log("SAVE-", fullName.value);
    if (fullName.value.length === 0 && email.value.length === 0) {
        alert("fields can't be empty")
        return;
    }
    alert(`Successfully registered- name ${fullName.value} email ${email.value}`);
    window.location.href = "/index.html"



})