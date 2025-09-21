
import ScrollFadeIn from '../../Animations/ScrollFadeIn';
import { Link } from 'react-router-dom';

// Portfolio
import PortMobile from '../../assets/ProjectImages/portfolioMobile.png'
import PortDesktop from '../../assets/ProjectImages/PortDesktop.png'
import profileImage from "../../assets/ProfileImage.png"
// asan
import AsanLogo from '../../assets/LOGOS/ASAN.png'
import AsanPage from '../../assets/ProjectImages/Asandevnest.png'
import AsandevnestMobile from '../../assets/ProjectImages/AsandevnestMobile.png'
// void
import VoidLogo from '../../assets/LOGOS/VOID.png'
import VoidPage from '../../assets/ProjectImages/voidDesktop.png'
import VoidMobile from '../../assets/ProjectImages/VoidMobile.png'

function ProjectsWithModel() {

    const projectsArray = [
        {
          id: 1,
          title: "Asan Dev Nest",
          logo: AsanLogo,
          description: "Worked with Asan Dev Nest as a Frontend Developer Intern to build and maintain web applications using React.js, Tailwind, HTML, CSS, and JavaScript.",
          mobileImage: AsandevnestMobile,
          desktopImage: AsanPage,
          Completed: true,
          projectLink: "https://asandevnest.com/"
        },
        {
          id: 2,
          title: "VOID Fashion",
          logo: VoidLogo,
          description: "E-commerce platform for fashion enthusiasts to explore and purchase trendy clothing items.",
          mobileImage: VoidMobile,
          desktopImage: VoidPage,
          Completed: false,
          projectLink: "https://void-frontend-nine.vercel.app/"
        },
        {
          id: 3,
          title: "Portfolio",
          logo: profileImage,
          description: "MERN Stack Developer Portfolio Website with Responsive Design and Interactive Features.",
          mobileImage: PortMobile,
          desktopImage: PortDesktop,
          Completed: true,
          projectLink: "https://portfolio-react-azure-kappa.vercel.app/"
        },
      ];

  return (
    <div>
        {/* Header */}
        <ScrollFadeIn>
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-white md:mb-2">RECENT</h1>
          <h2 className="text-5xl md:text-7xl font-bold text-gray-600">PROJECTS</h2>
        </div>
        </ScrollFadeIn>


        {projectsArray.map((project) =>(
        <ScrollFadeIn><div className="min-h-screen bg-black" key={project.id}>
          <div className="flex">
            {/* Left Side - Main Content */}
            <div className="w-1/3 p-12 ">
              {/* Logo */}
              <div className="mb-16">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center flex-shrink-0">
                            <img 
                            className="w-20 h-20 rounded-full object-cover border  p-1" 
                            src={project.logo} alt="" />
                          </div>
                
                <h1 className="text-5xl text-white font-bold  mb-8 leading-tight">
                  {project.title}
                </h1>
                
                <p className="text-xl  text-white   mb-12 leading-relaxed max-w-lg">
                  {project.description} <span className='text-gray-400 text-sm'>{project.Completed ? "(Completed)" : "(Ongoing)"}</span>
                </p>
    
                <Link to={project.projectLink} target='_blank'>
                    <button className="bg-lime-400   px-8 py-4 rounded-xl  font-medium hover:bg-lime-200  transition-colors shadow-sm">
                        Visite the Project
                    </button>
                </Link>
              </div>
            </div>
    
            {/* Right Side - App Interfaces */}
            <div className="w-2/3 p-8  flex items-center justify-center relative">
    
            
              {/* Mobile Phone */}
              <div className='w-1/3 flex flex-col items-center justify-center mr-[-90px] z-10 mt-30'>
                  <div className='h-95 w-45 border-4 border-white rounded-3xl shadow-xl overflow-hidden mb-8'>
                    <img src={project.mobileImage} className='object-fit' alt="" />
                  </div>
              </div>
              
    
    
              {/* Desktop Browser Window */}
              <div className="mockup-browser bg-white border-base-300 border w-2/3">
      <div className="mockup-browser-toolbar p-2">
        <div className="input">{project.projectLink}</div>
      </div>
      <div className="grid place-content-center border-t border-base-300 h-80">
        <img src={project.desktopImage}  className=' py-5'  alt="" />
      </div>
    </div>
    
            </div>
          </div>
        </div>
        </ScrollFadeIn>))}
    </div>
  )
}

export default ProjectsWithModel