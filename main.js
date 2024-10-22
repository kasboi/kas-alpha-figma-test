import createChart from "./scripts/chart"
import "./scripts/carousel"
import "./scripts/event-table"
import "./scripts/accordion"
import "./scripts/responsiveness"

// Navbar state
let isOpen = false

document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar")
    const collapseBtn = document.getElementById("collapse-btn")

    changeIcon(isOpen)
    initialNavbar()

    const themeBtn = document.querySelector("input")
    themeBtn.addEventListener("click", () => {
        console.log(themeBtn.checked)
    })

    // Toggle sidebar class on button click
    collapseBtn.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed")
    })

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
        themeBtn.checked = savedTheme === "dark" // Set the toggle based on saved theme
        document.documentElement.setAttribute("data-theme", savedTheme)
        createChart(savedTheme) // Create the chart with saved theme
        // Set footer icons
        footerIconsToggle(savedTheme)
    } else {
        createChart("light") // Default to light theme if no theme is saved
    }

    // Theme toggle event listener
    themeBtn.addEventListener("click", () => {
        const newTheme = themeBtn.checked ? "dark" : "light"

        document.documentElement.setAttribute("data-theme", newTheme)

        // Save the new theme to localStorage
        localStorage.setItem("theme", newTheme)

        // Set footer icons
        footerIconsToggle(newTheme)

        // Re-create the chart with updated theme
        createChart(newTheme)
    })
})

const footerIconsToggle = (theme) => {
    const footer_icon_dark = document.querySelectorAll(".icon-dark")
    const footer_icon_light = document.querySelectorAll(".icon-light")

    const menuIconDark = document.querySelector("#menu-dark")
    const menuIconLight = document.querySelector("#menu-light")

    if (theme === "dark") {
        // footer_icon_dark.style.display = "none"
        // footer_icon_light.style.display = "inline"
        for (let i = 0; i < footer_icon_dark.length; i++) {
            const dark = footer_icon_dark[i]
            const light = footer_icon_light[i]

            dark.style.display = "none"
            light.style.display = "inline"
        }
        menuIconDark.style.display = "inline"
        menuIconLight.style.display = "none"
    } else {
        for (let i = 0; i < footer_icon_dark.length; i++) {
            const dark = footer_icon_dark[i]
            const light = footer_icon_light[i]

            dark.style.display = "inline"
            light.style.display = "none"
        }
        menuIconDark.style.display = "block"
        menuIconLight.style.display = "inline"
    }
}
// NAVBAR

const sidebar = document.querySelector(".sidebar")
const nav_box = document.querySelector(".nav-box")
function initialNavbar() {
    sidebar.style.display = "none"
    setTimeout(() => {
        sidebar.style.display = "none"
    }, 300)
    nav_box.style.position = "relative"
    isOpen = false
}

document.querySelectorAll(".menu-icon").forEach((item) => {
    item.addEventListener("click", () => {
        if (isOpen) {
            initialNavbar()
        } else {
            sidebar.style.display = "block"
            setTimeout(() => {
                sidebar.style.width = "100%"
            }, 300)

            nav_box.style.position = "fixed"
            isOpen = true
        }
        changeIcon(isOpen)
    })
})

function changeIcon(state) {
    if (state) {
        document.querySelector("button.menu-icon").style.display =
            "inline-block"
        document.querySelector("img.menu-icon").style.display = "none"
    } else {
        document.querySelector("button.menu-icon").style.display = "none"
        document.querySelector("img.menu-icon").style.display = "inline"
    }
}
