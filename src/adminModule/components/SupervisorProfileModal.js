import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const SupervisorProfileModal = ({ show, handleClose, supervisor, handleSave }) => {
  const [editedSupervisor, setEditedSupervisor] = useState({ ...supervisor });

  const handleInputChange = (e, field) => {
    setEditedSupervisor(prevState => ({
      ...prevState,
      [field]: e.target.value,
    }));
  };
  
  const handleSaveChanges = () => {
    handleSave(editedSupervisor);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Supervisor Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={editedSupervisor.email}
              onChange={(e) => handleInputChange(e, 'email')}
            />
          </Form.Group>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={editedSupervisor.name}
              onChange={(e) => handleInputChange(e, 'name')}
            />
          </Form.Group>
          <Form.Group controlId="contactNo">
            <Form.Label>Contact No</Form.Label>
            <Form.Control
              type="text"
              value={editedSupervisor.contactNo}
              onChange={(e) => handleInputChange(e, 'contactNo')}
            />
          </Form.Group>
          <Form.Group controlId="domain">
            <Form.Label>Domain</Form.Label>
            <Form.Control
              type="text"
              value={editedSupervisor.domain}
              onChange={(e) => handleInputChange(e, 'domain')}
            />
          </Form.Group>
          {/* Add Form.Group elements for other fields */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SupervisorProfileModal;
