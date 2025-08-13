import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaPython,
  FaBootstrap
} from 'react-icons/fa';
import {
  SiTailwindcss
} from 'react-icons/si';

export interface TechStack {
  name: string;
  icon: React.ComponentType<{ size?: number; color?: string }>;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;              // Full description for detail pages
  shortDescription: string;         // Short summary for project cards
  image: string;
  imageAlt: string;
  techStack: TechStack[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  imageStyle?: string;
  category?: string;
  hasDetailPage?: boolean;
}

export const projects: Project[] = [
  {
    id: 'webpro-afl',
    title: 'webpro-afl',
    description: 'This project is an implementation of a Figma design into a responsive website using the Bootstrap Framework. It demonstrates the process of converting design prototypes into a functional web application.',
    shortDescription: 'My portfolio website built with TailwindCSS, featuring responsive design and clean UI.',
    image: '/projects/webpro-afl/webpro-afl1.png',
    imageAlt: 'webpro-afl project screenshot',
    techStack: [
      { name: 'HTML5', icon: FaHtml5, color: '#e34f26' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572b6' },
      { name: 'JavaScript', icon: FaJs, color: '#f7df1e' },
      { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06b6d4' }
    ],
    githubUrl: 'https://github.com/rifk7s/webpro-afl',
    featured: true,
    imageStyle: 'object-cover max-h-[400px]',
    category: 'web',
    hasDetailPage: true
  },
  {
    id: 'swing-java',
    title: 'SwingGUI',
    description: 'SwingGUI is a Java Swing application designed to display and allow users to rate CS2 (Counter-Strike 2) weapon skins. The project demonstrates key Object-Oriented Programming (OOP) principles—including inheritance, encapsulation, abstraction, polymorphism, and composition—through a modular, dark-themed graphical user interface with navigation, card-based skin display, and rating features.',
    shortDescription: 'Java OOP application with Swing-based graphical user interface.',
    image: '/projects/swing-java/swing-java.png',
    imageAlt: 'SwingGUI project screenshot',
    techStack: [
      { name: 'Java', icon: FaJava, color: '#ed8b00' }
    ],
    githubUrl: 'https://github.com/rifk7s/SwingGUI',
    featured: true,
    imageStyle: 'object-contain max-h-[350px]',
    category: 'desktop',
    hasDetailPage: true
  },
  {
    id: 'python-snakegame',
    title: 'python_snakegame',
    description: 'Simple python snake game built with pygame modules.',
    shortDescription: 'Simple python snake game built with pygame modules.',
    image: '', // No image for this project
    imageAlt: '',
    techStack: [
      { name: 'Python', icon: FaPython, color: '#3776ab' }
    ],
    githubUrl: 'https://github.com/rifk7s/python_snakegame',
    featured: false,
    category: 'game'
  },
  {
    id: 'bootstrap-praktikum',
    title: 'Bootstrap_Praktikum',
    description: 'Bootstrap practice project with live preview.',
    shortDescription: 'Bootstrap practice project with live preview.',
    image: '', // No image for this project
    imageAlt: '',
    techStack: [
      { name: 'Bootstrap', icon: FaBootstrap, color: '#7952b3' },
      { name: 'HTML5', icon: FaHtml5, color: '#e34f26' }
    ],
    githubUrl: 'https://github.com/rifk7s/Bootstrap_Praktikum',
    featured: false,
    category: 'web'
  }
];

// Helper functions
export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

export function getAllProjectIds(): string[] {
  return projects.map(project => project.id);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured);
}

export function getProjectsByTechnology(techName: string): Project[] {
  return projects.filter(project => 
    project.techStack.some(tech => tech.name.toLowerCase() === techName.toLowerCase())
  );
}

export function getProjectsCount(): number {
  return projects.length;
}
