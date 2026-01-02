// Advanced script for CS Elite Portfolio
document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for reveal animations
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `slideUp 0.8s ease-out forwards`;
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all team cards
    document.querySelectorAll('.team-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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

    // Parallax effect on scroll
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        if (hero) {
            const scrollPosition = window.pageYOffset;
            hero.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        }

        // Update navbar on scroll
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 15, 30, 0.95)';
        } else {
            navbar.style.background = 'rgba(15, 15, 30, 0.7)';
        }
    });

    // Add hover effects to team cards
    document.querySelectorAll('.team-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.4s cubic-bezier(0.23, 1, 0.320, 1)';
        });
    });

    // Dynamic background animation
    const bgElement = document.querySelector('.animated-background');
    if (bgElement) {
        bgElement.style.animation = 'gradientShift 15s ease infinite';
    }

    // Stagger animations for hero words
    const words = document.querySelectorAll('.hero-title .word');
    words.forEach((word, index) => {
        word.style.animation = `slideUp 0.8s ease-out backwards`;
        word.style.animationDelay = `${0.1 + index * 0.1}s`;
    });

    // Button ripple effect
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.width = '1px';
            ripple.style.height = '1px';
            ripple.style.background = 'rgba(255, 255, 255, 0.6)';
            ripple.style.borderRadius = '50%';
            ripple.style.pointerEvents = 'none';
            ripple.style.animation = 'ripple 0.6s ease-out';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    }

    // Add ripple animation to stylesheet
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                width: 200px;
                height: 200px;
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Initialize AOS-like reveal animations
    const revealElements = document.querySelectorAll('.project, .tech-tag');
    revealElements.forEach((el, index) => {
        el.style.animation = `slideUp 0.8s ease-out backwards`;
        el.style.animationDelay = `${index * 0.05}s`;
        el.style.opacity = '0';
    });

    // Observe reveal elements
    revealElements.forEach(el => {
        observer.observe(el);
    });

    // Mouse tracking effect on contact section
    const contactSection = document.querySelector('.contact-section');
    if (contactSection) {
        document.addEventListener('mousemove', (e) => {
            if (window.scrollY > window.innerHeight * 0.8) {
                const x = (e.clientX / window.innerWidth) * 20 - 10;
                const y = (e.clientY / window.innerHeight) * 20 - 10;
                contactSection.style.transform = `perspective(1000px) rotateX(${y * 0.5}deg) rotateY(${x * 0.5}deg)`;
            }
        });
    }

    // Add glow effect to avatars on hover
    document.querySelectorAll('.avatar').forEach(avatar => {
        avatar.addEventListener('mouseenter', function() {
            this.style.filter = 'drop-shadow(0 0 20px rgba(0, 217, 255, 0.6))';
        });
        avatar.addEventListener('mouseleave', function() {
            this.style.filter = 'drop-shadow(0 0 10px rgba(0, 217, 255, 0))';
        });
    });
});

// Preload animations for better performance
window.addEventListener('load', () => {
    document.body.style.animation = 'fadeIn 0.6s ease-out';
});
