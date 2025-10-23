<?php
/**
 * Evolve Merchant Services Theme Functions
 */

// Theme Setup
function evolve_theme_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));

    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'evolve-merchant-services'),
        'footer' => __('Footer Menu', 'evolve-merchant-services'),
    ));
}
add_action('after_setup_theme', 'evolve_theme_setup');

// Enqueue styles and scripts
function evolve_enqueue_scripts() {
    // Main stylesheet
    wp_enqueue_style('evolve-style', get_stylesheet_uri(), array(), '1.0.0');

    // Custom JavaScript
    wp_enqueue_script('evolve-particles', get_template_directory_uri() . '/js/particles.js', array(), '1.0.0', true);
    wp_enqueue_script('evolve-main', get_template_directory_uri() . '/js/main.js', array('jquery'), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'evolve_enqueue_scripts');

// Add custom page templates
function evolve_add_page_templates($templates) {
    $templates['template-solutions.php'] = 'Solutions Page';
    $templates['template-products.php'] = 'Products Page';
    $templates['template-referral-partners.php'] = 'Referral Partners';
    $templates['template-privacy.php'] = 'Privacy Policy';
    $templates['template-terms.php'] = 'Terms & Conditions';
    return $templates;
}
add_filter('theme_page_templates', 'evolve_add_page_templates');

// Remove WordPress admin bar margin
function evolve_remove_admin_bar_margin() {
    remove_action('wp_head', '_admin_bar_bump_cb');
}
add_action('get_header', 'evolve_remove_admin_bar_margin');

// Custom logo support
function evolve_custom_logo_setup() {
    $defaults = array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
        'header-text' => array('site-title', 'site-description'),
    );
    add_theme_support('custom-logo', $defaults);
}
add_action('after_setup_theme', 'evolve_custom_logo_setup');

// Customizer settings
function evolve_customize_register($wp_customize) {
    // Contact information
    $wp_customize->add_section('evolve_contact', array(
        'title' => __('Contact Information', 'evolve-merchant-services'),
        'priority' => 30,
    ));

    // Phone Number
    $wp_customize->add_setting('evolve_phone', array(
        'default' => '(833) 206-9763',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('evolve_phone', array(
        'label' => __('Phone Number', 'evolve-merchant-services'),
        'section' => 'evolve_contact',
        'type' => 'text',
    ));

    // Email
    $wp_customize->add_setting('evolve_email', array(
        'default' => 'support@evolvemerchants.com',
        'sanitize_callback' => 'sanitize_email',
    ));
    $wp_customize->add_control('evolve_email', array(
        'label' => __('Email Address', 'evolve-merchant-services'),
        'section' => 'evolve_contact',
        'type' => 'email',
    ));

    // Facebook URL
    $wp_customize->add_setting('evolve_facebook', array(
        'default' => 'https://www.facebook.com/profile.php?id=61578773851860',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('evolve_facebook', array(
        'label' => __('Facebook URL', 'evolve-merchant-services'),
        'section' => 'evolve_contact',
        'type' => 'url',
    ));

    // LinkedIn URL
    $wp_customize->add_setting('evolve_linkedin', array(
        'default' => 'https://www.linkedin.com/company/evolve-merchant-services/',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('evolve_linkedin', array(
        'label' => __('LinkedIn URL', 'evolve-merchant-services'),
        'section' => 'evolve_contact',
        'type' => 'url',
    ));

    // Calendly URL
    $wp_customize->add_setting('evolve_calendly', array(
        'default' => 'https://calendly.com/-evolvemerchants',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('evolve_calendly', array(
        'label' => __('Calendly URL', 'evolve-merchant-services'),
        'section' => 'evolve_contact',
        'type' => 'url',
    ));

    // Funding URL
    $wp_customize->add_setting('evolve_funding', array(
        'default' => 'https://app.advancefundsnetwork.com/application/KHlip10F2ONcpL7e45YxEhS7eoB3?partner=fR5kLIriQzc7gXgOmvEKZpw2UCl2',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('evolve_funding', array(
        'label' => __('Funding Application URL', 'evolve-merchant-services'),
        'section' => 'evolve_contact',
        'type' => 'url',
    ));
}
add_action('customize_register', 'evolve_customize_register');
