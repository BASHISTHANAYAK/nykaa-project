
// Navbar
const nav = document.querySelector(".entire-Navbar-Div");
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
