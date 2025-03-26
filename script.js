const display = document.getElementById("display");
const cube = document.getElementById("cube");
let commandLine = "";
let history = [];
let historyIndex = -1;

// Initial welcome message
const welcomeMessage = `Hi there,\nI'm Ryan Wallman\n·Software Engineer\n·Technology Consultant\n\nWelcome to Wallman OS v1.0\n\Type 'help' for commands\n\n> `;
display.textContent = welcomeMessage;

// Create cursor element
const cursor = document.createElement("span");
cursor.className = "cursor";
cursor.textContent = "_";
display.appendChild(cursor);

// Ensure display is focusable and gets focus
display.setAttribute("tabindex", "0");
display.addEventListener("click", () => display.focus());
display.focus();

// Handle keyboard input
document.addEventListener("keydown", (e) => {
    if (document.activeElement === display) {
        handleKeyPress(e);
    }
});

function handleKeyPress(e) {
    // Prevent default for most keys
    if (
        e.key.length === 1 ||
        e.key === "Backspace" ||
        e.key === "Enter" ||
        e.key === "ArrowUp" ||
        e.key === "ArrowDown"
    ) {
        e.preventDefault();
    }

    if (e.key === "Enter") {
        // Execute command
        executeCommand(commandLine);
        commandLine = "";
        historyIndex = -1;
        updateDisplay();
    } else if (e.key === "Backspace") {
        // Backspace
        if (commandLine.length > 0) {
            commandLine = commandLine.slice(0, -1);
            updateDisplay();
        }
    } else if (e.key === "ArrowUp") {
        // History up
        if (historyIndex < history.length - 1) {
            historyIndex++;
            commandLine = history[history.length - 1 - historyIndex];
            updateDisplay();
        }
    } else if (e.key === "ArrowDown") {
        // History down
        if (historyIndex > 0) {
            historyIndex--;
            commandLine = history[history.length - 1 - historyIndex];
            updateDisplay();
        } else if (historyIndex === 0) {
            historyIndex = -1;
            commandLine = "";
            updateDisplay();
        }
    } else if (e.key.length === 1) {
        // Regular character
        commandLine += e.key;
        updateDisplay();
    }
}

function updateDisplay() {
    // Get current content without the cursor
    let content = display.textContent.replace("_", "");

    // Find the last prompt
    const lastPromptIndex = content.lastIndexOf("> ") + 2;
    const staticContent = content.substring(0, lastPromptIndex);

    // Update with current command line
    display.textContent = staticContent + commandLine;
    display.appendChild(cursor);

    // Auto-scroll to bottom
    display.scrollTop = display.scrollHeight;
}

function executeCommand(cmd) {
    // Add to history
    if (cmd.trim() !== "") {
        history.push(cmd);
        if (history.length > 10) history.shift();
    }

    // Process command
    let response = "";

    switch (cmd.toLowerCase()) {
        case "help":
            response = "\nCommands:\n- help - Show help\n- about - Who am I?\n- experience - my experience\n- skills - my skills\n- projects - my projects\n- contact - contact me\n- clear - Clear screen\n- reset - Reset screen";
            break;
        case "clear":
            display.innerHTML = "> ";
            display.appendChild(cursor);
            display.scrollTop = 0;
            return;
        case "reset":
            display.innerHTML = "" + welcomeMessage;
            display.appendChild(cursor);
            display.scrollTop = 0;
            return;
        case "about":
            response = "<br>Redirecting to About...";
            document.getElementById("about")?.scrollIntoView({ behavior: 'smooth' });
            break;
        case "experience":
            response = "<br>Redirecting to Experience...";
            document.getElementById("experience")?.scrollIntoView({ behavior: 'smooth' });
            break;
        case "skills":
            response = "<br>Redirecting to Skills...";
            document.getElementById("skills")?.scrollIntoView({ behavior: 'smooth' });
            break;
        case "projects":
            response = "<br>Redirecting to Projects...";
            document.getElementById("projects")?.scrollIntoView({ behavior: 'smooth' });
            break;
        case "contact":
            response = "<br>Redirecting to Contact...";
            document.getElementById("contact")?.scrollIntoView({ behavior: 'smooth' });
            break;
        default:
            response = `<br>${cmd}: command not found`;
    }

    // Append response to the display
    display.innerHTML += `<br>\n${response}\n\n<br>> `;
    display.appendChild(cursor);

    // Auto-scroll to bottom
    display.scrollTop = display.scrollHeight;
    
}




// Drag to rotate functionality
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };
let currentRotation = { x: -15, y: 30 };

// Add rolling scanline effect
const rollingLine = document.createElement("div");
rollingLine.classList.add("rolling-line");
document.querySelector(".screen").appendChild(rollingLine);

// Add scanline effect
const scanlines = document.createElement("div");
scanlines.classList.add("scanlines");
document.querySelector(".screen").appendChild(scanlines);


cube.addEventListener("mousedown", (e) => {
    // Only start dragging if not clicking on the screen
    if (e.target === display) return;

    isDragging = true;
    previousMousePosition = { x: e.clientX, y: e.clientY };
    cube.style.cursor = "grabbing";
    e.preventDefault();
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - previousMousePosition.x;
    const deltaY = e.clientY - previousMousePosition.y;

    currentRotation.y += deltaX * 0.5;
    currentRotation.x -= deltaY * 0.5;

    // Limit vertical rotation
    currentRotation.x = Math.max(-60, Math.min(60, currentRotation.x));

    cube.style.transform = `rotateX(${currentRotation.x}deg) rotateY(${currentRotation.y}deg)`;

    previousMousePosition = { x: e.clientX, y: e.clientY };
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    cube.style.cursor = "grab";
});

// Touch support for mobile
cube.addEventListener("touchstart", (e) => {
    if (e.target === display) return;
    isDragging = true;
    previousMousePosition = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
    };
    e.preventDefault();
}, { passive: false });

document.addEventListener("touchmove", (e) => {
    if (!isDragging) return;

    const deltaX = e.touches[0].clientX - previousMousePosition.x;
    const deltaY = e.touches[0].clientY - previousMousePosition.y;

    currentRotation.y += deltaX * 0.5;
    currentRotation.x -= deltaY * 0.5;

    // Limit vertical rotation
    currentRotation.x = Math.max(-60, Math.min(60, currentRotation.x));

    cube.style.transform = `rotateX(${currentRotation.x}deg) rotateY(${currentRotation.y}deg)`;

    previousMousePosition = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
    };

    e.preventDefault();
}, { passive: false });

document.addEventListener("touchend", () => {
    isDragging = false;
});

// Add this to your script.js
document.getElementById('hamburger').addEventListener('click', function() {
    const submenu = document.getElementById('submenu');
    submenu.classList.toggle('submenu-visible');
});