// filepath: c:\Users\Zambrano\Documents\repos\curriculum\js\main.js
document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            menuBtn.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }

    // Close menu when clicking on a link
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuBtn.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    // Scroll animations
    const animateElements = document.querySelectorAll('.animate');
    
    function checkPosition() {
        let windowHeight = window.innerHeight;
        
        animateElements.forEach(element => {
            let positionFromTop = element.getBoundingClientRect().top;
            
            if (positionFromTop - windowHeight <= -100) {
                element.classList.add('fadeInUp');
            }
        });
    }
    
    window.addEventListener('scroll', checkPosition);
    checkPosition();
});