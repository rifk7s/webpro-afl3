import Image from 'next/image';

interface EducationItemProps {
  readonly logo: string;
  readonly logoAlt: string;
  readonly institution: string;
  readonly location: string;
  readonly period: string;
  readonly duration: string;
  readonly degree: string;
}

export default function EducationItem({
  logo,
  logoAlt,
  institution,
  location,
  period,
  duration,
  degree
}: EducationItemProps) {
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
        className="w-14 h-14 rounded-full object-cover flex-shrink-0"
      />
      <div>
        <div className="font-semibold text-base" style={{ color: 'var(--foreground)' }}>
          {institution}
        </div>
        <div className="flex items-center text-sm gap-2" style={{ color: 'var(--muted-foreground)' }}>
          <span>{location}</span>
          <span className="text-xs">•</span>
          <span>{period}</span>
        </div>
        <div className="text-xs mt-1" style={{ color: 'var(--muted-foreground)' }}>
          ~ {duration}
        </div>
        <div className="text-sm" style={{ color: 'var(--foreground)' }}>
          {degree}
        </div>
      </div>
    </div>
  );
}
