import React from "react";
import Hero from "../components/Home/Hero";
import Projects from "../components/Home/Projects";
import PeopleIWorkedWith from "../components/Home/PeopleIWorkedWith";
import QuickTalk from "../components/Home/QuickTalk";
import ServicesSection from "../components/Home/ServicesSection";

function home() {
  return (
    <div className="bg-black">
      <Hero />
      <Projects />
      <QuickTalk />
      <ServicesSection />
      <PeopleIWorkedWith />
    </div>
  );
}

export default home;
