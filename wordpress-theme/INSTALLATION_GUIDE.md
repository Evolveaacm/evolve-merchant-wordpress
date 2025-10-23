# Evolve Merchant Services - WordPress Theme Installation Guide

## 📋 Complete Installation Instructions

### Prerequisites
- WordPress 5.0 or higher
- PHP 7.4 or higher
- MySQL 5.6 or higher
- FTP access or WordPress admin access

---

## 🚀 STEP-BY-STEP INSTALLATION

### Step 1: Prepare the Theme Files

1. Locate the `evolve-merchant-services` folder in the `wordpress-theme` directory
2. Compress it into a ZIP file:
   - Right-click the folder
   - Select "Compress" or "Send to > Compressed (zipped) folder"
   - Name it: `evolve-merchant-services.zip`

### Step 2: Upload to WordPress

#### Option A: Via WordPress Admin (Easiest)

1. Log in to your WordPress admin panel (yoursite.com/wp-admin)
2. Navigate to **Appearance > Themes**
3. Click the **Add New** button
4. Click **Upload Theme**
5. Click **Choose File** and select `evolve-merchant-services.zip`
6. Click **Install Now**
7. Wait for the upload and installation to complete
8. Click **Activate** to activate the theme

#### Option B: Via FTP

1. Connect to your website via FTP (using FileZilla, Cyberduck, etc.)
2. Navigate to: `/wp-content/themes/`
3. Upload the unzipped `evolve-merchant-services` folder
4. Go to **Appearance > Themes** in WordPress admin
5. Find "Evolve Merchant Services" and click **Activate**

---

### Step 3: Create Required Pages

Create the following pages with these exact settings:

#### 1. Homepage
- **Title:** Home
- **Slug:** home
- **Template:** Default (front-page.php will auto-apply)
- **Content:** Leave blank (theme handles everything)

#### 2. Solutions Page
- **Title:** Solutions
- **Slug:** solutions
- **Template:** Solutions Page
- **Content:** Leave blank

#### 3. Products Page
- **Title:** Products
- **Slug:** products
- **Template:** Products Page
- **Content:** Leave blank

#### 4: Referral Partners Page
- **Title:** Referral Partners
- **Slug:** referral-partners
- **Template:** Referral Partners
- **Content:** Leave blank

#### 5. Privacy Policy
- **Title:** Privacy Policy
- **Slug:** privacy-policy
- **Template:** Privacy Policy
- **Content:** Add your privacy policy text

#### 6. Terms & Conditions
- **Title:** Terms & Conditions
- **Slug:** terms-and-conditions
- **Template:** Terms & Conditions
- **Content:** Add your terms text

---

### Step 4: Set the Homepage

1. Go to **Settings > Reading**
2. Under "Your homepage displays":
   - Select "A static page"
   - Choose "Home" for Homepage
   - Leave Posts page empty
3. Click **Save Changes**

---

### Step 5: Configure Theme Settings

1. Go to **Appearance > Customize**
2. Find the **Contact Information** section
3. Fill in the following:

   ```
   Phone Number: (833) 206-9763
   Email Address: support@evolvemerchants.com
   Facebook URL: https://www.facebook.com/profile.php?id=61578773851860
   LinkedIn URL: https://www.linkedin.com/company/evolve-merchant-services/
   Calendly URL: https://calendly.com/-evolvemerchants
   Funding Application URL: [Your funding URL]
   ```

4. Click **Publish** to save changes

---

### Step 6: Verify Installation

Check these pages to ensure everything works:

- ✅ Homepage displays correctly
- ✅ Navigation menu works
- ✅ Mobile menu toggles properly
- ✅ Contact form appears
- ✅ All links work correctly
- ✅ Particle animation shows in background

---

## 🔧 TROUBLESHOOTING

### Theme doesn't appear in Themes list
- **Solution:** Check that the folder structure is correct
- Should be: `/wp-content/themes/evolve-merchant-services/style.css`
- NOT: `/wp-content/themes/evolve-merchant-services/evolve-merchant-services/style.css`

### Homepage shows blog posts
- **Solution:** Go to Settings > Reading and set a static homepage

### Menu doesn't work
- **Solution:**
  1. Go to Appearance > Menus
  2. Create a menu named "Primary Menu"
  3. Assign it to "Primary Menu" location

### Particles don't animate
- **Solution:** Check browser console for JavaScript errors
- Ensure jQuery is loaded
- Try clearing browser cache

### Form doesn't work
- **Solution:** The form opens default email client
- To use a contact form plugin instead, install Contact Form 7

---

## 📁 THEME FILES REFERENCE

### Core Files
- `style.css` - Main stylesheet and theme header
- `functions.php` - Theme functions and setup
- `header.php` - Site header and navigation
- `footer.php` - Site footer
- `front-page.php` - Homepage template
- `index.php` - Fallback template

### JavaScript Files
- `js/particles.js` - Particle animation background
- `js/main.js` - Mobile menu, smooth scroll, animations

### Template Files (Need to be created)
- `template-solutions.php` - Solutions page
- `template-products.php` - Products page
- `template-referral-partners.php` - Referral partners
- `template-privacy.php` - Privacy policy
- `template-terms.php` - Terms & conditions

---

## 🎨 CUSTOMIZATION

### Change Colors
Edit `style.css` and search for:
- Primary blue: `#3b82f6`
- Dark background: `#0f1419`
- Text color: `#ffffff`

### Change Phone Number / Email
1. Go to **Appearance > Customize**
2. Find **Contact Information**
3. Update the fields
4. Click **Publish**

### Add/Remove Sections
Edit `front-page.php` to add or remove sections

---

## 📞 SUPPORT

**Need help?**
- Email: support@evolvemerchants.com
- Phone: (833) 206-9763
- Hours: Mon-Fri 8:00AM - 5:00PM

---

## ⚡ NEXT STEPS

After installation:

1. ✅ Test all pages on desktop
2. ✅ Test all pages on mobile
3. ✅ Test contact form
4. ✅ Add your actual content to Privacy Policy and Terms pages
5. ✅ Set up Google Analytics (if needed)
6. ✅ Install SSL certificate (https://)
7. ✅ Submit sitemap to Google Search Console

---

## 📝 NOTES

- **Performance:** Theme is optimized for speed
- **SEO:** Add Yoast SEO plugin for better SEO
- **Security:** Keep WordPress and theme updated
- **Backups:** Use UpdraftPlus or similar backup plugin

---

**Theme Version:** 1.0.0
**Last Updated:** 2025

**Created for:** Evolve Merchant Services LLC
