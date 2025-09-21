import { div } from "framer-motion/client";
import ScrollFadeIn from "../../Animations/ScrollFadeIn";
import profileImage from "../../assets/ProfileImage.png"
import {Link} from 'react-router-dom'
import { Mail, Phone, ExternalLink, Github, Linkedin, MessageCircle, Instagram } from 'lucide-react';



function FadeInFooter(){
  return (
    <div className="py-30 md:py-40 bg-black text-white relative overflow-hidden" id="Footer">
      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Profile section */}
        <div className="mb-5 md:mb-10">
          {/* Profile Image */}
          <div className="w-20 h-20 mb-10 rounded-full bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center flex-shrink-0">
            <img 
            className="w-20 h-20 rounded-full object-cover" 
            src={profileImage} alt="" />
          </div>
          
          <h1 className="text-xl text-gray-300 mb-1">
            Wana build a <span className="text-white text-2xl">modern, sleek and high-performing websites </span>that helps your business stand out. <span className="text-2xl">!</span>
          </h1>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-5 md:mb-10">
          <h2 className="text-6xl md:text-7xl font-bold">
            Let's Work Together!
          </h2>
          <Link 
          to={"/get-in-touch"}
          onClickCapture={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <button className="bg-lime-400 text-black px-8 py-4 mt-10 md:mt-15 md:mt-0  rounded-full hover:rounded-xl transform transition duration-1000 font-medium hover:bg-lime-300 transition-colors flex items-center gap-2 group">
            Let's Talk
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          </Link>
        </div>

        {/* Contact info */}
        <div className="flex justify-between ">
          <div className="flex  space-x-8">
            {/* Social icons */}
            <div className="grid grid-cols-1 md:grid-cols-3 space-x-4 text-align-left">
              <a href="https://github.com/Ram24102002" target="_blank" className=" p-2 md:p-10  flex items-center  ">
                <Github size={40} className="text-lime-400" />
                <p className=" ml-2">GitHub</p>
              </a>
              <a href="https://www.linkedin.com/in/ramachandran24-asokan/" target="_blank" className=" p-2 md:p-10    flex items-center ">
                <Linkedin size={40}  className=" text-lime-400" />
                <p className=" ml-2">LinkedIn</p>
              </a>
              <a href="https://wa.me/917305790119" className=" p-2 md:p-10   flex items-center ">
                <MessageCircle size={40} className=" text-lime-400" />
                <p className=" ml-2">Whatsapp</p>
              </a>
              <a href="https://www.instagram.com/ram_24_wanderer" className=" p-2 md:p-10 w-100    flex items-center ">
                <Instagram size={40}  className="text-lime-400" />
                <p className=" ml-2">Instagram/ram_24_wanderer</p>
              </a>
              <a href="mailto:ramachandran24102002@gmail.com" className=" p-2 md:p-10 w-100    flex items-center">
                <Mail size={40}   className="text-lime-400"/>
                <p className=" ml-2">ramachandran24102002@gmail.com</p>
              </a>
              <a href="tel:+917305790119" className=" p-2 md:p-10    flex items-center ">
                <Phone size={40}  className=" text-lime-400" />
                <p className=" ml-2">+91 7305790119</p>
              </a>
            </div>
          </div>

          
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center text-gray-500 text-sm">
        <div>
          Designed on <span className="text-gray-300">MERN Stack</span> By <Link to={'/inbox'}><span className="text-gray-300">Ramachandran Asokan</span></Link>
        </div>
        <div>
          © Copyright 2025
        </div>
      </div>
    </div>
  );
}


export default function Footer() {
  return(
    <div className="bg-black">
      <ScrollFadeIn>
        <FadeInFooter />
      </ScrollFadeIn>
    </div>
  )
}