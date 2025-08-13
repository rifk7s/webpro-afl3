import React from 'react';
import { projects } from '@/data/projects';
import PageHeader from '@/components/common/PageHeader';
import SectionDivider from '@/components/ui/SectionDivider';
import ProjectCard from '@/components/common/ProjectCard';

const ProjectPage = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <PageHeader 
        title="Projects"
        subtitle="Showcasing my passion for technology, design, and problem-solving through code."
      />

      <SectionDivider />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.shortDescription}  // Use short description for cards
            href={
              project.hasDetailPage 
                ? `/projects/${project.id}`  // Go to internal detail page
                : project.githubUrl         // Go to GitHub
            }
            image={project.image || undefined}
            imageAlt={project.imageAlt || undefined}
            isFeatured={project.featured}
            isExternal={!project.hasDetailPage}
            isGitHub={!project.hasDetailPage}
            technologies={project.techStack.map((tech) => {
              const IconComponent = tech.icon;
              return (
                <IconComponent 
                  key={tech.name} 
                  size={24} 
                  color={tech.color} 
                />
              );
            })}
          />
        ))}
      </div>

      <p className="text-center text-sm mt-8 mb-4" style={{ color: 'var(--muted-foreground)' }}>
        You can find more on my{' '}
        <a
          href="https://github.com/rifk7s?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
        >
          GitHub profile
        </a>{' '}
        .
      </p>
    </div>
  );
};

export default ProjectPage;
