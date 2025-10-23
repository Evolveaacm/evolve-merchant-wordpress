<footer class="site-footer">
    <div class="footer-container">
        <div class="footer-contact">
            <div class="footer-contact-links">
                <a href="mailto:<?php echo esc_attr(get_theme_mod('evolve_email', 'support@evolvemerchants.com')); ?>" class="footer-contact-link">
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span><?php echo esc_html(get_theme_mod('evolve_email', 'support@evolvemerchants.com')); ?></span>
                </a>
                <a href="tel:<?php echo esc_attr(str_replace(array('(', ')', ' ', '-'), '', get_theme_mod('evolve_phone', '8332069763'))); ?>" class="footer-contact-link">
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span><?php echo esc_html(get_theme_mod('evolve_phone', '(833) 206-9763')); ?></span>
                </a>
            </div>
            <p class="footer-hours">Hours: Mon-Fri 8:00AM - 5:00PM</p>
        </div>

        <div class="footer-bottom">
            <div class="footer-branding">
                <div class="site-logo" style="opacity: 0.6;">
                    <div class="logo-text" style="font-size: 13px;">
                        <svg width="7" height="10" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 0.15em;">
                            <rect x="0" y="2" width="12" height="2" fill="white"/>
                            <rect x="0" y="10" width="2" height="12" fill="white"/>
                            <rect x="0" y="10" width="12" height="2" fill="white"/>
                            <rect x="0" y="20" width="12" height="2" fill="white"/>
                        </svg>
                        <span>VOLVE</span>
                    </div>
                    <div class="logo-tagline" style="font-size: 7px; margin-top: 0.125rem;">MERCHANT SERVICES</div>
                </div>
                <span class="footer-copyright">©copyright <?php echo date('Y'); ?>, Evolve Merchant Services</span>
            </div>

            <div class="footer-social">
                <a href="<?php echo esc_url(get_theme_mod('evolve_linkedin', '#')); ?>" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                </a>
                <a href="<?php echo esc_url(get_theme_mod('evolve_facebook', '#')); ?>" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                </a>
            </div>

            <div class="footer-links">
                <a href="<?php echo esc_url(home_url('/referral-partners')); ?>">Referral Partners</a>
                <a href="<?php echo esc_url(home_url('/privacy-policy')); ?>">Privacy Policy</a>
                <a href="<?php echo esc_url(home_url('/terms-and-conditions')); ?>">Terms & Conditions</a>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
