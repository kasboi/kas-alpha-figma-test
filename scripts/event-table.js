// TABLE MODAL

// Get modal element and close button
const modal = document.getElementById("eventModal")
const closeModalBtn = document.querySelector(".close")

// Function to open the modal with event details
function showModal(eventDetails) {
    document.getElementById("modalEventName").textContent = eventDetails.name
    document.getElementById(
        "modalEventDate"
    ).textContent = `Date: ${eventDetails.date}`
    document.getElementById("modalEventDescription").textContent =
        eventDetails.description

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
document.querySelectorAll("tr").forEach((row) => {
    row.addEventListener("click", function () {
        // Get event details from the data attribute
        const eventDetails = JSON.parse(this.getAttribute("data-event-details"))
        showModal(eventDetails)
    })
})
