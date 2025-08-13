export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  image: string;
  projectUrl?: string;
  githubUrl?: string;
  category: 'web' | 'mobile' | 'desktop' | 'other';
  featured: boolean;
  completedAt: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}
