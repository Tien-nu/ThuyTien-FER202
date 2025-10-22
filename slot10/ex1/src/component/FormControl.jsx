import React from "react";
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import Alert from 'react-bootstrap/Alert';
export default function FormControl () {
  return (
    
    <div className="container mt-5 p-4 border rounded-3 shadow-sm bg-white" style={{ maxWidth: "600px" }}>
        <>
            {[
               
                'warning'
                
            ].map((variant) => (
                <Alert key={variant} variant={variant}>
                This is a {variant} alert—check it out!
                </Alert>
            ))}
        </>
      <h3 className="text-start mb-4">Form đặt vé máy bay</h3>

      <Form>
        {/* Họ tên */}
        <Form.Group className="mb-3 text-start">
          <Form.Label>Họ tên</Form.Label>
          <InputGroup>
            <InputGroup.Text><FaUser /></InputGroup.Text>
            <Form.Control type="text" placeholder="Họ tên" />
            <InputGroup.Text>vnd</InputGroup.Text>
          </InputGroup>
          <Form.Text className="text-muted">Phải nhập 5 ký tự, in hoa....</Form.Text>
        </Form.Group>

        {/* Địa chỉ */}
        <Form.Group className="mb-3 text-start">
          <Form.Label>Địa chỉ</Form.Label>
          <Form.Control type="text" placeholder="Nhập địa chỉ" />
          <Form.Text className="text-muted">Phải nhập 5 ký tự, in hoa....</Form.Text>
        </Form.Group>

        {/* Đi từ - Đến */}
        <Row>
          <Col>
            <Form.Group className="mb-3 text-start">
              <Form.Label>Đi từ</Form.Label>
              <Form.Select>
                <option>Hà Nội</option>
                <option>TP. Hồ Chí Minh</option>
                <option>Đà Nẵng</option>
                <option>Huế</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3 text-start">
              <Form.Label>Đến</Form.Label>
              <Form.Select>
                <option>Hà Nội</option>
                <option>TP. Hồ Chí Minh</option>
                <option>Đà Nẵng</option>
                <option>Huế</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        {/* Chọn chiều đi / khứ hồi */}
        <Form.Group className="mb-3 text-start">
          <Form.Label>Chọn chiều đi (Khứ hồi)</Form.Label>
          <div>
            <Form.Check inline type="checkbox" label="Đi" /><br />
            <Form.Check inline type="checkbox" label="Về" />
          </div>
        </Form.Group>

        {/* Nút đặt vé */}
        <div className="text-center">
          <Button variant="primary" size="lg" className="w-100">
            Đặt vé
          </Button>
        </div>
      </Form>
    </div>
  );
}
