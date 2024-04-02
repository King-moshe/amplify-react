import React from 'react';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import { useDarkMode } from '../darkModeContext'; // Import the custom hook
import { FaReact } from "react-icons/fa";
import { TiCss3, TiHtml5 } from "react-icons/ti";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { RiGithubFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiMui } from "react-icons/si";

export default function About() {
  const { darkMode, toggleDarkMode } = useDarkMode(); // Access dark mode state and toggle function
  const skillset = [
    {
      icon: <TiHtml5 className='text-orange-500' />,
      name: 'Html5',
    },
    {
      icon: <TiCss3 className='text-blue-500' />,
      name: 'CSS3',
    },
    {
      icon: <IoLogoJavascript />,
      name: 'Javascript',
    },
    {
      icon: <FaReact className='text-sky-600' />,
      name: 'React',
    },
    {
      icon: <FaNode className='text-green-700' />,
      name: 'Node.js',
    },
    {
      icon: <SiTailwindcss className='text-sky-500' />,
      name: 'Tailwind',
    },
    {
      icon: <SiExpress />,
      name: 'Express.js',
    },
    {
      icon: < RiGithubFill />,
      name: 'GitHub',
    },
    {
      icon: < FaBootstrap className='text-purple-600' />,
      name: 'Bootstrap',
    },
    {
      icon: < FaGitAlt className='text-orange-600' />,
      name: 'Git',
    },
    {
      icon: < SiMui className='text-blue-500' />,
      name: 'Material UI',
    },
    {
      icon: < SiMongodb className='text-green-800' />,
      name: 'MongooDB',
    },
    {
      icon: < FaAws />,
      name: 'AWS',
    },
  ]

  return (
    <div className={darkMode ? 'dark bg-gray-900 min-h-screen flex flex-col' : 'flex flex-col min-h-screen'}>
      {/* Header */}
      <header className={darkMode ? 'dark bg-gray-800 shadow-md' : 'bg-white shadow-md'}>
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          {/* Conditional logo color */}
          <h1 className={darkMode ? 'text-xl font-bold text-white' : 'text-xl font-bold text-gray-800'}>My Portfolio</h1>
          {/* Navigation */}
          <nav className="flex space-x-4">
            <ul className="flex space-x-5">
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
      <h2 className={darkMode ? 'text-white text-center text-3xl font-bold mt-4' : 'mt-4 text-center text-3xl font-bold'}>Skillset</h2>
      <div className="mt-8 flex justify-center mb-10">
        <div className=' grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          {skillset.map((skillset, index) => (
            <div key={index} className='bg-white shadow-md rounded-lg text-center overflow-hidden hover:scale-110 transform transition duration-700'>
              <div className='p-6'>
                <p className='mx-4 mb-3 text-5xl'>{skillset.icon}</p>
                <p>{skillset.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Footer */}
      <footer className={darkMode ? 'dark bg-gray-800 text-white py-4' : 'bg-gray-800 text-white py-4'}>
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Moshe's Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
