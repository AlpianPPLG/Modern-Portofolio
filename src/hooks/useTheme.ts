import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      // Read from DOM on first render to avoid flash
      return document.documentElement.classList.contains('dark');
    } catch {
      return true; // fallback to dark as project default
    }
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved) {
        const dark = saved === 'dark';
        setIsDarkMode(dark);
        document.documentElement.classList.toggle('dark', dark);
      }
      // If no saved preference, keep the DOM default from index.html
    } catch {
      // ignore storage errors
    }
  }, []);

  const toggleTheme = () => {
    const next = !isDarkMode;
    setIsDarkMode(next);
    try {
      document.documentElement.classList.toggle('dark', next);
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {
      // ignore storage errors
    }
  };

  return { isDarkMode, toggleTheme };
};

