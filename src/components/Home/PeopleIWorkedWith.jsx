import React, { useState } from "react";
import Asan from "../../assets/LOGOS/ASAN.png";
import MegaMind from "../../assets/LOGOS/MegaMind.png";
import VOID from "../../assets/LOGOS/VOID.png";
import Amazon from "../../assets/LOGOS/Amazon.png";
import Modal from "../../utils/Modal";

const PeopleIWorkedWith = () => {

  
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCompany, setSelectedCompany] = useState(null);


  const brands = [
    {
          id: 1,
          name: "Company One",
          logo: Asan,
          details: "Worked as Frontend Developer. Built landing pages and dashboards."
        },
        {
          id: 2,
          name: "Company Two",
          logo: MegaMind,
          details: "Worked as Fullstack Developer. Developed APIs and integrations."
        },
        {
          id: 3,
          name: "Company Three",
          logo: VOID,
          details: "Worked on UI/UX design system with Tailwind + React."
        },
        {
          id: 4,
          name: "Company Four",
          logo: Amazon,
          details : ["Amazon – QA Associate, Quality Services | May 2024 – Present",
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
  <div className="grid grid-cols-2 md:grid-cols-4 animate-marquee">
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
