# 🚀 Personal Portfolio Website

<div align="center">
  
  ![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
  ![Vite](https://img.shields.io/badge/Vite-6.0.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
  ![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  
  **A modern, interactive, and responsive portfolio website built with React, TypeScript, and Tailwind CSS**
  
  [Live Demo](#) • [Report Bug](#) • [Request Feature](#)
  
</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Build](#build)
- [Project Structure](#-project-structure)
- [Key Components](#-key-components)
- [Customization](#-customization)
- [Performance](#-performance)
- [Browser Support](#-browser-support)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 About

This is a modern, fully responsive personal portfolio website showcasing my work, skills, and experience. Built with cutting-edge web technologies, it features smooth animations, interactive UI elements, and optimized performance.

### ✨ Highlights

- 🎨 **Modern Design** - Clean and professional UI with smooth animations
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🌓 **Dark/Light Mode** - Toggle between themes with persistent storage
- ⚡ **Fast & Optimized** - Built with Vite for lightning-fast performance
- 🎭 **Interactive** - Engaging animations with Framer Motion
- 🔍 **SEO Friendly** - Optimized for search engines

---

## ✨ Features

### 🏠 Home Page
- **Hero Section** - Eye-catching introduction with call-to-action buttons
- **About Section** - Professional introduction and background
- **Services** - Overview of services offered
- **Portfolio** - Showcase of projects with:
  - Advanced filtering by technology stack
  - Lazy loading for optimized image loading
  - Project modals with detailed information
  - Responsive grid layout
- **Testimonials** - Client feedback and reviews
- **Features** - Key highlights and capabilities
- **FAQ** - Frequently asked questions
- **Contact** - Contact form with toast notifications
- **Pricing** - Service packages and pricing (optional)

### 📄 Resume/CV Page
- **Interactive Timeline** - Work experience and education history
- **Skill Bars** - Animated progress bars for technical skills
- **Certifications** - Achievements and certifications showcase
- **Download CV** - Direct PDF download functionality
- **Print-Friendly** - Optimized layout for printing

### 🎨 UI/UX Features
- **Back to Top Button** - Smooth scroll to top functionality
- **Smooth Scrolling** - Enhanced navigation experience
- **Scroll Spy** - Active navigation highlighting
- **Loading States** - Skeleton loaders and lazy loading
- **Toast Notifications** - User feedback for actions
- **Responsive Navigation** - Mobile-friendly menu

---

## 🛠️ Tech Stack

### Frontend
- **[React 18](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Vite](https://vitejs.dev/)** - Build tool and dev server
- **[React Router DOM](https://reactrouter.com/)** - Client-side routing
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

### Libraries & Tools
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[React Toastify](https://fkhadra.github.io/react-toastify/)** - Toast notifications
- **[ESLint](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS processing

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ts-porto.git
   cd ts-porto
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

---

## 📁 Project Structure

```
ts-porto/
├── public/                  # Static assets
│   ├── img/                # Images
│   ├── Certificate/        # Certificates
│   └── CvAndResume/        # CV/Resume PDFs
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Portfolio.tsx
│   │   └── ...
│   ├── pages/             # Page components
│   │   ├── HomePage.tsx
│   │   └── ResumePage.tsx
│   ├── layouts/           # Layout components
│   │   └── ResumeLayout.tsx
│   ├── hooks/             # Custom React hooks
│   │   ├── useTheme.ts
│   │   └── useScrollSpy.ts
│   ├── data/              # Data files
│   │   ├── projects.ts
│   │   └── resume.ts
│   ├── types/             # TypeScript type definitions
│   │   └── index.ts
│   ├── utils/             # Utility functions
│   │   └── verifySetup.ts
│   ├── App.tsx            # Main App component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── vite.config.ts         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies
```

---

## 🔑 Key Components

### 🧩 UI Components

| Component | Description |
|-----------|-------------|
| `BackToTop` | Scroll-to-top button with smooth animation |
| `LazyImage` | Lazy loading image component for performance |
| `ProjectCard` | Card component for portfolio items |
| `ProjectFilter` | Filter projects by technology |
| `ProjectModal` | Modal for detailed project view |
| `SkillBar` | Animated skill progress bar |
| `TimelineItem` | Timeline component for experience/education |

### 🪝 Custom Hooks

- **`useTheme`** - Manage dark/light theme with localStorage persistence
- **`useScrollSpy`** - Track active section during scrolling

### 📄 Pages

- **`HomePage`** - Main landing page with all sections
- **`ResumePage`** - Dedicated CV/Resume page

---

## 🎨 Customization

### Update Personal Information

1. **Edit project data** in `src/data/projects.ts`
2. **Edit resume data** in `src/data/resume.ts`
3. **Replace images** in `public/img/`
4. **Update CV/Resume PDF** in `public/CvAndResume/`

### Modify Theme Colors

Edit `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
        secondary: '#your-color',
        // ... more colors
      }
    }
  }
}
```

### Customize Sections

Components in `src/components/` can be easily modified or removed based on your needs.

---

## ⚡ Performance

- **Lazy Loading** - Images and components load on demand
- **Code Splitting** - React Router handles automatic code splitting
- **Optimized Build** - Vite provides optimized production builds
- **Tree Shaking** - Unused code is eliminated
- **Asset Optimization** - Images and assets are compressed

---

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📧 Contact

Project Link: [https://github.com/AlpianPPLG/Modern-Portofolio](https://github.com/AlpianPPLG/Modern-Portofolio)

---

<div align="center">
  
  **⭐ Star this repo if you find it helpful!**
  
  Made with ❤️ and ☕
  
  © 2025 All Rights Reserved
  
</div>

