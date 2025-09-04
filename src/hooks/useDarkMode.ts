'use client';

import { useEffect, useState } from 'react';

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const html = document.documentElement;
    const stored = localStorage.getItem('theme');
    const isDark = stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setDarkMode(isDark);
    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, []);

  const toggle = () => {
    const html = document.documentElement;
    const isDark = !darkMode;
    setDarkMode(isDark);
    
    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  if (!mounted) {
    return { darkMode: false, toggle };
  }

  return { darkMode, toggle };
}