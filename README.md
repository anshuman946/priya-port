# Priya Das - Portfolio Website

A modern, responsive, and fully animated portfolio website built with Next.js, TypeScript, and Framer Motion. This portfolio showcases my skills as a Data Science Intern and Frontend Developer.

## 🚀 Features

- **Modern Design**: Clean, professional design with glassmorphism effects
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Advanced Animations**: Smooth transitions and micro-interactions using Framer Motion
- **Interactive Elements**: Hover effects, particle backgrounds, and dynamic content
- **Performance Optimized**: Fast loading times and smooth scrolling
- **SEO Friendly**: Proper meta tags and structured data
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🛠️ Technologies Used

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── ParticleBackground.tsx
│   ├── Projects.tsx
│   ├── ScrollToTop.tsx
│   └── Skills.tsx
├── lib/
│   ├── data.ts
│   └── utils.ts
├── types/
│   └── index.ts
└── hooks/
```

## 🎨 Sections

1. **Hero Section**: Dynamic text animation with particle background
2. **About Section**: Interactive tabs with personal information and education
3. **Experience Section**: Timeline view of professional experience
4. **Projects Section**: 3D project showcase with detailed modals
5. **Skills Section**: Animated progress bars and skill categories
6. **Contact Section**: Interactive contact form with validation

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/priyadas03/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎭 Animations

- **Page Load**: Staggered animations for smooth content reveal
- **Scroll Animations**: Elements animate into view as you scroll
- **Hover Effects**: Interactive hover states on all clickable elements
- **Particle Background**: Dynamic particle system with connections
- **Text Animations**: Typewriter effects and gradient text animations

## 🔧 Customization

### Personal Information
Update your personal information in `src/lib/data.ts`:
- Personal details
- Experience entries
- Project information
- Skills and technologies
- Education history

### Styling
Customize the design in:
- `tailwind.config.js` - Color scheme and animations
- `src/app/globals.css` - Global styles and utilities
- Individual component files for specific styling

### Content
- **Add your profile picture**: Place `profile-picture.jpg` in `public/images/` and uncomment the Image component in Hero.tsx
- **Add your resume**: Place `Priya_Das_Resume.pdf` in `public/resume/` directory
- Update project descriptions and links
- Modify the color scheme to match your brand

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for faster loading

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

- **Email**: priya121803@gmail.com
- **LinkedIn**: [linkedin.com/in/priya-das03](https://linkedin.com/in/priya-das03)
- **GitHub**: [github.com/priyadas03](https://github.com/priyadas03)

---

Made with ❤️ by Priya Das
