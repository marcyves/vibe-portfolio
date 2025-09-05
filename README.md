# React Portfolio

A modern, responsive portfolio website built with React, Vite, and Framer Motion. This portfolio showcases skills, projects, and provides a contact form for potential clients or employers.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Modern UI**: Clean, professional design with gradient accents
- **Interactive Components**: Hover effects, progress bars, and smooth scrolling navigation
- **Contact Form**: Functional contact form with validation
- **Skills Showcase**: Animated skill cards with progress indicators
- **Project Gallery**: Featured projects with detailed descriptions and links
- **Social Links**: Easy access to social media profiles

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **Framer Motion**: Animation library for smooth transitions
- **React Icons**: Comprehensive icon library
- **CSS3**: Custom styling with CSS variables and Grid/Flexbox
- **Modern JavaScript**: ES6+ features

## 📦 Installation

1. Navigate to the project directory:
```bash
cd react-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎨 Customization

### Personal Information
Edit the following components to add your personal information:

- **Hero Section** (`src/components/Hero.jsx`): Update name, title, description, and social links
- **About Section** (`src/components/About.jsx`): Modify the about text and statistics
- **Contact Section** (`src/components/Contact.jsx`): Update contact information

### Skills
In `src/components/Skills.jsx`, modify the `skills` array to reflect your technical skills:

```javascript
const skills = [
  { name: 'React', icon: <FaReact />, level: 90 },
  // Add your skills here
]
```

### Projects
In `src/components/Projects.jsx`, update the `projects` array with your actual projects:

```javascript
const projects = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Project description",
    technologies: ["React", "Node.js"],
    image: "path-to-your-image",
    github: "https://github.com/yourusername/project",
    demo: "https://your-project-demo.com",
    featured: true
  },
  // Add more projects
]
```

### Styling
Customize colors and styling by modifying CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  /* Modify these colors to match your brand */
}
```

## 📝 To-Do for Customization

1. Replace placeholder images with your actual project screenshots
2. Add your real contact information and social media links
3. Update the skills section with your technical expertise
4. Add your actual projects with real GitHub and demo links
5. Customize colors to match your personal brand
6. Add your professional headshot in the hero section
7. Update meta tags in `index.html` for SEO

## 🚀 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

---

**Note**: Remember to replace all placeholder content with your actual information before deploying your portfolio!

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
