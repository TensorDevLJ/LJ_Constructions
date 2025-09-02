import React from 'react';

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-800 shadow">
      <h1 className="text-2xl font-bold">Malleshwara Construction</h1>
      <div className="space-x-4">
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <button 
          onClick={() => setDarkMode(!darkMode)} 
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-lg"
        >
          {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
