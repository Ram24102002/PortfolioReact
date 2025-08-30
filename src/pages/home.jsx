import React from "react";
import Hero from "../components/Home/Hero";
import Projects from "../components/Home/Projects";
import PeopleIWorkedWith from "../components/Home/PeopleIWorkedWith";

function home() {
  return (
    <div>
      <Hero />
      <Projects />
      <PeopleIWorkedWith />
    </div>
  );
}

export default home;
