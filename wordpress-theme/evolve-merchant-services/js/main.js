/**
 * Main JavaScript Functions
 */

// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('active');
    }
}

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll
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
                    // Close mobile menu if open
                    const mobileMenu = document.getElementById('mobile-menu');
                    if (mobileMenu) {
                        mobileMenu.classList.remove('active');
                    }
                }
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe sections
    document.querySelectorAll('.content-section').forEach(section => {
        observer.observe(section);
    });

    // Animate stats counter
    let hasAnimatedStats = false;
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimatedStats) {
                hasAnimatedStats = true;
                animateStats();
            }
        });
    }, observerOptions);

    const solutionsSection = document.getElementById('solutions');
    if (solutionsSection) {
        statsObserver.observe(solutionsSection);
    }
});

// Animate statistics numbers
function animateStats() {
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

// Form submission handling
jQuery(document).ready(function($) {
    $('.contact-form').on('submit', function(e) {
        e.preventDefault();

        const formData = {
            fullName: $('input[name="full_name"]').val(),
            email: $('input[name="email"]').val(),
            phone: $('input[name="phone"]').val(),
            company: $('input[name="company"]').val(),
            message: $('textarea[name="message"]').val()
        };

        const subject = encodeURIComponent('New Contact Form Submission');
        const body = encodeURIComponent(`
New Contact Form Submission

Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}

Message:
${formData.message}
        `);

        window.location.href = `mailto:support@evolvemerchants.com?subject=${subject}&body=${body}`;
    });
});
