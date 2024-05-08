//PROCEED button
let PROCEED = document.querySelector(".PROCEED");

//let get the input
let inputOrNumber = document.querySelector(".emailInput");
let AllRegisteredUsers = JSON.parse(localStorage.getItem("AllRegisteredUsers"))
console.log("log/re AllRegisteredUsers-", AllRegisteredUsers);
let showUserName = document.querySelector(".if-A-RegisteredUser");
let isAregisteredUser;

PROCEED.addEventListener("click", clickProceed)

function clickProceed() {
    console.log("PROCEED-", inputOrNumber.value);

    if (inputOrNumber.value.length === 0) {
        alert("fields can't be empty")
        return;
    }

    // if input value is a number
    if (!isNaN(inputOrNumber.value)) {
        console.log("is a number");

        if (inputOrNumber.value.length !== 10) {
            alert("Number should be 10 digit!")
            return;
        }
        //if AllRegisteredUsers available check  if a already register user
        if (AllRegisteredUsers && AllRegisteredUsers.length > 0) {
            isAregisteredUser = AllRegisteredUsers.filter((obj) => obj.phoneNumber == inputOrNumber.value)
            console.log("isAregisteredUser-", isAregisteredUser);
            if (isAregisteredUser && isAregisteredUser.length > 0) {
                showUserName.style.display = "block";
                // show the user name on screen
                showUserName.innerText = `Hello ${isAregisteredUser[0].Name}`
            }
        }
    } // if input value is not a number then its a email
    else {
        console.log("its a email");
        // checking if a registered user by email
        if (AllRegisteredUsers && AllRegisteredUsers.length > 0) {
            isAregisteredUser = AllRegisteredUsers.filter((obj) => obj.email == inputOrNumber.value)
            console.log("isAregisteredUser-", isAregisteredUser);
            if (isAregisteredUser && isAregisteredUser.length > 0) {
                showUserName.style.display = "block";
                // show the user name on screen
                showUserName.innerText = `Hello ${isAregisteredUser[0].email}`
            }
        }
    }



    inputOrNumber.style.pointerEvents = "none"
    inputOrNumber.style.backgroundColor = "#f3f3f3"
    inputOrNumber.style.border = "none"
    PROCEED.innerHTML = "VERIFY"
    PROCEED.style.pointerEvents = "none"
    PROCEED.style.backgroundColor = "#f3f3f3"
    document.querySelector(".otp-secction").style.display = "block"
    let otp = Math.floor(1000 + Math.random() * 9000);
    alert(`Copy the otp for verification:  ${otp}`)

    //changing color of button according to input
    let VERIFY = document.querySelector(".VERIFY")
    VERIFY.addEventListener("input", function () {
        console.log("VERIFY", VERIFY.value);
        if (VERIFY.value.length >= 4) {
            PROCEED.style.backgroundColor = "#fc2779"
            PROCEED.style.pointerEvents = "auto"
        } else {
            PROCEED.style.pointerEvents = "none"
            PROCEED.style.backgroundColor = "#f3f3f3"
        }
    })


    PROCEED.removeEventListener("click", clickProceed);
    PROCEED.addEventListener("click", forVerify)
    //varify otp
    function forVerify() {
        // if entered correct otp
        if ((VERIFY.value) == otp) {
            // if AregisteredUser great and  direct to home page
            let userDetails;
            if (isAregisteredUser && isAregisteredUser.length > 0) {
                sessionStorage.setItem('userDetails', JSON.stringify(isAregisteredUser[0]));
                alert("Thanks for LogIn 😊")
                window.location.href = "/index.html"
                return;
            } else if (!isNaN(inputOrNumber.value)) {
                // if not registered and input is a number
                if (inputOrNumber.value.length !== 10) {
                    alert("Number should be 10 digit!")
                    return;
                }
                userDetails = { phoneNumber: inputOrNumber.value }
                sessionStorage.setItem('userDetails', JSON.stringify(userDetails));
                window.location.href = "/pages/Almost There Page After NumberSignUp/AlmostThere.html"
                return;
            } else {
                //if not registered and input is not a number
                if (!inputOrNumber.value.length >= 10) {
                    alert("enter a valid email (minimum length. 10)")
                    return;
                }
                userDetails = { email: inputOrNumber.value }
                sessionStorage.setItem('userDetails', JSON.stringify(userDetails));
                window.location.href = "/pages/EmailRegister/register.html"
                return;

            }
        } else {
            alert("Incorrect Otp")
            return
        }

    }


}

