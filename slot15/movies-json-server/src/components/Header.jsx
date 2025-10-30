import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useAuthState, useAuthDispatch } from "../contexts/AuthContext";

const Header = () => {
  const { user } = useAuthState();
  const { logout } = useAuthDispatch();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">🎞️ Movie Admin</Navbar.Brand>
        <Nav className="ms-auto align-items-center">
          {user ? (
            <>
              <span className="text-light me-3">Xin chào, {user.name}</span>
              <Button variant="outline-light" size="sm" onClick={logout}>
                Đăng xuất
              </Button>
            </>
          ) : null}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
