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

        // Adjust iframe size to maximize available space
        function adjustIframeSize() {
            const header = document.querySelector('header');
            const footer = document.querySelector('footer');
            const gameControls = document.querySelector('.game-controls');
            const gameTitle = document.querySelector('.game-container h2');
            
            const headerHeight = header ? header.offsetHeight : 0;
            const footerHeight = footer ? footer.offsetHeight : 0;
            const controlsHeight = gameControls ? gameControls.offsetHeight : 0;
            const titleHeight = gameTitle ? gameTitle.offsetHeight : 0;
            
            const availableHeight = window.innerHeight - headerHeight - footerHeight - controlsHeight - titleHeight;
            
            const iframeContainer = document.querySelector('.iframe-container');
            if (iframeContainer) {
                iframeContainer.style.height = `${availableHeight}px`;
            }
        }
        
        // Adjust size on load and window resize
        window.addEventListener('load', adjustIframeSize);
        window.addEventListener('resize', adjustIframeSize);

        // Make sure iframe takes focus when the page loads for better game experience
        window.addEventListener('load', () => {
            setTimeout(() => {
                if (iframe) {
                    iframe.focus();
                    adjustIframeSize();
                }
            }, 1000);
        });
    }
}); 