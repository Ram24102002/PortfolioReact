import profileImage from "../../assets/ProfileImage.png"
import { Github, Instagram, Linkedin, Zap, Paperclip } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  
  return (
    <div className="min-h-[70%] bg-black text-white flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl w-full">
        {/* Header Section */}
        <div className="flex items-center gap-4 mb-9">
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
                href="https://www.linkedin.com/in/ramachandran24-asokan/"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Linkedin"
                target="_blank"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/Ram24102002"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Github"
                target="_blank"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.instagram.com/ram_24_wanderer/"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
                target="_blank"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="space-y-6 animate-fadeIn">
          <h2 className="text-4xl px-3 py-4 md:text-6xl lg:text-6xl font-bold leading-tight tracking-tight">
            I Craft Full-Stack Websites That <br /> Captivate,
            Inspire,<br className="md:hidden" /> and Elevate <br /> Your Brand 📈
          </h2>

          {/* Description */}
          <p className="text-lg px-3 animate-fade-in md:text-xl text-gray-400 max-w-3xl leading-relaxed mt-8">
            With 2 years of freelance and internship experience in Web-Development,<br /> I specialize in crafting
            visually stunning, user-friendly, and high-converting websites.
          </p>
        </div>

        {/* CTA Section (Optional) */}
        <div className="mt-12 w-full flex flex-col sm:flex-row gap-4">
          <Link 
          to={"/get-in-touch"}
          onClickCapture={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <button className="bg-lime-400 text-black px-8 py-3 w-full md:w-50  rounded-lg flex justify-center font-medium hover:bg-lime-300  transition-colors duration-200">
            <Zap />Get In Touch
          </button>
          </Link>
          <a href="https://drive.google.com/file/d/1at0UtzIrdacFqeUjQ__ZkYR5-f22lvdE/view?usp=drive_link" target="_blank">
            <button className="bg-white text-black text-center flex justify-center  px-8 py-3 w-full md:w-50 rounded-lg font-medium flex hover:bg-lime-100  transition-colors duration-200">
            View My CV
            <Paperclip />
          </button>
          </a>
        </div>
        <div className="flex items-center gap-2 mt-6">
          <div className="w-3 h-3 animate-bounce bg-green-500 rounded-full text-white text-sm md:text-lg font-medium"></div>
          <p>Available for work</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
