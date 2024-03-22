import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal, Form } from 'react-bootstrap';
import styles from './student.css'
const StudentView = () => {
  const [showModal, setShowModal] = useState(false);
  const [repoName, setRepoName] = useState('');
  const [userName, setUserName] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleConnectToRepo = () => {
    setIsConnected(false); // Reset isConnected state when connecting to a new repo
    handleShowModal();
  };

  const handleConnect = () => {
    // Your logic to connect to GitHub repo
    // For example, you can make an API call to GitHub using axios

    // Simulating API call with a timeout
    setTimeout(() => {
      setIsConnected(true);
      handleCloseModal();
    }, 2000);
  };

  return (
    <div >
      <div className={"container_button"}>
  <p className={"text text-center"}>Connect to a GitHub repository to provide access of your code </p>
  
  <Button className={"button"} variant={isConnected ? 'success' : 'primary'} onClick={handleConnectToRepo}>
        {isConnected ? 'Connected to GitHub Repo' : 'Connect to GitHub Repo  '}  
        <i class="fab fa-github"  ></i>  </Button>
  </div>
     

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Connect to GitHub Repo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="repoName">
              <Form.Label>Repository Name</Form.Label>
              <Form.Control type="text" placeholder="Enter repository name" value={repoName} onChange={(e) => setRepoName(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="userName">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter your GitHub username" value={userName} onChange={(e) => setUserName(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleConnect}>
            Connect
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default StudentView;
