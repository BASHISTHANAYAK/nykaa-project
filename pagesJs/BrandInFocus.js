
const initSlider2 = () => {
    const imageList2 = document.querySelector(".second_slider-wrapper .image-list");
    const slideButtons2 = document.querySelectorAll(".second_slider-wrapper .slide-button");
    const maxScrollLeft2 = imageList2.scrollWidth - imageList2.clientWidth;



    // Slide images according to the slide button clicks
    slideButtons2.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount2 = imageList2.clientWidth * direction;
            imageList2.scrollBy({ left: scrollAmount2, behavior: "smooth" });
        });
    });

    // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons2[0].style.display = imageList2.scrollLeft <= 0 ? "none" : "flex";
        slideButtons2[1].style.display = imageList2.scrollLeft >= maxScrollLeft2 ? "none" : "flex";
    }



    // Call these two functions when image list scrolls
    imageList2.addEventListener("scroll", () => {
        handleSlideButtons();
    });
}

window.addEventListener("resize", initSlider2);
window.addEventListener("load", initSlider2);