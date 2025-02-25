import React, { useState } from "react";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import { useDarkMode } from "../darkModeContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FaDownload } from "react-icons/fa";

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header
        className={
          darkMode ? "dark bg-gray-800 shadow-md" : "bg-white shadow-md"
        }
      >
        <div className="container mx-auto py-4 px-6 flex justify-between items-center ">
          {/* Logo */}
          <h1
            className={
              darkMode
                ? "text-xl font-bold text-white"
                : "text-xl font-bold text-gray-800"
            }
          >
            My Portfolio
          </h1>

          {/* Desktop Navigation */}
          <nav className="md:flex hidden w-full items-center justify-center space-x-14">
            <ul className="flex space-x-5 items-center">
              <li>
                <a
                  href="/"
                  className={
                    darkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-800"
                  }
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className={
                    darkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-800"
                  }
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className={
                    darkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-800"
                  }
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/uc?export=download&id=1mEQc31fv8jJYkve8KvHNyLtGJTUtmGcb"
                  className={
                    darkMode
                      ? "flex text-amber-400 hover:text-white"
                      : "flex text-amber-800 hover:text-gray-800"
                  }
                >
                  <FaDownload className="mr-1" /> CV
                </a>
              </li>
            </ul>
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="text-gray-600 focus:outline-none ml-5"
            >
              {darkMode ? (
                <WbSunnyOutlinedIcon sx={{ color: "white" }} />
              ) : (
                <NightlightRoundIcon />
              )}
            </button>
          </nav>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={
                darkMode ? "text-gray-200 text-3xl" : "text-gray-600 text-3xl"
              }
            >
              {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={
            darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
          }
        >
          <ul className="flex flex-col items-center py-5 space-y-4">
            <li>
              <a
                href="/"
                onClick={() => setMenuOpen(false)}
                className="text-lg hover:text-gray-400"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/portfolio"
                onClick={() => setMenuOpen(false)}
                className="text-lg hover:text-gray-400"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/about"
                onClick={() => setMenuOpen(false)}
                className="text-lg hover:text-gray-400"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/uc?export=download&id=1dsMDqsPjMJO0W1JiYP9l9mnW8aB0wtex"
                className={
                  darkMode
                    ? "flex text-amber-400 hover:text-white"
                    : "flex text-amber-800 hover:text-gray-800"
                }
              >
                <FaDownload className="mr-1" />
                download CV
              </a>
            </li>
            <li>
              <button
                onClick={toggleDarkMode}
                className="text-lg flex items-center gap-2 hover:text-gray-400"
              >
                {darkMode ? (
                  <WbSunnyOutlinedIcon sx={{ color: "white" }} />
                ) : (
                  <NightlightRoundIcon />
                )}
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
