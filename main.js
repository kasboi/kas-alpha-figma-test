import createChart from "./scripts/chart"
import './scripts/carousel'
import './scripts/event-table'

document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar")
    const collapseBtn = document.getElementById("collapse-btn")

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
    } else {
        createChart("light") // Default to light theme if no theme is saved
    }

    // Theme toggle event listener
    themeBtn.addEventListener("click", () => {
        const newTheme = themeBtn.checked ? "dark" : "light"

        document.documentElement.setAttribute("data-theme", newTheme)

        // Save the new theme to localStorage
        localStorage.setItem("theme", newTheme)

        // Re-create the chart with updated theme
        createChart(newTheme)
    })
})