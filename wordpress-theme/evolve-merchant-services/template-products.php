<?php
/**
 * Template Name: Products Page
 */
get_header(); ?>

<!-- Hero Section -->
<section class="content-section">
    <div class="section-container text-center">
        <p class="section-label">Products</p>
        <h1 class="section-title">
            Modern payment tech—digital, physical, and remote.
        </h1>
        <p class="section-description" style="max-width: 48rem; margin-left: auto; margin-right: auto;">
            Evolve provides everything you need to process payments—securely, seamlessly, and cost-effectively
        </p>
    </div>
</section>

<!-- Product Suite -->
<section class="content-section">
    <div class="section-container">
        <h2 class="section-label text-center">Evolve Product Suite</h2>
        <h3 class="section-title text-center">Smart Tools for Every Business Type</h3>

        <div class="cards-grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); margin-bottom: 3rem;">
            <div class="card">
                <svg width="48" height="48" style="margin: 0 auto 1.5rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <h4 class="card-title">Payments</h4>
                <p class="card-text" style="margin-bottom: 1.5rem;">
                    Smart payment tech—ready on any device.
                </p>
                <p style="font-size: 0.875rem; color: #e5e7eb; text-align: center;">
                    Built for flexibility—perfect for on-the-go businesses and remote operations. Get started instantly, hardware required.
                </p>
            </div>

            <div class="card">
                <svg width="48" height="48" style="margin: 0 auto 1.5rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <h4 class="card-title">Terminal</h4>
                <p class="card-text" style="margin-bottom: 1.5rem;">
                    Compact, all-in-one card readers built for mobility and performance.
                </p>
                <p style="font-size: 0.875rem; color: #e5e7eb; text-align: center;">
                    Optimized for streamlined setups with full payment functionality.
                </p>
            </div>

            <div class="card">
                <svg width="48" height="48" style="margin: 0 auto 1.5rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h4 class="card-title">POS</h4>
                <p class="card-text" style="margin-bottom: 1.5rem;">
                    Streamlined POS systems built for performance.
                </p>
                <p style="font-size: 0.875rem; color: #e5e7eb; text-align: center;">
                    Perfect for hospitality and retail—adapt features, monitor sales, manage teams, and integrate inventory with ease.
                </p>
            </div>
        </div>

        <div class="text-center">
            <a href="<?php echo esc_url(get_theme_mod('evolve_calendly', '#')); ?>" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 1rem 2.5rem; background: linear-gradient(to right, #2563eb, #3b82f6); color: white; font-size: 1.125rem; border-radius: 0.5rem; font-weight: 600; transition: all 0.3s ease;">
                Schedule Demo
            </a>
        </div>
    </div>
</section>

<!-- Payment Types -->
<section class="content-section" style="background: linear-gradient(to bottom, transparent, rgba(30, 58, 138, 0.1), transparent);">
    <div class="section-container">
        <h2 class="section-label text-center">Payment Types We Power</h2>
        <h3 class="section-title text-center">More Ways to Get Paid</h3>
        <p class="section-description text-center">
            Whatever your customer prefers, we've got you covered.
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1.5rem; margin-bottom: 3rem;">
            <!-- Credit & Debit Cards -->
            <div style="background: linear-gradient(to bottom right, rgba(30, 58, 138, 0.3), rgba(30, 64, 175, 0.2)); padding: 1.5rem; border-radius: 0.75rem; border: 1px solid rgba(59, 130, 246, 0.2); transition: all 0.3s ease; text-align: center;">
                <svg width="48" height="48" style="margin: 0 auto 0.75rem; color: #3b82f6;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <p style="font-size: 0.875rem; color: #e5e7eb;">Credit & Debit Cards</p>
            </div>

            <!-- Invoicing -->
            <div style="background: linear-gradient(to bottom right, rgba(30, 58, 138, 0.3), rgba(30, 64, 175, 0.2)); padding: 1.5rem; border-radius: 0.75rem; border: 1px solid rgba(59, 130, 246, 0.2); transition: all 0.3s ease; text-align: center;">
                <svg width="48" height="48" style="margin: 0 auto 0.75rem; color: #3b82f6;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p style="font-size: 0.875rem; color: #e5e7eb;">Invoicing</p>
            </div>

            <!-- Apple & Google Pay -->
            <div style="background: linear-gradient(to bottom right, rgba(30, 58, 138, 0.3), rgba(30, 64, 175, 0.2)); padding: 1.5rem; border-radius: 0.75rem; border: 1px solid rgba(59, 130, 246, 0.2); transition: all 0.3s ease; text-align: center;">
                <svg width="48" height="48" style="margin: 0 auto 0.75rem; color: #3b82f6;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <p style="font-size: 0.875rem; color: #e5e7eb;">Apple & Google Pay</p>
            </div>

            <!-- ACH & Wire Transfers -->
            <div style="background: linear-gradient(to bottom right, rgba(30, 58, 138, 0.3), rgba(30, 64, 175, 0.2)); padding: 1.5rem; border-radius: 0.75rem; border: 1px solid rgba(59, 130, 246, 0.2); transition: all 0.3s ease; text-align: center;">
                <svg width="48" height="48" style="margin: 0 auto 0.75rem; color: #3b82f6;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
                <p style="font-size: 0.875rem; color: #e5e7eb;">ACH & Wire Transfers</p>
            </div>

            <!-- Buy Now Pay Later -->
            <div style="background: linear-gradient(to bottom right, rgba(30, 58, 138, 0.3), rgba(30, 64, 175, 0.2)); padding: 1.5rem; border-radius: 0.75rem; border: 1px solid rgba(59, 130, 246, 0.2); transition: all 0.3s ease; text-align: center;">
                <svg width="48" height="48" style="margin: 0 auto 0.75rem; color: #3b82f6;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p style="font-size: 0.875rem; color: #e5e7eb;">Buy Now Pay Later</p>
            </div>

            <!-- Crypto Payments -->
            <div style="background: linear-gradient(to bottom right, rgba(30, 58, 138, 0.3), rgba(30, 64, 175, 0.2)); padding: 1.5rem; border-radius: 0.75rem; border: 1px solid rgba(59, 130, 246, 0.2); transition: all 0.3s ease; text-align: center;">
                <svg width="48" height="48" style="margin: 0 auto 0.75rem; color: #3b82f6;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p style="font-size: 0.875rem; color: #e5e7eb;">Crypto Payments</p>
            </div>

            <!-- Gift Cards -->
            <div style="background: linear-gradient(to bottom right, rgba(30, 58, 138, 0.3), rgba(30, 64, 175, 0.2)); padding: 1.5rem; border-radius: 0.75rem; border: 1px solid rgba(59, 130, 246, 0.2); transition: all 0.3s ease; text-align: center;">
                <svg width="48" height="48" style="margin: 0 auto 0.75rem; color: #3b82f6;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                <p style="font-size: 0.875rem; color: #e5e7eb;">Gift Cards</p>
            </div>

            <!-- Mobile Wallets -->
            <div style="background: linear-gradient(to bottom right, rgba(30, 58, 138, 0.3), rgba(30, 64, 175, 0.2)); padding: 1.5rem; border-radius: 0.75rem; border: 1px solid rgba(59, 130, 246, 0.2); transition: all 0.3s ease; text-align: center;">
                <svg width="48" height="48" style="margin: 0 auto 0.75rem; color: #3b82f6;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                </svg>
                <p style="font-size: 0.875rem; color: #e5e7eb;">Mobile Wallets</p>
            </div>

            <!-- QR Code Payments -->
            <div style="background: linear-gradient(to bottom right, rgba(30, 58, 138, 0.3), rgba(30, 64, 175, 0.2)); padding: 1.5rem; border-radius: 0.75rem; border: 1px solid rgba(59, 130, 246, 0.2); transition: all 0.3s ease; text-align: center;">
                <svg width="48" height="48" style="margin: 0 auto 0.75rem; color: #3b82f6;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
                <p style="font-size: 0.875rem; color: #e5e7eb;">QR Code Payments</p>
            </div>

            <!-- Recurring Billing -->
            <div style="background: linear-gradient(to bottom right, rgba(30, 58, 138, 0.3), rgba(30, 64, 175, 0.2)); padding: 1.5rem; border-radius: 0.75rem; border: 1px solid rgba(59, 130, 246, 0.2); transition: all 0.3s ease; text-align: center;">
                <svg width="48" height="48" style="margin: 0 auto 0.75rem; color: #3b82f6;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <p style="font-size: 0.875rem; color: #e5e7eb;">Recurring Billing</p>
            </div>
        </div>

        <div class="text-center">
            <a href="<?php echo esc_url(get_theme_mod('evolve_calendly', '#')); ?>" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 1rem 2.5rem; background: linear-gradient(to right, #2563eb, #3b82f6); color: white; font-size: 1.125rem; border-radius: 0.5rem; font-weight: 600; transition: all 0.3s ease;">
                Schedule Demo
            </a>
        </div>
    </div>
</section>

<!-- Why Choose -->
<section class="content-section">
    <div class="section-container" style="max-width: 64rem;">
        <div class="card" style="text-align: center;">
            <h2 class="section-label">Why Choose Evolve Hardware</h2>
            <h3 class="section-title">
                Evolve delivers the tools. You stay in control.
            </h3>
            <div style="margin-bottom: 3rem; font-size: 1.125rem; color: #e5e7eb;">
                <p style="margin-bottom: 1rem;">✓  Plug-and-play simplicity—get up and running in minutes</p>
                <p style="margin-bottom: 1rem;">✓ Free equipment placement—available for qualified businesses</p>
                <p style="margin-bottom: 1rem;">✓ 24/7 US-based technical support—real help, anytime</p>
                <p style="margin-bottom: 1rem;">✓ Versatile technology for virtually any industry</p>
                <p>✓ Full device ownership—no long-term lease required</p>
            </div>
            <a href="tel:<?php echo esc_attr(str_replace(array('(', ')', ' ', '-'), '', get_theme_mod('evolve_phone', '8332069763'))); ?>" style="display: inline-block; padding: 1rem 2.5rem; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.2); color: white; font-size: 1.125rem; border-radius: 0.5rem; font-weight: 600; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);">
                <?php echo esc_html(get_theme_mod('evolve_phone', '(833) 206-9763')); ?>
            </a>
        </div>
    </div>
</section>

<?php get_footer(); ?>
