import React from 'react';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import { useDarkMode } from '../darkModeContext'; // Import the custom hook

export default function About() {
  const { darkMode, toggleDarkMode } = useDarkMode(); // Access dark mode state and toggle function

  return (
    <div className={darkMode ? 'dark bg-gray-900 min-h-screen flex flex-col' : 'flex flex-col min-h-screen'}>
      {/* Header */}
      <header className={darkMode ? 'dark bg-gray-800 shadow-md' : 'bg-white shadow-md'}>
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          {/* Conditional logo color */}
          <h1 className={darkMode ? 'text-xl font-bold text-white' : 'text-xl font-bold text-gray-800'}>My Portfolio</h1>
          {/* Navigation */}
          <nav className="flex space-x-4">
            <ul className="flex space-x-4">
              <li><a href="/" className={darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'}>Home</a></li>
              <li><a href="/portfolio" className={darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'}>Projects</a></li>
              <li><a href="/about" className={darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'}>About Me</a></li>
              <li><a href="/contact" className={darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'}>Contact</a></li>
            </ul>
          </nav>
          {/* Dark mode toggle button */}
          <button onClick={toggleDarkMode} className="text-gray-600 focus:outline-none">
            {darkMode ? <WbSunnyOutlinedIcon sx={{ color: 'white' }} /> : <NightlightRoundIcon />}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className={darkMode ? 'dark text-white flex-1 container mx-auto px-6 py-12' : 'container mx-auto px-6 py-12 flex-1'}>
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg">I'm Moshe, a passionate fullstack developer with expertise in HTML, CSS, JavaScript, React, Node.js, Express, and more.</p>
          <p className="mt-4 text-lg">I love building elegant solutions to complex problems and am always eager to learn new technologies.</p>
          <p className="mt-4 text-lg">In my free time, I enjoy hiking, runing, reading, and experimenting with new coding projects.</p>
        </div>
      </main>

      {/*Skills */}
      <div className="mt-8 flex justify-center"></div>
      {/* Footer */}
      <footer className={darkMode ? 'dark bg-gray-800 text-white py-4' : 'bg-gray-800 text-white py-4'}>
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Moshe's Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
