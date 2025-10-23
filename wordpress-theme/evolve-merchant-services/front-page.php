<?php
/**
 * Template Name: Homepage
 */
get_header(); ?>

<!-- Hero Section -->
<section class="hero-section" style="gap: 1.5rem;">
    <div class="hero-content">
        <h1 class="hero-title">
            Fueling Growth. <br />
            Driving Change. <br />
            <span class="highlight">EVOLVE</span>
        </h1>
        <p class="hero-description">
            Evolve Merchant Services—driven by what's next.
        </p>
        <div>
            <a href="<?php echo esc_url(get_theme_mod('evolve_calendly', '#')); ?>" target="_blank" rel="noopener noreferrer" class="cta-button">
                Book A Call
            </a>
        </div>
    </div>
    <div style="display: flex; align-items: center; justify-content: center;">
        <div style="position: relative; width: 100%; max-width: 500px;">
            <!-- Glow effect -->
            <div style="position: absolute; inset: 0; background: rgba(59, 130, 246, 0.3); border-radius: 1.5rem; filter: blur(60px);"></div>

            <!-- Dashboard Container -->
            <div style="position: relative; background: linear-gradient(to bottom right, rgba(51, 65, 85, 0.95), rgba(15, 23, 42, 0.85)); border-radius: 1.5rem; border: 2px solid rgba(59, 130, 246, 0.4); padding: 1.5rem; box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);">

                <!-- Header -->
                <div style="margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(59, 130, 246, 0.3); padding-bottom: 1rem;">
                    <h3 style="font-size: 1rem; font-weight: 700; color: white; margin: 0;">Payment Dashboard</h3>
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <div style="width: 0.75rem; height: 0.75rem; border-radius: 50%; background: #22d3ee; box-shadow: 0 0 10px rgba(34, 211, 238, 0.5);"></div>
                        <div style="width: 0.75rem; height: 0.75rem; border-radius: 50%; background: #3b82f6; box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);"></div>
                        <div style="width: 0.75rem; height: 0.75rem; border-radius: 50%; background: #6366f1; box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);"></div>
                    </div>
                </div>

                <!-- Graph Section -->
                <div style="margin-bottom: 1.5rem; background: rgba(51, 65, 85, 0.4); border-radius: 0.75rem; height: 120px; overflow: hidden; border: 1px solid rgba(59, 130, 246, 0.3); box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);">
                    <svg style="width: 100%; height: 100%;" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="graphGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stop-color="#1e3a8a" stop-opacity="0.6" />
                                <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.3" />
                            </linearGradient>
                        </defs>
                        <path d="M0,75 Q25,70 50,60 T100,35 L100,100 L0,100 Z" fill="url(#graphGradient)" />
                        <path d="M0,75 Q25,70 50,60 T100,35" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round" />
                    </svg>
                </div>

                <!-- Payment Cards -->
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; margin-bottom: 1.5rem;">
                    <div style="background: rgba(51, 65, 85, 0.5); border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 0.75rem; padding: 0.75rem; transition: all 0.3s;">
                        <div style="font-size: 0.625rem; color: #d1d5db; margin-bottom: 0.25rem; font-weight: 500;">Visa</div>
                        <div style="font-size: 1rem; font-weight: 700; color: white; margin-bottom: 0.25rem;">$62,860</div>
                        <div style="font-size: 0.5rem; color: #22d3ee; font-weight: 600;">+$5,744</div>
                    </div>
                    <div style="background: rgba(51, 65, 85, 0.5); border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 0.75rem; padding: 0.75rem; transition: all 0.3s;">
                        <div style="font-size: 0.625rem; color: #d1d5db; margin-bottom: 0.25rem; font-weight: 500;">Amex</div>
                        <div style="font-size: 1rem; font-weight: 700; color: white; margin-bottom: 0.25rem;">$182,867</div>
                        <div style="font-size: 0.5rem; color: #22d3ee; font-weight: 600;">+$15,898</div>
                    </div>
                    <div style="background: rgba(51, 65, 85, 0.5); border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 0.75rem; padding: 0.75rem; transition: all 0.3s;">
                        <div style="font-size: 0.625rem; color: #d1d5db; margin-bottom: 0.25rem; font-weight: 500;">Mastercard</div>
                        <div style="font-size: 1rem; font-weight: 700; color: white; margin-bottom: 0.25rem;">$40,002</div>
                        <div style="font-size: 0.5rem; color: #22d3ee; font-weight: 600;">+$2,669</div>
                    </div>
                </div>

                <!-- Sales by Payment Type & Donut Chart -->
                <div style="display: flex; align-items: center; justify-content: space-between; gap: 1rem;">
                    <div style="flex: 1;">
                        <h4 style="font-size: 0.625rem; color: #9ca3af; margin-bottom: 0.5rem; margin-top: 0;">Sales by Payment Type</h4>
                        <div style="display: flex; flex-direction: column; gap: 0.25rem;">
                            <div style="font-size: 0.625rem;">
                                <span style="color: #3b82f6; font-weight: 500;">Visa 22%</span>
                            </div>
                            <div style="font-size: 0.625rem;">
                                <span style="color: #6366f1; font-weight: 500;">Amex 64%</span>
                            </div>
                            <div style="font-size: 0.625rem;">
                                <span style="color: #22d3ee; font-weight: 500;">Mastercard 14%</span>
                            </div>
                        </div>
                    </div>

                    <!-- Donut Chart -->
                    <div style="position: relative; width: 80px; height: 80px; flex-shrink: 0;">
                        <svg style="width: 100%; height: 100%; transform: rotate(-90deg);" viewBox="0 0 100 100">
                            <!-- Visa - 22% -->
                            <circle cx="50" cy="50" r="40" fill="none" stroke="#3b82f6" stroke-width="20" stroke-dasharray="55 345" stroke-dashoffset="0" />
                            <!-- Amex - 64% -->
                            <circle cx="50" cy="50" r="40" fill="none" stroke="#6366f1" stroke-width="20" stroke-dasharray="160 240" stroke-dashoffset="-55" />
                            <!-- Mastercard - 14% -->
                            <circle cx="50" cy="50" r="40" fill="none" stroke="#22d3ee" stroke-width="20" stroke-dasharray="35 365" stroke-dashoffset="-215" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Partner Logos Section -->
