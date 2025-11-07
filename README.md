# NeoX Clone - Premium Payment Platform

A modern, production-ready clone of the NeoX payment platform featuring Stripe-inspired design, comprehensive responsive layouts, and interactive animations. Built for deployment on Cloudflare Workers.

## ✨ Features

### Design & UX

- **🎨 Premium Design**: Stripe/Apple-inspired interface with glassmorphism effects
- **📱 Fully Responsive**: Mobile-first design with 7 breakpoints (375px - 1024px+)
- **🎭 Smooth Animations**:
  - Rotating globe icon with meridian fade effects
  - Hover animations for all product cards
  - Wave gradients and parallax effects
  - Heartbeat footer animation
- **♿ WCAG AAA Compliant**: High contrast ratios and accessibility standards

### Technical Features

- **⚡ Performance Optimized**:
  - Minified CSS (build process with clean-css-cli)
  - Local asset storage (no CDN dependencies)
  - Fast loading on Cloudflare Workers
- **🔧 Developer-Friendly**:
  - Dedicated "Designed for developers" section
  - Code preview blocks with syntax styling
  - Integration showcase
- **🎯 SEO Friendly**: Proper meta tags and semantic HTML5

### Content Sections

- **Hero Section**: Animated dashboard mockup with checkout card overlay
- **Products Grid**: 5 product cards with custom SVG icons
  - Payment Gateway (rotating globe)
  - NeoX Control (virtual card)
  - Disbursement (mass payout flow)
  - Collection (money collection wallet)
  - Payout (verified checkmark)
- **Compliance Section**: 5 animated compliance icons
- **Partners**: Trusted by 8 banks + 7 partners (all logos stored locally)
- **Developers Section**: 4 cards with code previews and integrations
- **Modern Footer**: Wave animations, heartbeat effect, social links

## 📁 Project Structure

```
neox-clone/
├── index.html              # Main HTML file (977 lines)
├── css/
│   └── style.css          # Comprehensive styles (3321 lines)
├── js/
│   └── main.js            # Interactive features
├── assets/                # Local asset storage
│   ├── neox-3d.svg       # Logo
│   ├── *-icon.svg        # Animated compliance icons (9 files)
│   ├── *-logo.{png,svg,avif}  # Bank & partner logos (15 files)
│   └── terminal-animated.svg
├── wrangler.toml          # Cloudflare Workers config
├── wrangler.jsonc         # Alternative config
├── package.json           # Build scripts
├── deploy.sh              # Deployment script
├── _headers               # Security headers
├── _redirects             # URL redirects
└── robots.txt             # SEO configuration
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with ARIA labels
- **CSS3**:
  - Custom properties (CSS variables)
  - CSS Grid and Flexbox
  - CSS animations (@keyframes)
  - Transform and transition effects
- **JavaScript**: Vanilla JS for interactions
- **SVG**: Custom animated icons with SMIL
- **Google Fonts**: Inter font family
- **Build Tools**: npm, clean-css-cli, html-minifier-terser
- **Deployment**: Cloudflare Workers (Wrangler 3.0+)

## 🎨 Design System

### Color Palette

```css
/* Purple Gradient (Primary) */
--color-purple-light: #A78BFA
--color-purple: #8B5CF6
--color-purple-dark: #7C3AED
--color-purple-darker: #5B21B6

/* Product Colors */
--color-red: #EF4444      /* Payment Gateway */
--color-orange: #F59E0B   /* NeoX Control */
--color-purple: #8B5CF6   /* Disbursement */
--color-indigo: #4F46E5   /* Collection */
--color-green: #10B981    /* Payout */
```

### Responsive Breakpoints

- **375px**: Small mobile
- **480px**: Mobile landscape
- **640px**: Large mobile
- **768px**: Tablet
- **1024px**: Desktop
- **1280px**: Large desktop
- **1440px**: Extra large

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start local development
npx http-server -p 8000
# or
python -m http.server 8000
```

### Build for Production

