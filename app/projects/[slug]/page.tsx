import React from 'react';
import { notFound } from 'next/navigation';
import { getProjectById, getAllProjectIds } from '@/data/projects';
import ProjectDetailHeader from '../components/ProjectDetailHeader';
import ProjectTechStack from '../components/ProjectTechStack';
import ProjectImage from '../components/ProjectImage';

// Generate static params for static generation
export async function generateStaticParams() {
  return getAllProjectIds().map((slug) => ({
    slug,
  }));
}

// Generate metadata for each project
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectById(slug);
  
  if (!project) {
    return {
      title: 'Project Not Found - Rifky Portfolio',
    };
  }

  return {
    title: `${project.title} - Project Detail - Rifky Portfolio`,
    description: project.description.substring(0, 160),
  };
}

interface ProjectDetailPageProps {
  readonly params: Promise<{
    readonly slug: string;
  }>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectById(slug);

  // If project not found, show 404
  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto">
      <ProjectDetailHeader 
        title={project.title}
        description={project.description}
      />

      <div 
        className="rounded-lg shadow-md p-8 mb-8"
        style={{ 
          backgroundColor: 'var(--background)',
          boxShadow: 'var(--shadow-md)'
        }}>
        
        <ProjectTechStack 
          techStack={project.techStack}
          githubUrl={project.githubUrl}
        />

        <ProjectImage 
          image={project.image}
          imageAlt={project.imageAlt}
          imageStyle={project.imageStyle}
        />
      </div>
    </div>
  );
}
