//PROCEED button
let sessionStorageData = JSON.parse(sessionStorage.getItem("userDetails"));


//let get the input
let Name = document.querySelector(".Name");
let Phone = document.querySelector(".number");
let Email = document.querySelector(".email");

Email.value=sessionStorageData.email;
let REGISTER = document.querySelector(".REGISTER");
REGISTER.addEventListener("click", function () {
    if (Name.value.length === 0 || Phone.value.length ===0 || Email.value.length === 0) {
        alert("Inputs can't be empty")
        return;
    }

    if (isNaN(Phone.value) || Phone.value.length !== 10) {
        alert("Enter 10 digit phone number")
        return
    }
    if ( Email.value.length<10) {
        alert("enter a valid email minimum length: 10")
        return
    }

    sessionStorageData["Name"] = Name.value;
    sessionStorageData["phoneNumber"] = Phone.value;
    sessionStorageData["email"] = Email.value;

    sessionStorage.setItem("userDetails", JSON.stringify(sessionStorageData));
    alert(`  ${Name.value} Successfully registered  `);

    window.location.href = "/index.html"
})