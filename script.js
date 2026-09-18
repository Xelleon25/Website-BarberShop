const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", function () {
    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
});
const navItems = document.querySelectorAll(".nav-links a");
navItems.forEach(function (link) {
    link.addEventListener("click", function () {
        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");
    });
});
const revealElements = document.querySelectorAll(".reveal");
function revealOnScroll() {
    revealElements.forEach(function (element) {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const visiblePoint = 120;
        if (elementTop < windowHeight - visiblePoint) {
            element.classList.add("active");
        }
    });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();