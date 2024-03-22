import React, { useState } from 'react';
import { Modal, Form, Button, Table } from 'react-bootstrap';

const StudentDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const [students, setStudents] = useState([
    { id: 1, rollNo: 'A123', name: 'John Doe', fypId: 'FYP001', grId: 'GR001', email: 'john@example.com', password: 'password1', enrollmentId: 'EN001', mobileNo: '123-456-7890' },
    { id: 2, rollNo: 'B456', name: 'Jane Smith', fypId: 'FYP002', grId: 'GR002', email: 'jane@example.com', password: 'password2', enrollmentId: 'EN002', mobileNo: '987-654-3210' },
    // Add more students as needed
  ]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editedStudent, setEditedStudent] = useState({});

  const handleCloseModal = () => {
    setShowModal(false);
    setEditMode(false);
    setSelectedStudent(null);
    setEditedStudent({});
  };

  const handleEditClick = (student) => {
    setSelectedStudent(student);
    setEditMode(true);
    setShowModal(true);
    setEditedStudent({ ...student });
  };

  const handleSaveChanges = () => {
    if (editMode) {
      const updatedStudents = students.map((student) =>
        student.id === editedStudent.id ? editedStudent : student
      );
      setStudents(updatedStudents);
    } else {
      // Add new student
      const newStudent = { ...editedStudent, id: students.length + 1 };
      setStudents([...students, newStudent]);
    }
    handleCloseModal();
  };

  const handleInputChange = (e, field) => {
    setEditedStudent({
      ...editedStudent,
      [field]: e.target.value,
    });
  };

  const handleShowHidePassword = () => {
    const passwordInput = document.getElementById('password');
    const passwordType = passwordInput.getAttribute('type');
    passwordInput.setAttribute('type', passwordType === 'password' ? 'text' : 'password');
  };

  const filteredStudents = students.filter((student) =>
    student.rollNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <br />
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Button onClick={() => setShowModal(true)}>Add Student</Button>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{editMode ? 'Edit Student' : 'Add Student'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="rollNo">
              <Form.Label>Roll No</Form.Label>
              <Form.Control
                type="text"
                value={editedStudent.rollNo || ''}
                onChange={(e) => handleInputChange(e, 'rollNo')}
              />
            </Form.Group>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={editedStudent.name || ''}
                onChange={(e) => handleInputChange(e, 'name')}
              />
            </Form.Group>
            <Form.Group controlId="fypId">
              <Form.Label>FYP ID</Form.Label>
              <Form.Control
                type="text"
                value={editedStudent.fypId || ''}
                onChange={(e) => handleInputChange(e, 'fypId')}
              />
            </Form.Group>
            <Form.Group controlId="grId">
              <Form.Label>GR ID</Form.Label>
              <Form.Control
                type="text"
                value={editedStudent.grId || ''}
                onChange={(e) => handleInputChange(e, 'grId')}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={editedStudent.email || ''}
                onChange={(e) => handleInputChange(e, 'email')}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <div className="input-group" id="show_hide_password">
                <Form.Control
                  type="password"
                  value={editedStudent.password || ''}
                  onChange={(e) => handleInputChange(e, 'password')}
                />
                <div className="input-group-addon">
                  <Button variant="outline-secondary" onClick={handleShowHidePassword}>
                    <i className="fa fa-eye-slash" aria-hidden="true"></i>
                  </Button>
                </div>
              </div>
            </Form.Group>
            <Form.Group controlId="enrollmentId">
              <Form.Label>Enrollment ID</Form.Label>
              <Form.Control
                type="text"
                value={editedStudent.enrollmentId || ''}
                onChange={(e) => handleInputChange(e, 'enrollmentId')}
              />
            </Form.Group>
            <Form.Group controlId="mobileNo">
              <Form.Label>Mobile No</Form.Label>
              <Form.Control
                type="text"
                value={editedStudent.mobileNo || ''}
                onChange={(e) => handleInputChange(e, 'mobileNo')}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            {editMode ? 'Save Changes' : 'Add Student'}
          </Button>
        </Modal.Footer>
      </Modal>
      <Table className="mt-4 mb-4" striped bordered hover>
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>FYP ID</th>
            <th>GR ID</th>
    
            <th>Enrollment ID</th>
            <th>Mobile No</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.rollNo}</td>
              <td>{student.name}</td>
              <td>{student.fypId}</td>
              <td>{student.grId}</td>
             
              <td>{student.enrollmentId}</td>
              <td>{student.mobileNo}</td>
              <td>
                <Button variant="warning" onClick={() => handleEditClick(student)}>
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default StudentDetails;
