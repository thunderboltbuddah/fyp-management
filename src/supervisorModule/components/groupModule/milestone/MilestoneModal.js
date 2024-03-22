import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const MilestoneModal = ({ showModal, handleClose, formData, setFormData, handleSave }) => {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create Milestone</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* Form fields */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MilestoneModal;
