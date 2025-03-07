import React from "react";
import { useDarkMode } from "../darkModeContext"; // Import the custom hook
import { FaReact } from "react-icons/fa";
import { TiCss3, TiHtml5 } from "react-icons/ti";
import { SiTailwindcss } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { RiGithubFill } from "react-icons/ri";
import { GiGemini } from "react-icons/gi";

export default function Portfolio() {
  const { darkMode } = useDarkMode();

  // Sample projects data
  const projects = [
    {
      title: "Rescue Mind",
      description:
        "Rescue Mind is an advanced battlefield casualty care system that streamlines treatment, monitors vital signs, and securely transfers medical data for faster, informed decisions.",
      icon: [
        <FaReact color="blue" className="mr-1.5" />,
        <FaNode className="text-green-700 text-4xl mr-1.5 " />,
        <GiGemini className="text-pink-500 text-xl mr-1.5" />,
        <FaAws className="text-black text-2xl mr-1.5" />,
        <SiTailwindcss className="text-blue-400 mr-1.5" />,
      ],
      imageUrl: "/images/rescueMindLogo1.jpg",
      liveUrl: "https://main.d15byxu17dqr02.amplifyapp.com/",
      githubUrl: "https://github.com/King-moshe/RescueMind-client",
    },
    {
      title: "Fish Store ",
      description:
        "The fish store project is a luxurious online marketplace for purchasing fresh and frozen fish, featuring a sleek design and seamless user experience.",
      icon: [
        <FaReact color="blue" className="mr-1.5" />,
        <FaNode className="text-green-700 text-4xl mr-1.5 " />,
        <SiTailwindcss className="text-blue-400 mr-1.5" />,
      ],
      imageUrl: "/images/fishStore.jpg",
      liveUrl: "https://main.d1e4pvzp0qer9g.amplifyapp.com/",
      githubUrl: "https://github.com/King-moshe/Fishstore-Client",
    },
    {
      title: "Tickets store",
      description:
        "A website for selling tickets for concerts and parties, built and designed using HTML CSS JS.",
      icon: [
        <TiHtml5 className="text-orange-600 text-xl mr-1.5" />,
        <TiCss3 className="text-black mr-1.5" />,
        <IoLogoJavascript color="black" />,
      ],
      imageUrl:
        "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600",
      liveUrl: "https://music-ticket.netlify.app/",
      githubUrl: "https://github.com/King-moshe/Tickets-store",
    },
    {
      title: "Arrow Game",
      description:
        "A game of uploading pictures and moving them inside a cube that limits displacement.",
      icon: [<IoLogoJavascript color="black" />],
      imageUrl:
        "https://images.pexels.com/photos/18000224/pexels-photo-18000224/free-photo-of-people-in-sports-field.jpeg?auto=compress&cs=tinysrgb&w=600",
      liveUrl: "https://arrow-image-game.netlify.app/",
      githubUrl: "https://github.com/King-moshe/Arrow-move-Game",
    },
    {
      title: "Weather App",
      description:
        "A site that displays the weather around the world by searching for a destination.",
      icon: [<IoLogoJavascript color="black" />],
      imageUrl:
        "https://images.pexels.com/photos/269724/pexels-photo-269724.jpeg?auto=compress&cs=tinysrgb&w=600",
      liveUrl: "https://world-weather-appliction.netlify.app/",
      githubUrl: "https://github.com/King-moshe/Weather-App",
    },
    {
      title: "Cient management",
      description:
        "Tenant management site in a new residential project, working in the interface with professionals in the field of construction.",
      icon: [
        <IoLogoJavascript className="text-black mr-1.5" />,
        <FaReact className="text-blue-700 mr-1.5" />,
        <SiTailwindcss className="text-blue-400 mr-1.5" />,
        <SiMongodb className="text-green-600 mr-1.5" />,
        <FaNode className="text-green-700 text-4xl mr-1.5 " />,
      ],
      imageUrl:
        "https://media.istockphoto.com/id/981339754/photo/silhouette-of-engineer-and-construction-team-working-at-site-over-blurred-background-sunset.jpg?b=1&s=612x612&w=0&k=20&c=5TNaaHXK4HaMg81FWc85KtnyvAGbbjU4VJc_EYyfAcg=",
      liveUrl: "https://home-board.netlify.app/",
      githubUrl: "https://github.com/King-moshe/homeBoard-clientSide",
    },
    {
      title: "AWS Amplify Cloud",
      description:
        "A personal job site showing the projects I built, about me and contact methods, built in React and stored in the AWS cloud.",
      icon: [
        <FaReact color="blue" className=" mr-1.5" />,
        <TiHtml5 className="text-orange-600 text-xl mr-1.5" />,
        <SiTailwindcss className="text-blue-400 mr-1.5" />,
        <FaAws className="text-black text-2xl mr-1.5" />,
      ],
      imageUrl:
        "https://images.pexels.com/photos/14936128/pexels-photo-14936128.jpeg?auto=compress&cs=tinysrgb&w=600",
      liveUrl: "https://main.d1tbejhneij7v7.amplifyapp.com/",
      githubUrl: "https://github.com/King-moshe/amplify-react",
    },
    // Add more projects as needed
  ];

  return (
    <div className={darkMode ? "dark bg-gray-900 min-h-screen flex flex-col" : "bg-gray-100 min-h-screen flex flex-col"}>
      {/* Main Content */}
      <main className={darkMode ? "dark text-white flex-1 container mx-auto px-6 py-12" : "container mx-auto px-6 py-12 flex-1"}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">Projects</h2>
          <p className="text-center mb-8">Here are a few projects I've worked on recently.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full">
                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover object-center" />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                  <p className="text-gray-600 mb-4 flex">{project.icon}</p>
                  <div className="flex justify-center mt-auto space-x-5 items-center">
                    <a href={project.liveUrl} className="bg-blue-500 hover:bg-blue-600 text-white font-bold p-2 rounded-lg w-full text-center">Live Demo</a>
                    <a href={project.githubUrl} className="bg-gray-500 flex hover:bg-gray-600 text-white font-bold p-2 rounded-lg w-full text-center"><RiGithubFill className="mt-1 mr-1" /> GitHub</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
