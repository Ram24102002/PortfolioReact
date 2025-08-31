import React from "react";
import Hero from "../components/Home/Hero";
import Projects from "../components/Home/Projects";
import PeopleIWorkedWith from "../components/Home/PeopleIWorkedWith";
import QuickTalk from "../components/Home/QuickTalk";
import ServicesSection from "../components/Home/ServicesSection";
import ClientTestimonials from "../components/Home/ClientTestimonials";
import ScrollFadeIn from "../Animations/ScrollFadeIn";

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
      <div>
        <Projects />
      </div>
      </ScrollFadeIn>

      {/* Client Testimonials */}
      {/* <ClientTestimonials /> */}

      {/* Quick Talk */}
      <ScrollFadeIn>
      <div>
        <QuickTalk />
      </div>
      </ScrollFadeIn>

      {/* Services Section */}
      <ServicesSection />

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