<section class="partners-section">
    <div class="partners-container">
        <!-- Valor PayTech -->
        <div class="partner-logo">
            <svg width="120" height="50" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g transform="scale(0.6)">
                    <path d="M40 0L0 20V45C0 70 40 96 40 96C40 96 80 70 80 45V20L40 0Z" fill="url(#valorShield)"/>
                    <path d="M40 12L12 25V45C12 62 40 80 40 80C40 80 68 62 68 45V25L40 12Z" fill="#0a0f1e"/>
                    <path d="M40 24L24 32V45C24 56 40 68 40 68V24Z" fill="#0066FF"/>
                    <text x="95" y="45" fill="#ffffff" font-size="28" font-weight="bold" font-family="Arial">VALOR</text>
                    <text x="95" y="65" fill="#ffffff" font-size="14" font-weight="500" font-family="Arial">PAYTECH</text>
                    <defs>
                        <linearGradient id="valorShield" x1="40" y1="0" x2="40" y2="96">
                            <stop offset="0%" stop-color="#00C896"/>
                            <stop offset="100%" stop-color="#0066FF"/>
                        </linearGradient>
                    </defs>
                </g>
            </svg>
        </div>

        <!-- Ingenico -->
        <div class="partner-logo">
            <svg width="110" height="50" viewBox="0 0 220 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="8" fill="#60a5fa"/>
                <rect x="35" y="17" width="150" height="6" fill="#3b82f6"/>
                <circle cx="200" cy="20" r="8" fill="#60a5fa"/>
                <text x="10" y="60" fill="#ffffff" font-size="32" font-weight="bold" font-family="Arial">ingenico</text>
            </svg>
        </div>

        <!-- PAX -->
        <div class="partner-logo">
            <svg width="130" height="50" viewBox="0 0 280 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="57" cy="40" rx="22" ry="35" fill="none" stroke="#7c3aed" stroke-width="10" transform="rotate(30 57 40)"/>
                <ellipse cx="40" cy="40" rx="22" ry="35" fill="none" stroke="#60a5fa" stroke-width="10" transform="rotate(30 40 40)"/>
                <text x="100" y="50" fill="#ffffff" font-size="38" font-weight="900" font-family="Arial">PAX</text>
            </svg>
        </div>

        <!-- Dejavoo -->
        <div class="partner-logo">
            <svg width="130" height="60" viewBox="0 0 260 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(130, 35)">
                    <path d="M -40 0 A 40 40 0 0 1 40 0" fill="none" stroke="#9333ea" stroke-width="5" stroke-linecap="round"/>
                    <path d="M -30 0 A 30 30 0 0 1 30 0" fill="none" stroke="#9333ea" stroke-width="5" stroke-linecap="round"/>
                    <path d="M -20 0 A 20 20 0 0 1 20 0" fill="none" stroke="#9333ea" stroke-width="5" stroke-linecap="round"/>
                    <path d="M -10 0 A 10 10 0 0 1 10 0" fill="none" stroke="#9333ea" stroke-width="5" stroke-linecap="round"/>
                </g>
                <text x="130" y="80" fill="#ffffff" font-size="32" font-weight="bold" font-family="Arial" text-anchor="middle">Dejavoo</text>
            </svg>
        </div>

        <!-- NMI -->
        <div class="partner-logo">
            <svg width="100" height="50" viewBox="0 0 220 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="110" y="65" fill="#ffffff" font-size="42" font-weight="bold" font-family="Arial" text-anchor="middle">nmi</text>
            </svg>
        </div>

        <!-- Authorize.Net -->
        <div class="partner-logo">
            <svg width="180" height="50" viewBox="0 0 360 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="25" r="22" fill="#4285F4"/>
                <circle cx="42" cy="48" r="10" fill="#FDB913"/>
                <text x="65" y="48" fill="#ffffff" font-size="26" font-weight="700" font-family="Arial">Authorize.Net</text>
            </svg>
        </div>
    </div>
