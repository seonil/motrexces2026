// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.overview, .why-card, .highlight-item, .brand-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Video autoplay on scroll into view
    const videoObserverOptions = {
        threshold: 0.3,
        rootMargin: '0px'
    };

    const videoObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting) {
                video.play().catch(err => {
                    console.log('Video autoplay failed:', err);
                });
            } else {
                video.pause();
            }
        });
    }, videoObserverOptions);

    // Observe highlight section video
    const highlightVideo = document.querySelector('.highlight-hero-image video');
    if (highlightVideo) {
        videoObserver.observe(highlightVideo);
    }

    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = heroSection.querySelector('.hero-content');
            const location = heroSection.querySelector('.hero-location');
            const date = heroSection.querySelector('.hero-date');

            if (parallax) {
                parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
            if (location) {
                location.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
            if (date) {
                date.style.transform = `translateY(${scrolled * 0.4}px)`;
            }
        });
    }

    // Button hover effects
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Card hover effects
    const cards = document.querySelectorAll('.why-card, .brand-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02) translateY(-5px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
        });
    });

});


// Simple utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll events
const optimizedScroll = debounce(function() {
    // Add any scroll-based optimizations here
}, 10);

window.addEventListener('scroll', optimizedScroll);
