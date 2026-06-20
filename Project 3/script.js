// ===============================
// StudySync Interactive Features
// ===============================

// Mobile Menu Toggle
const menuBtn = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

// Newsletter Form Validation & Dynamic Update
const form = document.querySelector(".news-form");
const emailInput = document.querySelector(".news-email");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = emailInput.value.trim();

        if (email === "") {
            alert("Please enter your email address.");
            return;
        }

        if (!email.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }

        alert(`Thank you for subscribing, ${email}!`);

        const newsDesc = document.querySelector(".news-desc");
        if (newsDesc) {
            newsDesc.textContent =
                "✅ Successfully subscribed to our newsletter!";
        }

        emailInput.value = "";
    });
}

// Start Now Button Interaction
const startBtn = document.querySelector(".start-button");

if (startBtn) {
    startBtn.addEventListener("click", (e) => {
        e.preventDefault();

        startBtn.textContent = "Started ✓";
        startBtn.style.backgroundColor = "#22c55e";
    });
}

// Take Tour Button Interaction
const tourBtn = document.querySelector(".tour-button");

if (tourBtn) {
    tourBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const featureSection =
            document.querySelector(".feature-container");

        if (featureSection) {
            featureSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
}

// Feature Cards Click Effect
const featureCards = document.querySelectorAll(".feature-card");

featureCards.forEach((card) => {
    card.addEventListener("click", () => {
        const title =
            card.querySelector(".feature-title").textContent;

        alert(`You selected: ${title}`);
    });
});

// Dynamic Testimonial Counter
const testimonialTitle =
    document.querySelector(".testimonial-title");
const testimonials =
    document.querySelectorAll(".testimonial-card");

if (testimonialTitle) {
    testimonialTitle.textContent =
        `What ${testimonials.length} Users Say About Us`;
}