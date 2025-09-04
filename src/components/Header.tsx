'use client';

import { useState } from 'react';
import useDarkMode from '@/hooks/useDarkMode';
import { Menu, X, Moon, Sun } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, toggle } = useDarkMode();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-900 dark:text-white">
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            YourName
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}
          <button 
            onClick={toggle} 
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300" 
          onClick={() => setMenuOpen(!menuOpen)} 
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-4 pb-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors border-b border-gray-100 dark:border-gray-800"
            >
              {item.label}
            </Link>
          ))}
          <button 
            onClick={toggle} 
            className="flex items-center gap-2 py-3 text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />} Toggle Dark Mode
          </button>
        </div>
      )}
    </header>
  );
}