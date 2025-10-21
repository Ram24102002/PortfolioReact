import React, { useState } from "react";
import Modal from "../utils/Modal";

import Asan from "../assets/LOGOS/ASAN.png";
import MegaMind from "../assets/LOGOS/MegaMind.png";
import VOID from "../assets/LOGOS/VOID.png";
import Amazon from "../assets/LOGOS/Amazon.png";
import ChatWidget from "../components/common/ChatWidget";

export default function sample() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const companies = [
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
      details: "Contributed to backend microservices using Node.js and MongoDB."
    },
  ];

  const openModal = (company) => {
    setSelectedCompany(company);
    setIsOpen(true);
  };

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {companies.map((company) => (
        <img
          key={company.id}
          src={company.logo}
          alt={company.name}
          className="w-32 h-32 object-contain cursor-pointer hover:scale-110 transition-transform"
          onClick={() => openModal(company)}
        />
      ))}

      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={selectedCompany?.name}
      >
        <p>{selectedCompany?.details}</p>
      </Modal>

      <ChatWidget />
    </div>
  );
}
