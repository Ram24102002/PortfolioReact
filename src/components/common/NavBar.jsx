import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("");

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Blog", href: "#blog" },
  ];

  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istOffset = 5.5 * 60 * 60 * 1000; // IST = UTC+5:30
      const istTime = new Date(now.getTime() + istOffset);

      const hours = String(istTime.getUTCHours()).padStart(2, "0");
      const minutes = String(istTime.getUTCMinutes()).padStart(2, "0");
      const seconds = String(istTime.getUTCSeconds()).padStart(2, "0");

      setTime(`${hours}:${minutes}:${seconds} IST`);
    };

    updateTime(); // Initial call
    const interval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <nav className="bg-black text-white ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between h-30 md:h-16">
          {/* Location */}
          <div className="flex items-center gap-2 p-1">
            <div className="w-3 h-3 animate-pulse bg-green-500 rounded-full text-white text-sm md:text-lg font-medium"></div>
            <span className="">Chennai,India</span>
            <p>{time}</p>
          </div>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-6 p-1 pt-8">
            {/* Navigation Links */}
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium ${
                    activeItem === item.name ? "text-white" : ""
                  }`}
                  onClick={() => setActiveItem(item.name)}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Contact Button */}
            <button className="bg-zinc-800 hover:bg-lime-400 text-zinc-400 hover:text-black px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 text-align-center">
              Contact me
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
