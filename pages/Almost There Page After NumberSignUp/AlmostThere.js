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
    if (!email.value.length >= 10) {
        alert("enter a valid email minimum length: 10")
        return;
    }

    //saving registered user into localstorage 
    let AllRegisteredUsers = JSON.parse(localStorage.getItem("AllRegisteredUsers")) || []
    // checking if the email already exists
    let isEmailExists = AllRegisteredUsers.some((obj) => obj.email == email.value)
    if (isEmailExists) {
        alert("email exists user a different one or login")
        return;
    } else {
        sessionStorageData["Name"] = fullName.value;
        sessionStorageData["email"] = email.value;
        AllRegisteredUsers.push(sessionStorageData)
        localStorage.setItem("AllRegisteredUsers", JSON.stringify(AllRegisteredUsers));
        // and a copy session storage for logout purpose
        sessionStorage.setItem("userDetails", JSON.stringify(sessionStorageData));
        alert(` ${fullName.value} Successfully registered`);
        window.location.href = "/index.html"
    }


})