import PortLogo from '../assets/ProjectImages/portfolioMobile.png'
import PortDesktop from '../assets/ProjectImages/PortDesktop.png'
import profileImage from "../assets/ProfileImage.png"

export default function sample() {
  return (
    <div className="min-h-screen bg-gray-500">
      <div className="flex">
        {/* Left Side - Main Content */}
        <div className="w-1/3 p-12 ">
          {/* Logo */}
          <div className="mb-16">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center flex-shrink-0">
                        <img 
                        className="w-20 h-20 rounded-full object-cover" 
                        src={profileImage} alt="" />
                      </div>
            
            <h1 className="text-5xl font-bold  mb-8 leading-tight">
              Portfolio
            </h1>
            
            <p className="text-xl  mb-12 leading-relaxed max-w-lg">
              MERN Stack Developer Portfolio Website with Responsive Design and Interactive Features.
            </p>

            <button className="bg-lime-400   px-8 py-4 rounded-xl  font-medium hover:bg-lime-200  transition-colors shadow-sm">
              Visite the Project
            </button>
          </div>
        </div>

        {/* Right Side - App Interfaces */}
        <div className="w-2/3 p-8  flex items-center justify-center relative">

        
          {/* Mobile Phone */}
          <div className='w-1/3 flex flex-col items-center justify-center mr-[-90px] z-10 mt-30'>
              <div className='h-95 w-45 border-4 border-white rounded-3xl shadow-xl overflow-hidden mb-8'>
                <img src={PortLogo} className='object-fit' alt="" />
              </div>
          </div>
          


          {/* Desktop Browser Window */}
          <div className="mockup-browser bg-white border-base-300 border w-2/3">
  <div className="mockup-browser-toolbar p-2">
    <div className="input">https://portfolio-react-azure-kappa.vercel.app/</div>
  </div>
  <div className="grid place-content-center border-t border-base-300 h-80">
    <img src={PortDesktop}  className=' py-5'  alt="" />
  </div>
</div>

        </div>
      </div>
    </div>
  );
}