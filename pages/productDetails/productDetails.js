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


// getting saved product details fron sessionstorage

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

    // AddToBag
    let AddToBag = document.querySelector(".AddToBag");
    let getUserInfo = JSON.parse(sessionStorage.getItem("userDetails"));
    let CartProducts = getUserInfo.CartProducts
    if (!CartProducts) {
        CartProducts = getUserInfo.CartProducts = []
    }

    if (!getUserInfo ||
        !getUserInfo.Name ||
        !getUserInfo.email ||
        !getUserInfo.phoneNumber) {
        AddToBag.innerText = "SignUp / SignIn"
    }

    // click cart button
    AddToBag.addEventListener("click", addToCart)
    function addToCart() {
        getUserInfo = JSON.parse(sessionStorage.getItem("userDetails"));
        CartProducts = getUserInfo.CartProducts
        if (!getUserInfo ||
            !getUserInfo.Name ||
            !getUserInfo.email ||
            !getUserInfo.phoneNumber) {
            window.location.href = "/pages/LoginOrSignUp/LoginOrSignUp.html"
            return
        }

        // if userCart is empty
        if (CartProducts.length == 0) {
            // saving the obj to sessionstorage
            selectedProduct.numberOfProduct = 1
            CartProducts.push(selectedProduct)
            sessionStorage.setItem("userDetails", JSON.stringify(getUserInfo))
            alert("Product added to Bag!")
        } else {
            let isAlreadyInTheCart = CartProducts.filter((obj) => {
                return obj.id == selectedProduct.id
            })

            // console.log("selectedProduct-", selectedProduct);
            // console.log("isAlreadyInTheCart-", isAlreadyInTheCart);

            if (isAlreadyInTheCart == 0) {
                selectedProduct.numberOfProduct = 1
                CartProducts.push(selectedProduct)
                sessionStorage.setItem("userDetails", JSON.stringify(getUserInfo))
                alert("Product added to Bag!")
            } else {
                alert("Product already in the cart")
                return
            }
        }

    }

} else {
    window.location.href = "/index.html"
}