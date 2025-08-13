import { Mail } from 'lucide-react';

interface ContactCTAProps {
  readonly title?: string;
  readonly buttonText?: string;
  readonly href?: string;
}

export default function ContactCTA({
  title = "Feel free to reach out if you'd like to connect or collaborate!",
  buttonText = "Get in Touch",
  href = "/contact"
}: ContactCTAProps) {
  return (
    <div className="mt-6 text-center">
      <p className="text-base mb-4" style={{ color: 'var(--foreground)' }}>
        {title}
      </p>
      <a
        href={href}
        className="inline-flex items-center justify-center gap-2 font-medium py-2.5 px-6 rounded-lg transition duration-150 text-sm"
        style={{ 
          color: 'var(--primary-foreground)',
          backgroundColor: 'var(--primary)',
        }}
      >
        <Mail size={16} /> {buttonText}
      </a>
    </div>
  );
}