</section>

<!-- Solutions Section -->
<section id="solutions" class="content-section">
    <div class="section-container">
        <div class="section-label">Solutions</div>
        <h2 class="section-title">
            Driving Scalable Growth Through Advanced Payment Technology
        </h2>
        <p class="section-description">
            From mobile readers to full POS systems, Evolve equips you to accept payments your way—secure, simple, and cost-effective.
        </p>

        <div class="cards-grid">
            <div class="card">
                <h3 class="card-title">Low-Risk Processing</h3>
                <p class="card-text">
                    Evolve's low-risk processing is built for compliant businesses in retail, hospitality, and professional services. Enjoy fast approvals, clear pricing, and smooth integrations that make onboarding effortless.
                </p>
            </div>
            <div class="card">
                <h3 class="card-title">High-Risk Processing</h3>
                <p class="card-text">
                    From Medical Spas to Online Casinos, Evolve navigates high-risk industries with precision. Our strong banking network, intelligent fraud protection, and tailored underwriting ensure your business stays approved and uninterrupted.
                </p>
            </div>
            <div class="card">
                <h3 class="card-title">Business Funding</h3>
                <p class="card-text">
                    Evolve's Business Funding solutions connect you with a nationwide network of 150+ direct lenders to secure fast, flexible capital tailored to your goals.
                </p>
            </div>
            <div class="card">
                <h3 class="card-title">ACH Processing</h3>
                <p class="card-text">
                    Evolve's ACH processing offers a secure, cost-effective way to move funds directly between bank accounts—ideal for recurring payments, invoicing, and B2B transactions.
                </p>
            </div>
        </div>

        <div class="stats-container">
            <div class="stat-item">
                <div class="stat-number" id="stat1">154M</div>
                <div class="stat-label">Daily U.S. Card Transactions</div>
            </div>
            <div class="stat-item">
                <div class="stat-number" id="stat2">430M</div>
                <div class="stat-label">Daily U.S. Card Volume</div>
            </div>
        </div>
    </div>
