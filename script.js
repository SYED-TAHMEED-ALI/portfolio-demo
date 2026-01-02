// script.js
document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = { threshold: 0.12 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                const fills = entry.target.querySelectorAll('.progress-fill');
                fills.forEach(fill => {
                    fill.style.width = fill.getAttribute('data-width');
                });
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal, .skill-box, .project-card, .member-card').forEach(el => {
        observer.observe(el);
    });

    // Smooth scroll for nav links
    document.querySelectorAll('.nav-links a').forEach(a => {
        a.addEventListener('click', (e) => {
            e.preventDefault();
            const href = a.getAttribute('href');
            if (href && href.startsWith('#')) document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Small typing effect for hero-sub title
    const heroSub = document.querySelector('.hero-sub');
    if (heroSub) {
        const full = heroSub.textContent.trim();
        heroSub.textContent = '';
        let i = 0;
        const t = setInterval(() => {
            heroSub.textContent += full[i++] || '';
            if (i >= full.length) clearInterval(t);
        }, 18);
    }
});