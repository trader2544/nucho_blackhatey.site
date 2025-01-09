// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation on scroll
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.price-card');
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add('animate');
        }
    });
});

// Handle pricing section visibility
document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.buy-btn');
    const pricingSections = document.querySelectorAll('.pricing-section');

    // Hide all pricing sections initially
    pricingSections.forEach(section => {
        section.classList.add('hidden');
    });

    buyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Get the target pricing section
            const targetId = button.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            // Hide all pricing sections first
            pricingSections.forEach(section => {
                if (section.id !== targetId) {
                    section.classList.remove('active');
                    section.classList.add('hidden');
                }
            });

            // Toggle the target section
            if (targetSection.classList.contains('hidden')) {
                targetSection.classList.remove('hidden');
                targetSection.classList.add('active');
                
                // Smooth scroll to the pricing section
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                targetSection.classList.remove('active');
                targetSection.classList.add('hidden');
            }
        });
    });
});

// Handle Why Choose Us section collapse on mobile
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.toggle-btn');
    const featuresGrid = document.querySelector('.features-grid');
    
    if (toggleBtn && featuresGrid) {
        // Check if we're on mobile and collapse by default
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            featuresGrid.classList.add('collapsed');
            toggleBtn.classList.remove('active');
        }

        toggleBtn.addEventListener('click', () => {
            featuresGrid.classList.toggle('collapsed');
            toggleBtn.classList.toggle('active');
        });

        // Handle resize events
        window.addEventListener('resize', () => {
            const isMobile = window.innerWidth <= 768;
            if (!isMobile) {
                featuresGrid.classList.remove('collapsed');
                toggleBtn.classList.remove('active');
            } else if (!featuresGrid.classList.contains('collapsed')) {
                featuresGrid.classList.add('collapsed');
            }
        });
    }
});

// Add touch feedback
document.addEventListener('DOMContentLoaded', function() {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn, .doc-btn, .download-btn');
    buttons.forEach(button => {
        button.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        button.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Horizontal scroll with touch
    const scrollContainers = document.querySelectorAll('.files-container, .docs-container, .features-grid');
    scrollContainers.forEach(container => {
        let isDown = false;
        let startX;
        let scrollLeft;

        container.addEventListener('touchstart', (e) => {
            isDown = true;
            startX = e.touches[0].pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });

        container.addEventListener('touchend', () => {
            isDown = false;
        });

        container.addEventListener('touchmove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.touches[0].pageX - container.offsetLeft;
            const walk = (x - startX) * 2;
            container.scrollLeft = scrollLeft - walk;
        });
    });
});
