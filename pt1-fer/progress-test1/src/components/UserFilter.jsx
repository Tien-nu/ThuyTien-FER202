import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

function UserFilter({ onFilter }) {
  const [criteria, setCriteria] = useState({
    search: '',
    role: 'all',
    status: 'all',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCriteria({ ...criteria, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(criteria);
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-3">
      <Row>
        <Col md={4}>
          <Form.Control
            type="text"
            name="search"
            placeholder="Search by username or full name"
            value={criteria.search}
            onChange={handleChange}
          />
        </Col>
        <Col md={3}>
          <Form.Select name="role" value={criteria.role} onChange={handleChange}>
            <option value="all">All Roles</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </Form.Select>
        </Col>
        <Col md={3}>
          <Form.Select name="status" value={criteria.status} onChange={handleChange}>
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="banned">Banned</option>
            <option value="locked">Locked</option>
            <option value="blocked">Blocked</option>
          </Form.Select>
        </Col>
        <Col md={2}>
          <Button type="submit" variant="primary" style={{ width: '100%' }}>
            Filter
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default UserFilter;
