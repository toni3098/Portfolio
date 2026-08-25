document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".navbar ul li a");
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
 
    const setActive = (activeLink) => {
        navLinks.forEach((link) => link.parentElement.classList.remove("active"));
        if (activeLink) {
            activeLink.parentElement.classList.add("active");
        }
    };
 
    // 1. Mark active based on current page URL
    navLinks.forEach((link) => {
        const linkPath = link.getAttribute("href").split("/").pop();
        if (linkPath === currentPath) {
            setActive(link);
        }
    });
 
    // 2. Mark active immediately on click
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            setActive(link);
        });
    });
});