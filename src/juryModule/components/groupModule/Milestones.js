// Milestone.js
import React, { useState } from 'react';
import { Button, Modal, Form, Card,Tabs,Tab } from 'react-bootstrap';

const Milestones = () => {
  const [showModal, setShowModal] = useState(false);
  const [milestones, setMilestones] = useState([
    {
      name: 'John Doe',
      title: 'Complete Project A',
      description: 'Finish all tasks related to Project A.',
      dueDate: '2023-12-31',
      points: '10',
      fileSubmission: '', // File submission link or file data
    },
    // Add more dummy data if needed
  ]);
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    description: '',
    dueDate: '',
    points: '',
    fileSubmission: null, // Changed to file input
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleShow = () => setShowModal(true);

  const handleClose = () => {
    setShowModal(false);
    setFormData({
      name: '',
      title: '',
      description: '',
      dueDate: '',
      points: '',
      fileSubmission: null,
    });
    setEditIndex(null);
  };

  const handleSave = () => {
    if (
      formData.name &&
      formData.title &&
      formData.description &&
      formData.dueDate &&
      formData.points
    ) {
      if (editIndex !== null) {
        // If editing existing milestone
        const updatedMilestones = [...milestones];
        updatedMilestones[editIndex] = formData;
        setMilestones(updatedMilestones);
      } else {
        // If creating a new milestone
        setMilestones([...milestones, formData]);
      }
      handleClose();
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleEdit = (index) => {
    const milestoneToEdit = milestones[index];
    setFormData({ ...milestoneToEdit });
    setEditIndex(index);
    handleShow();
  };

  const [submissions, setSubmissions] = useState([
    {
      studentName: 'Alice',
      submissionTime: '2023-01-01T12:34:56', // Use ISO format for better consistency
      fileName: 'alice_submission.pdf',
    },
    // Add more dummy data if needed
  ]);
  const SubmissionView = ({ submissions }) => {
   
  }
  const handleDownload = (fileName) => {
    // Implement file download logic based on your requirements
    // You may use window.open or fetch API to download the file
    console.log(`Downloading file: ${fileName}`);
  };
  return (
    <div>
    
    <Tabs defaultActiveKey="milestones" id="uncontrolled-tab-example">
        <Tab eventKey="milestones" title="Milestones">
         
      <Button className="mt-4" onClick={handleShow}>Create Milestone</Button>

<Modal show={showModal} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Create Milestone</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </Form.Group>

      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
      </Form.Group>

      <Form.Group controlId="formDueDate">
        <Form.Label>Due Date</Form.Label>
        <Form.Control
          type="date"
          value={formData.dueDate}
          onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
        />
      </Form.Group>

      <Form.Group controlId="formPoints">
        <Form.Label>Points</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter points"
          value={formData.points}
          onChange={(e) => setFormData({ ...formData, points: e.target.value })}
        />
      </Form.Group>

      <Form.Group controlId="formFileSubmission">
        <Form.Label>File Submission</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter file submission link"
          value={formData.fileSubmission}
          onChange={(e) =>
            setFormData({ ...formData, fileSubmission: e.target.value })
          }
        />
      </Form.Group>
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


<div className="card-container mt-4">
  {milestones.map((milestone, index) => (
    <Card key={index} className="mb-3">
      <Card.Body>
        <Card.Title>{milestone.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{milestone.name}</Card.Subtitle>
        <Card.Text>{milestone.description}</Card.Text>
        <Card.Text>
          <strong>Due Date:</strong> {milestone.dueDate}
        </Card.Text>
        <Card.Text>
          <strong>Points:</strong> {milestone.points}
        </Card.Text>
        <Card.Text>
          <strong>File Submission:</strong> {milestone.fileSubmission}
        </Card.Text>
        <div>
        <Button variant="warning" className="btn btn-primary m-2" onClick={() => handleEdit(index)}>
          Edit
        </Button>
        <Button variant="danger">Delete</Button>
   
        </div>
        </Card.Body>
    </Card>
  ))}
</div>
        </Tab>
        <Tab eventKey="submissions" title="Submissions">
          
        <div className="card-container mt-4">
        <h3>
            Submissions
          </h3>
      {submissions.map((submission, index) => (
        <Card key={index} className="mb-3">
          <Card.Body>
            <Card.Title>{submission.studentName}</Card.Title>
            <Card.Text>
              <strong>Submission Time:</strong> {submission.submissionTime}
            </Card.Text>
            <Card.Text>
              <strong>File Name:</strong> {submission.fileName}
            </Card.Text>
            <Button variant="primary" onClick={() => handleDownload(submission.fileName)}>
              Download
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
        </Tab>
      </Tabs>

    </div>
  );
};

export default Milestones;
