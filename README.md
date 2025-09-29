# Georgius Benedict Sungkharisma - Portfolio Website

A modern, responsive portfolio website showcasing my skills and projects as a Data Science student at Binus University.

## 🌟 Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Smooth scrolling, skill progress bars, contact form
- **Performance Optimized**: Fast loading with optimized images and code
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox/Grid, animations, and responsive design
- **JavaScript (ES6+)**: Interactive functionality and smooth user experience
- **Font Awesome**: Professional icons
- **Google Fonts**: Poppins font family for modern typography

## 📁 Project Structure

\`\`\`
portfolio/
├── index.html              # Main HTML file
├── css/
│   └── style.css           # Main stylesheet
├── js/
│   └── script.js           # JavaScript functionality
├── images/
│   ├── profile.jpg         # Profile photo
│   ├── project1.jpg        # Project screenshot 1
│   ├── project2.jpg        # Project screenshot 2
│   └── project3.jpg        # Project screenshot 3
├── assets/
│   └── CV_Georgius_Benedict.pdf  # Resume/CV file
├── .gitignore              # Git ignore file
└── README.md               # This file
\`\`\`

## 🚀 Deployment Instructions

### Option 1: GitHub Pages (Recommended)

1. **Create a GitHub Account**
   - Go to [github.com](https://github.com) and sign up if you don't have an account

2. **Create a New Repository**
   - Click the "+" icon in the top right corner
   - Select "New repository"
   - Name it `your-username.github.io` (replace `your-username` with your GitHub username)
   - Make sure it's set to "Public"
   - Check "Add a README file"
   - Click "Create repository"

3. **Upload Your Files**
   - Click "uploading an existing file" or drag and drop files
   - Upload all files maintaining the folder structure:
     - `index.html` (in root)
     - `css/style.css`
     - `js/script.js`
     - `images/` folder with all images
     - `assets/` folder with CV
   - Commit the changes with a message like "Initial portfolio upload"

4. **Enable GitHub Pages**
   - Go to your repository settings (Settings tab)
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

5. **Access Your Website**
   - Your website will be available at: `https://your-username.github.io`
   - It may take a few minutes to become available

### Option 2: Alternative Hosting Platforms

#### Netlify
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder to deploy
3. Your site will get a random URL that you can customize

#### Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Deploy with one click

#### GitHub Codespaces/GitPod
1. Upload to any GitHub repository
2. Use online IDE to edit and preview
3. Deploy using GitHub Pages

## 📝 Customization Guide

### Personal Information
Update the following in `index.html`:
- Name and title in the hero section
- Contact information (phone, email)
- Social media links (LinkedIn, GitHub)
- Education details
- Skills and percentages
- Project information and links

### Styling
Modify `css/style.css` to:
- Change color scheme (update CSS variables in `:root`)
- Adjust fonts and typography
- Modify layout and spacing
- Add custom animations

### Content
- Replace `images/profile.jpg` with your professional photo
- Update project images in the `images/` folder
- Replace `assets/CV_Georgius_Benedict.pdf` with your actual CV
- Modify project descriptions and links

### Skills Section
Update skill percentages in both:
- HTML: `data-width` attributes on `.skill-progress` elements
- CSS: Ensure the percentages match your actual skill levels

## 🔧 Local Development

To run the website locally:

1. **Simple Method**: Open `index.html` directly in your browser

2. **With Local Server** (recommended for testing):
   \`\`\`bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have it installed)
   npx serve .
   
   # Using PHP (if you have it installed)
   php -S localhost:8000
   \`\`\`
   Then open `http://localhost:8000` in your browser

## 📱 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Design Features

- **Color Scheme**: Professional blue (#2563eb) with neutral grays
- **Typography**: Poppins font for modern, clean appearance
- **Layout**: Mobile-first responsive design
- **Animations**: Smooth scroll, fade-in effects, skill bar animations
- **Interactive Elements**: Hover effects, form validation, mobile menu

## 📞 Contact Form

The contact form uses a `mailto:` fallback system:
- Form validation ensures proper input
- On submission, opens the user's email client
- Pre-fills recipient, subject, and message
- Works without backend server requirements

## 🔄 Updates and Maintenance

To update your portfolio:
1. Edit the files locally
2. Test changes in your browser
3. Upload updated files to GitHub
4. Changes will automatically deploy to GitHub Pages

## 📈 SEO Optimization

The website includes:
- Semantic HTML structure
- Meta tags for search engines
- Alt text for images
- Proper heading hierarchy
- Fast loading times

## 🤝 Contributing

This is a personal portfolio, but if you find bugs or have suggestions:
1. Open an issue on GitHub
2. Submit a pull request
3. Contact me directly

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

**Georgius Benedict Sungkharisma**
- Email: georgius.sungkharisma@binus.ac.id
- Phone: +62 812 1001 9212
- LinkedIn: [georgius-benedict-038917235](https://www.linkedin.com/in/georgius-benedict-038917235/)
- GitHub: [Shubaa29](https://github.com/Shubaa29)

---

**Built with ❤️ using HTML, CSS, and JavaScript**

*Last updated: January 2025*
