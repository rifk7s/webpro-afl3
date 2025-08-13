interface ProfileSectionProps {
  readonly name: string;
  readonly location: string;
  readonly workType: string;
  readonly description: string;
}

export default function ProfileSection({ 
  name, 
  location, 
  workType, 
  description 
}: ProfileSectionProps) {
  return (
    <div className="mb-6">
      <h2 style={{ color: 'var(--foreground)' }} className="text-2xl font-semibold mb-2">
        Hi, I&apos;m {name}
      </h2>
      <ul style={{ color: 'var(--muted-foreground)' }} className="ml-5 flex list-disc flex-col md:flex-row md:items-center gap-x-6 gap-y-1 text-base mb-2">
        <li>{location} <span className="ml-1">🇮🇩</span></li>
        <li><span className="font-normal">{workType}</span></li>
      </ul>
      <p style={{ color: 'var(--foreground)' }} className="mb-2 text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
}
