import React, { useState } from "react";
import { Container, Form, Card, Row, Col, InputGroup } from "react-bootstrap";

// ✅ Dữ liệu account mẫu
const accounts = [
  {
    id: 1,
    username: "Sawako",
    password: "123456",
    avatar:
      "https://i.pinimg.com/736x/c4/fc/cb/c4fccb64ad7f9b25c59353b655e11ed4.jpg",
  },
  {
    id: 2,
    username: "Ayane",
    password: "abcxyz",
    avatar:
      "https://i.pinimg.com/1200x/e9/30/2a/e9302a35793ef753a3055edb72588ab5.jpg",
  },
  {
    id: 3,
    username: "Kurumizawa",
    password: "password",
    avatar:
      "https://i.pinimg.com/736x/18/88/17/188817f39f5c1a46a6d71203ed9ec167.jpg",
  },
  {
    id: 4,
    username: "Rami",
    password: "pass",
    avatar:
      "https://i.pinimg.com/736x/ce/0f/30/ce0f30f39852a4e304b24eca1760e599.jpg",
  },
];

function SearchAccount() {
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ Lọc account theo username (realtime)
  const filteredAccounts = accounts.filter((acc) =>
    acc.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container
      className="mt-5 p-4 rounded shadow-sm"
      style={{ maxWidth: "520px", backgroundColor: "#f8f9fa" }}
    >
      <h3 className="text-center text-primary mb-4">
        🔍 Tìm kiếm Account theo Username
      </h3>

      {/* Ô tìm kiếm */}
      <Form>
        <InputGroup className="mb-4">
          <Form.Control
            type="text"
            placeholder="Nhập username..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputGroup>
      </Form>

      {/* Danh sách account */}
      <Row>
        {filteredAccounts.length > 0 ? (
          filteredAccounts.map((acc) => (
            <Col xs={12} key={acc.id} className="mb-3">
              <Card
                className="border-0 shadow-sm"
                style={{
                  backgroundColor: "#e3f2fd",
                  borderRadius: "12px",
                }}
              >
                <Card.Body className="d-flex align-items-center">
                  <img
                    src={acc.avatar}
                    alt={acc.username}
                    className="me-3"
                    style={{
                      width: 70,
                      height: 70,
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "2px solid #90caf9",
                    }}
                  />
                  <div>
                    <Card.Title className="text-primary mb-1">
                      {acc.username}
                    </Card.Title>
                    <Card.Text className="mb-0 text-secondary">
                      ID: <b>{acc.id}</b>
                    </Card.Text>
                    <Card.Text className="mb-0 text-secondary">
                      Password: <b>{acc.password}</b>
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center text-muted mt-3">
            Không tìm thấy kết quả nào
          </p>
        )}
      </Row>
    </Container>
  );
}

export default SearchAccount;
