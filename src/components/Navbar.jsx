import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon as Menu, XMarkIcon as X, SunIcon as Sun, MoonIcon as Moon } from '@heroicons/react/24/outline';
import { useThemeMode } from '../theme/ThemeContext';

const menuItems = [
  { text: 'Home', path: '/' },
  { text: 'Resume', path: '/resume' },
  { text: 'Portfolio', path: '/portfolio' },
  { text: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { mode, toggleTheme } = useThemeMode();
  const location = useLocation();
  
  const darkMode = mode === 'dark';
  
  const toggleDarkMode = () => {
    toggleTheme();
  };

  return (
    <nav className="fixed w-full bg-bg-light/80 dark:bg-bg-dark/80 backdrop-blur-lg z-50 border-b border-gray-200/50 dark:border-gray-700/50 transition-all">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link to="/" className="text-3xl font-bold font-display text-primary-dark dark:text-primary-light hover:scale-105 transition-transform">
              Khushbakht
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2 items-center">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.text}
                  to={item.path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors relative group ${isActive ? 'text-primary-dark dark:text-primary-light' : 'text-text-light-secondary dark:text-text-dark-secondary hover:text-primary-dark dark:hover:text-primary-light'}`}
                >
                  {item.text}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary-dark dark:bg-primary-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${isActive ? 'scale-x-100' : ''}`} />
                </Link>
              )
            })}
            <button
              onClick={toggleDarkMode}
              className="ml-4 inline-flex items-center justify-center p-2 rounded-full text-text-light-secondary dark:text-text-dark-secondary hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className="inline-flex items-center justify-center p-2 rounded-full text-text-light-secondary dark:text-text-dark-secondary hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-2 text-text-light-secondary dark:text-text-dark-secondary hover:text-primary-dark dark:hover:text-primary-light focus:outline-none p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-bg-light dark:bg-bg-dark shadow-lg border-t border-gray-200 dark:border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.text}
                to={item.path}
                className="block px-3 py-3 rounded-md text-base font-medium text-text-light-primary dark:text-text-dark-primary hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-dark dark:hover:text-primary-light transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;