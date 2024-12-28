import React from 'react';
import { NotificationDropdown } from '../notifications/NotificationDropdown';
import { ThemeToggle } from '../theme/ThemeToggle';

export const Header: React.FC = () => {
  return (
<header className="bg-gradient-to-r from-blue-300 via-purple-400 to-pink-400 dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 shadow-lg">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white hover:text-pink-500 dark:hover:text-red-300 transition-colors">
        Communication Tracker
      </h1>
      <a
          href="https://careers.entnt.in" 
          target="_blank"
          rel="noopener noreferrer"
          className=" text-2xl font-bold text-black-600 dark:text-blue-800 hover:text-blue-800 dark:hover:text-white transition-colors"
        >
          ENTNT Website 
        </a>
      <div className="flex items-center space-x-4">
        <NotificationDropdown />
        <ThemeToggle />
      </div>
    </div>
  </div>
  <div className="bg-gradient-to-r from-blue-300 via-purple-400 to-pink-400 dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 shadow-lg">
  <p className="whitespace-nowrap animate-scroll text-center text-White font-bold">
    Calendar Application for Communication Tracker
  </p>
  </div>
    </header>
  );
};