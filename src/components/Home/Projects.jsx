import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import AsanPage from '../../assets/ProjectImages/Asandevnest.png'
import VoidPage from '../../assets/ProjectImages/VoidPage.png'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Asan Devnest",
      description: "Web Development Agency Website",
      image: AsanPage,
      link: "https://asandevnest.com/"
    },
    {
      id: 2,
      title: "VOID",
      description: "Fashion E-commerce Website",
      image: VoidPage,
      link: "https://void-fashion.onrender.com/"
    }
  ];

  return (
    <div className="bg-black py-20 p-5 md:p-30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-6xl font-bold text-white md:mb-2">RECENT</h1>
          <h2 className="text-3xl md:text-6xl font-bold text-gray-600">PROJECTS</h2>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project) => (
            <Link to={project.link} target='_blank'>
            <div 
              key={project.id}
              className="group flex items-center gap-8 hover:bg-gray-900 p-4 rounded-lg transition-all duration-300 cursor-pointer"
            >
              {/* Project Image */}
              <div className={`w-32 h-32 rounded-xl bg-gray-700 flex items-center justify-center overflow-hidden relative`}>
                <img src={project.image} className='w-30 h-20' alt="" />
              </div>

              {/* Project Info */}
              <div className="flex-1">
                <h3 className="text-md md:text-3xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-gray-400 text-sm md:text-xl">{project.description}</p>
              </div>

              {/* External Link Icon */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink 
                  className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" 
                />
              </div>
            </div></Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;