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


// Getting saved product details from sessionStorage
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
    if (!getUserInfo) {
        // If user details are not found, create a new object
        getUserInfo = {
            Name: "Bashistha NAYAK",
            email: "bashistha0007@gmail.com",
            phoneNumber: "0843112241"
        };
        sessionStorage.setItem("userDetails", JSON.stringify(getUserInfo));
    }

    // Initialize CartProducts as an empty array if it doesn't exist
    if (!getUserInfo.CartProducts) {
        getUserInfo.CartProducts = [];
    }

    // click cart button
    AddToBag.addEventListener("click", addToCart);
    function addToCart() {
        if (!getUserInfo.Name || !getUserInfo.email || !getUserInfo.phoneNumber) {
            window.location.href = "/pages/LoginOrSignUp/LoginOrSignUp.html";
            return;
        }

        // Check if the selected product is already in CartProducts
        let isAlreadyInCart = getUserInfo.CartProducts.some(product => product.id === selectedProduct.id);
        if (isAlreadyInCart) {
            alert("Product already in the cart");
            return;
        }

        // Save the object to session storage
        selectedProduct.numberOfProduct = 1;
        getUserInfo.CartProducts.push(selectedProduct);
        sessionStorage.setItem("userDetails", JSON.stringify(getUserInfo));
        alert("Product added to Bag!");
    }
} else {
    window.location.href = "/index.html";
}
