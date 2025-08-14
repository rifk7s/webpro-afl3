import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
  readonly title: string;
  readonly description: string;
  readonly technologies: React.ReactNode[];
  readonly href: string;
  readonly image?: string;
  readonly imageAlt?: string;
  readonly isExternal?: boolean;
  readonly isFeatured?: boolean;
  readonly isGitHub?: boolean;
}

interface CardContentProps {
  readonly title: string;
  readonly description: string;
  readonly technologies: React.ReactNode[];
  readonly image?: string;
  readonly imageAlt?: string;
  readonly isFeatured?: boolean;
  readonly isGitHub?: boolean;
}

function CardContent({
  title,
  description,
  technologies,
  image,
  imageAlt,
  isFeatured = false,
  isGitHub = false
}: CardContentProps) {
  return (
    <div 
      className="rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative h-full"
      style={{ 
        backgroundColor: 'var(--card)',
        boxShadow: 'var(--shadow-md)'
      }}>
      {isFeatured && (
        <div className="absolute top-2 right-2 z-10">
          <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-700/30 text-emerald-700 dark:text-emerald-400 text-xs font-medium rounded-md">
            Featured
          </span>
        </div>
      )}
      
      {image && (
        <Image
          src={image}
          alt={imageAlt ?? `${title} project screenshot`}
          width={400}
          height={192}
          className="w-full h-48 object-cover object-top border-b"
          style={{ borderColor: 'var(--border)' }}
        />
      )}
      
      <div className="p-6 relative">
        <h3 
          className="text-xl font-semibold mb-2 text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm mb-4" style={{ color: 'var(--muted-foreground)' }}>
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies}
        </div>
        <span className="text-blue-600 dark:text-blue-400 font-medium text-sm flex items-center gap-1">
          {isGitHub ? (
            <>
              View on GitHub <FaGithub size={16} className="ml-1" />
            </>
          ) : (
            <>
              View Project{' '}
              <FaArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </span>
      </div>
    </div>
  );
}

export default function ProjectCard({
  title,
  description,
  technologies,
  href,
  image,
  imageAlt,
  isExternal = false,
  isFeatured = false,
  isGitHub = false
}: ProjectCardProps) {
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <CardContent 
          title={title}
          description={description}
          technologies={technologies}
          image={image}
          imageAlt={imageAlt}
          isFeatured={isFeatured}
          isGitHub={isGitHub}
        />
      </a>
    );
  }

  return (
    <Link href={href} className="group">
      <CardContent 
        title={title}
        description={description}
        technologies={technologies}
        image={image}
        imageAlt={imageAlt}
        isFeatured={isFeatured}
        isGitHub={isGitHub}
      />
    </Link>
  );
}
