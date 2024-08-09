import React from 'react';
import { Modal } from 'react-bootstrap';

const PDFViewerModal = ({ isOpen, onClose, pdfUrl }) => {
  return (
    <Modal show={isOpen} onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>PDF Viewer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe
          src={`${pdfUrl}#toolbar=0`}
          width="100%"
          height="500px"
          style={{ border: 'none' }}
        />
      </Modal.Body>
    </Modal>
  );
};

export default PDFViewerModal;