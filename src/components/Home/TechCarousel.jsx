import ReactLogo from '../../assets/TechStackLogo/React.png'
import TailwindLogo from '../../assets/TechStackLogo/Tailwind.png'
import JSLogo from '../../assets/TechStackLogo/JS.png'
import HTMLLogo from '../../assets/TechStackLogo/HTML.png'
import MongoDBLogo from '../../assets/TechStackLogo/MongoDB.png'
import CSSLogo from '../../assets/TechStackLogo/CSS.png'
import SpringBootLogo from '../../assets/TechStackLogo/SpringBoot.png'
import BootstrapImg from '../../assets/TechStackLogo/BootstrapImg.png'
import JavaLogoImg from '../../assets/TechStackLogo/JavaLogo.png'
import GitLogoImg from '../../assets/TechStackLogo/Git.png'
import GitHubImg from '../../assets/TechStackLogo/Github.png'
import FigmaLogoImg from '../../assets/TechStackLogo/FigmaLogo.png'
import MySqlImg from '../../assets/TechStackLogo/MySql.png'
import AiImg from '../../assets/TechStackLogo/Ai.png'

const TechCarousel = () => {
  const technologies = [
    { name: 'JavaScript', icon: JSLogo },
    { name: 'HTML', icon: HTMLLogo },
    { name: 'GitHub', icon: GitHubImg },
    { name: 'Tailwind CSS', icon: TailwindLogo },
    { name: 'React', icon: ReactLogo },
    { name: 'MongoDB', icon: MongoDBLogo },
    { name: 'ChatGPT', icon: AiImg },
    { name: 'Spring Boot', icon: SpringBootLogo },
    { name: 'Bootstrap', icon: BootstrapImg},
    { name: 'CSS', icon: CSSLogo },
    { name: 'Java', icon: JavaLogoImg },
    { name: 'Git', icon: GitLogoImg },
    { name: 'MySQL', icon: MySqlImg },
    { name: 'Figma', icon: FigmaLogoImg },
  ];

  // Duplicate the array for seamless looping
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <div className="py-20 mb-20 bg-black flex flex-col items-center justify-center overflow-hidden">
      
      {/* Header */}
      <div className="w-full f p-5 md:ml-100 mb-10">
        <h1 className="text-6xl md:text-8xl font-bold text-lime-400 tracking-tight">
          Tech
        </h1>
        <h1 className="text-5xl md:text-8xl font-bold text-gray-300 mb-6 tracking-tight">
          Stack
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
              className="flex-shrink-0 flex flex-col items-center justify-center w-40 h-40  md:mx-20"
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