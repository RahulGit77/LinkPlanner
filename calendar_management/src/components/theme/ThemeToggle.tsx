import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useStore } from '../../store/useStore';

export const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useStore();

  return (
    <button
      onClick={toggleDarkMode}
      className="flex items-center justify-center p-2 rounded-full transition-colors duration-300 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 shadow-lg transform hover:scale-105"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-500 transition-transform duration-300" />
      ) : (
        <Moon className="h-6 w-6 text-gray-800 transition-transform duration-300" />
      )}
    </button>
  );
};