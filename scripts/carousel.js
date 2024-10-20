let slideIndex = 1
showSlides(slideIndex)

// Next/previous controls
function plusSlides(n) {
    showSlides((slideIndex += n))
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides((slideIndex = n))
}

function showSlides(n) {
    let i
    let slides = document.querySelectorAll(".event-carousel__slides")
    let dots = document.querySelectorAll(".dot")
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }
    slides[slideIndex - 1].style.display = "block"
    dots[slideIndex - 1].className += " active"
}

document.querySelector(".dot-container").addEventListener("click", (e) => {
    currentSlide(e.target.id)
})

document.querySelector(".prev").addEventListener("click", () => {
    plusSlides(-1)
})

document.querySelector(".next").addEventListener("click", () => {
    plusSlides(1)
})

setInterval(() => {
    plusSlides(1)
}, 3000)
