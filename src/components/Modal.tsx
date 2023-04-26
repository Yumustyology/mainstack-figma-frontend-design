import React, { useState, useEffect } from "react";
import "../styles/modal.css";

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children, onClose }) => {


  useEffect(() => {
    console.log("isOpen");
  }, [isOpen]);

  return isOpen ? (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={() => onClose()}>
          X
        </button>
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
