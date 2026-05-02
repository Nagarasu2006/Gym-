// Initialize AOS (Animate on Scroll)
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000, // Animation speed
        once: true,     // Animation happens only once
        offset: 120     // Trigger point
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70, // Offset for sticky nav
                behavior: 'smooth'
            });
        }
    });
});

// Dynamic Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(0, 0, 0, 0.95)';
        nav.style.padding = '15px 8%';
    } else {
        nav.style.background = 'rgba(0, 0, 0, 0.8)';
        nav.style.padding = '20px 8%';
    }
});
