'use client';

import { X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/contexts/ThemeContext';
import { useSidebar } from '@/contexts/SidebarContext';
import { cn } from '@/lib/utils';

const navigationItems = [
  { href: '/', label: 'Home', icon: 'fa-solid fa-house' },
  { href: '/about', label: 'About', icon: 'fa-regular fa-user' },
  { href: '/projects', label: 'Projects', icon: 'fa-regular fa-folder-open' },
  { href: '/contact', label: 'Contact', icon: 'fa-regular fa-envelope' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { isOpen, closeSidebar } = useSidebar();

  return (
    <>
      {/* Sidebar Overlay (Mobile) */}
      <button
        className={cn(
          'fixed inset-0 z-20 bg-black/50 md:hidden',
          isOpen ? 'block' : 'hidden'
        )}
        onClick={closeSidebar}
        aria-label="Close sidebar overlay"
      />

      {/* Sidebar: Desktop always visible, Mobile hamburger menu */}
      <aside
        style={{
          backgroundColor: 'var(--sidebar)',
          borderRight: '1px solid var(--sidebar-border)',
          boxShadow: 'var(--shadow-lg)'
        }}
        className={cn(
          'fixed z-40 top-0 left-0 h-full w-72 flex flex-col items-center py-8 px-6 min-h-screen transition-transform duration-300',
          'md:w-72 md:translate-x-0 md:opacity-100 md:pointer-events-auto',
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        )}
      >
        {/* Close button for mobile */}
        <button
          onClick={closeSidebar}
          style={{ 
            color: 'var(--sidebar-foreground)',
            backgroundColor: 'transparent'
          }}
          className="md:hidden absolute top-4 right-4 p-2 rounded-lg hover:bg-opacity-10 hover:bg-gray-500 transition-colors"
          aria-label="Close menu"
        >
          <X size={20} />
        </button>

        {/* Profile Photo and Info */}
        <Image
          src="/images/1737690544838.jpeg"
          alt="Profile"
          width={96}
          height={96}
          style={{ 
            borderColor: 'var(--sidebar-border)',
            boxShadow: 'var(--shadow-md)'
          }}
          className="w-24 h-24 rounded-full object-cover mb-6 border-4"
          priority
        />
        
        <div className="flex flex-col items-start w-full mb-6">
          <div className="flex items-center gap-2 mb-1 pl-4">
            <h1 style={{ color: 'var(--sidebar-foreground)' }} className="text-lg font-bold flex items-center">
              Rifky Paranrengi
              {' '}
              <span
                className="ml-1"
                style={{
                  fontSize: '1rem',
                  lineHeight: 1,
                  position: 'relative',
                  top: '2px',
                  color: 'var(--primary)'
                }}
              >
                <i className="fa-solid fa-circle-check"></i>
              </span>
            </h1>
          </div>
          <span style={{ color: 'var(--muted-foreground)' }} className="text-sm mb-3 pl-4">
            @rifkyp
          </span>
          <button 
            style={{
              backgroundColor: 'var(--accent)',
              color: 'var(--accent-foreground)',
              borderColor: 'var(--border)'
            }}
            className="flex items-center gap-2 px-4 py-1 rounded-full border text-sm font-medium hover:opacity-80 transition mb-2 ml-4">
            <span className="w-2 h-2 bg-green-500 rounded-full inline-block animate-pulse-dot"></span>
            {' '}
            Hire me.
          </button>
          <div className="flex items-center gap-1 ml-4">
            <span 
              style={{
                backgroundColor: 'var(--muted)',
                color: 'var(--muted-foreground)'
              }}
              className="px-2 py-0.5 text-xs font-semibold rounded">
              Unpaid Intern
            </span>
          </div>
        </div>
        
        <hr style={{ borderColor: 'var(--sidebar-border)' }} className="w-full mb-4" />
        
        {/* Navigation */}
        <nav className="flex flex-col gap-1 w-full mb-4">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeSidebar}
                style={{
                  color: isActive ? 'var(--sidebar-primary)' : 'var(--sidebar-foreground)',
                  backgroundColor: isActive ? 'var(--sidebar-accent)' : 'transparent'
                }}
                className={cn(
                  'flex items-center gap-3 py-2 px-4 rounded-lg font-medium text-sm transition-colors hover:opacity-80',
                  !isActive && 'hover:bg-opacity-10 hover:bg-gray-500'
                )}
              >
                <i className={item.icon}></i> {item.label}
              </Link>
            );
          })}
        </nav>
        
        <hr style={{ borderColor: 'var(--sidebar-border)' }} className="w-full mt-2 mb-4" />
        
        {/* Theme Toggle */}
        <div className="w-full px-4 mb-4">
          <button
            onClick={toggleTheme}
            style={{
              backgroundColor: 'var(--sidebar-accent)',
              color: 'var(--sidebar-accent-foreground)'
            }}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium hover:opacity-80 transition text-sm"
          >
            <i className={theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'}></i>
            <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
        
        {/* Copyright */}
        <div style={{ color: 'var(--muted-foreground)' }} className="text-center text-xs mt-auto">
          COPYRIGHT © 2025<br />
          Rifky Paranrengi. All rights reserved.
        </div>
      </aside>
    </>
  );
}
