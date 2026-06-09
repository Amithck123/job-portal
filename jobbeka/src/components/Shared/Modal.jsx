import React from "react";

const Modal = ({ isOpen, onClose, children }) => {

  if (!isOpen) return null;

  return (

    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

      <div className="bg-zinc-900 p-6 rounded-2xl w-500px relative">

        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-white text-xl"
        >
          ✕
        </button>

        {children}

      </div>

    </div>

  );
};

export default Modal;