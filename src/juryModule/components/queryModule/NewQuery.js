import React, { useState } from 'react';
import { Card, Button, Form, Modal } from 'react-bootstrap';

const NewQuery = ({ queries, setQueries }) => {
  const [queryTitle, setQueryTitle] = useState('');
  const [queryContent, setQueryContent] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleFileChange = (e) => {
    setSelectedFiles(Array.from(e.target.files));
  };

  const handleAddQuery = () => {
    if (queryTitle.trim() !== '' && queryContent.trim() !== '') {
      const newQuery = {
        id: queries.length + 1,
        title: queryTitle,
        content: queryContent,
        datetime: new Date().toLocaleString(),
        reply: {}, // Initialize as an empty object
        attachments: selectedFiles,
      };
      setQueries([...queries, newQuery]);
      setQueryTitle('');
      setQueryContent('');
      setSelectedFiles([]);
      setShowModal(true);
    }
  };
  
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
     
      <Card className="mb-3">
        <Card.Body>
          <div className="mb-3">
            <label htmlFor="queryTitle" className="form-label">
              Query Title
            </label>
            <input
              type="text"
              className="form-control"
              id="queryTitle"
              value={queryTitle}
              onChange={(e) => setQueryTitle(e.target.value)}
              placeholder="Enter query title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="queryContent" className="form-label">
              Query Content
            </label>
            <textarea
              className="form-control"
              id="queryContent"
              rows="3"
              value={queryContent}
              onChange={(e) => setQueryContent(e.target.value)}
              placeholder="Type your query content here..."
            />
          </div>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Attachments</Form.Label>
            <Form.Control type="file" multiple onChange={handleFileChange} />
          </Form.Group>
          <Button variant="primary" onClick={handleAddQuery}>
            Add Query
          </Button>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Query Submitted</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your query has been successfully submitted!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NewQuery;
