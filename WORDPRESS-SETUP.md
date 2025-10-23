# Evolve Merchant Services - WordPress Setup Guide

## 📋 Overview
This guide will help you integrate the Evolve Merchant Services website into your WordPress site.

## 🎯 Installation Options

### Option 1: Page Template (Recommended for Full Control)

1. **Create a New Page Template:**
   - Go to your WordPress theme folder: `wp-content/themes/your-theme/`
   - Create a new file: `template-evolve.php`
   - Add this at the top:
   ```php
   <?php
   /**
    * Template Name: Evolve Merchant Services
    */
   ?>
   ```

2. **Add the HTML structure:**
   - Copy the content from `wordpress-version.html`
   - Paste it into `template-evolve.php` after the template header
   - Wrap it in WordPress template tags if needed

3. **Enqueue Styles and Scripts:**
   - Add to your theme's `functions.php`:
   ```php
   function evolve_enqueue_assets() {
       if (is_page_template('template-evolve.php')) {
           wp_enqueue_style('evolve-styles', get_template_directory_uri() . '/css/wordpress-styles.css');
           wp_enqueue_script('evolve-scripts', get_template_directory_uri() . '/js/wordpress-script.js', array(), '1.0', true);
       }
   }
   add_action('wp_enqueue_scripts', 'evolve_enqueue_assets');
   ```

4. **Upload Files:**
   - Upload `wordpress-styles.css` to `/wp-content/themes/your-theme/css/`
   - Upload `wordpress-script.js` to `/wp-content/themes/your-theme/js/`

5. **Create a New Page:**
   - In WordPress Admin → Pages → Add New
   - Select "Evolve Merchant Services" template from Page Attributes
   - Publish the page

---

### Option 2: Custom HTML Block (Elementor/Gutenberg)

#### For Gutenberg (Block Editor):

1. **Create a New Page**
2. **Add Custom HTML Block**
3. **Paste the complete HTML from `wordpress-version.html`**
4. **Add Custom CSS:**
   - Go to Appearance → Customize → Additional CSS
   - Paste the contents of `wordpress-styles.css`

5. **Add JavaScript:**
   - Install "Insert Headers and Footers" plugin
   - Go to Settings → Insert Headers and Footers
   - In the footer scripts, add:
   ```html
   <script>
   // Paste contents of wordpress-script.js here
   </script>
   ```

#### For Elementor:

1. **Create New Page with Elementor**
2. **Add HTML Widget**
3. **Paste the HTML code**
4. **Add Custom CSS** in Elementor's Custom CSS panel
5. **Add JavaScript** using HTML widget at bottom of page

---

### Option 3: Shortcode (Most Flexible)

1. **Add to `functions.php`:**
```php
function evolve_merchant_shortcode() {
    ob_start();
    include(get_template_directory() . '/templates/evolve-merchant.php');
    return ob_get_clean();
}
add_shortcode('evolve_merchant', 'evolve_merchant_shortcode');
```

2. **Create Template File:**
   - Create `/templates/evolve-merchant.php`
   - Add the HTML from `wordpress-version.html`

3. **Use Shortcode:**
   - Add `[evolve_merchant]` to any page

---

## 🎨 Customization

### Changing Colors

In `wordpress-styles.css`, find and modify:

```css
/* Primary Blue */
#3b82f6 → Your color

/* Secondary Blue */
#60a5fa → Your color

/* Background */
#0f1419 → Your color
```

### Editing Contact Form

The contact form uses `mailto:` by default. To use a WordPress contact form plugin:

1. **Install Contact Form 7** or **WPForms**
2. **Create a form**
3. **Replace** the form HTML in your template with the shortcode:
```html
<?php echo do_shortcode('[contact-form-7 id="123"]'); ?>
```

### Updating Content

- **Company Name**: Search and replace "Evolve Merchant Services"
- **Phone Number**: Search and replace "(833) 206-9763"
- **Email**: Search and replace "support@evolvemerchants.com"

---

## 🔧 Troubleshooting

### Styles Not Loading?
- Clear WordPress cache
- Check file paths in `functions.php`
- Verify CSS file is uploaded correctly

### JavaScript Not Working?
- Check browser console for errors
- Ensure jQuery is loaded (if needed)
- Verify file path to JS file

### Mobile Menu Not Working?
- Make sure JavaScript is loaded in footer
- Check that `toggleMobileMenu()` function exists

### Particles Not Animating?
- Check if canvas element exists in HTML
- Verify JavaScript is loaded
- Check browser console for errors

---

## 📱 Responsive Design

The site is fully responsive and tested on:
- ✅ Desktop (1920px+)
- ✅ Laptop (1366px)
- ✅ Tablet (768px)
- ✅ Mobile (375px)

---

## 🚀 Performance Optimization

### Recommended Plugins:
1. **WP Rocket** - Caching
2. **Smush** - Image optimization
3. **Autoptimize** - Minify CSS/JS

### Manual Optimizations:
1. **Minify CSS** - Use online CSS minifier
2. **Minify JavaScript** - Use online JS minifier
3. **Lazy Load Images** - Add loading="lazy" to images
4. **CDN** - Use Cloudflare or similar

---

## 📧 Contact Form Setup

### Option A: Email Form (Default)
Uses `mailto:` - opens user's email client

### Option B: Contact Form 7
```php
// Install Contact Form 7 plugin
// Create new form
// Replace form HTML with:
<?php echo do_shortcode('[contact-form-7 id="YOUR_FORM_ID"]'); ?>
```

### Option C: WPForms
```php
// Install WPForms plugin
// Create new form
// Replace form HTML with:
<?php echo do_shortcode('[wpforms id="YOUR_FORM_ID"]'); ?>
```

---

## 🔐 Security

1. **Sanitize Form Inputs** - Use WordPress sanitization functions
2. **Add CAPTCHA** - Use reCAPTCHA on contact form
3. **Update Regularly** - Keep WordPress and plugins updated

---

## 🌐 SEO Optimization

### Add to `<head>`:
```html
<meta name="description" content="Evolve Merchant Services - Payment processing solutions for your business">
<meta name="keywords" content="merchant services, payment processing, POS systems">
<meta property="og:title" content="Evolve Merchant Services">
<meta property="og:description" content="Fueling Growth. Driving Change.">
<meta property="og:image" content="URL_TO_YOUR_IMAGE">
```

### Install Yoast SEO Plugin:
- Set focus keyword
- Optimize meta description
- Add schema markup

---

## 📞 Support

For WordPress-specific questions:
- Email: support@evolvemerchants.com
- Phone: (833) 206-9763

For technical support:
- Check WordPress documentation
- Visit WordPress support forums

---

## ✅ Checklist

Before going live:

- [ ] All links work correctly
- [ ] Contact form sends emails
- [ ] Mobile menu functions
- [ ] Particle animation runs smoothly
- [ ] Site is responsive on all devices
- [ ] Colors match brand guidelines
- [ ] Contact information is correct
- [ ] SEO tags are added
- [ ] Site loads quickly (< 3 seconds)
- [ ] Forms have spam protection
- [ ] Analytics tracking is set up
- [ ] SSL certificate installed (HTTPS)

---

## 🎉 You're Ready!

Your Evolve Merchant Services website is now ready to launch on WordPress!

For updates or modifications, refer to this guide or contact support.
