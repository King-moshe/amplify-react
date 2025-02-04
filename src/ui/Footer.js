import React from 'react'
import { useDarkMode } from '../darkModeContext';

export default function Footer() {
      const { darkMode } = useDarkMode(); 
    
  return (
    <div>
        <footer
        className={
          darkMode
            ? "dark bg-gray-800 text-white py-4"
            : "bg-gray-800 text-white py-4"
        }
      >
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Moshe's Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
