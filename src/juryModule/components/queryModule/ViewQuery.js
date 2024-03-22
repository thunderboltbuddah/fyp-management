import React, { useState } from 'react';
import { Card, Button, Modal, Form } from 'react-bootstrap';

const ViewQuery = ({ queries, setQueries }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedQuery, setEditedQuery] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedContent, setEditedContent] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [queryToDelete, setQueryToDelete] = useState(null);

  const handleDeleteQuery = (queryId) => {
    const updatedQueries = queries.filter((query) => query.id !== queryId);
    setQueries(updatedQueries);
    setShowDeleteModal(false);
  };

  const handleEditQuery = (query) => {
    setEditedQuery(query);
    setEditedTitle(query.title);
    setEditedContent(query.content);
    setShowEditModal(true);
  };

  const handleUpdateQuery = () => {
    const updatedQueries = queries.map((query) =>
      query.id === editedQuery.id
        ? {
            ...query,
            title: editedTitle,
            content: editedContent,
          }
        : query
    );
    setQueries(updatedQueries);
    setShowEditModal(false);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const handleShowDeleteModal = (query) => {
    setQueryToDelete(query);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const handleConfirmDelete = () => {
    if (queryToDelete) {
      handleDeleteQuery(queryToDelete.id);
    }
  };

  return (
    <div>
     {queries.map((query) => (
  <Card key={query.id} className="mb-3">
    <Card.Body>
      <Card.Title>{query.title}</Card.Title>
      <Card.Text>{query.content}</Card.Text>
      <Card.Text className="text-muted">Posted {query.datetime}</Card.Text>
      {query.reply && Object.keys(query.reply).length > 0 && (
        <>
          <Card.Text className="text-muted">Reply by: {query.reply.repliername}</Card.Text>
          <Card.Text className="text-muted">Reply: {query.reply.replyingmessage}</Card.Text>
          <Card.Text className="text-muted">Reply Time: {query.reply.datetime}</Card.Text>
        </>
      )}
      <Button className='m-1' variant="danger" onClick={() => handleShowDeleteModal(query)}>
        Delete
      </Button>
      <Button variant="primary" onClick={() => handleEditQuery(query)}>
        Edit
      </Button>
    </Card.Body>
  </Card>
))}
      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Query</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formContent">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter content"
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateQuery}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this query?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ViewQuery;
