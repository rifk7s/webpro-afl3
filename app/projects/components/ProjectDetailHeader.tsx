import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface ProjectDetailHeaderProps {
  readonly title: string;
  readonly description: string;
}

export default function ProjectDetailHeader({ title, description }: ProjectDetailHeaderProps) {
  return (
    <>
      {/* Back Button */}
      <Link
        href="/projects"
        className="flex items-center gap-2 mb-6 transition-colors text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
      >
        <ArrowLeft size={16} /> Back to Projects
      </Link>

      {/* Project Title */}
      <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
        {title}
      </h1>

      {/* Project Description */}
      <p className="mb-4" style={{ color: 'var(--text-primary)' }}>
        {description}
      </p>

      <hr className="my-6" style={{ borderColor: 'var(--border)' }} />
    </>
  );
}
