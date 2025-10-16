import React, { useEffect,useRef , useState } from "react";

export default function Modal({ isOpen, onClose, name, children }) {
  const [show, setShow] = useState(false);
  const modalRef = useRef();

  // Control animation
  useEffect(() => {
    if (isOpen) {
      setShow(true);
    } else {
      const timer = setTimeout(() => setShow(false), 200); // allow fade out
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!show) return null;

  // Handle click outside
  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity duration-200 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleOverlayClick}
    >
      <div
        className={`bg-white text-gray-900 rounded-lg shadow-lg p-6 w-[90%]  relative transform transition-transform duration-200 ${
          isOpen ? "scale-100" : "scale-90"
        }`}
        ref={modalRef}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        {/* Title */}
        {name && <h2 className="text-xl font-semibold mb-4">{name}</h2>}

        {/* Content */}
        <div>{children}</div>
      </div>
    </div>
  );
}
