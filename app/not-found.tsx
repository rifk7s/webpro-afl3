import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Home } from 'lucide-react';

export const metadata = {
  title: 'Page Not Found - Rifky Portfolio',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto text-center py-16">
        <Image
          src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
          alt="Sad face for 404 Error"
          width={200}
          height={200}
          className="mx-auto mb-8 w-1/3 md:w-1/4 filter dark:invert"
        />
        <h1 
          className="text-4xl font-bold mb-4"
          style={{ color: 'var(--foreground)' }}
        >
          404 - Page Not Found
        </h1>
        <p 
          className="text-lg mb-8"
          style={{ color: 'var(--muted-foreground)' }}
        >
          Oops! The page you&apos;re looking for doesn&apos;t seem to exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 font-medium py-2.5 px-6 rounded-lg transition duration-150 text-sm"
          style={{ 
            color: 'var(--primary-foreground)',
            backgroundColor: 'var(--primary)',
          }}
        >
          <Home size={16} />
          {' '}Go to Homepage
        </Link>
    </div>
  );
}
