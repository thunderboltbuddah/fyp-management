import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const StudentProfileModal = ({ show, handleClose, student, handleSave }) => {
  const [editedStudent, setEditedStudent] = useState({ ...student });

  const handleInputChange = (e, field) => {
    setEditedStudent(prevState => ({
      ...prevState,
      [field]: e.target.value,
    }));
  };
  
  const handleSaveChanges = () => {
    handleSave(editedStudent);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Student Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="rollNo">
            <Form.Label>Roll No</Form.Label>
            <Form.Control
              type="text"
              value={editedStudent.rollNo}
              onChange={(e) => handleInputChange(e, 'rollNo')}
            />
          </Form.Group>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={editedStudent.name}
              onChange={(e) => handleInputChange(e, 'name')}
            />
          </Form.Group>
          <Form.Group controlId="fypId">
            <Form.Label>FYP ID</Form.Label>
            <Form.Control
              type="text"
              value={editedStudent.fypId}
              onChange={(e) => handleInputChange(e, 'fypId')}
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

export default StudentProfileModal;
