/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    const nav = document.querySelector(".nav-links");

    nav.classList.toggle("active");
}


/* =========================
   EVENT FILTER
========================= */

function filterEvents(category) {

    const events = document.querySelectorAll(".event-card");

    events.forEach(function(event) {

        const eventCategory =
            event.getAttribute("data-category");

        if (
            category === "all" ||
            eventCategory === category
        ) {
            event.style.display = "block";
        } else {
            event.style.display = "none";
        }

    });
}


/* =========================
   EVENT SELECTION
========================= */

function selectEvent(eventName, price) {

    document.getElementById("selectedEvent")
        .textContent = eventName;

    document.getElementById("selectedPrice")
        .textContent = "₹" + price.toLocaleString("en-IN");

    // Automatically select event in form
    document.getElementById("eventType").value = eventName;

    // Scroll to booking form
    document.getElementById("contact")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* =========================
   PACKAGE SELECTION
========================= */

function selectPackage(packageName, price) {

    document.getElementById("selectedEvent")
        .textContent = packageName;

    document.getElementById("selectedPrice")
        .textContent = "₹" + price.toLocaleString("en-IN");

    document.getElementById("contact")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* =========================
   BOOKING FORM
========================= */

document.getElementById("bookingForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

        const phone =
            document.getElementById("phone").value;

        const eventType =
            document.getElementById("eventType").value;

        const eventDate =
            document.getElementById("eventDate").value;

        const guests =
            document.getElementById("guests").value;


        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            eventType === "" ||
            eventDate === "" ||
            guests === ""
        ) {

            alert("Please fill in all the details.");

            return;
        }


        alert(
            "🎉 Booking Request Submitted!\n\n" +
            "Name: " + name + "\n" +
            "Event: " + eventType + "\n" +
            "Date: " + eventDate + "\n" +
            "Guests: " + guests + "\n\n" +
            "Our event management team will contact you soon."
        );


        // Clear form
        document.getElementById("bookingForm").reset();

        document.getElementById("selectedEvent")
            .textContent = "No event selected";

        document.getElementById("selectedPrice")
            .textContent = "₹0";

            

    });


/* =========================
   DATE VALIDATION
========================= */

const today = new Date();

const year = today.getFullYear();

const month =
    String(today.getMonth() + 1).padStart(2, "0");

const day =
    String(today.getDate()).padStart(2, "0");

const todayDate =
    `${year}-${month}-${day}`;

document.getElementById("eventDate")
    .setAttribute("min", todayDate);