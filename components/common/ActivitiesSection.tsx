import Link from 'next/link';
import { Users, Handshake } from 'lucide-react';

interface ActivitiesSectionProps {
  readonly title?: string;
  readonly description?: string;
  readonly ctaTitle?: string;
  readonly ctaDescription?: string;
  readonly ctaButtonText?: string;
  readonly ctaButtonHref?: string;
}

export default function ActivitiesSection({
  title = "Activities",
  description = "As a second semester student, I'm actively learning, collaborating on small projects, and exploring new technologies. I enjoy participating in coding communities and contributing to open source when possible.",
  ctaTitle = "Let's connect and learn together!",
  ctaDescription = "I'm always open to new opportunities, collaborations, and discussions about tech. Feel free to reach out!",
  ctaButtonText = "Contact me",
  ctaButtonHref = "/contact"
}: ActivitiesSectionProps) {
  return (
    <div className="mb-4">
      <h3 style={{ color: 'var(--foreground)' }} className="text-lg font-semibold mb-2 flex items-center gap-2">
        <Users className="w-5 h-5" />
        {title}
      </h3>
      <p style={{ color: 'var(--foreground)' }} className="text-base mb-3">
        {description}
      </p>
      <div 
        style={{ 
          backgroundColor: 'var(--card)', 
          borderColor: 'var(--border)' 
        }} 
        className="border rounded-xl p-4 flex flex-col gap-2">
        <div style={{ color: 'var(--card-foreground)' }} className="flex items-center gap-2 font-semibold text-base">
          <Handshake className="w-6 h-6 text-blue-500 animate-pulse" />
          {ctaTitle}
        </div>
        <p style={{ color: 'var(--muted-foreground)' }} className="text-sm">
          {ctaDescription}
        </p>
        <Link
          href={ctaButtonHref}
          style={{
            backgroundColor: 'var(--primary)',
            color: 'var(--primary-foreground)'
          }}
          className="self-start px-3.5 py-2 rounded-lg font-medium hover:opacity-80 transition text-sm"
        >
          {ctaButtonText}
        </Link>
      </div>
    </div>
  );
}
