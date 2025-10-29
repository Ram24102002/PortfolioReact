import React, { useState } from "react";
import Asan from "../../assets/LOGOS/ASAN.png";
import MegaMind from "../../assets/LOGOS/MegaMind.png";
import VOID from "../../assets/LOGOS/VOID.png";
import Amazon from "../../assets/LOGOS/Amazon.png";
import Modal from "../../utils/Modal";
import TakeMyTickets from "../../assets/LOGOS/TakeMyTickets.png";

const PeopleIWorkedWith = () => {

  
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCompany, setSelectedCompany] = useState(null);


  const brands = [
    {
          id: 1,
          name:  "💻 Asan DevNest - Frontend Developer",
          logo: Asan,
          details: ["💻 Asan (DevNest) – Frontend Developer | Worked with React, Tailwind CSS, and JavaScript to build scalable UI solutions.",

"🧩 Developed multiple responsive pages and UI components across the platform, ensuring a seamless and modern user experience.",

"🌐 Contributed to a skill-first freelancing ecosystem connecting businesses with talented developers.",

"🤖 Collaborated within a 2,000+ member AI-guided community, gaining mentorship and delivering impactful, real-world projects."]
        },
        {
          id: 2,
          name: "💼 Mega Mind Computing Solutions – Web Development Intern",
          logo: MegaMind,
          details: [
            "🔧 Contributed to both frontend and backend modules, collaborating closely with the development team on real-world client projects.",
            "🛍️ Led frontend development of “E-Shop”, a full-stack e-commerce project submitted to the University of Madras.",
            "💻 Developed dynamic, responsive pages and integrated APIs using HTML, CSS, JavaScript, PHP, and Laravel.",
            "🚀 Enhanced user experience and performance, applying best practices in UI/UX, scalability, and code optimization."
          ]
        },
        {
          id: 3,
          name: "🛍️Void Fashion - Fullstack Developer",
          logo: VOID,
          details: ["🛍️ Modern Online T-Shirt Store — Void is a stylish e-commerce platform focused on selling T-shirts, providing users with a smooth and minimal shopping experience.",

"⚛️ Built with React + Tailwind CSS — The frontend uses React for dynamic UI and Tailwind for fast, responsive, and modern styling, supporting both light and dark modes.",

"🌱 Powered by Spring Boot Backend — A robust Spring Boot backend handles APIs, authentication, and database integration, ensuring security and scalability.",

"🚀 Ongoing Full-Stack Development — Currently under active development, Void aims to deliver seamless browsing, cart management, and checkout features with a clean, performance-optimized design."]
        },
        {
          id: 4,
          name: "📦 Amazon - Quality Assurance Associate",
          logo: Amazon,
          details : ["💼 Amazon – Quality Assurance Associate (May 2024 – Present)",
"🧪 Conducted API and manual testing for 9+ major features and 25+ release regressions.",
"⚙️ Optimized QA workflows, saving 1,511+ team hours and $16.4K in FY2024 operational costs.",
"🏆 Honored with “Star of the Quarter” award for outstanding performance and contribution."
]},
{
          id: 5,
          name: "🎟️ Take My Tickets - Quality Assurance",
          logo: TakeMyTickets,
          details : ["TakeMyTickets – Quality Asurance ",
"Worked as a QA Associate performing API and manual testing for 9+ major features and 25+ release regressions.",
"Improved processes, saving 1,511 team hours and $16.4K in FY2024 operational costs.",
"Awarded “Star of the Quarter” for outstanding contributions."
]},
  ];

  const openModal = (company) => {
    setSelectedCompany(company);
    setIsOpen(true);
  };



  // testing -------------------------------------------------------------

  // const VideoResponce = async () => (
  //   try{
  //     const response = await fetch(`${import.meta.env.VITE_API_URL}/api/64b8f3f4e1b1f5c9d6e4a2b1`); // Replace with your backend endpoint

  //   }
  // )

  //   // Construct the full URL for the streaming endpoint
  //   const videoSourceUrl = `${API_BASE_URL}/video/stream/${fileId}`;

  //   if (!fileId) {
  //       return <p>Error: No video ID provided.</p>;
  //   }

    // testing ends ---------------------------------------------------

  return (
    <section className=" py-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
            People I've
          </h2>
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
            Worked With
          </h2>
          {/* <p className="text-gray-400 text-lg">
            I've worked with amazing brands like...
          </p> */}
        </div>

        {/* Infinite Scroll Row */}
        <div className="relative w-full overflow-hidden">
  <div className="grid grid-cols-2 md:grid-cols-5 animate-marquee">
    {[...brands].map((brand, index) => (
      <div
        key={index}
        className="flex items-center justify-center px-8 min-w-[180px]"
        onClick={() => openModal(brand)}
      >
        <img
          src={brand.logo}
          alt={brand.name}
          className="h-50 object-contain"
        />
      </div>
      
    ))}

    {/* Modal */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        name={selectedCompany?.name}
      >
        <p className="p-10">{selectedCompany?.details.map((item, index) => (
    <li key={index}>{item}</li>
  ))}</p>

  {/* <video src=""></video> */}
      </Modal>


     {/* Left fade */}
  <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent"></div>

  {/* Right fade */}
  <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent"></div>

   
  </div>
</div>


        {/* Bottom Text */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            Ready to join these industry leaders? Let's create something amazing
            together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PeopleIWorkedWith;
