import React, { useState } from 'react';

import { Tab, Tabs, Modal, Button, Form as BootstrapForm, Dropdown,Table } from 'react-bootstrap';

const Forms = () => {
  const [showModal, setShowModal] = useState(false);
  const [formName, setFormName] = useState('');
  const [selectedForm, setSelectedForm] = useState(null);
  const [existingForms, setExistingForms] = useState([
    {
      id: 1,
      name: 'Sample Form 1',
      destination:'A001',
      fields: [
        { fieldName: 'What is your name?', fieldType: 'Text' },
        { fieldName: 'Whats your birthdate?', fieldType: 'MultipleChoice', options: ['Option 1', 'Option 2'] },
        { fieldName: 'Field 3', fieldType: 'Text' },
      ],
    },
    {
      id: 2,
      name: 'Sample Form 2',
      destination:'A002',
      fields: [
        { fieldName: 'Field 1', fieldType: 'Text' },
        { fieldName: 'Field 2', fieldType: 'MultipleChoice', options: ['Option 1', 'Option 2'] },
      ],
    }
  ]);

 
  const [selectedStudent, setSelectedStudent] = useState('');

  const students = [
    { id: '1', name: 'John', roll: 'A001' },
    { id: '2', name: 'Alice', roll: 'A002' },
    { id: '3', name: 'Bob', roll: 'A003' },
    // Include ID and roll numbers for each student
  ];
  const handleStudentChange = (student) => {
    setSelectedStudent(student);
  };

  const [selectedDestination, setSelectedDestination] = useState('');

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedForm(null);
    setFormName('');
    setSelectedDestination('');
  };

  const handleShowModal = () => setShowModal(true);

  const handleAddField = () => {
    const newField = { fieldName: '', fieldType: 'Text' };
    const updatedForms = existingForms.map((form) => {
      if (form.id === selectedForm.id) {
        form.fields.push(newField);
      }
      return form;
    });
    setExistingForms(updatedForms);
  };

  const handleFieldNameChange = (formIndex, fieldIndex, value) => {
    const updatedForms = existingForms.map((form, idx) => {
      if (idx === formIndex) {
        form.fields[fieldIndex].fieldName = value;
      }
      return form;
    });
    setExistingForms(updatedForms);
  };

  const handleFieldTypeChange = (formIndex, fieldIndex, value) => {
    const updatedForms = existingForms.map((form, idx) => {
      if (idx === formIndex) {
        form.fields[fieldIndex].fieldType = value;
        if (value === 'MultipleChoice') {
          form.fields[fieldIndex].options = ['Option 1', 'Option 2'];
        } else {
          delete form.fields[fieldIndex].options;
        }
      }
      return form;
    });
    setExistingForms(updatedForms);
  };

  const handleFormNameChange = (e) => {
    setFormName(e.target.value);
  };

  const handleSaveForm = () => {
    const newForm = {
      id: existingForms.length + 1,
      name: formName || `Form ${existingForms.length + 1}`,
      destination: selectedStudent.roll, 
      fields: [],
    };
    setExistingForms([...existingForms, newForm]);
    handleCloseModal();
  };

  const handleDeleteForm = (id) => {
    const updatedForms = existingForms.filter((form) => form.id !== id);
    setExistingForms(updatedForms);
  };

  const handleManageForm = (form) => {
    setSelectedForm(form);
    setFormName(form.name);
    handleShowModal();
  };


  const responses = [
    {
      id: 1,
      formId: 1,
      source: 'Student',
      responseData: [
        { 'What is your name?': 'My name is Ali' },
        { 'Whats your birthdate?': 'My birthdate is 12 July' },
        // ... other responses
      ]
    },
    {
      id: 2,
      formId: 2,
      source: 'Jury',
      responseData: [
        { 'What is your name?': 'My name is John' },
        { 'Whats your birthdate?': 'Hi I am CS Student' },
        // ... other responses
      ]
    }
    // Add more response objects as needed
  ];
  


  const [showResponsesModal, setShowResponsesModal] = useState(false);
  const [selectedResponses, setSelectedResponses] = useState(null);

  const handleCloseResponsesModal = () => setShowResponsesModal(false);

  const handleViewResponses = (formId) => {
    const formResponses = responses.find((response) => response.formId === formId);
    setSelectedResponses(formResponses);
    setShowResponsesModal(true);
  }

  return (
    <div className="container mt-4">
      <Tabs defaultActiveKey="manageForms" id="form-tabs">
        <Tab eventKey="manageForms" title="Manage Forms">
          <div className="mt-4 rounded mb-1 border p-3">
          <br/>
            <Button className="mb-4"onClick={handleShowModal}>Create New Form</Button>
            <br/>
            <h3>Manage Forms</h3>
            
            <Modal show={showModal} onHide={handleCloseModal}>
              <Modal.Header closeButton>
                <Modal.Title>{selectedForm ? 'Manage Form' : 'Create New Form'}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <BootstrapForm.Group controlId="formName">
                  <BootstrapForm.Label>Form Name:</BootstrapForm.Label>
                  <BootstrapForm.Control
                    type="text"
                    placeholder="Enter form name"
                    value={formName}
                    onChange={handleFormNameChange}
                  />
                </BootstrapForm.Group>
                {selectedForm && (
                  <>
                    <h5>Form Fields:</h5>
                    {selectedForm.fields.map((field, fieldIndex) => (
                      <div key={fieldIndex}>
                        <BootstrapForm.Group>
                          <BootstrapForm.Label>Field Name:</BootstrapForm.Label>
                          <BootstrapForm.Control
                            type="text"
                            placeholder={`Enter field name`}
                            value={field.fieldName}
                            onChange={(e) => handleFieldNameChange(existingForms.indexOf(selectedForm), fieldIndex, e.target.value)}
                          />
                        </BootstrapForm.Group>
                        <BootstrapForm.Group>
                          <BootstrapForm.Label>Field Type:</BootstrapForm.Label>
                          <Dropdown>
                            <Dropdown.Toggle variant="primary" id={`dropdown-${fieldIndex}`}>
                              {field.fieldType === 'Text' ? 'Text' : 'Multiple Choice'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item onClick={() => handleFieldTypeChange(existingForms.indexOf(selectedForm), fieldIndex, 'Text')}>
                                Text
                              </Dropdown.Item>
                              <Dropdown.Item onClick={() => handleFieldTypeChange(existingForms.indexOf(selectedForm), fieldIndex, 'MultipleChoice')}>
                                Multiple Choice
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </BootstrapForm.Group>
                        {field.fieldType === 'MultipleChoice' && (
                          <BootstrapForm.Group>
                            <BootstrapForm.Label>Options:</BootstrapForm.Label>
                            <BootstrapForm.Control
                              type="text"
                              placeholder={`Enter options separated by comma`}
                              value={field.options ? field.options.join(', ') : ''}
                              onChange={(e) => {
                                const updatedForms = existingForms.map((form, idx) => {
                                  if (idx === existingForms.indexOf(selectedForm)) {
                                    form.fields[fieldIndex].options = e.target.value.split(',').map(option => option.trim());
                                  }
                                  return form;
                                });
                                setExistingForms(updatedForms);
                              }}
                            />
                          </BootstrapForm.Group>
                        )}
                      </div>
                    ))}
                    <Button onClick={handleAddField}>Add New Field</Button>
                  </>
                )}
               
                
                <BootstrapForm.Group controlId="formDestination">
                  <BootstrapForm.Label>Destination:</BootstrapForm.Label>
                  <Dropdown>
                  <Dropdown.Toggle variant="primary" id="destinationDropdown">
                      {selectedDestination ? selectedDestination : 'Select Destination'}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => setSelectedDestination('Student')}>
                        Student
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => setSelectedDestination('Jury')}>
                        Jury
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => setSelectedDestination('External')}>
                        External
                      </Dropdown.Item>
                      {/* Add more items as needed */}
                    </Dropdown.Menu>
                  </Dropdown>
                </BootstrapForm.Group>

                {selectedDestination === 'Student' && (
                  <BootstrapForm.Group controlId="formStudent">
                    <BootstrapForm.Label>Student:</BootstrapForm.Label>
                    <Dropdown>
                      {students.map((student, index) => (
                        <Dropdown.Item key={index} onClick={() => handleStudentChange(student)}>
                          {student.roll}
                          {student.name}
                        </Dropdown.Item>
                      ))}
                    </Dropdown>
                  </BootstrapForm.Group>
                )}

                {/* Rest of the form creation content */}
                
              </Modal.Body>
              <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                  Close
                </Button>
                <Button variant="primary" onClick={selectedForm ? handleCloseModal : handleSaveForm}>
                  {selectedForm ? 'Save Form' : 'Create Form'}
                </Button>
              </Modal.Footer>
            </Modal>
            
            {/* Existing Forms Table */}
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Form Name</th>
                
                  <th>Destination</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {existingForms.map((form) => (
                  <tr key={form.id}>
                    <td>{form.id}</td>
                    <td>{form.name}</td>
                    <td>{form.destination}</td>
                    <td>
                     <div className='container d-flex'>
                    <div className='m-2'>

                    <Button variant='warning' onClick={() => handleManageForm(form)}>Manage</Button>
                     </div>
                    <div className='m-2'>
                    <Button variant='danger' onClick={() => handleDeleteForm(form.id)}>Delete</Button>
                     
                    </div>
                      <div className='m-2'>
                      <Button   className=" btn btn-success ">Send</Button>
                      
                      </div>
                     
                     </div>
                      
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Tab>
        <Tab eventKey="responses" title="Responses">
          <div className="mt-4 rounded mb-1 border p-3">
            <h3>Responses</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  
                  <th>Form ID #</th>
                  <th>Source</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {responses.map((response) => (
                  <tr key={response.id}>
                    <td>{response.id}</td>
                   
                    <td>{response.source}</td>
                    <td>
                      <Button onClick={() => handleViewResponses(response.formId)}>View Responses</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

           <Modal show={showResponsesModal} onHide={handleCloseResponsesModal}>
      <Modal.Header closeButton>
        <Modal.Title>Form Responses</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {selectedResponses && (
          <div>
            <h5>Form ID: {selectedResponses.formId}</h5>
            {existingForms.map((form) => {
              if (form.id === selectedResponses.formId) {
                return (
                  <div key={form.id}>
                    <h6>Form Name: {form.name}</h6>
                    {form.fields.map((field, fieldIndex) => (
                      <div key={fieldIndex}>
                        <p><b>Field Name: {field.fieldName}</b></p>
                        <p>Responses:</p>
                        <ul>
                          {selectedResponses.responseData.map((responseData, responseDataIndex) => (
                            <div key={responseDataIndex}>{responseData[field.fieldName]}</div>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                );
              }
              return null;
            })}
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseResponsesModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>

          </div>
          
        </Tab>
      </Tabs>
      
    </div>
  );
};

export default Forms;
