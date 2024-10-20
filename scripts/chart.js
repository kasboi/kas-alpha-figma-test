const ctx = document.getElementById("myChart").getContext("2d")

let myChart

// Function to create a chart with theme-based gridline colors
function createChart(theme) {
    const gridColor =
        theme === "dark" ? "rgba(255, 255, 255, 0.45)" : "rgba(0, 0, 0, 0.2)"
    const labelColor = theme === "dark" ? "#fff" : "#000"

    // Destroy the previous chart if it exists
    if (myChart) {
        myChart.destroy()
    }

    // Create a new chart with updated gridline colors
    myChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: [
                "Jan",
                "Feb",
                "Mar",
                "April",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            datasets: [
                {
                    label: "", // Set label to an empty string
                    data: [
                        650, 900, 700, 400, 1000, 500, 850, 300, 850, 650, 900,
                        600,
                    ],
                    borderWidth: 1,
                    backgroundColor: "#8576ff", // Bars color
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true, // Start y-axis at zero
                    ticks: {
                        stepSize: 200, // Set step size between tick marks
                        color: labelColor,
                    },
                    grid: {
                        color: gridColor, // Gridline color based on the theme
                    },
                },
                x: {
                    ticks: {
                        color: labelColor,
                    },
                    grid: {
                        color: gridColor, // Gridline color for x-axis based on the theme
                    },
                },
            },
            plugins: {
                legend: {
                    display: false, // Disable the legend (label box)
                },
            },
        },
    })
}

export default createChart