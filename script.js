/* ================================
   MOBILE MENU
================================ */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* ================================
   CLOSE MOBILE MENU
================================ */

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* ================================
   CURRENT YEAR
================================ */

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


/* ================================
   SCROLL REVEAL ANIMATION
================================ */

const animatedElements = document.querySelectorAll(
    ".section, .hero-content, .hero-card"
);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.12
    }

);


animatedElements.forEach(element => {

    observer.observe(element);

});


/* ================================
   ACTIVE NAVIGATION
================================ */

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });


    navItems.forEach(item => {

        item.style.color = "";

        if (
            item.getAttribute("href") ===
            `#${currentSection}`
        ) {

            item.style.color = "#64ffda";

        }

    });

});