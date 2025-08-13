# Contributing Guidelines

Thank you for your interest in contributing to webpro-afl3! This document provides guidelines and information for contributors.

## Development Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Getting Started
1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/webpro-afl3.git
   cd webpro-afl3
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start development server:
   ```bash
   npm run dev
   ```

## Code Standards

### TypeScript
- Use TypeScript for all new code
- Define proper types and interfaces
- Avoid `any` type when possible
- Use strict mode configuration

### React/Next.js
- Follow React best practices
- Use functional components with hooks
- Prefer Server Components when possible
- Use Client Components only when necessary (`'use client'`)

### Styling
- Use Tailwind CSS for styling
- Follow mobile-first approach
- Use semantic HTML elements
- Maintain accessibility standards

### File Organization
```
components/
├── ui/           # Reusable UI components
├── layout/       # Layout-specific components
└── common/       # Shared components

app/
├── (routes)/     # Route groups
├── globals.css   # Global styles
└── layout.tsx    # Root layout

lib/
├── utils.ts      # Utility functions
└── types.ts      # Type definitions
```

## Git Workflow

### Branch Naming
- `feature/description` - New features
- `fix/description` - Bug fixes
- `refactor/description` - Code refactoring
- `docs/description` - Documentation updates

### Commit Messages
Follow conventional commits format:
```
type(scope): description

Examples:
feat(ui): add dark mode toggle
fix(navigation): resolve mobile menu issue
docs(readme): update installation instructions
```

### Pull Request Process
1. Create a feature branch from `main`
2. Make your changes
3. Test your changes thoroughly
4. Update documentation if needed
5. Submit a pull request with:
   - Clear description of changes
   - Screenshots for UI changes
   - Testing instructions

## Code Review Guidelines

### For Contributors
- Write clear, self-documenting code
- Add comments for complex logic
- Include tests for new features
- Ensure all checks pass

### For Reviewers
- Be constructive and helpful
- Focus on code quality and standards
- Test the changes locally
- Check for accessibility compliance

## Testing

### Running Tests
```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Linting
npm run lint

# Type checking
npm run type-check
```

### Writing Tests
- Write tests for all new features
- Test both happy path and edge cases
- Use React Testing Library for component tests
- Use Playwright for E2E tests

## Performance Guidelines

### Bundle Size
- Keep bundle size minimal
- Use dynamic imports for large components
- Analyze bundle with `npm run analyze`

### Images
- Use Next.js Image component
- Optimize images before adding
- Use appropriate formats (WebP, AVIF)

### Core Web Vitals
- Monitor performance metrics
- Keep LCP under 2.5s
- Maintain CLS under 0.1
- Ensure FCP under 1.8s

## Accessibility

### Requirements
- Use semantic HTML
- Provide proper ARIA labels
- Ensure keyboard navigation
- Maintain color contrast ratios
- Test with screen readers

### Tools
```bash
# Accessibility testing
npm run a11y

# Lighthouse audit
npm run lighthouse
```

## Documentation

### Code Documentation
- Use JSDoc comments for functions
- Document component props with TypeScript
- Explain complex algorithms
- Keep README updated

### API Documentation
- Document all API endpoints
- Include request/response examples
- Specify error codes and messages

## Issue Reporting

### Bug Reports
Include:
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots/videos
- Environment details

### Feature Requests
Include:
- Problem description
- Proposed solution
- Alternative solutions
- Additional context

## Release Process

### Version Numbering
Follow semantic versioning (SemVer):
- Major: Breaking changes
- Minor: New features (backward compatible)
- Patch: Bug fixes

### Release Checklist
- [ ] Update version number
- [ ] Update CHANGELOG.md
- [ ] Run full test suite
- [ ] Build and test production bundle
- [ ] Create release notes
- [ ] Tag release in Git

## Getting Help

### Communication Channels
- GitHub Issues for bugs and features
- GitHub Discussions for questions
- Email: [contact information]

### Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## Code of Conduct

### Our Standards
- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive feedback
- Collaborate openly

### Unacceptable Behavior
- Harassment or discrimination
- Trolling or insulting comments
- Publishing private information
- Other unprofessional conduct

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.
