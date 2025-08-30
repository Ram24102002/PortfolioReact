import React from "react";
import Asan from "../../assets/LOGOS/ASAN.png";
import MegaMind from "../../assets/LOGOS/MegaMind.png";
import VOID from "../../assets/LOGOS/VOID.png";
import Amazon from "../../assets/LOGOS/Amazon.png";

const PeopleIWorkedWith = () => {
  const brands = [
    { name: "Adobe", logo: Asan },
    { name: "Chain Link", logo: MegaMind },
    { name: "Vinyl Records", logo: VOID },
    { name: "Agency", logo: Amazon },
  ];

  return (
    <section className="bg-black py-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
            TRUSTED BRANDS I'VE
          </h2>
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
            PARTNERED WITH
          </h2>
          <p className="text-gray-400 text-lg">
            I've worked with amazing brands like...
          </p>
        </div>

        {/* Infinite Scroll Row */}
        <div className="relative w-full overflow-hidden">
  <div className="flex animate-marquee">
    {[...brands, ...brands].map((brand, index) => (
      <div
        key={index}
        className="flex items-center justify-center px-8 min-w-[180px]"
      >
        <img
          src={brand.logo}
          alt={brand.name}
          className="h-20 object-contain"
        />
      </div>
    ))}
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
