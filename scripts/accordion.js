// Accordion functionality
document.querySelectorAll(".accordion-header").forEach((header) => {
    header.addEventListener("click", function () {
        const content = this.nextElementSibling
        const icon = this.querySelector(".accordion-icon")

        // Toggle the content visibility
        if (content.style.display === "flex") {
            content.style.display = "none"
        } else {
            content.style.display = "flex"
        }
    })
})
