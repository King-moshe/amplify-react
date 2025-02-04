import React from "react";
import { useDarkMode } from "../darkModeContext";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from 'react-icons/fa';
import profileImg from "../images/profilePic.jpg";

export default function Homepage() {
  const { darkMode } = useDarkMode(); // Access dark mode state and toggle function
  return (
    <div
      className={
        darkMode
          ? "dark bg-gray-900 min-h-screen flex flex-col"
          : "bg-gray-100 min-h-screen flex flex-col"
      }
    >
      {/* Main Content */}
      <main className="flex-1 container mx-auto px-6 py-12">
        <div className="max-w-lg mx-auto text-center">
          <h2
            className={
              darkMode
                ? "text-4xl font-bold text-gray-300 mb-4"
                : "text-4xl font-bold text-gray-800 mb-4"
            }
          >
            Welcome to My Portfolio
          </h2>
          <img
            src={profileImg}
            alt="Moshe Profile"
            className="mx-auto w-64 h-64 rounded-full mb-6"
          />
          <p
            className={
              darkMode ? "text-lg text-gray-300" : "text-lg text-gray-600"
            }
          >
            I'm Moshe, a fullstack developer passionate about crafting clean and
            efficient code.
          </p>
          <a
            href="/portfolio"
            className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
          >
            View Projects
          </a>
          <p className="mt-9 text-4xl flex justify-center">
            <a
              href="https://www.linkedin.com/in/moshe-amar/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-blue-600 bg-white mr-3 rounded-md" />
            </a>
            <a
              href="https://github.com/King-moshe"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare className="text-black bg-white mr-3 rounded-md" />
            </a>
            <a
              href="mailto:moso2411@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <BiLogoGmail className="text-red-600 bg-white mr-3 rounded-md" />
            </a>
            <a
              href="https://wa.me/972528857298?text=שלום%20משה,%20אשמח%20לשוחח%20איתך%20לגבי%20משרת%20פיתוח.%20 צור%20קשר%20"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 bg-green-500 rounded-full hover:bg-green-600 transition-colors"
            >
              <FaWhatsapp className="text-white w-6 h-6" />
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
