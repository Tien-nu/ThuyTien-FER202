import React, { useReducer, useState } from "react";
import { Form, Button, Modal, Toast, Container, Alert } from "react-bootstrap";
import ConfirmModal from "./ConfirmModal";
import ToastComponent from "./ToastComponent";
//  Trạng thái ban đầu
const initialState = {
  user: { username: "", email: "", password: "", confirm: "" },
  errors: {},
  showToast: false,
  showModal: false,
};

//  Reducer chính
function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_FIELD": {
      const { name, value } = action;
      const newUser = { ...state.user, [name]: value };
      const newErrors = { ...state.errors, [name]: validate(name, value, newUser) };
      return { ...state, user: newUser, errors: newErrors };
    }
    case "RESET":
      return initialState;
    case "SHOW_FEEDBACK":
      return { ...state, showToast: true, showModal: true };
    case "HIDE_FEEDBACK":
      return { ...state, showToast: false, showModal: false };
    default:
      return state;
  }
}

//  Hàm validate riêng
function validate(name, value, user) {
  if (name === "username" && !/^[A-Za-z0-9._]{3,}$/.test(value.trim()))
    return "Username ≥ 3 ký tự, chỉ gồm chữ, số, . hoặc _";
  if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
    return "Email không hợp lệ";
  if (
    name === "password" &&
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&_])[A-Za-z\d@$!%*?#&_]{6,}$/.test(value)
  )
    return "Password ≥ 6 ký tự, có chữ hoa, thường, số, ký tự đặc biệt";
  if (name === "confirm" && value !== user.password)
    return "Mật khẩu xác nhận không khớp";
  return "";
}

function RegisterForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { user, errors, showToast, showModal } = state;

  const [toastMsg, setToastMsg] = useState("");
  const [toastVariant, setToastVariant] = useState("success");

  const isFormValid =
    Object.values(user).every((v) => v.trim() !== "") &&
    Object.values(errors).every((e) => !e);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      dispatch({ type: "SHOW_FEEDBACK" });
    } else {
      setToastMsg("Please fix the errors in the form.");
      setToastVariant("danger");
      dispatch({ type: "SHOW_FEEDBACK" });
    }
  };

  return (
    <Container
      className="mt-5 p-4 border rounded shadow-sm"
      style={{ maxWidth: "420px", backgroundColor: "#f8f9fa" }}
    >
      <h3 className="text-center text-primary mb-4">Register Account</h3>

      <Form onSubmit={handleSubmit}>
        {["username", "email", "password", "confirm"].map((field) => (
          <Form.Group className="mb-3" key={field}>
            <Form.Label className="text-capitalize">{field}</Form.Label>
            <Form.Control
             type={field === "password" || field === "confirm" ? "password" : "text"}

              name={field}
              value={user[field]}
              placeholder={`Enter ${field}`}
              isInvalid={!!errors[field]}
              onChange={(e) =>
                dispatch({ type: "CHANGE_FIELD", name: field, value: e.target.value })
              }
            />
            <Form.Control.Feedback type="invalid">{errors[field]}</Form.Control.Feedback>
          </Form.Group>
        ))}

        <div className="text-center">
          
          <Button type="submit" disabled={!isFormValid} className="me-2">
            Submit
          </Button>
          <Button variant="outline-secondary" type="button" onClick={() => dispatch({ type: "RESET" })}>
            Cancel
          </Button>
        </div>
      </Form>

      {/* Toast */}
      {/* <Toast
        show={showToast}
        onClose={() => dispatch({ type: "HIDE_FEEDBACK" })}
        delay={10000}
        autohide
        bg="success"
        className="position-fixed top-0 end-0 m-3 text-white"
      >
        <Toast.Body>Submitted successfully!</Toast.Body>
      </Toast> */}

      <ToastComponent
        show={showToast}
        onClose={() => dispatch({ type: "HIDE_FEEDBACK" })}
        message="Submitted successfully!"
        variant="success"
        position="top-end"
        delay={10000}
      />
      {/* Modal */}
      {/* <Modal show={showModal} onHide={() => dispatch({ type: "HIDE_FEEDBACK" })} centered>
        <Modal.Header closeButton>
          <Modal.Title>Thông tin đã đăng ký</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert variant="info">
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Password:</strong> {user.password}</p>
            <p> Chúc mừng {user.email}</p>
          </Alert>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => dispatch({ type: "HIDE_FEEDBACK" })}>Đóng</Button>
        </Modal.Footer>
      </Modal> */}
      <ConfirmModal
        show={showModal}
        title="Registration Successful"
        body={
          <Alert variant="info">
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Password:</strong> {user.password}
            </p>
            <p>Chúc mừng {user.email} đã đăng ký thành công!</p>
            
          </Alert>
        }
        cancelText="Cancel"
        onClose={() => dispatch({ type: "HIDE_FEEDBACK" })}
      />
    </Container>
  );
}

export default RegisterForm;
