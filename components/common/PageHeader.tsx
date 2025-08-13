interface PageHeaderProps {
  readonly title: string;
  readonly subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-base mb-2" style={{ color: 'var(--muted-foreground)' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
