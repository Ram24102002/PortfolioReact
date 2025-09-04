import ReactLogo from '../../assets/TechStackLogo/React.png'
import TailwindLogo from '../../assets/TechStackLogo/Tailwind.png'
import JSLogo from '../../assets/TechStackLogo/JS.png'
import HTMLLogo from '../../assets/TechStackLogo/HTML.png'
import MongoDBLogo from '../../assets/TechStackLogo/MongoDB.png'
import CSSLogo from '../../assets/TechStackLogo/CSS.png'
import SpringBootLogo from '../../assets/TechStackLogo/SpringBoot.png'
import BootstrapImg from '../../assets/TechStackLogo/BootstrapImg.png'

const TechCarousel = () => {
  const technologies = [
    { name: 'React', icon: ReactLogo },
    { name: 'JavaScript', icon: JSLogo },
    { name: 'HTML', icon: HTMLLogo },
    { name: 'CSS', icon: CSSLogo },
    { name: 'Tailwind CSS', icon: TailwindLogo },
    { name: 'MongoDB', icon: MongoDBLogo },
    { name: 'Spring Boot', icon: SpringBootLogo },
    { name: 'Bootstrap', icon: BootstrapImg},
    { name: 'Java', icon: '☕' },
    { name: 'Git', icon: '📝' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'MySQL', icon: '🐬' },
    { name: 'Figma', icon: '🎨' },
    { name: 'ChatGPT', icon: '🤖' }
  ];

  // Duplicate the array for seamless looping
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
      
      {/* Header */}
      <div className="w-full ml-100 mb-20">
        <h1 className="text-8xl font-bold text-gray-300 mb-6 tracking-tight">
          Tech Stack
        </h1>
        
      </div>

      {/* Continuous Flowing Carousel */}
      <div className="relative w-full overflow-hidden">
        <div 
          className="flex space-x-16 animate-scroll"
          style={{
            animation: 'scroll 30s linear infinite',
            width: 'fit-content'
          }}
        >
          {duplicatedTechs.map((tech, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center justify-center w-40 h-40 mx-30"
            >
              <img src={tech.icon} alt="" className='h-full' />
            </div>
          ))}
        </div>
      </div>

      

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${technologies.length * 224}px);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

    </div>
  );
};

export default TechCarousel;