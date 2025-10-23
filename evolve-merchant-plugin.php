<?php
/**
 * Plugin Name: Evolve Merchant Services Landing Page
 * Plugin URI: https://evolvemerchants.com
 * Description: Complete landing page for Evolve Merchant Services
 * Version: 1.0.0
 * Author: Evolve Merchant Services
 * License: GPL2
 */

// Prevent direct access
if (!defined('ABSPATH')) exit;

// Enqueue styles and scripts
function evolve_merchant_assets() {
    wp_enqueue_style('evolve-merchant-styles', plugin_dir_url(__FILE__) . 'wordpress-styles.css', array(), '1.0.0');
    wp_enqueue_script('evolve-merchant-scripts', plugin_dir_url(__FILE__) . 'wordpress-script.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'evolve_merchant_assets');

// Register shortcode
function evolve_merchant_landing_page() {
    ob_start();
    ?>

    <!-- Animated Background -->
    <canvas id="particles-canvas" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0;"></canvas>

    <div style="position: relative; z-index: 1;">
        <!-- Navigation -->
        <nav style="display: flex; align-items: center; justify-content: space-between; padding: 1.5rem; position: relative; z-index: 10;">
            <div class="logo-container">
                <div class="logo-text">
                    <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0" y="0" width="20" height="3" fill="white"/>
                        <rect x="0" y="10.5" width="3" height="13.5" fill="white"/>
                        <rect x="0" y="10.5" width="16" height="3" fill="white"/>
                        <rect x="0" y="21" width="20" height="3" fill="white"/>
                    </svg>
                    <span>VOLVE</span>
                </div>
                <div class="logo-subtitle">MERCHANT SERVICES</div>
            </div>

            <div class="nav-links">
                <a href="#home">HOME</a>
                <a href="#solutions">SOLUTIONS</a>
                <a href="#products">PRODUCTS</a>
                <a href="#contact">CONTACT</a>
                <a href="https://app.advancefundsnetwork.com/application/KHlip10F2ONcpL7e45YxEhS7eoB3?partner=fR5kLIriQzc7gXgOmvEKZpw2UCl2" target="_blank">FUNDING</a>
                <a href="tel:+18332069763" class="cta-button">(833) 206-9763</a>
            </div>

            <button class="mobile-menu-button" onclick="toggleMobileMenu()">☰</button>
        </nav>

        <!-- Hero Section -->
        <section class="hero container" id="home" style="padding: 4rem 1.5rem;">
            <div>
                <h1 style="font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 300; margin-bottom: 1.5rem; line-height: 1.2;">
                    Fueling Growth.<br>
                    Driving Change.<br>
                    <span class="gradient-text">EVOLVE</span>
                </h1>
                <p style="font-size: 1.25rem; color: #cbd5e1; margin-bottom: 2rem;">
                    Evolve Merchant Services—driven by what's next.
                </p>
                <a href="https://calendly.com/-evolvemerchants" target="_blank" class="book-button">Book A Call</a>
            </div>

            <div class="dashboard-card">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; border-bottom: 1px solid rgba(59, 130, 246, 0.4); padding-bottom: 1rem;">
                    <h3 style="font-size: 1.5rem; margin: 0;">Payment Dashboard</h3>
                    <div style="display: flex; gap: 0.5rem;">
                        <div style="width: 12px; height: 12px; border-radius: 50%; background: #22d3ee;"></div>
                        <div style="width: 12px; height: 12px; border-radius: 50%; background: #3b82f6;"></div>
                        <div style="width: 12px; height: 12px; border-radius: 50%; background: #6366f1;"></div>
                    </div>
                </div>

                <div style="background: rgba(30, 58, 138, 0.4); border-radius: 0.75rem; height: 200px; margin-bottom: 1.5rem; border: 1px solid rgba(59, 130, 246, 0.3);"></div>

                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
                    <div style="background: rgba(30, 58, 138, 0.4); border: 1px solid rgba(59, 130, 246, 0.4); border-radius: 0.75rem; padding: 1rem;">
                        <div style="font-size: 0.75rem; color: #94a3b8; margin-bottom: 0.5rem;">Visa</div>
                        <div style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.25rem;">$12,877</div>
                        <div style="font-size: 0.75rem; color: #22d3ee;">+$5,744</div>
                    </div>
                    <div style="background: rgba(30, 58, 138, 0.4); border: 1px solid rgba(59, 130, 246, 0.4); border-radius: 0.75rem; padding: 1rem;">
                        <div style="font-size: 0.75rem; color: #94a3b8; margin-bottom: 0.5rem;">Amex</div>
                        <div style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.25rem;">$356,134</div>
                        <div style="font-size: 0.75rem; color: #22d3ee;">+$15,898</div>
                    </div>
                    <div style="background: rgba(30, 58, 138, 0.4); border: 1px solid rgba(59, 130, 246, 0.4); border-radius: 0.75rem; padding: 1rem;">
                        <div style="font-size: 0.75rem; color: #94a3b8; margin-bottom: 0.5rem;">Mastercard</div>
                        <div style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.25rem;">$16,134</div>
                        <div style="font-size: 0.75rem; color: #22d3ee;">+$2,669</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Partner Logos -->
        <section class="partners" style="padding: 4rem 1.5rem;">
            <div class="partners-grid">
                <div class="partner-logo animate-pulse">
                    <svg width="120" height="50" viewBox="0 0 200 80">
                        <text x="50%" y="50%" fill="#94a3b8" font-size="32" font-weight="bold" font-family="Arial" text-anchor="middle" dominant-baseline="middle">VALOR</text>
                    </svg>
                </div>
                <div class="partner-logo animate-pulse" style="animation-delay: 0.5s;">
                    <svg width="120" height="50" viewBox="0 0 200 80">
                        <text x="50%" y="50%" fill="#94a3b8" font-size="28" font-weight="bold" font-family="Arial" text-anchor="middle" dominant-baseline="middle">ingenico</text>
                    </svg>
                </div>
                <div class="partner-logo animate-pulse" style="animation-delay: 1s;">
                    <svg width="120" height="50" viewBox="0 0 200 80">
                        <text x="50%" y="50%" fill="#94a3b8" font-size="36" font-weight="900" font-family="Arial" text-anchor="middle" dominant-baseline="middle">PAX</text>
                    </svg>
                </div>
                <div class="partner-logo animate-pulse" style="animation-delay: 1.5s;">
                    <svg width="120" height="50" viewBox="0 0 200 80">
                        <text x="50%" y="50%" fill="#ffffff" font-size="32" font-weight="bold" font-family="Arial" text-anchor="middle" dominant-baseline="middle">nmi</text>
                    </svg>
                </div>
                <div class="partner-logo animate-pulse" style="animation-delay: 2s;">
                    <svg width="160" height="50" viewBox="0 0 240 80">
                        <text x="50%" y="50%" fill="#ffffff" font-size="24" font-weight="700" font-family="Arial" text-anchor="middle" dominant-baseline="middle">Authorize.Net</text>
                    </svg>
                </div>
            </div>
        </section>

        <!-- Solutions Section -->
        <section class="solutions container" id="solutions" style="padding: 5rem 1.5rem;">
            <div class="section-label">Solutions</div>
            <h2 class="section-title">Processing Solutions Built for Relentless Performance</h2>
            <p style="font-size: 1.25rem; color: #cbd5e1; margin-bottom: 3rem;">
                From mobile readers to full POS systems, Evolve equips you to accept payments your way—secure, simple, and cost-effective.
            </p>

            <div class="solutions-grid">
                <div class="solution-card">
                    <h3>Low-Risk Processing</h3>
                    <p>Evolve's low-risk processing is built for compliant businesses in retail, hospitality, and professional services.</p>
                </div>
                <div class="solution-card">
                    <h3>High-Risk Processing</h3>
                    <p>From Medical Spas to Online Casinos, Evolve navigates high-risk industries with precision.</p>
                </div>
                <div class="solution-card">
                    <h3>Business Funding</h3>
                    <p>Connect with a nationwide network of 150+ direct lenders to secure fast, flexible capital.</p>
                </div>
                <div class="solution-card">
                    <h3>ACH Processing</h3>
                    <p>Secure, cost-effective way to move funds directly between bank accounts.</p>
                </div>
            </div>

            <div class="stats">
                <div class="stat">
                    <div class="stat-number" id="stat1">154M</div>
                    <div class="stat-label">Daily U.S. Card Transactions</div>
                </div>
                <div class="stat">
                    <div class="stat-number" id="stat2">430M</div>
                    <div class="stat-label">Daily U.S. Card Volume</div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section class="contact container" id="contact" style="padding: 5rem 1.5rem;">
            <h2 class="section-title">Let's Build Something Better</h2>
            <p style="font-size: 1.25rem; color: #cbd5e1; margin-bottom: 3rem;">
                Whether you're looking to cut costs, boost efficiency, or elevate your customer experience, Evolve Merchant Services is ready to help.
            </p>

            <?php echo do_shortcode('[contact-form-7 id="YOUR_FORM_ID_HERE"]'); ?>
            <!-- Or use default email form if Contact Form 7 not installed -->
        </section>

        <!-- Footer -->
        <footer style="padding: 3rem 1.5rem;">
            <div class="footer-content">
                <div class="footer-contact">
                    <div class="footer-links">
                        <a href="mailto:support@evolvemerchants.com">📧 support@evolvemerchants.com</a>
                        <a href="tel:+18332069763">📞 (833) 206-9763</a>
                    </div>
                    <p style="font-size: 0.875rem; color: #cbd5e1;">Hours: Mon-Fri 8:00AM - 5:00PM</p>
                </div>

                <div class="footer-bottom">
                    <span class="copyright">©copyright 2025, Evolve Merchant Services</span>
                    <div class="footer-links">
                        <a href="/referral-partners">Referral Partners</a>
                        <a href="/privacy-policy">Privacy Policy</a>
                        <a href="/terms">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>

    <?php
    return ob_get_clean();
}
add_shortcode('evolve_landing', 'evolve_merchant_landing_page');

// Add settings page
function evolve_merchant_menu() {
    add_options_page(
        'Evolve Merchant Settings',
        'Evolve Merchant',
        'manage_options',
        'evolve-merchant',
        'evolve_merchant_settings_page'
    );
}
add_action('admin_menu', 'evolve_merchant_menu');

function evolve_merchant_settings_page() {
    ?>
    <div class="wrap">
        <h1>Evolve Merchant Services Settings</h1>
        <div class="card">
            <h2>How to Use</h2>
            <p>Add this shortcode to any page:</p>
            <code style="background: #f0f0f1; padding: 10px; display: block; margin: 10px 0;">[evolve_landing]</code>
            <p><strong>Recommended:</strong> Create a new page and set it as your homepage.</p>
        </div>

        <div class="card" style="margin-top: 20px;">
            <h2>Customization</h2>
            <p>To customize colors, phone numbers, or content:</p>
            <ol>
                <li>Edit the plugin file: <code>wp-content/plugins/evolve-merchant-services/evolve-merchant-plugin.php</code></li>
                <li>Edit the CSS file: <code>wp-content/plugins/evolve-merchant-services/wordpress-styles.css</code></li>
            </ol>
        </div>

        <div class="card" style="margin-top: 20px;">
            <h2>Support</h2>
            <p>For assistance, contact:</p>
            <p>📧 Email: <a href="mailto:support@evolvemerchants.com">support@evolvemerchants.com</a></p>
            <p>📞 Phone: <a href="tel:+18332069763">(833) 206-9763</a></p>
        </div>
    </div>
    <?php
}
?>
