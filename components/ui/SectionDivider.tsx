interface SectionDividerProps {
  readonly className?: string;
}

export default function SectionDivider({ className = "border-t my-6" }: SectionDividerProps) {
  return (
    <hr style={{ borderColor: 'var(--border)' }} className={className} />
  );
}
