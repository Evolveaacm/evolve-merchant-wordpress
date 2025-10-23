# Evolve Merchant Services WordPress Theme

A modern, responsive WordPress theme for Evolve Merchant Services payment processing website.

## Installation Instructions

### Method 1: Upload via WordPress Admin (Recommended)

1. **Create a ZIP file:**
   - Compress the `evolve-merchant-services` folder into a ZIP file
   - Make sure the folder structure is: `evolve-merchant-services.zip` containing all theme files

2. **Upload to WordPress:**
   - Log in to your WordPress admin panel
   - Go to **Appearance > Themes**
   - Click **Add New**
   - Click **Upload Theme**
   - Choose the ZIP file you created
   - Click **Install Now**
   - Click **Activate** once installation is complete

### Method 2: FTP Upload

1. **Upload via FTP:**
   - Connect to your WordPress site via FTP
   - Navigate to `/wp-content/themes/`
   - Upload the entire `evolve-merchant-services` folder
   - Go to **Appearance > Themes** in WordPress admin
   - Activate the theme

## Theme Setup

### 1. Create Required Pages

Create the following pages in WordPress:

- **Homepage** (set as Front Page)
  - Title: "Home"
  - Template: Default (front-page.php will be used automatically)

- **Solutions**
  - Slug: `solutions`
  - Template: Solutions Page

- **Products**
  - Slug: `products`
  - Template: Products Page

- **Referral Partners**
  - Slug: `referral-partners`
  - Template: Referral Partners

- **Privacy Policy**
  - Slug: `privacy-policy`
  - Template: Privacy Policy

- **Terms & Conditions**
  - Slug: `terms-and-conditions`
  - Template: Terms & Conditions

### 2. Set Homepage

1. Go to **Settings > Reading**
2. Select "A static page"
3. Choose your "Home" page as the homepage
4. Save changes

### 3. Configure Theme Settings

Go to **Appearance > Customize** to set:

- **Phone Number:** (833) 206-9763
- **Email Address:** support@evolvemerchants.com
- **Facebook URL**
- **LinkedIn URL**
- **Calendly URL**
- **Funding Application URL**

## Theme Features

✅ Fully responsive design
✅ Animated particle background
✅ Smooth scrolling navigation
✅ Mobile-friendly menu
✅ Partner logos section
✅ Contact form integration
✅ Customizable via WordPress Customizer
✅ Modern gradient design
✅ Optimized for performance

## File Structure

```
evolve-merchant-services/
├── css/
├── js/
│   ├── main.js
│   └── particles.js
├── images/
├── footer.php
├── front-page.php
├── functions.php
├── header.php
├── style.css
├── template-solutions.php (to be created)
├── template-products.php (to be created)
├── template-referral-partners.php (to be created)
├── template-privacy.php (to be created)
└── template-terms.php (to be created)
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Support

For theme support or customization:
- Email: support@evolvemerchants.com
- Phone: (833) 206-9763

## License

This theme is proprietary and created for Evolve Merchant Services LLC.

## Version

1.0.0 - Initial Release
