<?php
/**
 * Template Name: Privacy Policy
 */
get_header(); ?>

<!-- Privacy Policy Content -->
<section class="content-section">
    <div class="section-container" style="max-width: 64rem;">
        <h1 class="section-title">Privacy Policy</h1>
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
                        Evolve Merchant Services LLC (referred to as "Evolve Merchant Services," "we," "us," or "our") is committed to safeguarding your privacy. This Privacy Policy explains how we collect, use, share, and protect your information when you visit our website (evolvemerchants.com) or engage with our products and services. By using our website or services, you consent to the terms outlined in this Privacy Policy.
                    </p>
                    <p>
                        If you do not agree with these terms, please do not use our website or services.
                    </p>
                </div>

                <div style="margin-bottom: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; color: white;">Information We Collect</h2>
                    <p style="margin-bottom: 1rem;">
                        We collect personal and non-personal information in various ways:
                    </p>
                    <ul style="list-style: disc; margin-left: 2rem; margin-bottom: 1rem;">
                        <li>When you create an account, register for services, or subscribe to our newsletter</li>
                        <li>When you contact us via email or other channels</li>
                        <li>When you provide information in exchange for free resources or downloads</li>
                        <li>When you complete surveys or enter contests</li>
                        <li>Through cookies and similar technologies when you interact with our website</li>
                    </ul>
                    <p style="margin-top: 1rem;">
                        Personal information may include your name, address, email, phone number, payment details, and account preferences. Non-personal information includes device data, IP addresses, and browsing activity.
                    </p>
                </div>

                <div style="margin-bottom: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; color: white;">How We Use Your Information</h2>
                    <p style="margin-bottom: 1rem;">
                        We use the information we collect to:
                    </p>
                    <ul style="list-style: disc; margin-left: 2rem;">
                        <li>Provide our services and fulfill orders</li>
                        <li>Communicate with you about our products and services</li>
                        <li>Personalize your website experience and improve functionality</li>
                        <li>Comply with legal and regulatory requirements</li>
                        <li>Protect against fraud and unauthorized use</li>
                    </ul>
                </div>

                <div style="margin-bottom: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; color: white;">Sharing Your Information</h2>
                    <p style="margin-bottom: 1rem;">
                        We do not sell or rent your personal information. We may share it with third parties in specific cases:
                    </p>
                    <ul style="list-style: disc; margin-left: 2rem;">
                        <li>With service providers (e.g., email platforms, payment processors) to deliver services</li>
                        <li>As required by law, legal processes, or law enforcement</li>
                        <li>In the event of a business transaction such as a merger or sale</li>
                        <li>With your consent, for purposes disclosed at the time of sharing</li>
                    </ul>
                </div>

                <div style="margin-bottom: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; color: white;">Your Privacy Rights</h2>
                    <p style="margin-bottom: 1rem;">
                        Depending on your location, you may have the following rights regarding your data:
                    </p>
                    <ul style="list-style: disc; margin-left: 2rem;">
                        <li>The right to access and correct personal information</li>
                        <li>The right to request deletion of your data, subject to legal or contractual obligations</li>
                        <li>The right to opt out of marketing communications</li>
                    </ul>
                    <p style="margin-top: 1rem;">
                        To exercise these rights, email us at
                        <a href="mailto:<?php echo esc_attr(get_theme_mod('evolve_email', 'support@evolvemerchants.com')); ?>" style="color: #60a5fa;">
                            <?php echo esc_html(get_theme_mod('evolve_email', 'support@evolvemerchants.com')); ?>
                        </a>.
                    </p>
                </div>

                <div style="margin-bottom: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; color: white;">Data Retention and Security</h2>
                    <p>
                        We retain your data only as long as necessary to provide services, comply with legal obligations, or resolve disputes. We implement reasonable security measures, including encryption, to protect your data from unauthorized access.
                    </p>
                </div>

                <div style="background: linear-gradient(to bottom right, rgba(30, 58, 138, 0.6), rgba(30, 64, 175, 0.4)); padding: 2rem; border-radius: 0.75rem; border: 1px solid rgba(96, 165, 250, 0.5);">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; color: white;">Contact Us</h2>
                    <p style="margin-bottom: 1rem;">
                        For questions or concerns about this Privacy Policy, contact us at:
                    </p>
                    <div>
                        <p style="margin-bottom: 0.5rem;">
                            <strong>Email:</strong>
                            <a href="mailto:<?php echo esc_attr(get_theme_mod('evolve_email', 'support@evolvemerchants.com')); ?>" style="color: #60a5fa;">
                                <?php echo esc_html(get_theme_mod('evolve_email', 'support@evolvemerchants.com')); ?>
                            </a>
                        </p>
                        <p>
                            <strong>Phone:</strong>
                            <a href="tel:<?php echo esc_attr(str_replace(array('(', ')', ' ', '-'), '', get_theme_mod('evolve_phone', '8332069763'))); ?>" style="color: #60a5fa;">
                                <?php echo esc_html(get_theme_mod('evolve_phone', '(833) 206-9763')); ?>
                            </a>
                        </p>
                    </div>
                </div>
            <?php
            endif;
            ?>
        </div>
    </div>
</section>

<?php get_footer(); ?>
