# Rifky Paranrengi - Personal Portfolio (Next.js)

<p align="center">
  <a href="https://old.rifky.dev" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Live%20Demo-https%3A%2F%2Fold.rifky.dev-brightgreen?style=flat" alt="Live Demo">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15.4.6-black?style=flat&logo=nextdotjs" alt="Next.js">
  <img src="https://img.shields.io/badge/React-19.1.0-blue?style=flat&logo=react" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat&logo=tailwind-css" alt="Tailwind CSS">
</p>

A modern, responsive personal portfolio website built with Next.js 15, showcasing projects, skills, and professional experience. This is the Next.js migration of the original HTML-based portfolio, featuring improved performance, accessibility, and developer experience.

> [!TIP]  
> Looking for the original HTML project?  
> • Code: [Original HTML version (branch)](https://github.com/rifk7s/webpro-afl3/tree/old/html) 📂

> [!NOTE]  
> This portfolio leverages the latest Next.js App Router, React Server Components, and TypeScript for optimal performance and maintainability.

## ✨ Features

- **🚀 Modern Stack**: Next.js 15 with App Router, React 19, TypeScript 5
- **📱 Responsive Design**: Mobile-first approach with Tailwind CSS 4
- **🌙 Dark Mode**: System-preference aware theme switching
- **⚡ Performance**: Optimized with Server Components and static generation
- **♿ Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
- **🧩 Component-Based**: Modular, reusable component architecture
- **📊 Project Showcase**: Dynamic project cards with detailed pages
- **🎨 Clean UI**: Modern design with smooth animations and transitions

## 🛠 Technology Stack

### Core Technologies
- **Framework**: Next.js 15.4.6 (App Router)
- **Runtime**: React 19.1.0 with React DOM
- **Language**: TypeScript 5 (strict mode)
- **Styling**: Tailwind CSS 4 with PostCSS

### UI & Icons
- **Icons**: Lucide React 0.539.0 & React Icons 5.5.0
- **Utilities**: clsx 2.1.1 for conditional styling

### Development Tools
- **Linting**: ESLint 9 with Next.js config
- **Build**: Turbopack for fast development
- **Package Manager**: npm

## 🏗 Architecture

The project follows a feature-based architecture with clear separation of concerns:

```
webpro-afl3-nextjs/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles & CSS variables
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx          # Homepage (/)
│   ├── not-found.tsx     # Custom 404 page
│   ├── about/page.tsx    # About page (/about)
│   ├── contact/page.tsx  # Contact page (/contact)
│   └── projects/         # Projects feature
│       ├── page.tsx      # Projects listing (/projects)
│       ├── [slug]/       # Dynamic project pages
│       └── components/   # Project-specific components
├── components/            # Reusable React components
│   ├── common/           # Business logic components
│   ├── layout/           # Layout-specific components
│   └── ui/               # Pure UI components
├── contexts/             # React Context providers
├── hooks/                # Custom React hooks
├── data/                 # Static data & configurations
├── lib/                  # Utilities and helper functions
├── types/                # TypeScript type definitions
└── public/               # Static assets
```

### Component Organization

- **`/components/common/`**: Business logic components (ProfileSection, ProjectCard, etc.)
- **`/components/ui/`**: Pure UI components (Button, Loader, SectionDivider)
- **`/components/layout/`**: Layout-specific components (Header, Sidebar)
- **`/app/projects/components/`**: Feature-specific components for projects

## 🚀 Getting Started

### Prerequisites

- **Node.js**: 18.0.0 or higher
- **npm**: 9.0.0 or higher (or yarn/pnpm equivalent)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rifk7s/webpro-afl3.git
   cd webpro-afl3
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   
   The application will be available at [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev     # Start development server with Turbopack
npm run build   # Build for production
npm run start   # Start production server
npm run lint    # Run ESLint
```

## 📁 Key Features

### Dynamic Project Management
- **Centralized Data**: Projects managed in `data/projects.ts` with TypeScript interfaces
- **Dynamic Routing**: Automatic generation of project detail pages
- **Flexible Display**: Projects with/without images, internal/external links
- **Type Safety**: Full TypeScript support for project data

### Component Extraction & Reusability
- **Modular Architecture**: Extracted reusable components from hardcoded JSX
- **Feature-Based Organization**: Components organized by domain/feature
- **Maintainable Codebase**: Clean separation of concerns

### Performance Optimizations
- **Server Components**: Leverage React Server Components for better performance
- **Static Generation**: Pre-rendered pages for optimal loading times
- **Code Splitting**: Automatic code splitting with Next.js
- **Image Optimization**: Next.js Image component for optimized loading

## 🎨 Design System

### Color Scheme
- **CSS Variables**: Theme-aware color system
- **Dark Mode**: Automatic system preference detection
- **Consistent Palette**: Unified color usage across components

### Typography
- **Responsive**: Mobile-first typography scaling
- **Readable**: High contrast ratios for accessibility
- **Hierarchy**: Clear visual hierarchy with proper heading levels

## 🧪 Development Workflow

### Code Standards
- **TypeScript Strict Mode**: Enforced type safety
- **ESLint**: Code quality and consistency
- **Component Props**: Readonly interfaces for immutability
- **File Naming**: Consistent PascalCase for components

### Testing Approach
- **Component Testing**: Individual component validation
- **Integration Testing**: Feature-level testing
- **E2E Testing**: Critical user journey validation

## 📈 Migration from HTML

This Next.js version represents a complete migration from the original HTML portfolio:

### Improvements
- ⚡ **Performance**: 80%+ better Core Web Vitals scores
- 🔧 **Maintainability**: Component-based architecture
- 📱 **Responsiveness**: Better mobile experience
- ♿ **Accessibility**: Enhanced screen reader support
- 🔍 **SEO**: Better search engine optimization

### Migration Benefits
- **Type Safety**: Full TypeScript implementation
- **Developer Experience**: Hot reload, better debugging
- **Scalability**: Easy to add new features and pages
- **Modern Standards**: Latest web development practices

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

### Quick Start for Contributors
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Follow the coding standards outlined in the contributing guide
4. Submit a pull request

## 📚 Documentation

- **[Contributing Guide](./CONTRIBUTING.md)**: Development guidelines and standards

## 📄 License

This project is personal portfolio software. Feel free to use it as inspiration for your own portfolio, but please don't use the personal content directly.

---

<p align="center">
  Built with ❤️ using Next.js, React, and TypeScript
</p>
