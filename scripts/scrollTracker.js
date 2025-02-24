document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
    const navItems = document.querySelectorAll(".nav-item");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    navItems.forEach((item) => item.classList.remove("active"));
                    const activeNav = document.querySelector(`.nav-item[href="#${entry.target.id}"]`);
                    if (activeNav) activeNav.classList.add("active");
                }
            });
        },
        { threshold: 0.6 } // Adjusted threshold for better accuracy
    );

    sections.forEach((section) => observer.observe(section));
});
