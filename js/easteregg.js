// Easter Egg: 
// Click on the top right corner of the screen to change the background color
document.addEventListener("click", function(event) {
    if (event.clientX > 50 && event.clientY < 50) { // top right corner
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    document.body.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// Easter Egg:
// Type '1337' to display a secret event

// Track typed keys
let typedKeys = "";
const secretWord = '1337';

document.addEventListener("keydown", function(event) {
    typedKeys += event.key;
    if (typedKeys.includes(secretWord)) {
        triggerSecret();
        typedKeys = "";
    }
});

// Function to trigger the secret
function triggerSecret() {

    // Display a rainbow
    const rainbow = document.createElement('div');
    rainbow.style.position = 'fixed';
    rainbow.style.top = '0';
    rainbow.style.left = '0';
    rainbow.style.width = '100%';
    rainbow.style.height = '5px';
    rainbow.style.background = 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)';
    rainbow.style.animation = 'slideDown 3s ease-in-out';
    document.body.appendChild(rainbow);

    // Display a message
    const message = document.createElement('div');
    message.textContent = '1337 Leet Haxor';
    message.style.position = 'fixed';
    message.style.top = '20px';
    message.style.left = '50%';
    message.style.transform = 'translateX(-50%)';
    message.style.padding = '15px';
    message.style.background = '#fff';
    message.style.color = '#ff69b4';
    message.style.border = '2px solid #ff69b4';
    message.style.borderRadius = '20px';
    message.style.animation = 'bounce 1s ease-in-out';
    document.body.appendChild(message);

    // Remove the elements after 3 seconds
    setTimeout(() => {
        rainbow.remove();
        message.remove();
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(0);
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-100%);
        }
    }

    @keyframes slideDown {
        0% { transform: translateY(-100%); }
        20% { transform: translateY(0); }
        80% { transform: translateY(0); }
        100% { transform: translateY(-100%); }
    }

    @keyframes bounce {
        0% { transform: translateX(-50%) translateY(-100vh); }
        60% { transform: translateX(-50%) translateY(20px); }
        80% { transform: translateX(-50%) translateY(-10px); }
        100% { transform: translateX(-50%) translateY(0); }
    }
`;
document.head.appendChild(style);
