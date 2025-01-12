// Add this at the top of your script.js
console.log('Script loaded');

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
    const buttons = document.querySelectorAll('.view-pricing-btn');
    console.log('Found pricing buttons:', buttons.length);
    
    buttons.forEach(btn => {
        console.log('Button data-app:', btn.dataset.app);
    });
    
    initPricingModal();
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle functionality
    const initMobileMenu = () => {
        const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
        const menuIcon = document.querySelector('.mobile-nav-icon');

        if (menuBtn && navLinks && menuIcon) {
            // Toggle menu with improved animation
            menuBtn.addEventListener('click', function(e) {
                e.stopPropagation();
    navLinks.classList.toggle('active');
                menuIcon.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
                
                // Add slide animation
                if (navLinks.classList.contains('active')) {
                    navLinks.style.transform = 'translateY(0)';
                    navLinks.style.opacity = '1';
                } else {
                    navLinks.style.transform = 'translateY(-10px)';
                    navLinks.style.opacity = '0';
                }
            });

            // Close menu when clicking outside
            document.addEventListener('click', function(e) {
                if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
                    navLinks.classList.remove('active');
                    menuIcon.textContent = '☰';
                    navLinks.style.transform = 'translateY(-10px)';
                    navLinks.style.opacity = '0';
                }
            });
        }
    };

    // Smooth scrolling for all anchor links
    const initSmoothScroll = () => {
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
        e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    };

    // Set active nav link based on current page
    const setActiveNavLink = () => {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.desktop-nav a').forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    };

    // Card hover effects for all pages
    const initCardEffects = () => {
        const cards = document.querySelectorAll('.file-card, .doc-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 8px 30px rgba(0, 255, 255, 0.3)';
            });

            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '';
            });
        });
    };

    // Button effects for all pages
    const initButtonEffects = () => {
        const buttons = document.querySelectorAll('.btn, .download-btn, .doc-btn');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
                this.style.boxShadow = '0 5px 15px rgba(0, 255, 255, 0.4)';
            });

            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '';
            });

            // Touch feedback
            button.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            });

            button.addEventListener('touchend', function() {
                this.style.transform = 'scale(1)';
            });
        });
    };

    // VPN Files section collapse functionality
    const initCollapsibleSections = () => {
        const vpnSection = document.querySelector('.vpn-files');
        if (vpnSection) {
            const sectionHeader = vpnSection.querySelector('h2');
            sectionHeader.addEventListener('click', () => {
                vpnSection.classList.toggle('collapsed');
            });
        }
    };

    // Enhanced card hover effects
    const enhanceNeonEffects = () => {
        document.querySelectorAll('.file-card, .doc-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.02)';
                this.style.boxShadow = '0 0 30px rgba(184, 41, 255, 0.5)';
            });

            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = '';
            });
        });

        document.querySelectorAll('.btn, .download-btn, .doc-btn').forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px) scale(1.05)';
                this.style.boxShadow = '0 0 30px rgba(184, 41, 255, 0.6)';
            });

            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = '';
            });
        });
    };

    // Add slide functionality
    const initSlideMode = () => {
        if (window.innerWidth <= 768) {
            const slidingSections = document.querySelector('.sliding-sections');
            const sections = document.querySelectorAll('.sliding-sections section');
            const dots = document.querySelectorAll('.slide-dot');
            
            if (slidingSections && sections.length && dots.length) {
                // Update active dot on scroll
                slidingSections.addEventListener('scroll', () => {
                    const index = Math.round(slidingSections.scrollLeft / slidingSections.offsetWidth);
                    dots.forEach((dot, i) => {
                        dot.classList.toggle('active', i === index);
                    });
                });

                // Dot click navigation
                dots.forEach((dot, index) => {
                    dot.addEventListener('click', () => {
                        slidingSections.scrollTo({
                            left: index * slidingSections.offsetWidth,
                            behavior: 'smooth'
                        });
                    });
                });

                // Touch swipe handling
                let touchStartX = 0;
                slidingSections.addEventListener('touchstart', (e) => {
                    touchStartX = e.touches[0].clientX;
                });

                slidingSections.addEventListener('touchend', (e) => {
                    const touchEnd X = e.changedTouches[0].clientX;
                    const diff = touchStart X - touchEnd X;
                    
                    if (Math.abs(diff) > 50) {
                        const currentIndex = Math.round(slidingSections.scrollLeft / slidingSections.offsetWidth);
                        const newIndex = diff > 0 ? currentIndex + 1 : currentIndex - 1;
                        
                        if (newIndex >= 0 && newIndex < sections.length) {
                            slidingSections.scrollTo({
                                left: newIndex * slidingSections.offsetWidth,
                                behavior: 'smooth'
                            });
                        }
                    }
                });
            }
        }
    };

    // VPN Files sliding functionality
    const initVPNFilesSlider = () => {
        if (window.innerWidth <= 768) {
            const container = document.querySelector('.files-container.sliding-wrapper');
            const cards = container?.querySelectorAll('.file-card');
            const dots = document.querySelectorAll('.vpn-files .slide-dot');
            
            if (container && cards.length && dots.length) {
                // Update active dot on scroll
                container.addEventListener('scroll', () => {
                    const index = Math.round(container.scrollLeft / container.offsetWidth);
                    dots.forEach((dot, i) => {
                        dot.classList.toggle('active', i === index);
                    });
                });

                // Dot click navigation
                dots.forEach((dot, index) => {
                    dot.addEventListener('click', () => {
                        container.scrollTo({
                            left: index * container.offsetWidth,
                            behavior: 'smooth'
                        });
                    });
                });

                // Touch swipe handling
                let touchStartX = 0;
                container.addEventListener('touchstart', (e) => {
                    touchStartX = e.touches[0].clientX;
                });

                container.addEventListener('touchend', (e) => {
                    const touchEndX = e.changedTouches[0].clientX;
                    const diff = touchStartX - touchEndX;
                    
                    if (Math.abs(diff) > 50) {
                        const currentIndex = Math.round(container.scrollLeft / container.offsetWidth);
                        const newIndex = diff > 0 ? currentIndex + 1 : currentIndex - 1;
                        
                        if (newIndex >= 0 && newIndex < cards.length) {
                            container.scrollTo({
                                left: newIndex * container.offsetWidth,
                                behavior: 'smooth'
                            });
                        }
                    }
                });
            }
        }
    };

    // Documentation section sliding functionality
    const initDocsSlider = () => {
        if (window.innerWidth <= 768) {
            const container = document.querySelector('.docs-container.sliding-wrapper');
            const cards = container?.querySelectorAll('.doc-card');
            const dots = document.querySelectorAll('.docs-tutorials .slide-dot');
            
            if (container && cards.length && dots.length) {
                // Update active dot on scroll
                container.addEventListener('scroll', () => {
                    const index = Math.round(container.scrollLeft / container.offsetWidth);
                    dots.forEach((dot, i) => {
                        dot.classList.toggle('active', i === index);
                    });
                });

                // Dot click navigation
                dots.forEach((dot, index) => {
                    dot.addEventListener('click', () => {
                        container.scrollTo({
                            left: index * container.offsetWidth,
                            behavior: 'smooth'
        });
    });
});

                // Touch swipe handling
                let touchStartX = 0;
                container.addEventListener('touchstart', (e) => {
                    touchStartX = e.touches[0].clientX;
                });

                container.addEventListener('touchend', (e) => {
                    const touchEndX = e.changedTouches[0].clientX;
                    const diff = touchStartX - touchEndX;
                    
                    if (Math.abs(diff) > 50) {
                        const currentIndex = Math.round(container.scrollLeft / container.offsetWidth);
                        const newIndex = diff > 0 ? currentIndex + 1 : currentIndex - 1;
                        
                        if (newIndex >= 0 && newIndex < cards.length) {
                            container.scrollTo({
                                left: newIndex * container.offsetWidth,
                                behavior: 'smooth'
                            });
                        }
                    }
                });
            }
        }
    };

    // Pricing Modal Functionality
    const initPricingModal = () => {
        const modal = document.getElementById('pricingModal');
        const viewButtons = document.querySelectorAll('.view-pricing-btn');
        const closeButton = document.querySelector('.close-modal');

        // Debug logs
        console.log('Modal:', modal);
        console.log('View Buttons:', viewButtons.length);
        console.log('Close Button:', closeButton);

        if (!modal || !viewButtons.length || !closeButton) {
            console.error('Missing required elements for pricing modal');
            return;
        }

        // Show modal function
        const showModal = (appId) => {
            const pricingContent = document.getElementById(`${appId}-prices`);
            if (pricingContent) {
                // Hide all pricing contents first
                document.querySelectorAll('.modal-content').forEach(content => {
                    content.classList.remove('active');
                });

                // Show the selected pricing content and modal
                pricingContent.classList.add('active');
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        };

        // Close modal function
        const closeModal = () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            document.querySelectorAll('.modal-content').forEach(content => {
                content.classList.remove('active');
            });
        };

        // Add click event to each view pricing button
        viewButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const appId = button.dataset.app;
                console.log('Button clicked for:', appId);
                showModal(appId);
            });
        });

        // Close button event
        closeButton.addEventListener('click', (e) => {
            e.preventDefault();
            closeModal();
        });

        // Close on outside click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    };

    // Initialize all functionalities
    initMobileMenu();
    initSmoothScroll();
    setActiveNavLink();
    initCardEffects();
    initButtonEffects();
    initCollapsibleSections();
    enhanceNeonEffects();
    initSlideMode();
    initVPNFilesSlider();
    initDocsSlider();
    initPricingModal();
});

// Scroll animations for all pages
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.file-card, .doc-card, .hero-content');
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add('animate');
        }
    });
});
// Update on resize
window.addEventListener('resize', initSlideMode);
window.addEventListener('resize', initVPNFilesSlider);
window.addEventListener('resize', initDocsSlider);

// Price toggle functionality
function togglePrices(priceListId) {
    // Hide all price lists first
    document.querySelectorAll('.price-list').forEach(list => {
        if (list.id !== priceListId) {
            list.classList.remove('show');
        }
    });
    
    // Toggle the selected price list
    const priceList = document.getElementById(priceListId);
    if (priceList) {
        priceList.classList.toggle('show');
    }
}

// Close price lists when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.app-card')) {
        document.querySelectorAll('.price-list').forEach(list => {
            list.classList.remove('show');
        });
    }
});

