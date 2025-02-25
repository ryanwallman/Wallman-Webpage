document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
    const navItems = document.querySelectorAll(".nav-item");

    function setActiveNavItem(id) {
        console.log("Activating section:", id);  // Debugging log
        navItems.forEach(nav => nav.classList.remove("active"));
        document.querySelector(`.nav-item[href="#${id}"]`)?.classList.add("active");
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.1) { // Lower threshold
                setActiveNavItem(entry.target.id);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));
});
