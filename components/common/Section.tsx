import React from 'react';

interface SectionProps {
  readonly title: string;
  readonly icon: React.ReactNode;
  readonly subtitle?: string;
  readonly children: React.ReactNode;
}

export default function Section({ title, icon, subtitle, children }: SectionProps) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2 flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
        {icon} {title}
      </h3>
      {subtitle && (
        <p className="text-base mb-3" style={{ color: 'var(--muted-foreground)' }}>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
