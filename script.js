document.addEventListener("DOMContentLoaded", function() {
    const loadingScreen = document.getElementById("loadingScreen");
    const progressBar = document.querySelector(".progress");
    const terminalScreen = document.querySelector(".computer");
    const monitor = document.querySelector(".monitor");
    const screen = document.querySelector(".screen"); 
    const inputField = document.getElementById("commandInput");
    const outputDiv = document.getElementById("output");
    const keys = document.querySelectorAll(".key");
    
    let zoomEnabled = false;
    let scale = 2; // Start fully zoomed in on the monitor

    // Set initial zoom only on the monitor
    terminalScreen.style.transform = `scale(${scale})`;
    terminalScreen.style.transformOrigin = "center center";
    terminalScreen.style.transition = "transform 1s ease-in-out";
    terminalScreen.style.position = "fixed";
    terminalScreen.style.top = "75%";
    terminalScreen.style.left = "50%";
    terminalScreen.style.transform = `translate(-50%, -50%) scale(${scale})`;
    
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

    
    window.addEventListener("wheel", function(event) {
        if (!zoomEnabled) return;
    
        // Decrease zoom on scroll and limit the scale to a minimum of 1 (zoom out only)
        if (event.deltaY > 0) {
            scale -= event.deltaY * 0.05;
            scale = Math.max(1, scale); // Prevent zooming in, limit scale to 1
        }
    
        terminalScreen.style.transform = `translate(-50%, -85%) scale(${scale})`;
    });

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
            case "hello":
                response = "Hi! How are you?";
                break;
            case "help":
                response = "Available commands: <br> - help <br> - about <br> - projects <br> - contact <br> - clear";
                break;
            case "about":
                response = "I'm a web developer passionate about coding and design!";
                break;
            case "projects":
                response = "Check out my projects at <a href='#projects' style='color: cyan'>Projects Section</a>";
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
    }

    // On-Screen Keyboard Functionality
    keys.forEach(key => {
        key.addEventListener("click", function() {
            const keyText = this.innerText.toLowerCase();
            
            if (keyText === "enter") {
                processCommand(inputField.value.trim());
                inputField.value = "";
            } else if (keyText === "delete" || keyText === "backspace") {
                inputField.value = inputField.value.slice(0, -1);
            } else {
                inputField.value += keyText;
            }
            inputField.focus();
        });
    });

    // Power Button Functionality
    powerButton.addEventListener("click", function() {
        const isOn = powerButton.classList.contains("on");

        if (isOn) {
            // Turn off: make the monitor invisible and non-interactive
            screen.style.opacity = "0";         // Make the monitor invisible
            screen.style.pointerEvents = "none"; // Disable interactions with the monitor
            powerButton.classList.remove("on");
            powerButton.classList.add("off");
        } else {
            // Turn on: make the monitor visible and interactive
            screen.style.opacity = "1";          // Make the monitor visible again
            screen.style.pointerEvents = "auto"; // Re-enable interactions with the monitor
            powerButton.classList.remove("off");
            powerButton.classList.add("on");
            inputField.focus(); // Focus input when turning on
        }
    });
});
