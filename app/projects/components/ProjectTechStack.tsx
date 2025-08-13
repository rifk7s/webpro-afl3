import React from 'react';
import { FaGithub } from 'react-icons/fa';
import type { TechStack } from '@/data/projects';

interface ProjectTechStackProps {
  readonly techStack: TechStack[];
  readonly githubUrl: string;
}

export default function ProjectTechStack({ techStack, githubUrl }: ProjectTechStackProps) {
  return (
    <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
      <div className="flex items-center gap-3 flex-wrap">
        <span className="font-medium text-sm" style={{ color: 'var(--text-primary)' }}>
          Tech Stack:
        </span>
        {techStack.map((tech) => {
          const IconComponent = tech.icon;
          return (
            <IconComponent
              key={tech.name}
              size={24}
              color={tech.color}
            />
          );
        })}
      </div>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 transition-colors text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400"
        style={{ color: 'var(--text-primary)' }}
      >
        <FaGithub size={18} style={{ color: 'var(--foreground)' }} />
        {' '}Source Code
      </a>
    </div>
  );
}
