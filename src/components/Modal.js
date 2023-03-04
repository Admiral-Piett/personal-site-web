import ReactDOM from "react-dom";
import { useEffect } from "react";

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div className="modal-background" onClick={onClose}></div>
      {children}
    </div>,
    document.getElementById("email-container")
  );
};

export default Modal;
