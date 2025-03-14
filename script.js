document.addEventListener("DOMContentLoaded", function() {
    const loadingScreen = document.getElementById("loadingScreen");
    const progressBar = document.querySelector(".progress");
    const terminalScreen = document.querySelector(".computer");
    const monitor = document.querySelector(".monitor");
    const screen = document.querySelector(".screen"); 
    const inputField = document.getElementById("commandInput");
    const outputDiv = document.getElementById("output");
    const keys = document.querySelectorAll(".key");
    const keyboard = document.querySelector(".keyboard");
    const navbar = document.getElementById("navbar");
    const powerButton = document.querySelector(".power-button"); 
    const hamburger = document.getElementById("hamburger");
    const submenu = document.getElementById("submenu");

    let zoomEnabled = false;
    let scale = window.innerWidth <= 750 ? 1.5 : 2;

    // Initially hide keyboard and navbar
    navbar.style.display = "none";
    keyboard.style.display = "none"; 

    function applyZoom() {
        terminalScreen.style.transform = `translate(-50%, -50%) scale(${scale})`;
        terminalScreen.style.transformOrigin = "center center";
        terminalScreen.style.transition = "transform 1s ease-in-out";
        terminalScreen.style.position = "fixed";
        terminalScreen.style.top = "75%";
        terminalScreen.style.left = "50%";
    }

    applyZoom();

    // Simulated Boot Loading
    let progress = 0;
    const interval = setInterval(() => {
        progress += 20;
        progressBar.style.width = `${progress}%`;

        if (progress >= 100) {
            clearInterval(interval);
            loadingScreen.style.display = "none";
            terminalScreen.style.display = "flex";
            inputField.focus();
            setTimeout(() => { zoomEnabled = true; }, 500); 
        }
    }, 100);

    let startY = 0; // Track initial touch position

    function handleZoomOut() {
        if (!zoomEnabled) return;

        scale -= 0.05;
        scale = Math.max(1, scale);
        terminalScreen.style.transform = `translate(-50%, -85%) scale(${scale})`;

        if (scale <= 1.3) { 
            navbar.style.display = "flex"; 
            keyboard.style.display = "flex"; 
        }
    }

    // Handle mouse wheel scrolling (for desktop)
    window.addEventListener("wheel", function(event) {
        if (event.deltaY !== 0) {
            handleZoomOut();
        }
    });

    // Handle touch scrolling (for mobile)
    window.addEventListener("touchstart", function(event) {
        if (!zoomEnabled) return;
        startY = event.touches[0].clientY;
    });

    window.addEventListener("touchmove", function(event) {
        if (!zoomEnabled) return;
        let deltaY = event.touches[0].clientY - startY;

        if (Math.abs(deltaY) > 20) {
            handleZoomOut();
        }
    });

    function autoScroll() {
        if (window.innerWidth <= 768) { 
            setTimeout(() => {
                screen.scrollTop = screen.scrollHeight;
            }, 50); 
        }
    }
    
    function addTerminalText(text) {
        let terminal = document.querySelector(".screen");
        let newLine = document.createElement("div");
        newLine.classList.add("terminal");
        newLine.textContent = text;
        terminal.appendChild(newLine);
        autoScroll();
    }

    // Process Commands
    inputField.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            processCommand(inputField.value.trim());
            inputField.value = "";
        }
    });

    function processCommand(command) {
        let response = "";

        switch (command.toLowerCase()) {
            case "help":
                response = "Available commands: <br> - help <br> - about <br> - projects <br> - contact <br> - clear";
                break;
            case "about":
                response = "I'm a web developer passionate about coding and design!";
                break;
            case "projects":
                response = "Check out my projects at <a href='./pages/projects.html' style='color: cyan'>Projects Section</a>";
                break;
            case "contact":
                response = "Email me at: ryanwallman7@gmail.com";
                break;
            case "clear":
                outputDiv.innerHTML = "";
                return;
            default:
                response = "Command not recognized. Type 'help' for a list of commands.";
        }

        outputDiv.innerHTML += `<p>C:\\> ${command}</p><p>${response}</p>`;
        autoScroll();
    }

    // On-Screen Keyboard Functionality
    keys.forEach(key => {
        key.addEventListener("click", handleKeyPress);
        key.addEventListener("touchstart", handleKeyPress);
    });

    function handleKeyPress(event) {
        event.preventDefault(); // Prevents focus from going to input field
        inputField.blur(); // Ensures mobile keyboard doesn't pop up

        const keyText = event.target.innerText.toLowerCase();

        if (keyText === "enter") {
            processCommand(inputField.value.trim());
            inputField.value = "";
        } else if (keyText === "delete" || keyText === "backspace") {
            inputField.value = inputField.value.slice(0, -1);
        } else if (keyText === "shift") {
            // Implement shift key logic if needed
        } else {
            inputField.value += keyText;
        }
    }

    // Power Button Functionality
    powerButton.addEventListener("click", function() {
        const isOn = powerButton.classList.contains("on");

        if (isOn) {
            screen.style.opacity = "0";         
            screen.style.pointerEvents = "none"; 
            powerButton.classList.remove("on");
            powerButton.classList.add("off");
        } else {
            screen.style.opacity = "1";          
            screen.style.pointerEvents = "auto"; 
            powerButton.classList.remove("off");
            powerButton.classList.add("on");
            inputField.focus();
        }
    });

    // Toggle the submenu when the hamburger is clicked
    hamburger.addEventListener("click", function() {
        submenu.classList.toggle("submenu-visible");
    });
});