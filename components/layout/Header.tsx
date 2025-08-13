'use client';

import { Menu, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useSidebar } from '@/contexts/SidebarContext';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { toggleSidebar } = useSidebar();

  return (
    <>
      {/* Mobile Header */}
      <header 
        style={{ 
          backgroundColor: 'var(--background)', 
          borderBottom: '1px solid var(--border)' 
        }} 
        className="lg:hidden px-4 py-3">
        <div className="flex items-center justify-between">
          <button
            onClick={toggleSidebar}
            style={{ color: 'var(--foreground)' }}
            className="p-2 rounded-lg hover:bg-opacity-10 hover:bg-gray-500 transition-colors"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
          
          <h1 style={{ color: 'var(--foreground)' }} className="text-lg font-semibold">
            Rifky Portfolio
          </h1>
          
          <button
            onClick={toggleTheme}
            style={{ color: 'var(--foreground)' }}
            className="p-2 rounded-lg hover:bg-opacity-10 hover:bg-gray-500 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </header>
    </>
  );
}
