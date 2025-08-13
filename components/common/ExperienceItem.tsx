import Image from 'next/image';

interface ExperienceItemProps {
  readonly logo: string;
  readonly logoAlt: string;
  readonly title: string;
  readonly organization: string;
  readonly location: string;
  readonly period: string;
  readonly description: string;
}

export default function ExperienceItem({
  logo,
  logoAlt,
  title,
  organization,
  location,
  period,
  description
}: ExperienceItemProps) {
  return (
    <div className="flex items-center rounded-xl border shadow-sm transition-all hover:shadow-md p-4 gap-4" 
         style={{ 
           borderColor: 'var(--border)', 
           backgroundColor: 'var(--card)',
           boxShadow: 'var(--shadow-sm)'
         }}>
      <Image
        src={logo}
        alt={logoAlt}
        width={56}
        height={56}
        className="w-12 h-12 md:w-14 md:h-14 rounded-lg object-cover flex-shrink-0"
        style={{ backgroundColor: 'var(--muted)' }}
      />
      <div>
        <div className="font-semibold text-base" style={{ color: 'var(--foreground)' }}>
          {title}
        </div>
        <div className="flex items-center text-sm gap-2" style={{ color: 'var(--muted-foreground)' }}>
          <span>{organization}</span>
          <span className="text-xs">•</span>
          <span>{location}</span>
        </div>
        <div className="text-xs mt-1" style={{ color: 'var(--muted-foreground)' }}>
          {period}
        </div>
        <div className="text-sm" style={{ color: 'var(--foreground)' }}>
          {description}
        </div>
      </div>
    </div>
  );
}
