function checkScreenSize() {
    const content = document.querySelector(".sidebar")

    if (window.innerWidth < 901) {
        // Apply styles for smaller screens
        content.classList.remove("collapsed")
        content.style.width = "100%"
    } else {
        content.style.display = "block"
        content.style.width = "auto"
    }
}

// Check screen size on initial load
checkScreenSize()

// Event listener for window resize
window.addEventListener("resize", () => {
    checkScreenSize()
})
