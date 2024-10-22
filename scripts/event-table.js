// TABLE MODAL
const table_data = [
    {
        name: "Cloud Innovation Summit",
        date: "2024-10-15",
        speaker: "Jane Doe",
        status: "Completed",
        attendees: 300,
    },
    {
        name: "Blockchain Revolution Conference",
        date: "2024-11-05",
        speaker: "Dr. Peter Smith",
        status: "In Progress",
        attendees: 650,
    },
    {
        name: "AI in Healthcare Symposium",
        date: "2024-12-01",
        speaker: "Dr. Aisha Malik",
        status: "Completed",
        attendees: 400,
    },
    {
        name: "Future of Fintech Forum",
        date: "2024-10-25",
        speaker: "Jane Lee",
        status: "Completed",
        attendees: 200,
    },
    {
        name: "Data Analytics in Business",
        date: "2024-11-12",
        speaker: "Rachel Moore",
        status: "Completed",
        attendees: 180,
    },
    {
        name: "Sustainable Energy Expo",
        date: "2024-09-28",
        speaker: "Prof. Alan Green",
        status: "Completed",
        attendees: 720,
    },
    {
        name: "Web3 Interfaces Workshop",
        date: "2024-10-10",
        speaker: "Kevin Adams",
        status: "In Progress",
        attendees: 300,
    },
    {
        name: "Cyber Security for Startups",
        date: "2024-11-19",
        speaker: "Emily Zhang",
        status: "Completed",
        attendees: 325,
    },
    {
        name: "Smart Cities Forum",
        date: "2024-10-18",
        speaker: "Dr. Maria Hernandez",
        status: "In Progress",
        attendees: 590,
    },
    {
        name: "Tech Safari Mixer",
        date: "2024-09-29",
        speaker: "Guest Panel",
        status: "In Progress",
        attendees: 800,
    },
]

// Get modal element and close button
const modal = document.getElementById("eventModal")
const closeModalBtn = document.querySelector(".close")

// Function to open the modal with event details
function showModal(index) {
    document.getElementById("modalEventName").textContent =
        table_data[index].name
    document.getElementById(
        "modalEventDate"
    ).textContent = `Date: ${table_data[index].date}`
    document.getElementById("modalEventDescription").textContent =
        table_data[index].status

    document.getElementById(
        "modalEventAttendees"
    ).textContent = `${table_data[index].attendees} Attendees`
    // Display the modal
    modal.style.display = "block"
}

// Add event listener to close modal
closeModalBtn.onclick = function () {
    modal.style.display = "none"
}

// Close modal when clicking outside of the modal content
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}

// Add click event listener to each table row
document.querySelectorAll("tr").forEach((row, index) => {
    row.addEventListener("click", function () {
        showModal(index - 1)
    })
})

// SCRIPT
