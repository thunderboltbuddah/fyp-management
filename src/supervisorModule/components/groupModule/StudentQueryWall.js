import React, { useState, useEffect } from 'react';
import { Modal, Button, Card } from 'react-bootstrap';
import { dummyQueries } from './queriesDummyData';
import { useParams, Link, useNavigate } from 'react-router-dom';

const StudentQueryWall = () => {
  const { groupId } = useParams();
  const navigate = useNavigate(); // Get the navigate function from react-router-dom
  const [queries, setQueries] = useState([]);
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [replyContent, setReplyContent] = useState('');
  const [showReplyModal, setShowReplyModal] = useState(false);

  useEffect(() => {
    // Filter queries based on the groupId
    const filteredQueries = dummyQueries.filter((query) => query.groupId === groupId);
    setQueries(filteredQueries);
  }, [groupId]);

  const handleQueryClick = (query) => {
    setSelectedQuery(query);
    setShowReplyModal(true);
  };

  const handleReply = () => {
    // Add the reply to the selected query
    const updatedQueries = queries.map((query) =>
      query.id === selectedQuery.id
        ? {
            ...query,
            replies: [
              ...query.replies,
              { supervisorName: 'Supervisor 1', replyContent, time: 'just now' },
            ],
          }
        : query
    );

    // Update the state with the new reply
    setQueries(updatedQueries);

    // Clear the reply input and close the modal
    setReplyContent('');
    setShowReplyModal(false);
  };

  const handleCloseModal = () => {
    // Close the modal and navigate to the group tab
    setShowReplyModal(false);
    navigate(`/group/${groupId}`);
  };

  return (
    <div>
      <h3>Queries</h3>
      {queries.map((query) => (
        <Card key={query.id} className="mb-3">
          <Card.Body>
            <Card.Title>{query.studentName}</Card.Title>
            <Card.Text>{query.content}</Card.Text>
            <Card.Text className="text-muted">Posted {query.time}</Card.Text>
            <Button variant="primary" onClick={() => handleQueryClick(query)}>
              View Details
            </Button>
          </Card.Body>
        </Card>
      ))}

      {/* Reply Modal */}
      <Modal show={showReplyModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Query Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>{selectedQuery?.studentName}</h5>
          <p>{selectedQuery?.content}</p>
          <p className="text-muted">Posted {selectedQuery?.time}</p>

          {/* Replies */}
          {selectedQuery?.replies.map((reply, index) => (
            <div key={index} className="mb-3">
              <p>
                <strong>{reply.supervisorName}</strong>
                <br />
                {reply.replyContent}
              </p>
              <p className="text-muted">Replied {reply.time}</p>
            </div>
          ))}

          {/* Reply Input */}
          <div className="mb-3">
            <label htmlFor="replyContent" className="form-label">
              Your Reply
            </label>
            <textarea
              className="form-control"
              id="replyContent"
              rows="3"
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
              placeholder="Type your reply here..."
            />
          </div>
          <Button variant="primary" onClick={handleReply}>
            Reply
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default StudentQueryWall;
