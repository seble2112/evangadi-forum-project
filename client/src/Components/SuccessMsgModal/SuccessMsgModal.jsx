//Beth
import { useEffect } from "react";
import classes from "./SuccessMsgModal.module.css";

const SuccessModal = ({ message, onClose }) => {
  // We want this to Auto-close after 2 seconds
  useEffect(() => {
    const timer = setTimeout(onClose, 2000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={classes.msgContainer}>
      <div className={classes.modal}>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default SuccessModal;
