import React, { useState } from 'react';
import { Card, Button, Modal, Form } from 'react-bootstrap';

const PendingSubmissionTab = ({ pendingSubmissions, handleUpload, showModal, handleClose, formData, setFormData }) => {
  const [showUploadModal, setShowUploadModal] = useState(false);

  const handleUploadClick = () => {
    setShowUploadModal(true);
  };

  const handleUploadClose = () => {
    setShowUploadModal(false);
  };

  const handleFileUpload = () => {
    // Implement file upload logic here
    console.log('Uploading file:', formData.file);
    handleUpload();
    setShowUploadModal(false);
  };

  return (
    <div>
      {pendingSubmissions.map((submission, index) => (
        <Card key={index} className="mb-3">
          <Card.Body>
            <Card.Title>{submission.title}</Card.Title>
            <Card.Text><strong>From:</strong> {submission.supervisor}</Card.Text>
            <Card.Text><strong>Due Date:</strong> {submission.dueDate}</Card.Text>
            <Button variant="primary" onClick={handleUploadClick}>Upload</Button>
          </Card.Body>
        </Card>
      ))}

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Submit Milestone</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formFile">
              <Form.Label>Choose File</Form.Label>
              <Form.Control type="file" onChange={(e) => setFormData({ ...formData, file: e.target.files[0] })} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleUploadClick}>Turn In</Button>
        </Modal.Footer>
      </Modal>

      {/* Nested Modal for File Upload */}
      <Modal show={showUploadModal} onHide={handleUploadClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload File</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formFileUpload">
              <Form.Label>Choose File</Form.Label>
              <Form.Control type="file" onChange={(e) => setFormData({ ...formData, file: e.target.files[0] })} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleUploadClose}>Close</Button>
          <Button variant="success"  onClick={handleFileUpload}>Turn in</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PendingSubmissionTab;
