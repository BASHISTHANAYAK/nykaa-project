
const initSlider3 = () => {
    const imageList3 = document.querySelector(".Explore_slider-wrapper .image-list");
    const slideButtons3 = document.querySelectorAll(".Explore_slider-wrapper .slide-button");
    const maxScrollLeft3 = imageList3.scrollWidth - imageList3.clientWidth;



    // Slide images according to the slide button clicks
    slideButtons3.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount3 = imageList3.clientWidth * direction;
            imageList3.scrollBy({ left: scrollAmount3, behavior: "smooth" });
        });
    });

    // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons3[0].style.display = imageList3.scrollLeft <= 0 ? "none" : "flex";
        slideButtons3[1].style.display = imageList3.scrollLeft >= maxScrollLeft3 ? "none" : "flex";
    }



    // Call these two functions when image list scrolls
    imageList3.addEventListener("scroll", () => {
        handleSlideButtons();
    });
}

window.addEventListener("resize", initSlider3);
window.addEventListener("load", initSlider3);