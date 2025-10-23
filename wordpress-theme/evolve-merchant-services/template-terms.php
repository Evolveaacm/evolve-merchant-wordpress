<?php
/**
 * Template Name: Terms & Conditions
 */
get_header(); ?>

<!-- Terms & Conditions Content -->
<section class="content-section">
    <div class="section-container" style="max-width: 64rem;">
        <h1 class="section-title">Terms & Conditions</h1>
        <p style="color: #d1d5db; margin-bottom: 3rem;">Updated July 23rd, 2025</p>

        <div style="line-height: 1.8; color: #e5e7eb;">
            <?php
            // Display page content from WordPress editor
            if (have_posts()) :
                while (have_posts()) : the_post();
                    the_content();
                endwhile;
            else :
                // Default content if none is added
                ?>
                <div style="margin-bottom: 2rem;">
                    <p style="margin-bottom: 1.5rem;">
                        Welcome to Evolve Merchant Services LLC ("Evolve Merchant Services," "we," "us," or "our"). These Terms and Conditions ("Terms") govern your access to and use of our website (evolvemerchants.com), services, and products. By using our website or services, you agree to comply with and be bound by these Terms.
                    </p>
                    <p>
                        If you do not agree with these Terms, please do not use our website or services.
                    </p>
                </div>

                <div style="margin-bottom: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; color: white;">1. Acceptance of Terms</h2>
                    <p>
                        By accessing or using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as our Privacy Policy. These Terms apply to all visitors, users, and others who access or use our services.
                    </p>
                </div>

                <div style="margin-bottom: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; color: white;">2. Services Provided</h2>
                    <p style="margin-bottom: 1rem;">
                        Evolve Merchant Services provides payment processing solutions, including but not limited to:
                    </p>
                    <ul style="list-style: disc; margin-left: 2rem; margin-bottom: 1rem;">
                        <li>Credit and debit card processing</li>
                        <li>ACH and bank transfer processing</li>
                        <li>Point-of-sale (POS) systems and hardware</li>
                        <li>Mobile payment solutions</li>
                        <li>E-commerce payment integrations</li>
                        <li>Merchant funding and financial services</li>
                    </ul>
                    <p style="margin-top: 1rem;">
                        All services are subject to approval and compliance with applicable laws and regulations.
                    </p>
                </div>

                <div style="margin-bottom: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; color: white;">3. User Obligations</h2>
                    <p style="margin-bottom: 1rem;">
                        As a user of our services, you agree to:
                    </p>
                    <ul style="list-style: disc; margin-left: 2rem;">
                        <li>Provide accurate, complete, and current information during registration and use</li>
                        <li>Maintain the security and confidentiality of your account credentials</li>
                        <li>Comply with all applicable laws, regulations, and card network rules</li>
                        <li>Not use our services for any illegal, fraudulent, or unauthorized purposes</li>
                        <li>Not engage in activities that could harm, disable, or impair our services</li>
                        <li>Notify us immediately of any unauthorized use of your account</li>
                    </ul>
                </div>

                <div style="margin-bottom: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; color: white;">4. Payment Terms</h2>
                    <p style="margin-bottom: 1rem;">
                        By using our payment processing services, you agree to:
                    </p>
                    <ul style="list-style: disc; margin-left: 2rem; margin-bottom: 1rem;">
                        <li>Pay all applicable fees, including processing fees, transaction fees, and monthly service charges</li>
                        <li>Authorize us to deduct fees from your settlement funds or charge your designated account</li>
                        <li>Accept responsibility for chargebacks, refunds, and disputed transactions</li>
                        <li>Maintain sufficient funds in your account to cover fees and obligations</li>
                    </ul>
                    <p style="margin-top: 1rem;">
                        Pricing and fee structures are outlined in your merchant agreement and may vary based on transaction volume, industry, and risk profile.
                    </p>
                </div>

                <div style="margin-bottom: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; color: white;">5. Intellectual Property</h2>
                    <p>
                        All content on our website, including text, graphics, logos, images, software, and trademarks, is the property of Evolve Merchant Services LLC or our licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our express written permission.
                    </p>
                </div>

                <div style="margin-bottom: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; color: white;">6. Limitation of Liability</h2>
                    <p style="margin-bottom: 1rem;">
                        To the fullest extent permitted by law, Evolve Merchant Services LLC shall not be liable for:
                    </p>
                    <ul style="list-style: disc; margin-left: 2rem; margin-bottom: 1rem;">
                        <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                        <li>Loss of profits, revenue, data, or business opportunities</li>
                        <li>Service interruptions, errors, or delays</li>
                        <li>Unauthorized access to or alteration of your data</li>
                        <li>Actions or omissions of third-party service providers</li>
                    </ul>
                    <p style="margin-top: 1rem;">
                        Our total liability for any claims arising from our services shall not exceed the fees paid by you in the 12 months preceding the claim.
                    </p>
                </div>

                <div style="margin-bottom: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; color: white;">7. Governing Law</h2>
                    <p>
                        These Terms shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law principles.
                    </p>
                </div>

                <div style="margin-bottom: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; color: white;">8. Changes to Terms</h2>
                    <p>
                        We reserve the right to update or modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after changes are posted constitutes acceptance of the updated Terms. We encourage you to review these Terms periodically.
                    </p>
                </div>

                <div style="background: linear-gradient(to bottom right, rgba(30, 58, 138, 0.6), rgba(30, 64, 175, 0.4)); padding: 2rem; border-radius: 0.75rem; border: 1px solid rgba(96, 165, 250, 0.5);">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; color: white;">Contact Us</h2>
                    <p style="margin-bottom: 1rem;">
                        If you have any questions about these Terms & Conditions, please contact us:
                    </p>
                    <div>
                        <p style="margin-bottom: 0.5rem;">
                            <strong>Email:</strong>
                            <a href="mailto:<?php echo esc_attr(get_theme_mod('evolve_email', 'support@evolvemerchants.com')); ?>" style="color: #60a5fa;">
                                <?php echo esc_html(get_theme_mod('evolve_email', 'support@evolvemerchants.com')); ?>
                            </a>
                        </p>
                        <p style="margin-bottom: 0.5rem;">
                            <strong>Phone:</strong>
                            <a href="tel:<?php echo esc_attr(str_replace(array('(', ')', ' ', '-'), '', get_theme_mod('evolve_phone', '8332069763'))); ?>" style="color: #60a5fa;">
                                <?php echo esc_html(get_theme_mod('evolve_phone', '(833) 206-9763')); ?>
                            </a>
                        </p>
                        <p><strong>Address:</strong> Evolve Merchant Services LLC, FL</p>
                    </div>
                </div>
            <?php
            endif;
            ?>
        </div>
    </div>
</section>

<?php get_footer(); ?>
