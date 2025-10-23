# 📦 Download & Installation Guide

## 🔗 GitHub Repository

**Repository URL:** https://github.com/Evolveaacm/evolve-merchant-wordpress

---

## 📥 Download Options

### Option 1: Download ZIP from GitHub (Easiest)

1. **Visit the repository:**
   https://github.com/Evolveaacm/evolve-merchant-wordpress

2. **Download ZIP:**
   - Click the green "Code" button
   - Select "Download ZIP"
   - Extract the ZIP file on your computer

### Option 2: Clone with Git

```bash
git clone https://github.com/Evolveaacm/evolve-merchant-wordpress.git
cd evolve-merchant-wordpress
```

---

## 🎯 What's Included

### 📁 WordPress Theme (`wordpress-theme/evolve-merchant-services/`)

**Ready-to-install WordPress theme with:**
- Complete homepage with all sections
- 5 page templates (Solutions, Products, Referral Partners, Privacy, Terms)
- Particle animation background
- Responsive mobile design
- All SVG graphics and mockups

**Files:**
- `style.css` - Main stylesheet
- `functions.php` - Theme functions
- `header.php` - Header with navigation
- `footer.php` - Footer with contact info
- `front-page.php` - Homepage template
- `template-*.php` - Page templates

### 🔌 WordPress Plugin

**Files:**
- `evolve-merchant-plugin.php` - Plugin source code
- `evolve-merchant-plugin.zip` - Ready to install

### 🌐 Standalone HTML

**Files:**
- `index.html` - Complete standalone website (no WordPress needed!)
- Works on any web server, hosting provider, or locally

---

## 🚀 Installation Instructions

### For WordPress Theme:

1. **Download the theme ZIP:**
   - From GitHub: `wordpress-theme/evolve-merchant-services.zip`
   - OR create it: `cd wordpress-theme && zip -r theme.zip evolve-merchant-services/`

2. **Install in WordPress:**
   ```
   WordPress Admin → Appearance → Themes
   → Add New → Upload Theme
   → Choose ZIP file → Install Now → Activate
   ```

3. **Create pages:**
   - Create 5 new pages: Solutions, Products, Referral Partners, Privacy Policy, Terms
   - Assign the corresponding template to each page

### For WordPress Plugin:

1. **Download:** `evolve-merchant-plugin.zip`

2. **Install in WordPress:**
   ```
   WordPress Admin → Plugins → Add New
   → Upload Plugin → Choose ZIP file
   → Install Now → Activate
   ```

### For Standalone HTML:

1. **Download:** `index.html`

2. **Deploy:**
   - Upload to any web hosting (Netlify, Vercel, GitHub Pages, etc.)
   - OR open locally in a browser
   - No installation needed!

---

## 🎨 WordPress Theme Installation (Step-by-Step)

### Step 1: Download Theme

**From GitHub:**
```bash
# Download the repository
wget https://github.com/Evolveaacm/evolve-merchant-wordpress/archive/refs/heads/master.zip

# Extract
unzip master.zip

# Navigate to theme folder
cd evolve-merchant-wordpress-master/wordpress-theme/

# The ready-to-install theme ZIP is: evolve-merchant-services.zip
```

**OR** download directly from:
https://github.com/Evolveaacm/evolve-merchant-wordpress/raw/master/wordpress-theme/evolve-merchant-services.zip

### Step 2: Install in WordPress

1. **Log in to WordPress Admin**
   - Go to your WordPress site: `yoursite.com/wp-admin`
   - Enter your credentials

2. **Navigate to Themes**
   - Appearance → Themes

3. **Add New Theme**
   - Click "Add New"
   - Click "Upload Theme"

4. **Upload ZIP**
   - Choose `evolve-merchant-services.zip`
   - Click "Install Now"

5. **Activate**
   - Click "Activate" when installation completes

### Step 3: Create Pages

Create these pages with their templates:

| Page Name         | Template to Assign        |
|-------------------|---------------------------|
| Solutions         | Solutions Template        |
| Products          | Products Template         |
| Referral Partners | Referral Partners Template|
| Privacy Policy    | Privacy Template          |
| Terms             | Terms Template            |

**How to assign templates:**
1. Pages → Add New
2. Enter page title
3. In the right sidebar → Page Attributes → Template
4. Select the corresponding template
5. Publish

### Step 4: Setup Homepage

1. **Set homepage:**
   - Settings → Reading
   - "Your homepage displays" → Select "A static page"
   - Homepage: (WordPress will use front-page.php automatically)

2. **Create main menu:**
   - Appearance → Menus
   - Create a new menu called "Main Menu"
   - Add pages: Home, Solutions, Products, Contact
   - Assign to "Primary Menu" location

---

## 📋 Quick Start Checklist

- [ ] Download theme/plugin/HTML from GitHub
- [ ] Install in WordPress (if using WordPress)
- [ ] Activate theme
- [ ] Create pages with templates
- [ ] Customize contact information
- [ ] Test on mobile devices
- [ ] Deploy!

---

## 🔧 Customization

### Update Contact Info

Edit in theme files:
- Email: `support@evolvemerchants.com`
- Phone: `(833) 206-9763`

**Files to update:**
- `footer.php` - Footer contact info
- `header.php` - Header phone number
- `front-page.php` - Contact form email

### Change Colors

Edit `style.css`:
```css
/* Primary blue color */
--color-primary: #3b82f6;

/* Background color */
--bg-dark: #0f1419;
```

### Social Media Links

Update in `footer.php`:
- LinkedIn: https://www.linkedin.com/company/evolve-merchant-services/
- Facebook: https://www.facebook.com/profile.php?id=61578773851860

---

## 💡 Support

Need help? Contact:
- **Email:** support@evolvemerchants.com
- **Phone:** (833) 206-9763
- **Hours:** Mon-Fri 8:00AM - 5:00PM

---

## 📄 Files Reference

```
evolve-merchant-wordpress/
├── index.html                          # Standalone HTML (no WordPress)
├── wordpress-theme/
│   └── evolve-merchant-services.zip    # WordPress theme (ready to install)
├── evolve-merchant-plugin.zip          # WordPress plugin (ready to install)
├── WORDPRESS-README.md                 # WordPress documentation
├── DOWNLOAD-GUIDE.md                   # This file
└── README.md                           # General README
```

---

## 🌐 Live Demo

View the standalone HTML version on GitHub Pages:
https://evolveaacm.github.io/evolve-merchant-wordpress/

---

**© 2025 Evolve Merchant Services. All rights reserved.**
