//PROCEED button
let PROCEED = document.querySelector(".PROCEED");

//let get the input
let inputOrNumber = document.querySelector(".emailInput");

PROCEED.addEventListener("click", clickProceed)

function clickProceed() {

    console.log("PROCEED-", inputOrNumber.value);
    if (inputOrNumber.value.length === 0) {
        alert("fields can't be empty")
        return;
    }

    if (!isNaN(inputOrNumber.value)) {
        if (inputOrNumber.value.length !== 10) {
            alert("Number should be 10 digit!")
            return;
        }
        console.log("is a number");
        //  pointer-events: none;
        inputOrNumber.style.pointerEvents = "none"
        inputOrNumber.style.backgroundColor = "#f3f3f3"
        inputOrNumber.style.border = "none"
        PROCEED.innerHTML = "VERIFY"
        PROCEED.style.pointerEvents = "none"
        PROCEED.style.backgroundColor = "#f3f3f3"
        document.querySelector(".otp-secction").style.display = "block"
        let otp = Math.floor(1000 + Math.random() * 9000);
        alert(`Copy the otp:  ${otp}`)

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

        //to varify otp
        function forVerify() {
            if ((VERIFY.value) == otp) {
                let userDetails = {
                    phoneNumber: inputOrNumber.value
                }
                sessionStorage.setItem('userDetails', JSON.stringify(userDetails));
                window.location.href = "/pages/Almost There Page After NumberSignUp/AlmostThere.html"

            } else {
                alert("Incorrect Otp")
                return
            }

        }


    } else {
        console.log("is a email");
        let userDetails = {
            email: inputOrNumber.value
        }
        sessionStorage.setItem('userDetails', JSON.stringify(userDetails));
        window.location.href = "../EmailRegister/register.html"
    }

}

