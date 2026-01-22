// Enhanced JavaScript for modern UI features

(function() {
    'use strict';

    // Header scroll effect
    const header = document.querySelector('.header-enhanced');
    if (header) {
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            lastScroll = currentScroll;
        });
    }

    // Scroll reveal animation using Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with scroll-reveal class
    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });

    // Image lazy loading with fade-in
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Card tilt effect on mouse move (desktop only)
    if (window.innerWidth > 768) {
        const cards = document.querySelectorAll('.card-enhanced');
        cards.forEach(card => {
            card.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });
        });
    }

    // Ripple effect for buttons
    const buttons = document.querySelectorAll('.btn-enhanced');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add loaded class to body
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });

    // Parallax effect for hero section (subtle)
    const hero = document.querySelector('.hero-enhanced');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroContent = hero.querySelector('.hero-content');
            if (heroContent && scrolled < hero.offsetHeight) {
                heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
        });
    }

    // Performance: Debounce scroll events
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

    // Optimize scroll handlers
    const optimizedScrollHandler = debounce(() => {
        // Scroll-based animations
    }, 10);

    window.addEventListener('scroll', optimizedScrollHandler, { passive: true });

    // Maintenance Popup - Auto show on page load
    const maintenancePopup = document.getElementById('maintenancePopup');
    const maintenanceClose = document.getElementById('maintenanceClose');
    
    if (maintenancePopup) {
        // Function to close popup
        const closePopup = () => {
            maintenancePopup.classList.remove('active');
            document.body.style.overflow = '';
        };

        // Close button click handler
        if (maintenanceClose) {
            maintenanceClose.addEventListener('click', closePopup);
        }

        // Close on overlay click
        const overlay = maintenancePopup.querySelector('.maintenance-overlay');
        if (overlay) {
            overlay.addEventListener('click', closePopup);
        }

        // Show popup after page loads
        window.addEventListener('load', () => {
            setTimeout(() => {
                maintenancePopup.classList.add('active');
            }, 500);
        });

        // Prevent body scroll when popup is active
        const body = document.body;
        const updateBodyScroll = () => {
            if (maintenancePopup.classList.contains('active')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
            }
        };

        // Watch for class changes
        const observer = new MutationObserver(updateBodyScroll);
        observer.observe(maintenancePopup, {
            attributes: true,
            attributeFilter: ['class']
        });
        updateBodyScroll();
    }

})();
