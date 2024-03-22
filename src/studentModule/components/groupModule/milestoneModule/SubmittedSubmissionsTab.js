import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';

const SubmittedSubmissionsTab = ({ submittedSubmissions, handleUnsubmit }) => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleUnsubmitClick = (index) => {
    setSelectedIndex(index);
    setShowConfirmationModal(true);
  };

  const handleConfirmUnsubmit = () => {
    handleUnsubmit(selectedIndex); // Call the handleUnsubmit function passed from the parent component
    setShowConfirmationModal(false);
    setSelectedIndex(null);
  };

  const handleCloseModal = () => {
    setShowConfirmationModal(false);
    setSelectedIndex(null);
  };

  return (
    <div>
      {submittedSubmissions.map((submission, index) => (
        <Card key={index} className="mb-3">
          <Card.Body>
            <Card.Title>{submission.title}</Card.Title>
            <Card.Text><strong>File Name:</strong> {submission.fileName}</Card.Text>
            <Card.Text><strong>Submission Time:</strong> {submission.submissionTime}</Card.Text>
            <Button variant="danger" onClick={() => handleUnsubmitClick(index)}>Unsubmit</Button>
          </Card.Body>
        </Card>
      ))}

      {/* Confirmation Modal */}
      <Modal show={showConfirmationModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Unsubmit</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to unsubmit this submission?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Cancel</Button>
          <Button variant="danger" onClick={handleConfirmUnsubmit}>Unsubmit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SubmittedSubmissionsTab;
