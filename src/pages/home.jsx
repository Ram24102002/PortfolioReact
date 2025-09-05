import React from "react";
import Hero from "../components/Home/Hero";
import Projects from "../components/Home/Projects";
import PeopleIWorkedWith from "../components/Home/PeopleIWorkedWith";
import QuickTalk from "../components/Home/QuickTalk";
import ServicesSection from "../components/Home/ServicesSection";
import ClientTestimonials from "../components/Home/ClientTestimonials";
import ScrollFadeIn from "../Animations/ScrollFadeIn";
import TestimonialsComponent from "../components/Home/TestimonialsComponent";
import TechCarousel from "../components/Home/TechCarousel";

function home() {
  return (
    <div className="bg-black">
      
      {/* Hero */}
       <ScrollFadeIn>
      <div>
        <Hero />
      </div>
      </ScrollFadeIn>

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
    </div>
  );
}

export default home;
