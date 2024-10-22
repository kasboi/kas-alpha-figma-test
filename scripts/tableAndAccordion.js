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
    document.getElementById("modalEventName").textContent = table_data[index].name
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

// Add click event listener to each accordion text
document.querySelectorAll(".accordion-text").forEach((row, index) => {
    row.addEventListener("click", function (e) {
        showModal(index)
        e.stopPropagation()
    })
})

// Sort table based on status
const status_select = document.querySelector("#status")
const table_rows = document.querySelectorAll("tr")
const completed_events = document.querySelectorAll("[status=completed")
const inProgress_events = document.querySelectorAll("[status=in-progress")


function tr_filter(value, attr_data) {
    table_rows.forEach((el) => {
        const status = el.getAttribute(attr_data)
        console.log(status, value);
        
        // To ignore the header table row since it has no status attribute
        if (status) el.style.display = status === value ? "table-row" : "none"
    })
}

// Filter the table on value change of the status dropdown
status_select.addEventListener("change", () => {
    const option = status_select.value


    if (option === "completed") {
        tr_filter("completed", "status")
    } else if (option === "in-progress") {
        tr_filter("in-progress", "status")
    } else {
        table_rows.forEach((el) => (el.style.display = "table-row"))
    }
})

// Sort table based on date
const date_select = document.querySelector("#date")

date_select.addEventListener("change", () => {
    // Reset the status dropdown
    status_select.selectedIndex = 1
    status_select.dispatchEvent(new Event('change'));

    const option = date_select.value
    tr_filter(option, "date")
})