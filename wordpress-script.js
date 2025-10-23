// Evolve Merchant Services - WordPress JavaScript

// Particle Animation
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];

    // Create particles
    for (let i = 0; i < 120; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2.5 + 1,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            opacity: Math.random() * 0.4 + 0.3
        });
    }

    // Add larger glowing particles
    for (let i = 0; i < 10; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 2,
            speedX: (Math.random() - 0.5) * 0.3,
            speedY: (Math.random() - 0.5) * 0.3,
            opacity: Math.random() * 0.25 + 0.35
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            // Draw particle with glow
            const gradient = ctx.createRadialGradient(
                particle.x, particle.y, 0,
                particle.x, particle.y, particle.size * 1.5
            );
            gradient.addColorStop(0, `rgba(59, 130, 246, ${particle.opacity * 0.8})`);
            gradient.addColorStop(0.5, `rgba(59, 130, 246, ${particle.opacity * 0.3})`);
            gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size * 1.5, 0, Math.PI * 2);
            ctx.fill();

            // Move particle
            particle.x += particle.speedX;
            particle.y += particle.speedY;

            // Bounce off edges
            if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
        });

        // Draw connections between nearby particles
        particles.forEach((p1, i) => {
            particles.slice(i + 1).forEach(p2 => {
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 130) {
                    ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 * (1 - distance / 130)})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            });
        });

        requestAnimationFrame(animate);
    }

    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Scroll reveal animation
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Trigger stats animation when solutions section is visible
                if (entry.target.classList.contains('solutions')) {
                    animateStats();
                }
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.solutions, .products, .contact').forEach(section => {
        observer.observe(section);
    });
}

// Animate statistics
let statsAnimated = false;
function animateStats() {
    if (statsAnimated) return;
    statsAnimated = true;

    const stat1 = document.getElementById('stat1');
    const stat2 = document.getElementById('stat2');

    if (!stat1 || !stat2) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);

        stat1.textContent = Math.floor(154 * easeOut) + 'M';
        stat2.textContent = Math.floor(430 * easeOut) + 'M';

        if (step >= steps) {
            clearInterval(timer);
            stat1.textContent = '154M';
            stat2.textContent = '430M';
        }
    }, interval);
}

// Smooth scroll for anchor links
function initSmoothScroll() {
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
}

// Mobile menu toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        const isVisible = navLinks.style.display === 'flex';
        navLinks.style.display = isVisible ? 'none' : 'flex';

        if (!isVisible) {
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.background = 'rgba(15, 20, 25, 0.98)';
            navLinks.style.flexDirection = 'column';
            navLinks.style.padding = '2rem';
            navLinks.style.backdropFilter = 'blur(10px)';
            navLinks.style.borderBottom = '1px solid rgba(59, 130, 246, 0.4)';
        }
    }
}

// Form validation and handling
function initFormHandling() {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            // Basic validation
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');

            if (!name.value || !email.value || !message.value) {
                e.preventDefault();
                alert('Please fill in all required fields.');
                return false;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                e.preventDefault();
                alert('Please enter a valid email address.');
                return false;
            }
        });
    }
}

// Initialize all functions when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initParticles();
    initScrollReveal();
    initSmoothScroll();
    initFormHandling();

    // Make toggleMobileMenu available globally
    window.toggleMobileMenu = toggleMobileMenu;
});

// Handle page visibility change (pause animations when tab is hidden)
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Pause animations if needed
    } else {
        // Resume animations
    }
});
