import React, { useState } from "react";
import { Table, Button, Spinner, Modal, Form } from "react-bootstrap";
import { usePayments } from "../contexts/PaymentContext";

const PaymentTable = () => {
  const { payments, deletePayment, updatePayment, addPayment, loading } = usePayments();
  const [showView, setShowView] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [selected, setSelected] = useState(null);
  const [showAdd, setShowAdd] = useState(false);

  if (loading) return <Spinner animation="border" />;

  const handleView = (payment) => {
    setSelected(payment);
    setShowView(true);
  };

  const handleEdit = (payment) => {
    setSelected(payment);
    setShowEdit(true);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    updatePayment(selected.id, selected);
    setShowEdit(false);
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    addPayment(selected);
    setShowAdd(false);
  };

  // ✅ Tính tổng amount
  const totalAmount = payments.reduce((sum, p) => sum + (p.amount || 0), 0);

  return (
    <>
      <div className="text-end" style={{ marginRight: "10px" }}>
        <Button
          variant="success"
          onClick={() => {
            setSelected({ semester: "", courseName: "", amount: 0 });
            setShowAdd(true);
          }}
        >
          + Add Payment
        </Button>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Semester</th>
            <th>Course</th>
            <th>Amount (VND)</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {payments.length === 0 ? (
            <tr>
              <td colSpan={6} className="text-center">
                No payments found.
              </td>
            </tr>
          ) : (
            payments.map((p, index) => (
              <tr key={p.id}>
                <td>{index + 1}</td>
                <td>{p.semester}</td>
                <td>{p.courseName}</td>
                <td>{p.amount ? p.amount.toLocaleString() : "0"}</td>
                <td>{p.date || "N/A"}</td>
                <td>
                  <Button size="sm" variant="info" className="me-2" onClick={() => handleView(p)}>
                    View
                  </Button>
                  <Button size="sm" variant="warning" className="me-2" onClick={() => handleEdit(p)}>
                    Edit
                  </Button>
                  <Button size="sm" variant="danger" className="me-2" onClick={() => deletePayment(p.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
        {/* ✅ Footer hiển thị tổng tiền */}
        {payments.length > 0 && (
          <tfoot>
            <tr>
              <td colSpan={3} className="text-end fw-bold">
                Total:
              </td>
              <td className="fw-bold text-success">
                {totalAmount.toLocaleString()} VND
              </td>
              <td colSpan={2}></td>
            </tr>
          </tfoot>
        )}
      </Table>

      {/* View Modal */}
      <Modal show={showView} onHide={() => setShowView(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Payment Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selected && (
            <>
              <p>
                <strong>Semester:</strong> {selected.semester}
              </p>
              <p>
                <strong>Course:</strong> {selected.courseName}
              </p>
              <p>
                <strong>Amount:</strong>{" "}
                {selected?.amount ? selected.amount.toLocaleString() : 0} VND
              </p>
              <p>
                <strong>Date:</strong> {selected.date || "N/A"}
              </p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowView(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Modal */}
      <Modal show={showEdit} onHide={() => setShowEdit(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Payment</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleEditSubmit}>
          <Modal.Body>
            {selected && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>Semester</Form.Label>
                  <Form.Control
                    value={selected.semester}
                    onChange={(e) =>
                      setSelected({ ...selected, semester: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Course</Form.Label>
                  <Form.Control
                    value={selected.courseName}
                    onChange={(e) =>
                      setSelected({ ...selected, courseName: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Amount (VND)</Form.Label>
                  <Form.Control
                    type="number"
                    value={selected.amount}
                    onChange={(e) =>
                      setSelected({
                        ...selected,
                        amount: parseFloat(e.target.value),
                      })
                    }
                  />
                </Form.Group>
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowEdit(false)}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      {/* Add Modal */}
      <Modal show={showAdd} onHide={() => setShowAdd(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Payment</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleAddSubmit}>
          <Modal.Body>
            {selected && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>Semester</Form.Label>
                  <Form.Control
                    value={selected.semester}
                    onChange={(e) =>
                      setSelected({ ...selected, semester: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Course</Form.Label>
                  <Form.Control
                    value={selected.courseName}
                    onChange={(e) =>
                      setSelected({ ...selected, courseName: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Amount (VND)</Form.Label>
                  <Form.Control
                    type="number"
                    value={selected.amount}
                    onChange={(e) =>
                      setSelected({
                        ...selected,
                        amount: parseFloat(e.target.value),
                      })
                    }
                  />
                </Form.Group>
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowAdd(false)}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Add Payment
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default PaymentTable;
