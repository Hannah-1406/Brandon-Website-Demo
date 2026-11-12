
// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "×" : "☰";

});


// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";

    });

});


// =========================
// CURRENT YEAR
// =========================

document.getElementById("year").textContent =
    new Date().getFullYear();


// =========================
// PROJECT GALLERY LIGHTBOX
// =========================

const galleryItems = document.querySelectorAll(".gallery-item");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const lightboxClose = document.getElementById("lightboxClose");


// Open image when clicked

galleryItems.forEach(item => {

    item.addEventListener("click", () => {

        const image = item.querySelector("img");

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        lightbox.classList.add("active");

        lightboxClose.focus();

    });

});


// Close image viewer

function closeLightbox() {

    lightbox.classList.remove("active");
    lightboxImage.src = "";

}

lightboxClose.addEventListener("click", closeLightbox);


// Close when clicking outside the image

lightbox.addEventListener("click", event => {

    if (event.target === lightbox) {
        closeLightbox();
    }

});


// Close using Escape key

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeLightbox();
    }

});


// =========================
// CONTACT FORM
// =========================

document.getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        // Replace with the actual company email address.

        const businessEmail = "your@email.com";

        const subject = encodeURIComponent(
            "New Website Project Inquiry"
        );

        const body = encodeURIComponent(

            "Name: " + name +
            "\nEmail: " + email +
            "\nPhone: " + phone +
            "\n\nMessage: " + message

        );

        window.location.href =
            "mailto:" + businessEmail +
            "?subject=" + subject +
            "&body=" + body;

    });
