import { Toast } from "react-bootstrap";

function ToastComponent({ show, onClose, message, variant = "success" }) {
  return (
    <Toast
      show={show}
      onClose={onClose}
      delay={3000}
      autohide
      bg={variant}
      className="position-fixed top-0 end-0 m-3 text-white"
    >
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
}

export default ToastComponent;
