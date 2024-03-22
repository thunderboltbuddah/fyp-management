import React from 'react';
import { Accordion, Card, Table } from 'react-bootstrap';

const StudentEvaluation = ({ evaluationEntries }) => {
  return (
    <div className="container mt-4">
      <h2>Your Evaluation Details</h2>
      <Accordion className="mt-3">
        {evaluationEntries.map((entry) => (
          <Card key={entry.id}>
            <Accordion.Item eventKey={entry.id.toString()}>
              <Accordion.Header>{entry.name}</Accordion.Header>
              <Accordion.Body>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Criteria</th>
                      <th>Total Marks</th>
                      <th>Obtained Marks</th>
                      <th>Weightage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{entry.name}</td>
                      <td>{entry.totalMarks}</td>
                      <td>{entry.obtainedMarks}</td>
                      <td>{entry.weightage}</td>
                    </tr>
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
          </Card>
        ))}
      </Accordion>
    </div>
  );
};

export default StudentEvaluation;
