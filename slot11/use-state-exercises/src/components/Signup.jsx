import React, { useState } from "react";
import { Form, Button, Modal, Toast, Container, Alert } from "react-bootstrap";

function RegisterForm() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // ✅ Hàm validate từng field
  const validate = (name, value) => {
    let error = "";

    if (name === "username") {
      const usernameRegex = /^[A-Za-z0-9._]{3,}$/;
      if (!usernameRegex.test(value.trim())) {
        error =
          "Username phải ≥ 3 ký tự, chỉ gồm chữ, số, dấu . hoặc _, không khoảng trắng đầu/cuối";
      }
    }

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        error = "Email không hợp lệ";
      }
    }

    if (name === "password") {
      const passRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&_])[A-Za-z\d@$!%*?#&_]{6,}$/;
      if (!passRegex.test(value)) {
        error =
          "Password ≥ 6 ký tự, có chữ hoa, chữ thường, số và ký tự đặc biệt";
      }
    }

    if (name === "confirm") {
      if (value !== user.password) {
        error = "Mật khẩu xác nhận không khớp";
      }
    }

    return error;
  };

  // ✅ Khi người dùng nhập
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));

    const error = validate(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // ✅ Kiểm tra toàn bộ form
  const isFormValid =
    Object.values(user).every((val) => val.trim() !== "") &&
    Object.values(errors).every((err) => !err);

  // ✅ Reset form
  const handleCancel = () => {
    setUser({ username: "", email: "", password: "", confirm: "" });
    setErrors({});
    setShowToast(false);
    setShowModal(false);
  };

  // ✅ Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setShowToast(true);
      setShowModal(true);
      setTimeout(() => setShowToast(false), 4000);
    }
  };

  return (
    <Container
      className="mt-5 p-4 border rounded shadow-sm"
      style={{ maxWidth: "420px", backgroundColor: "#f8f9fa" }}
    >
      <h3 className="text-center text-primary mb-4">Register Account</h3>

      <Form onSubmit={handleSubmit} noValidate>
        {/* Username */}
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            placeholder="Enter username"
            isInvalid={!!errors.username}
          />
          <Form.Control.Feedback type="invalid">
            {errors.username}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Email */}
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter email"
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Password */}
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Enter password"
            isInvalid={!!errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Confirm Password */}
        <Form.Group className="mb-3" controlId="formConfirm">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirm"
            value={user.confirm}
            onChange={handleChange}
            placeholder="Confirm password"
            isInvalid={!!errors.confirm}
          />
          <Form.Control.Feedback type="invalid">
            {errors.confirm}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Buttons */}
        <div className="text-center">
          <Button
            type="submit"
            variant={isFormValid ? "primary" : "secondary"}
            disabled={!isFormValid}
            className="me-2"
          >
            Submit
          </Button>
          <Button variant="outline-secondary" type="button" onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </Form>

      {/* ✅ Toast (hiển thị góc dưới) */}
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        delay={5000}
        autohide
        bg="success"
        className="position-fixed top-0 end-0 m-3 text-white"
      >
        <Toast.Body>Submitted successfully!</Toast.Body>
      </Toast>

      {/* ✅ Modal hiển thị thông tin */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Thông tin đã đăng ký</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
          </Alert>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default RegisterForm;
