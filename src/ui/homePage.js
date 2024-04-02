import React from 'react';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import { useDarkMode } from '../darkModeContext'; // Import the custom hook
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa";
import profileImg from '../images/profilePic.jpg';


export default function Homepage() {
  const { darkMode, toggleDarkMode } = useDarkMode(); // Access dark mode state and toggle function
  return (
    <div className={darkMode ? 'dark bg-gray-900 min-h-screen flex flex-col' : 'bg-gray-100 min-h-screen flex flex-col'}>
      {/* Header */}
      <header className={darkMode ? 'dark bg-gray-800 shadow-md' : 'bg-white shadow-md'}>
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          {/* Conditional logo color */}
          <h1 className={darkMode ? 'text-xl font-bold text-white' : 'text-xl font-bold text-gray-800'}>My Portfolio</h1>
          {/* Navigation */}
          <nav className="flex space-x-4">
            <ul className="flex space-x-5">
              <li><a href="/portfolio" className={darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'}>Projects</a></li>
              <li><a href="/about" className={darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'}>About Me</a></li>
              <li><a href="/contact" className={darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'}>Contact</a></li>
              <li><a href="https://github.com/King-moshe/amplify-react" target='_blank' className={darkMode ? 'text-gray-300 flex hover:text-white' : 'text-gray-600 flex hover:text-gray-800'} rel="noreferrer"><FaCodeBranch className='mt-1 me-1' /> <FaRegStar className='mt-1' /></a></li>
            </ul>
          </nav>
          {/* Dark mode toggle button */}
          <button onClick={toggleDarkMode} className="text-gray-600 focus:outline-none">
            {darkMode ? <WbSunnyOutlinedIcon sx={{ color: 'white' }} /> : <NightlightRoundIcon />}
          </button>
        </div>
      </header>


      {/* Main Content */}
      <main className="flex-1 container mx-auto px-6 py-12">
        <div className="max-w-lg mx-auto text-center">
          <h2 className={darkMode ? 'text-4xl font-bold text-gray-300 mb-4' : 'text-4xl font-bold text-gray-800 mb-4'}>Welcome to My Portfolio</h2>
          <img src={profileImg} alt="Moshe Profile" className="mx-auto w-64 h-64 rounded-full mb-6" />
          <p className={darkMode ? 'text-lg text-gray-300' : 'text-lg text-gray-600'}>I'm Moshe, a fullstack developer passionate about crafting clean and efficient code.</p>
          <a href="/portfolio" className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">View Projects</a>
          <p className='mt-9 text-4xl flex justify-center'>
            <a href='https://www.linkedin.com/in/moshe-amar/' target='_blank' rel="noreferrer">
              <FaLinkedin className='text-blue-600 bg-white mr-3 rounded-md' />
            </a>
            <a href='https://github.com/King-moshe' target='_blank' rel='noreferrer'>
              <FaGithubSquare className='text-black bg-white mr-3 rounded-md' />
            </a>
            <a href='https://www.facebook.com/profile.php?id=100011648281820&mibextid=ZbWKwL' target='_blank' rel='noreferrer'>
              <FaFacebookSquare className='text-blue-700 mr-3 rounded-md bg-white' />
            </a>
            <a href='mailto:moso2411@gmail.com' target='_blank' rel='noreferrer'>
              <BiLogoGmail className='text-red-600 bg-white mr-3 rounded-md' />
            </a>
            <a href='https://www.instagram.com/moshe_amar9/' target='_blank' rel="noreferrer"><FaInstagram className='text-white rounded-md bg-gradient-to-l from-purple-600 via-pink-500 to-yellow-400' /></a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className={darkMode ? 'dark bg-gray-800 text-white py-4' : 'bg-gray-800 text-white py-4'}>
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Moshe's Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
