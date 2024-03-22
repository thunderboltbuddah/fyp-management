import React, { useState } from 'react';
import { Modal, Button, Form, Accordion, Card } from 'react-bootstrap';

const EvaluationDetail = () => {
  const [entries, setEntries] = useState([
    { id: 1, name: 'Project Proposal', totalMarks: 10, obtainedMarks: 8, weightage: 10 },
    // Add more dummy entries as needed
  ]);

  const [newEntry, setNewEntry] = useState({
    name: '',
    totalMarks: '',
    obtainedMarks: '',
    weightage: '',
  });

  const [showModal, setShowModal] = useState(false);
  const [modalAction, setModalAction] = useState('');
  const [selectedEntryId, setSelectedEntryId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEntry((prevEntry) => ({ ...prevEntry, [name]: value }));
  };
  const handleShowModal = (action, id) => {
    setModalAction(action);
    setSelectedEntryId(id);
  
    // If adding a new entry, reset the newEntry state and show the modal
    if (action === 'add') {
      setNewEntry({
        name: '',
        totalMarks: '',
        obtainedMarks: '',
        weightage: '',
      });
      setShowModal(true);
    } else {
      // If updating an existing entry, show the modal
      setShowModal(true);
    }
  };

  const handleHideModal = () => {
    setModalAction('');
    setSelectedEntryId(null);
    setShowModal(false);
  };

  const handleAddEntry = () => {
    const newId = entries.length + 1;
    const newEntryWithId = { ...newEntry, id: newId };
    setEntries([...entries, newEntryWithId]);
    handleHideModal();
  };

  const handleDeleteEntry = (id) => {
    const updatedEntries = entries.filter((entry) => entry.id !== id);
    setEntries(updatedEntries);
  };

  const handleUpdateEntry = () => {
    const updatedEntries = entries.map((entry) =>
      entry.id === selectedEntryId ? { ...entry, ...newEntry } : entry
    );
    setEntries(updatedEntries);
    handleHideModal();
  };
  return (
    <div className='main mt-4 container'>
      <div className='main'>
      <h2>Evaluation Details</h2>
      
      </div>
      <br/>
      <Button variant="primary" onClick={() => handleShowModal('add')}>
        Add New Entry
      </Button>
<br/>

<div className='container main mt-4'>
<Accordion className="mt-3">
        {entries.map((entry) => (
          <Card className='m-2' key={entry.id}>
            <Accordion.Item eventKey={entry.id.toString()}>
              <Accordion.Header>
                {entry.name}
                <div className='m-2'>
                <Button variant="warning" onClick={() => handleShowModal('update', entry.id)}>
                  Update
                </Button>
                </div>
               <div className='m-2'>
               <Button variant="danger" onClick={() => handleDeleteEntry(entry.id)}>
                  Delete
                </Button>
           
               </div>
               </Accordion.Header>
              <Accordion.Body>
                <p>Total Marks: {entry.totalMarks}</p>
                <p>Obtained Marks: {entry.obtainedMarks}</p>
                <p>Weightage: {entry.weightage}</p>
                {/* Add more details as needed */}
              </Accordion.Body>
            </Accordion.Item>
          </Card>
          
        ))}
      </Accordion>

      <Modal show={showModal} onHide={handleHideModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalAction === 'add' ? 'Add New Entry' : 'Update Entry'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formEntryName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={newEntry.name}
                onChange={handleInputChange}
                name="name"
              />
            </Form.Group>
            <Form.Group controlId="formTotalMarks">
              <Form.Label>Total Marks</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter total marks"
                value={newEntry.totalMarks}
                onChange={handleInputChange}
                name="totalMarks"
              />
            </Form.Group>
            <Form.Group controlId="formObtainedMarks">
              <Form.Label>Obtained Marks</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter obtained marks"
                value={newEntry.obtainedMarks}
                onChange={handleInputChange}
                name="obtainedMarks"
              />
            </Form.Group>
            <Form.Group controlId="formWeightage">
              <Form.Label>Weightage</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter weightage"
                value={newEntry.weightage}
                onChange={handleInputChange}
                name="weightage"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleHideModal}>
            Close
          </Button>
          <Button variant="primary" onClick={modalAction === 'add' ? handleAddEntry : handleUpdateEntry}>
            {modalAction === 'add' ? 'Add Entry' : 'Update Entry'}
          </Button>
        </Modal.Footer>
      </Modal>
</div>

      

    </div>
  );
};

export default EvaluationDetail;
