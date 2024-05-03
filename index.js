
// Navbar
const nav = document.querySelector(".entire-Navbar-Div");
fetch("./assets/navbar.html")
    .then(res => res.text())
    .then(data => {
        nav.innerHTML = data;
    })


// FIRSTSLIDE
const FIRSTSLIDE = document.querySelector(".Slider-container");
fetch("./assets/FirstSlider.html")
    .then(res => res.text())
    .then(data => {
        FIRSTSLIDE.innerHTML = data;
    })


//SecondSLIDE
const SecondSLIDE = document.querySelector(".Second-image-scroll-Slider-container");
fetch("./assets/BrandInFocusSlider.html")
    .then(res => res.text())
    .then(data => {
        SecondSLIDE.innerHTML = data;
    })

// Explore Image SLIDE
const ExploreSLIDE = document.querySelector(".Explore-Top-Brands");
fetch("./assets/ExploreImageSlider.html")
    .then(res => res.text())
    .then(data => {
        ExploreSLIDE.innerHTML += data;
    })

// Footer
const FooterSLIDE = document.querySelector('.footer');
fetch("./assets/footer.html")
    .then(res => res.text())
    .then(data => {
        FooterSLIDE.innerHTML += data;
    })

//Hot List and its JS
const hotListSlide = document.querySelector('.hotSlider');
fetch("./assets/hotList.html")
    .then(res => res.text())
    .then(data => {
        hotListSlide.innerHTML += data;

        // for js part
        const parser = new DOMParser()
        const doc = parser.parseFromString(data, 'text/html')
        eval(doc.querySelector("script").textContent)

    })

