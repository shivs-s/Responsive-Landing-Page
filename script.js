// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Section switching
const navLinks = document.querySelectorAll('#navbar a');
const sections = document.querySelectorAll('.menu-section');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        // Remove 'active' class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        // Add 'active' class to clicked link
        this.classList.add('active');

        // Hide all sections
        sections.forEach(sec => sec.style.display = 'none');
        // Show the corresponding section
        const sectionId = this.getAttribute('data-section');
        document.getElementById(sectionId).style.display = 'block';

        // Optionally, scroll to top when switching
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
});

// On page load, highlight 'Home'
window.addEventListener('DOMContentLoaded', () => {
    navLinks[0].classList.add('active');
});
