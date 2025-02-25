document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("constellationCanvas");
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const stars = [];
    const maxStars = 100;
    const mouse = { x: null, y: null, radius: 150 };

    class Star {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.radius = Math.random() * 2 + 1;
            this.dx = Math.random() * 1 - 0.25;
            this.dy = Math.random() * 1 - 0.25;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = "white";
            ctx.fill();
        }

        update() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x < 0 || this.x > canvas.width) this.dx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.dy *= -1;
            this.draw();
        }
    }

    for (let i = 0; i < maxStars; i++) {
        stars.push(new Star());
    }

    window.addEventListener("mousemove", (event) => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    });

    function drawLines() {
        for (let i = 0; i < stars.length; i++) {
            for (let j = i + 1; j < stars.length; j++) {
                let distance = Math.hypot(stars[i].x - stars[j].x, stars[i].y - stars[j].y);
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.moveTo(stars[i].x, stars[i].y);
                    ctx.lineTo(stars[j].x, stars[j].y);
                    ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }

            let mouseDistance = Math.hypot(stars[i].x - mouse.x, stars[i].y - mouse.y);
            if (mouseDistance < mouse.radius) {
                ctx.beginPath();
                ctx.moveTo(stars[i].x, stars[i].y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach(star => star.update());
        drawLines();
        requestAnimationFrame(animate);
    }

    animate();
});
