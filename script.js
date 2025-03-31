document.addEventListener("DOMContentLoaded", function () {
    // Select all navigation links with hashes
    const navLinks = document.querySelectorAll("nav a[href^='#']");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default jump behavior
            
            const targetId = this.getAttribute("href"); // Get target section ID
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});









    document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".reveal");
    let lastScrollY = window.scrollY;

    function revealSections() {
        let currentScrollY = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.95 && currentScrollY < lastScrollY) {
                // Scrolling up: Show section
                section.classList.add("visible");
                section.classList.remove("hidden");
            } else if (currentScrollY > lastScrollY) {
                // Scrolling down: Hide section
                section.classList.remove("visible");
                section.classList.add("hidden");
            }
        });

        lastScrollY = currentScrollY;
    }

    // Initial smooth appearance on page load
    setTimeout(() => {
        sections.forEach(section => {
            section.classList.add("visible");
        });
    }, 500);

    window.addEventListener("scroll", revealSections);
});


       document.addEventListener("DOMContentLoaded", function () {
    // Hamburger Menu Toggle
    const hamburger = document.getElementById("hamburger");
    const menu = document.querySelector(".menu");

    hamburger.addEventListener("click", function () {
        const hamIcon = this.querySelector(".hamburger-icon");
        const crossIcon = this.querySelector(".cross-icon");

        menu.classList.toggle("menu-visible"); // Smooth transition for menu
        hamIcon.classList.toggle("hidden");
        crossIcon.classList.toggle("hidden");
    });

    // Smooth Scroll Animation for Projects
    const elements = document.querySelectorAll(".my-col,.rereveal");

    function revealOnScroll() {
        elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight * 0.85;

            if (rect.top < windowHeight) {
                el.classList.add("show");
            } else {
                el.classList.remove("show"); // Disappear when scrolling up
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Initial check on page load

    // Open projects in a new tab
    window.openProject = function (url) {
        window.open(url, "_blank");
    };
});




document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled"); // Scale up when scrolling down
        } else {
            navbar.classList.remove("scrolled"); // Reset when at the top
        }
    });
});
