//SAVE button
let SAVE = document.querySelector(".SAVE");

//let get the input
let fullName = document.querySelector(".name");
let email = document.querySelector(".email");
let sessionStorageData = JSON.parse(sessionStorage.getItem("userDetails"));


SAVE.addEventListener("click", function () {
    console.log("SAVE-", fullName.value);
    if (fullName.value.length === 0 && email.value.length === 0) {
        alert("fields can't be empty")
        return;
    }
    sessionStorageData["Name"] = fullName.value;
    sessionStorageData["email"] = email.value;

    sessionStorage.setItem("userDetails", JSON.stringify(sessionStorageData));
    alert(` ${fullName.value} Successfully registered`);
    window.location.href = "/index.html"



})