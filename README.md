# NeoX Clone - Cloudflare Pages

A modern, responsive clone of the NeoX website built for deployment on Cloudflare Pages.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Performance Optimized**: Fast loading times and optimized for Cloudflare Pages
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Interactive Elements**: Smooth scrolling, parallax effects, and hover animations

## 📁 Project Structure

```
neox-clone/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Stylesheet with all styles
├── js/
│   └── main.js         # JavaScript for interactions
└── README.md           # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript**: Vanilla JS for interactions
- **Google Fonts**: Inter font family

## 🌐 Deployment to Cloudflare Pages

### Method 1: Git Integration (Recommended)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. Navigate to **Pages** → **Create a project**
4. Select **Connect to Git**
5. Choose your repository
6. Configure build settings:
   - **Production branch**: `main`
   - **Build command**: (leave empty)
   - **Build output directory**: `/`
7. Click **Save and Deploy**

### Method 2: Direct Upload

1. Create a ZIP file of your project:
```bash
zip -r neox-clone.zip . -x "*.git*" "node_modules/*" ".DS_Store"
```

2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. Navigate to **Pages** → **Create a project**
4. Select **Direct Upload**
5. Upload your ZIP file
6. Click **Deploy site**

### Method 3: Wrangler CLI

1. Install Wrangler:
```bash
npm install -g wrangler
```

2. Login to Cloudflare:
```bash
wrangler login
```

3. Deploy your site:
```bash
wrangler pages publish . --project-name=neox-clone
```

## 🎨 Customization

### Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #4F46E5;
    --secondary-color: #10B981;
    /* Add more custom colors */
}
```

### Content
Edit the HTML content in `index.html` to match your needs.

### Images
To add actual images:
1. Create an `images` folder
2. Add your images
3. Update the image placeholders in `index.html`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- **Fast Load Times**: Optimized CSS and JavaScript
- **Cloudflare CDN**: Global content delivery
- **Minimal Dependencies**: No heavy frameworks
- **Lazy Loading**: Images and animations load as needed

## 🔧 Development

To develop locally:

1. Clone the repository
2. Open `index.html` in your browser
3. Or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js http-server
npx http-server
```

## 📄 License

This is a clone project for demonstration purposes.

## 🤝 Contributing

Feel free to fork and customize for your own needs!

## 📞 Contact

For questions or support, please reach out through the contact form on the website.

---

Built with ❤️ for Cloudflare Pages
