<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<canvas id="particle-canvas"></canvas>

<header class="site-header">
    <a href="<?php echo esc_url(home_url('/')); ?>" class="site-logo">
        <div class="logo-text">
            <svg width="11" height="17" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 0.15em;">
                <rect x="0" y="2" width="12" height="2" fill="white"/>
                <rect x="0" y="10" width="2" height="12" fill="white"/>
                <rect x="0" y="10" width="12" height="2" fill="white"/>
                <rect x="0" y="20" width="12" height="2" fill="white"/>
            </svg>
            <span>VOLVE</span>
        </div>
        <div class="logo-tagline">MERCHANT SERVICES</div>
    </a>

    <nav class="main-navigation">
        <a href="<?php echo esc_url(home_url('/')); ?>">HOME</a>
        <a href="<?php echo esc_url(home_url('/solutions')); ?>">SOLUTIONS</a>
        <a href="<?php echo esc_url(home_url('/products')); ?>">PRODUCTS</a>
        <a href="<?php echo esc_url(home_url('/#contact')); ?>">CONTACT</a>
        <a href="<?php echo esc_url(get_theme_mod('evolve_funding', '#')); ?>" target="_blank" rel="noopener noreferrer">FUNDING</a>
        <a href="tel:<?php echo esc_attr(str_replace(array('(', ')', ' ', '-'), '', get_theme_mod('evolve_phone', '8332069763'))); ?>" class="call-button">
            <?php echo esc_html(get_theme_mod('evolve_phone', '(833) 206-9763')); ?>
        </a>
    </nav>

    <button class="mobile-menu-toggle" aria-label="Toggle menu" onclick="toggleMobileMenu()">
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    </button>
</header>

<div class="mobile-menu" id="mobile-menu">
    <nav>
        <a href="<?php echo esc_url(home_url('/')); ?>">HOME</a>
        <a href="<?php echo esc_url(home_url('/solutions')); ?>">SOLUTIONS</a>
        <a href="<?php echo esc_url(home_url('/products')); ?>">PRODUCTS</a>
        <a href="<?php echo esc_url(home_url('/#contact')); ?>">CONTACT</a>
        <a href="<?php echo esc_url(get_theme_mod('evolve_funding', '#')); ?>" target="_blank" rel="noopener noreferrer">FUNDING</a>
        <a href="tel:<?php echo esc_attr(str_replace(array('(', ')', ' ', '-'), '', get_theme_mod('evolve_phone', '8332069763'))); ?>" class="call-button">
            <?php echo esc_html(get_theme_mod('evolve_phone', '(833) 206-9763')); ?>
        </a>
    </nav>
</div>
