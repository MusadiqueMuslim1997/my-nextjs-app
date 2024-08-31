// ./src/components/Modal.js

import React from 'react';

const Modal = ({ show, onClose, content }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg z-10">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        {content}
      </div>
    </div>
  );
};

export default Modal;
