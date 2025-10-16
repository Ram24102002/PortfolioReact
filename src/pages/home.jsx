import React, { useState } from "react";
import Hero from "../components/Home/Hero";
import Projects from "../components/Home/Projects";
import PeopleIWorkedWith from "../components/Home/PeopleIWorkedWith";
import QuickTalk from "../components/Home/QuickTalk";
import ServicesSection from "../components/Home/ServicesSection";
import ClientTestimonials from "../components/Home/ClientTestimonials";
import ScrollFadeIn from "../Animations/ScrollFadeIn";
import TestimonialsComponent from "../components/Home/TestimonialsComponent";
import TechCarousel from "../components/Home/TechCarousel";
import ProjectsWithModel from "../components/Home/ProjectsWithModel";

function home() {
  

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleOpen = (content) => {
    setModalContent(content);
    setIsOpen(true);
  };
  return (

    <section className="bg-black flex justify-center items-center w-full">
    <div className="bg-black w-full md:w-[1220px]">
      
      {/* Hero */}
       <ScrollFadeIn>
      <div>
        <Hero />
      </div>
      </ScrollFadeIn>

      {/* ProjectsWithModel */}
      {/* <ScrollFadeIn> */}
      <div id="ProjectsWithModel">
        <ProjectsWithModel />
      </div>
      {/* </ScrollFadeIn> */}

      {/* Projects */}
      <ScrollFadeIn>
      <div id="Projects">
        <Projects />
      </div>
      </ScrollFadeIn>

      {/* Client Testimonials */}
      {/* <ClientTestimonials /> */}

      {/* Testimonials Component */}
      <ScrollFadeIn>
      <div>
        <TestimonialsComponent />
      </div>
      </ScrollFadeIn>

      {/* Quick Talk */}
      <ScrollFadeIn>
      <div>
        <QuickTalk />
      </div>
      </ScrollFadeIn>

      <ScrollFadeIn>
      <div>
        <TechCarousel />
      </div>
      </ScrollFadeIn>

      {/* Services Section */}
      <ScrollFadeIn>
      <div id="MyServices">
        <ServicesSection />
      </div>
      </ScrollFadeIn>

      {/* People I Worked With */}
      <ScrollFadeIn>
      <div>
        <PeopleIWorkedWith />
      </div>
      </ScrollFadeIn>



      {/* Testing <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}


    
      {/* End of Testing <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}




    </div>
    </section>
  );
}

export default home;
