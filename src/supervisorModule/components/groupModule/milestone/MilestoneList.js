import React from 'react';
import { Card, Button } from 'react-bootstrap';

const MilestoneList = ({ milestones, handleEdit }) => {
  return (
    <div className="card-container mt-4">
      {milestones.map((milestone, index) => (
        <Card key={index} className="mb-3">
          <Card.Body>
            {/* Card content */}
            <Button variant="warning" className="btn btn-primary m-2" onClick={() => handleEdit(index)}>
              Edit
            </Button>
            <Button variant="danger">Delete</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default MilestoneList;
