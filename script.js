// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector(".mobile-menu");
const navbar = document.querySelector(".navbar");

mobileMenuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });

    // Close mobile menu if open
    if (navbar.classList.contains("active")) {
      navbar.classList.remove("active");
    }
  });
});

// Portfolio Filtering
const filterButtons = document.querySelectorAll(".portfolio-filter button");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to clicked button
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");

    portfolioItems.forEach((item) => {
      if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Header Scroll Effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    document.querySelector(".header").style.background = "rgba(255, 255, 255, 0.95)";
    document.querySelector(".header").style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
  } else {
    document.querySelector(".header").style.background = "white";
    document.querySelector(".header").style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  }
});

// Form Submission
const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for your message! I will get back to you soon.");
  contactForm.reset();
});
