const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = [...document.querySelectorAll(".nav-menu a")];
const sections = [...document.querySelectorAll("main section")];

function updateNavbar() {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
}

function updateActiveLink() {
    const currentSection = sections.findLast((section) => {
        return window.scrollY >= section.offsetTop - 140;
    });

    navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${currentSection?.id}`);
    });
}

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

navLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => link.classList.add("hovered"));
    link.addEventListener("mouseleave", () => link.classList.remove("hovered"));
    link.addEventListener("click", () => navMenu.classList.remove("open"));
});

window.addEventListener("scroll", () => {
    updateNavbar();
    updateActiveLink();
});

updateNavbar();
updateActiveLink();
