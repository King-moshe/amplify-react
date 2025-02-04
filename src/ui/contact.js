import React from 'react';
import { useDarkMode } from '../darkModeContext'; // Import the custom hook

export default function Contact() {
  const { darkMode } = useDarkMode(); // Access dark mode state and toggle function

  return (
    <div className={darkMode ? 'dark bg-gray-900 min-h-screen flex flex-col' : 'bg-gray-100 min-h-screen flex flex-col'}>    
      {/* Main Content */}
      <main className="flex-1 container mx-auto px-6 py-12">
        <div className="max-w-lg mx-auto text-center">
          <h2 className={darkMode ? 'text-3xl font-bold text-white mb-4 text-center' : 'text-3xl font-bold text-gray-800 mb-4 text-center'}>Contact Us</h2>
          <p className={darkMode ? 'text-lg text-white' : 'text-lg text-gray-600'}>Feel free to get in touch with me using the form below.</p>
          <form className="mt-8 space-y-6">
            <div>
              <label htmlFor="name" className={darkMode ? 'ps-1 text-left block text-sm font-medium text-white' : 'ps-1 text-left block text-sm font-medium text-gray-700'}>Name</label>
              <input type="text" id="name" name="name" className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your name" />
            </div>
            <div>
              <label htmlFor="email" className={darkMode ? 'ps-1 text-left block text-sm font-medium text-white' : 'ps-1 text-left block text-sm font-medium text-gray-700'}>Email</label>
              <input type="email" id="email" name="email" className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your email" />
            </div>
            <div>
              <label htmlFor="message" className={darkMode ? 'ps-1 text-left block text-sm font-medium text-white' : 'ps-1 text-left block text-sm font-medium text-gray-700'}>Message</label>
              <textarea id="message" name="message" rows="4" className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your message"></textarea>
            </div>
            <div>
              <button type="submit" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg">Send Message</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
