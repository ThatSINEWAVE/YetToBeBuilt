document.addEventListener('DOMContentLoaded', () => {
    // Button hover sound effect
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            playHoverSound();
        });

        button.addEventListener('click', () => {
            playClickSound();
        });
    });

    // Repo button functionality
    const repoBtn = document.getElementById('repoBtn');
    repoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Repository link will be available once created.');
    });

    function playHoverSound() {
        // Using console log for placeholder
        console.log('Button hover sound');
    }

    function playClickSound() {
        // Sound would be implemented here
        console.log('Button click sound');
    }

    // Add subtle animation to the background
    let x = 0;

    function animateBackground() {
        x += 0.01;
        const r = Math.floor(Math.sin(x) * 5 + 10);
        const g = Math.floor(Math.sin(x + 1) * 5 + 10);
        const b = Math.floor(Math.sin(x + 2) * 5 + 10);

        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        requestAnimationFrame(animateBackground);
    }

    animateBackground();
});