```bash
# Minify CSS
npm run build

# Deploy to Cloudflare Workers
npm run deploy
# or use the deploy script
./deploy.sh
```

## 🌐 Deployment

### Method 1: Wrangler CLI (Recommended)

```bash
# Install Wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
wrangler deploy
```

### Method 2: Git Integration

1. Push your code to GitHub

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
1. Navigate to **Pages** → **Create a project**
1. Select **Connect to Git**
1. Choose your repository
1. Configure build settings:
   - **Production branch**: `main`
   - **Build command**: (leave empty)
   - **Build output directory**: `/`
1. Click **Save and Deploy**

### Method 3: Direct Upload

1. Create a ZIP file

   ```bash
   zip -r neox-clone.zip . -x "*.git*" "node_modules/*" ".DS_Store"
   ```

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
1. Navigate to **Pages** → **Create a project**
1. Select **Direct Upload**
1. Upload your ZIP file
1. Click **Deploy site**

## 📊 Animation Features

### Product Icons

- **Payment Gateway**: Rotating globe with meridian fade animation (8s loop)
- **NeoX Control**: Card background pulse effect (1.5s loop)
- **Disbursement**: Downward money flow animation (1.2s loop)
- **Collection**: Wallet with incoming payment arrows
- **Payout**: Checkmark with stroke-width pulse (1s loop)

### Globe Animation

The Payment Gateway globe features a sophisticated animation:

```css
/* 3 meridians fade in/out in sequence */
@keyframes meridian1 { 0%, 100% { opacity: 0.95; } 25% { opacity: 0.4; } ... }
@keyframes meridian2 { 0%, 100% { opacity: 0.8; } 25% { opacity: 0.2; } ... }
@keyframes meridian3 { 0%, 100% { opacity: 0.8; } 25% { opacity: 0.95; } ... }
```

This creates the illusion of a 3D rotating globe while maintaining crisp 2D SVG quality.

## 🎯 Key Improvements (v1.2)

- ✅ **Animated Product Icons**: All 5 product cards have contextual hover animations
- ✅ **Globe Rotation**: Continuous rotating globe for Payment Gateway
- ✅ **Collection Icon Redesign**: New wallet icon with incoming payment arrows
- ✅ **Local Assets**: All 15 partner/bank logos stored locally (no CDN dependencies)
- ✅ **Developer Section**: 4 cards with code previews and integration showcase
- ✅ **Modern Footer**: Wave animations with heartbeat effect
- ✅ **WCAG AAA**: High contrast compliance
- ✅ **7 Responsive Breakpoints**: Comprehensive mobile-first design

## 🎨 Customization

### Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
    --color-purple: #8B5CF6;
    --color-indigo: #4F46E5;
    --color-green: #10B981;
    /* Add more custom colors */
}
```

### Content

Edit the HTML content in `index.html` to match your needs.

### Icons

All icons are inline SVG in `index.html`. To customize:

1. Locate the product card section
1. Modify the SVG paths and properties
1. Adjust colors using `stroke` and `fill` attributes

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- **Fast Load Times**: Minified CSS and optimized assets
- **Cloudflare Workers**: Global edge network delivery
- **Minimal Dependencies**: No heavy frameworks
- **Local Assets**: 15 logos stored locally (no external CDN calls)
- **Lazy Loading**: Images load as needed

## 📄 License

This is a demonstration project. All rights reserved to original NeoX branding.

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repository
1. Create a feature branch
1. Make your changes
1. Test responsiveness across breakpoints
1. Submit a pull request

## 📞 Support

For questions or issues:

- Open an issue on GitHub
- Contact through the website form
- Check documentation in `/docs` (if available)

## 🏆 Credits

- **Design Inspiration**: Stripe.com, Apple.com
- **Icons**: Custom SVG designs
- **Fonts**: Google Fonts (Inter)
- **Deployment**: Cloudflare Workers

---

**Built with 💜 in Vietnam**

*Last Updated: November 7, 2025*

---

Built with ❤️ for Cloudflare Pages
