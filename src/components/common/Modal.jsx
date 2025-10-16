
import React from "react";

export default function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/50 backdrop-blur-sm">
      <div className="bg-gray-900 text-white rounded-lg shadow-lg p-6 w-[90%] max-w-md relative">
        
        {/* Close Button (top-right) */}
        <button
          className="absolute top-2 right-2 text-white"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Modal Content */}
        <div>{children}</div>
      </div>
    </div>
  );
}