</section>

<!-- Products Section -->
<section id="products" class="content-section" style="background: linear-gradient(to bottom, transparent, rgba(30, 58, 138, 0.1), transparent);">
    <div class="section-container">
        <div class="section-label">Products</div>
        <h2 class="section-title">
            Payments that follow your business—anytime, anywhere
        </h2>
        <p class="section-description">
            From mobile card readers to enterprise-grade POS systems—Evolve equips you to accept payments your way: secure, seamless, and evolved.
        </p>

        <div style="margin-bottom: 4rem;">
            <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;">Payments</h3>
            <p style="color: #e5e7eb; margin-bottom: 1.5rem;">
                Process transactions on your phone, tablet, or desktop—no hardware needed.
            </p>
            <a href="<?php echo esc_url(home_url('/#contact')); ?>" class="cta-button">EXPLORE OPTIONS</a>
        </div>

        <div style="margin-bottom: 4rem;">
            <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;">Terminal</h3>
            <p style="color: #e5e7eb; margin-bottom: 1.5rem;">
                All-in-one card readers, designed for mobility and precision.
            </p>
            <a href="<?php echo esc_url(home_url('/#contact')); ?>" class="cta-button">EXPLORE OPTIONS</a>
        </div>

        <div>
            <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;">POS</h3>
            <p style="color: #e5e7eb; margin-bottom: 1.5rem;">
                POS technology that adapts to your business, not the other way around. Clear displays, intuitive interfaces, and seamless transactions.
            </p>
            <a href="<?php echo esc_url(home_url('/#contact')); ?>" class="cta-button">EXPLORE OPTIONS</a>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section id="contact" class="content-section">
    <div class="section-container" style="max-width: 64rem;">
        <div class="text-center" style="margin-bottom: 3rem;">
            <h2 class="section-title">
                Move your business forward.
            </h2>
            <p class="section-description">
                Cut costs. Boost efficiency. Elevate every transaction. Evolve Merchant Services builds agile payment solutions tailored to your business goals. Ready to innovate? Let's build something that moves your business forward.
            </p>
        </div>

        <form class="contact-form" action="<?php echo esc_url(admin_url('admin-post.php')); ?>" method="post">
            <input type="hidden" name="action" value="evolve_contact_form">
            <?php wp_nonce_field('evolve_contact_form', 'evolve_contact_nonce'); ?>

            <div class="form-grid">
                <div class="form-group">
                    <label class="form-label">Full Name *</label>
                    <input type="text" name="full_name" class="form-input" placeholder="John Doe" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Email Address *</label>
                    <input type="email" name="email" class="form-input" placeholder="john@example.com" required>
                </div>
            </div>

            <div class="form-grid">
                <div class="form-group">
                    <label class="form-label">Phone Number</label>
                    <input type="tel" name="phone" class="form-input" placeholder="(555) 123-4567">
                </div>
                <div class="form-group">
                    <label class="form-label">Company Name</label>
                    <input type="text" name="company" class="form-input" placeholder="Your Company">
                </div>
            </div>

            <div class="form-group full-width">
                <label class="form-label">Message *</label>
                <textarea name="message" class="form-textarea" placeholder="Tell us about your business needs and how we can help..." required></textarea>
            </div>

            <button type="submit" class="form-submit">SEND MESSAGE</button>

            <p class="text-center" style="margin-top: 1rem; font-size: 0.875rem; color: #d1d5db;">
                This will open your default email client. Or call us directly at:
                <a href="tel:<?php echo esc_attr(str_replace(array('(', ')', ' ', '-'), '', get_theme_mod('evolve_phone', '8332069763'))); ?>" style="color: #60a5fa;">
                    <?php echo esc_html(get_theme_mod('evolve_phone', '(833) 206-9763')); ?>
                </a>
            </p>
        </form>
    </div>
</section>

<?php get_footer(); ?>
