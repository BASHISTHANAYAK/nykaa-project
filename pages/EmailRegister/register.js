//get user entered inputs 
let sessionStorageData = JSON.parse(sessionStorage.getItem("userDetails"));


//let get the input
let Name = document.querySelector(".Name");
let Phone = document.querySelector(".number");
let Email = document.querySelector(".email");

Email.value = sessionStorageData.email;
let REGISTER = document.querySelector(".REGISTER");
REGISTER.addEventListener("click", function () {
    if (Name.value.length === 0 || Phone.value.length === 0 || Email.value.length === 0) {
        alert("Inputs can't be empty")
        return;
    }

    if (isNaN(Phone.value) || Phone.value.length !== 10) {
        alert("Enter 10 digit phone number")
        return
    }
    if (Email.value.length < 10) {
        alert("enter a valid email minimum length: 10")
        return
    }

    let AllRegisteredUsers = JSON.parse(localStorage.getItem("AllRegisteredUsers")) || []
    // checking if the phone  already exists
    let isNumberExists = AllRegisteredUsers.some((obj) => obj.phoneNumber == Phone.value)
    if (isNumberExists) {
        alert("PhoneNumber exists user a different one or login")
        return;
    } else {
        sessionStorageData["Name"] = Name.value;
        sessionStorageData["phoneNumber"] = Phone.value;
        sessionStorageData["email"] = Email.value;
        sessionStorageData["CartProducts"] = []
        //saving registered user into localstorage 
        AllRegisteredUsers.push(sessionStorageData)
        localStorage.setItem("AllRegisteredUsers", JSON.stringify(AllRegisteredUsers));
        // and a copy session storage for logout purpose
        sessionStorage.setItem("userDetails", JSON.stringify(sessionStorageData));
        alert(`  ${Name.value} Successfully registered  `);
        window.location.href = "/index.html"
    }
})