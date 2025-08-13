import React from 'react';
import Image from 'next/image';

interface ProjectImageProps {
  readonly image: string;
  readonly imageAlt: string;
  readonly imageStyle?: string;
}

export default function ProjectImage({ image, imageAlt, imageStyle = 'object-cover max-h-[400px]' }: ProjectImageProps) {
  return (
    <div className="mb-8">
      <div 
        className="group border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        style={{ 
          borderColor: 'var(--border)',
          backgroundColor: 'var(--muted)'
        }}>
        <Image
          src={image}
          alt={imageAlt}
          width={800}
          height={400}
          className={`w-full ${imageStyle} transition-transform duration-300 group-hover:scale-105`}
        />
      </div>
    </div>
  );
}
