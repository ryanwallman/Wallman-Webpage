document.addEventListener("DOMContentLoaded", () => {
    // Ensure page starts at the top
    window.scrollTo(0, 0);

    // Star Particles Effect
    const canvas = document.getElementById("particles");
    const ctx = canvas.getContext("2d");

    let stars = [];
    const numStars = 150;

    function setupCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = 200;
        stars = [];

        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
            });
        }
    }

    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#00A3FF";
        stars.forEach(star => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fill();
            star.x += star.speedX;
            star.y += star.speedY;

            if (star.x < 0 || star.x > canvas.width) star.speedX *= -1;
            if (star.y < 0 || star.y > canvas.height) star.speedY *= -1;
        });
        requestAnimationFrame(drawStars);
    }

    setupCanvas();
    drawStars();
    window.addEventListener("resize", setupCanvas);

    // Navbar Toggle
    const hamburger = document.getElementById("hamburger");
    const submenu = document.getElementById("submenu");

    hamburger.addEventListener("click", () => {
        submenu.classList.toggle("submenu-visible");
    });

    // Close the submenu when clicking outside
    document.addEventListener("click", (e) => {
        if (!hamburger.contains(e.target) && !submenu.contains(e.target)) {
            submenu.classList.remove("submenu-visible");
        }
    });
});
