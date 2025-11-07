import React, { useState } from 'react';
import { Table, Button, Modal, Image } from 'react-bootstrap';

function UserTable({ users, onBan, currentUser }) {
  // Trạng thái để lưu user đang được xem và bật/tắt modal
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleView = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleClose = () => {
    setSelectedUser(null);
    setShowModal(false);
  };

  return (
    <div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Full Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <Image src={u.avatar} className="mb-3" style={{ width: '100px', height: '80px', objectFit: 'cover' }}  />
              <td>{u.username}</td>
              <td>{u.fullName}</td>
              <td>{u.role}</td>
              <td>{u.status}</td>
              <td>
                <Button
                  variant="info"
                  size="sm"
                  className="me-2"
                  onClick={() => handleView(u)}
                >
                  View Details
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  disabled={u.status === 'banned' || u.role === 'admin' || u.id === currentUser.id}
                  onClick={() => onBan(u.id)}
                >
                  Ban Account
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal xem chi tiết user */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedUser ? (
            <div>
              <p><strong>ID:</strong> {selectedUser.id}</p>
              <Image src={selectedUser.avatar}  fluid rounded className="mb-3" style={{ width: '350px', height: '250px', objectFit: 'cover' }}  />
              <p><strong>Username:</strong> {selectedUser.username}</p>
              <p><strong>Full Name:</strong> {selectedUser.fullName}</p>
              <p><strong>Role:</strong> {selectedUser.role}</p>
              <p><strong>Status:</strong> {selectedUser.status}</p>
            </div>
          ) : (
            <p>No user selected.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UserTable;
