import React from "react";
import profileImage from "../../assets/ProfileImage.png"
import { Github, Instagram, Linkedin, Zap, Nfc } from "lucide-react";

function Hero() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl w-full">
        {/* Header Section */}
        <div className="flex items-center gap-4 mb-16">
          {/* Profile Image */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center flex-shrink-0">
            <img 
            className="w-20 h-20 rounded-full object-cover" 
            src={profileImage} alt="" />
          </div>

          {/* Name and Social Links */}
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-semibold tracking-tight">
              Ramachandran Asokan
            </h1>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="space-y-6">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            I Craft Websites That{" "}
            <span className="block">Captivate, Inspire, and</span>
            <span className="block">Elevate Your Brand</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mt-8">
            With 2 years of experience in web design, I specialize in crafting
            visually stunning, user-friendly, and high-converting websites.
          </p>
        </div>

        {/* CTA Section (Optional) */}
        <div className="mt-12 w-full flex flex-col sm:flex-row gap-4">
          <button className="bg-lime-400 text-black px-8 py-3 rounded-lg flex font-medium hover:bg-lime-300  transition-colors duration-200">
            <Zap />
            View My Work
          </button>
          <button className="bg-white text-black px-8 py-3 rounded-lg font-medium flex hover:bg-lime-400  transition-colors duration-200">
            Get In Touch <Nfc />
          </button>
        </div>
        <div className="flex items-center gap-2 mt-6">
          <div className="w-2 h-2 bg-green-500 rounded-full text-white text-sm md:text-lg font-medium"></div>
          <p>Available</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
