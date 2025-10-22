import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ConfirmModal({ 
  show,          // boolean: có hiển thị modal không
  title,         // tiêu đề modal
  body,          // nội dung hiển thị trong body
  confirmText,   // nút xác nhận
  cancelText,    // nút hủy
  onConfirm,     // hàm khi nhấn xác nhận
  onClose        // hàm khi đóng modal
}) {
  return (
    <Modal show={show} onHide={onClose} centered>
      {title && (
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
      )}

      <Modal.Body>{body}</Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          {cancelText}
        </Button>
        {onConfirm && (
          <Button variant="primary" onClick={onConfirm}>
            {confirmText}
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmModal;
