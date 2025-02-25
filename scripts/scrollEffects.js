document.addEventListener("DOMContentLoaded", function () {
    const skillIcons = document.querySelectorAll(".skills-grid img");
    const timelineItems = document.querySelectorAll(".timeline-item");

    function createObserver(elements, delay = 150) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Get the element's position relative to viewport
                    let elementIndex = [...elements].indexOf(entry.target);
                    
                    setTimeout(() => {
                        entry.target.classList.add("show");
                    }, elementIndex * delay); // Stagger effect for each item

                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        elements.forEach(el => observer.observe(el));
    }

    createObserver(skillIcons, 100);
    createObserver(timelineItems, 300);
});