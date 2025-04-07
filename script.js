document.addEventListener('DOMContentLoaded', () => {
    // Highlight active nav item
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage) {
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href');
            if (linkPage === currentPage) {
                link.classList.add('active');
            }
        });
    }

    // Handle game page functionality
    const iframe = document.querySelector('.iframe-container iframe');
    if (iframe) {
        // Add a fullscreen button
        const gameControls = document.querySelector('.game-controls');
        if (gameControls) {
            const fullscreenBtn = document.createElement('button');
            fullscreenBtn.textContent = '⛶ Fullscreen';
            fullscreenBtn.className = 'fullscreen-button';
            fullscreenBtn.addEventListener('click', () => {
                // Request fullscreen for the iframe or its container
                const iframeContainer = document.querySelector('.iframe-container');
                if (iframeContainer.requestFullscreen) {
                    iframeContainer.requestFullscreen();
                } else if (iframeContainer.webkitRequestFullscreen) {
                    iframeContainer.webkitRequestFullscreen();
                } else if (iframeContainer.mozRequestFullScreen) {
                    iframeContainer.mozRequestFullScreen();
                } else if (iframeContainer.msRequestFullscreen) {
                    iframeContainer.msRequestFullscreen();
                }
            });
            gameControls.insertBefore(fullscreenBtn, gameControls.firstChild);
        }

        // Make sure iframe takes focus when the page loads for better game experience
        window.addEventListener('load', () => {
            setTimeout(() => {
                if (iframe) {
                    iframe.focus();
                }
            }, 1000);
        });
    }
}); 