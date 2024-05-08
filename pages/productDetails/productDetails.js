// Navbar
const nav = document.querySelector(".productDetails-Nav");
fetch("/assets/navbar.html")
    .then(res => res.text())
    .then(data => {
        nav.innerHTML += data;

        // for js part
        const parser = new DOMParser()
        const doc = parser.parseFromString(data, 'text/html')
        eval(doc.querySelector("script").textContent)
    })


// Footer
const FooterSLIDE = document.querySelector('.footer');
fetch("/assets/footer.html")
    .then(res => res.text())
    .then(data => {
        FooterSLIDE.innerHTML += data;
    })


// Getting saved product details from sessionStorage and display it on product page
let selectedProduct = JSON.parse(sessionStorage.getItem('selectedProduct'));

if (selectedProduct) {
    // image
    let productImage = document.querySelector(".productImage")
    productImage.src = selectedProduct.image
    // product-Heading
    let productHeading = document.querySelector(".product-Heading")
    productHeading.innerText = selectedProduct.productName
    // productQuantity
    let productQuantity = document.querySelector(".productQuantity")
    productQuantity.innerText = `(${selectedProduct.quantity})ml`
    // ratingDetails
    let ratingDetails = document.querySelector(".ratingDetails")
    ratingDetails.innerHTML += `${selectedProduct.rating}/5 | ${selectedProduct.totalRatings}k ratings & ${selectedProduct.totalReviews} reviews`

    //MrpPtag
    let previousMRP = document.querySelector(".previousMRP")
    previousMRP.innerText += ` ₹${selectedProduct.MRP} `

    //price
    let price = document.querySelector(".price")
    price.innerText += ` ₹${selectedProduct.price} `
    let AddToBag = document.querySelector(".AddToBag");






    // check if user signedin or not if not then show signin button 

    let getUserInfo = JSON.parse(sessionStorage.getItem("userDetails"));
    if (!getUserInfo ||
        !getUserInfo.Name ||
        !getUserInfo.email ||
        !getUserInfo.phoneNumber) {
        AddToBag.innerText = "SignUp / SignIn"
        // click cart button if loggedin else goto login page
        AddToBag.addEventListener("click", addToCart)
        function addToCart() {
            window.location.href = "/pages/LoginOrSignUp/LoginOrSignUp.html"
            return
        }
    }



}