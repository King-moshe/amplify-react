import React from "react";
import { useDarkMode } from "../darkModeContext"; // Import the custom hook
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
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from 'react-icons/fa';


export default function About() {
  const { darkMode } = useDarkMode(); // Access dark mode state and toggle function
  const skillset = [
    {
      icon: <TiHtml5 className="text-orange-500" />,
      name: "Html5",
    },
    {
      icon: <TiCss3 className="text-blue-500" />,
      name: "CSS3",
    },
    {
      icon: <IoLogoJavascript />,
      name: "Javascript",
    },
    {
      icon: <FaReact className="text-sky-600" />,
      name: "React",
    },
    {
      icon: <FaNode className="text-green-700" />,
      name: "Node.js",
    },
    {
      icon: <SiTailwindcss className="text-sky-500" />,
      name: "Tailwind",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
    },
    {
      icon: <RiGithubFill />,
      name: "GitHub",
    },
    {
      icon: <FaBootstrap className="text-purple-600" />,
      name: "Bootstrap",
    },
    {
      icon: <FaGitAlt className="text-orange-600" />,
      name: "Git",
    },
    {
      icon: <SiMui className="text-blue-500" />,
      name: "Material UI",
    },
    {
      icon: <SiMongodb className="text-green-800" />,
      name: "MongooDB",
    },
    {
      icon: <FaAws />,
      name: "AWS",
    },
  ];

  return (
    <div
      className={
        darkMode
          ? "dark bg-gray-900 min-h-screen flex flex-col"
          : "flex flex-col min-h-screen"
      }
    >
      {/* Main Content */}
      <main
        className={
          darkMode
            ? "dark text-white flex-1 container mx-auto px-6 py-12"
            : "container mx-auto px-6 py-12 flex-1"
        }
      >
        <div className="max-w-lg mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
          <p className="text-lg">
            I'm Moshe, a passionate fullstack developer with expertise in HTML,
            CSS, JavaScript, React, Node.js, Express, and more.
          </p>
          <p className="mt-4 text-lg">
            I love building elegant solutions to complex problems and am always
            eager to learn new technologies.
          </p>
          <p className="mt-4 text-lg">
            In my free time, I enjoy hiking, runing, reading, and experimenting
            with new coding projects.
          </p>
        </div>
        <div className="max-w-lg mx-auto flex mt-8">
          <a
            href="https://www.linkedin.com/in/moshe-amar/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-blue-500 text-4xl"/>
          </a>
          <a
              href="https://wa.me/972528857298?text=שלום%20משה,%20אשמח%20לשוחח%20איתך%20לגבי%20משרת%20פיתוח.%20 צור%20קשר%20"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 ml-2 bg-green-500 rounded-full hover:bg-green-600 transition-colors"
            >
              <FaWhatsapp className="text-white w-6 h-6" />
            </a>
        </div>
      </main>

      {/*Skills */}
      <h2
        className={
          darkMode
            ? "text-white text-center text-3xl font-bold mt-4"
            : "mt-4 text-center text-3xl font-bold"
        }
      >
        Skillset
      </h2>
      <div className="mt-8 flex justify-center mb-10">
        <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillset.map((skillset, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg text-center overflow-hidden hover:scale-110 transform transition duration-700"
            >
              <div className="p-6">
                <p className="mx-4 mb-3 text-5xl">{skillset.icon}</p>
                <p>{skillset.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
