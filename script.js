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

    // Add fullscreen button functionality if needed in the future
    const iframe = document.querySelector('.iframe-container iframe');
    if (iframe) {
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