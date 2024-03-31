import React from 'react';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import { useDarkMode } from '../darkModeContext'; // Import the custom hook

export default function Portfolio() {
  const { darkMode, toggleDarkMode } = useDarkMode(); // Access dark mode state and toggle function

  // Sample projects data
  const projects = [
    {
      title: "Tickets store",
      description: "A website for selling tickets for concerts and parties, built and designed using HTML CSS JS.",
      imageUrl: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600",
      liveUrl: "https://music-ticket.netlify.app/",
      githubUrl: "https://github.com/King-moshe/Tickets-store"
    },
    {
      title: "Arrow Game",
      description: "A game of uploading pictures and moving them inside a cube that limits displacement.",
      imageUrl: "https://images.pexels.com/photos/18000224/pexels-photo-18000224/free-photo-of-people-in-sports-field.jpeg?auto=compress&cs=tinysrgb&w=600",
      liveUrl: "https://arrow-image-game.netlify.app/",
      githubUrl: "https://github.com/King-moshe/Arrow-move-Game"
    },
    {
      title: "Weather App",
      description: "A site that displays the weather around the world by searching for a destination.",
      imageUrl: "https://images.pexels.com/photos/269724/pexels-photo-269724.jpeg?auto=compress&cs=tinysrgb&w=600",
      liveUrl: "https://world-weather-appliction.netlify.app/",
      githubUrl: "https://github.com/King-moshe/Weather-App"
    },
    {
      title: "Cient management",
      description: "Tenant management site in a new residential project, working in the interface with professionals in the field of construction.",
      imageUrl: "https://media.istockphoto.com/id/981339754/photo/silhouette-of-engineer-and-construction-team-working-at-site-over-blurred-background-sunset.jpg?b=1&s=612x612&w=0&k=20&c=5TNaaHXK4HaMg81FWc85KtnyvAGbbjU4VJc_EYyfAcg=",
      liveUrl: "https://home-board.netlify.app/",
      githubUrl: "https://github.com/King-moshe/homeBoard-clientSide"
    },
    {
      title: "AWS Amplify Cloud",
      description: "A personal work site that presents the projects I built, about me and contact methods.",
      imageUrl: "https://images.pexels.com/photos/14936128/pexels-photo-14936128.jpeg?auto=compress&cs=tinysrgb&w=600",
      liveUrl: "https://main.d1tbejhneij7v7.amplifyapp.com/",
      githubUrl: "https://github.com/King-moshe/amplify-react"
    },
    // Add more projects as needed
  ];

  return (
    <div className={darkMode ? 'dark bg-gray-900 min-h-screen flex flex-col' : 'bg-gray-100 min-h-screen flex flex-col'}>
      {/* Header */}
      <header className={darkMode ? 'dark bg-gray-800 shadow-md' : 'bg-white shadow-md'}>
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          {/* Conditional logo color */}
          <h1 className={darkMode ? 'text-xl font-bold text-white' : 'text-xl font-bold text-gray-800'}>My Portfolio</h1>
          {/* Navigation */}
          <nav className="flex space-x-4">
            <ul className="flex space-x-4">
              <li><a href="/" className={darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'}>Home</a></li>
              <li><a href="/portfolio" className={darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'}>Portfolio</a></li>
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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover object-center" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex justify-center">
                    <a href={project.liveUrl} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mr-4">Live Demo</a>
                    <a href={project.githubUrl} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg">GitHub</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
