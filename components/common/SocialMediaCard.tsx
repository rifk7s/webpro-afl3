import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface SocialMediaCardProps {
  readonly title: string;
  readonly description: string;
  readonly href: string;
  readonly buttonText: string;
  readonly icon: React.ReactNode;
  readonly backgroundIcon: React.ReactNode;
  readonly gradientClasses: string;
  readonly colSpan?: string;
}

export default function SocialMediaCard({
  title,
  description,
  href,
  buttonText,
  icon,
  backgroundIcon,
  gradientClasses,
  colSpan = ""
}: SocialMediaCardProps) {
  return (
    <div className={`${colSpan} ${gradientClasses} p-6 rounded-xl shadow-lg text-white relative overflow-hidden`}>
      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          <h4 className="text-xl font-semibold mb-1">{title}</h4>
          <p className="text-sm opacity-90 mb-4">
            {description}
          </p>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-medium py-2 px-4 rounded-lg transition duration-150 text-sm self-start"
        >
          {buttonText} {icon}
          <FaExternalLinkAlt size={12} />
        </a>
      </div>
      <div className="absolute -right-5 -bottom-3 md:-right-6 md:-bottom-2 flex items-center justify-center pointer-events-none z-0">
        {backgroundIcon}
      </div>
    </div>
  );
}
