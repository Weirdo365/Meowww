const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const mainContainer = document.getElementById('main-container');
const successContainer = document.getElementById('success-container');

// Function to move the 'No' button randomly
function moveButton() {
    // Get the window dimensions
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Get the button dimensions
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    
    // Calculate random position, keeping the button fully visible
    const randomX = Math.max(0, Math.floor(Math.random() * (windowWidth - btnWidth)));
    const randomY = Math.max(0, Math.floor(Math.random() * (windowHeight - btnHeight)));
    
    // Apply new position using fixed coordinates so it breaks out of the container
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

// Move button on hover (Desktop)
noBtn.addEventListener('mouseover', moveButton);

// Move button on click (Mobile friendly fallback)
noBtn.addEventListener('click', moveButton);

// When she clicks 'Yes'
yesBtn.addEventListener('click', () => {
    mainContainer.classList.add('hidden');
    successContainer.classList.remove('hidden');
});