import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Github, ArrowLeft, Phone, MessageCircle, Instagram  } from 'lucide-react';

export default function GetInTouch() {


  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

2
  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };


  return (
    <div className="min-h-screen bg-black text-white p-8 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Column - Contact Info */}
        <div className="flex flex-col justify-around h-full min-h-[500px]">
          <div>
            <Link to={'/'}>
                <button 
                id='backButton' 
                className="bg-lime-400 text-black px-8 py-4 rounded-full hover:rounded-xl transform transition duration-1000 font-medium hover:bg-lime-300 transition-colors flex items-center gap-2 group"
                onMouseEnter={() => document.getElementById('GBH').classList.remove('hidden')}
                onMouseLeave={() => document.getElementById('GBH').classList.add('hidden')}
                >
                  <ArrowLeft /> <span id='GBH' className='hidden'>Go back home</span>
                </button>
            </Link>
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-light mb-8">For Business enquiry</h2>
            
            {/* Social icons */}
            <div className="flex flex-col space-x-4 text-align-left">
              <a href="https://github.com/Ram24102002" target="_blank" className=" p-2   flex items-center  ">
                <Github size={40} className="text-lime-400" />
                <p className="ml-2 hover:underline">GitHub</p>
              </a>
              <a href="https://www.linkedin.com/in/ramachandran24-asokan/" target="_blank" className=" p-2   flex items-center ">
                <Linkedin size={40}  className=" text-lime-400" />
                <p className="ml-2 hover:underline">LinkedIn</p>
              </a>
              <a href="https://wa.me/917305790119" className=" p-2   flex items-center ">
                <MessageCircle size={40} className=" text-lime-400" />
                <p className="ml-2 hover:underline">Whatsapp</p>
              </a>
              <a href="https://www.instagram.com/ram_24_wanderer" className=" p-2  flex items-center ">
                <Instagram size={40}  className="text-lime-400" />
                <p className="ml-2 hover:underline">Instagram/ram_24_wanderer</p>
              </a>
              <a href="mailto:ramachandran24102002@gmail.com" className=" p-2  flex items-center">
                <Mail size={40}   className="text-lime-400"/>
                <p className="ml-2 hover:underline">ramachandran24102002@gmail.com</p>
              </a>
              <a href="tel:+917305790119" className=" p-2   flex items-center ">
                <Phone size={40}  className=" text-lime-400" />
                <p className="ml-2 hover:underline">+91 7305790119</p>
              </a>
            </div>
          </div>

          
        </div>

        {/* Right Column - Contact Form */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-light mb-8">Prefer forms?</h2>
          
          <div className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-3 bg-zinc-800  rounded-lg text-white placeholder-gray-400  focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent transition-colors duration-300"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-3 bg-zinc-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent transition-colors duration-300"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                className="w-full px-4 py-3 bg-zinc-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent transition-colors duration-300 "
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-medium text-lg transition-all duration-300 ${
                  submitted
                    ? 'bg-lime-500 text-black'
                    : isSubmitting
                    ? 'bg-lime-400 text-black cursor-not-allowed'
                    : 'bg-lime-400 text-black hover:bg-lime-300 hover:shadow-lg hover:shadow-gray-900/20'
                }`}
              >
                {submitted ? (
                  <span className="flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Message Sent!</span>
                  </span>
                ) : isSubmitting ? (
                  <span className="flex items-center justify-center space-x-2">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </span>
                ) : (
                  'Submit'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}