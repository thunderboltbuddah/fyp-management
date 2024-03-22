import React, { useState } from 'react';
import { Button, Modal, Table, Form } from 'react-bootstrap';

const Groups = () => {
  const [showModal, setShowModal] = useState(false);
  const [fypId, setFypId] = useState('');
  const [fypTitle, setFypTitle] = useState('');
  const [students, setStudents] = useState([
    { id: 1, name: 'Student 1', rollNo: 'S001' },
    { id: 2, name: 'Student 2', rollNo: 'S002' },
    // Add more students as needed
  ]);
  const [supervisors, setSupervisors] = useState([
    { id: 1, name: 'Supervisor 1', designation: 'Professor' },
    // Add more supervisors as needed
  ]);
  const [jury, setJury] = useState([
    { id: 1, name: 'Jury 1', designation: 'Expert' },
    // Add more jury members as needed
  ]);
  const [externals, setExternals] = useState([
    { id: 1, name: 'External 1', designation: 'Professional' },
    // Add more external members as needed
  ]);
  const [selectedStudent1, setSelectedStudent1] = useState('');
  const [selectedStudent2, setSelectedStudent2] = useState('');
  const [selectedStudent3, setSelectedStudent3] = useState('');
  const [selectedSupervisor, setSelectedSupervisor] = useState('');
  const [selectedJury, setSelectedJury] = useState('');
  const [selectedExternal, setSelectedExternal] = useState('');
  const [groups, setGroups] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCloseModal = () => {
    setShowModal(false);
    // Reset form fields when modal is closed
    setFypId('');
    setFypTitle('');
    setSelectedStudent1('');
    setSelectedStudent2('');
    setSelectedStudent3('');
    
    setSelectedSupervisor('');
    setSelectedJury('');
    setSelectedExternal('');
  };

  // Edit the group based on index
  const handleEditGroup = (index) => {
    const groupToEdit = groups[index];
    setFypId(groupToEdit.fypId);
    setFypTitle(groupToEdit.fypTitle);
    setSelectedStudent1(groupToEdit.students[0]);
    setSelectedStudent2(groupToEdit.students[0]);
    setSelectedStudent3(groupToEdit.students[0]);
    
    setSelectedSupervisor(groupToEdit.supervisor);
    setSelectedJury(groupToEdit.jury);
    setSelectedExternal(groupToEdit.external);
    setEditingIndex(index);
    setShowModal(true);
  };

  // Function to remove a group based on its index
  const handleDeleteGroup = (index) => {
    const updatedGroups = [...groups];
    updatedGroups.splice(index, 1);
    setGroups(updatedGroups);
  };

  const handleCreateGroup = () => {
    // Save group information to groups state
    const newGroup = {
      fypId,
      fypTitle,
      students: [selectedStudent1, selectedStudent2, selectedStudent3].filter(student => student !== null), // Filter out null values
      supervisor: selectedSupervisor,
      jury: selectedJury,
      external: selectedExternal,
    };
    setGroups([...groups, newGroup]);
    handleCloseModal();
  };

  const handleSaveEdit = () => {
    const editedGroup = {
      fypId,
      fypTitle,
      students: [selectedStudent1, selectedStudent2, selectedStudent3].filter(student => student !== null), // Filter out null values
      supervisor: selectedSupervisor,
      jury: selectedJury,
      external: selectedExternal,
    };
    
    const updatedGroups = [...groups];
    updatedGroups[editingIndex] = editedGroup; // Replace the existing group with the edited information
    setGroups(updatedGroups);
    handleCloseModal();
  };

  const filteredGroups = groups.filter(group =>
    Object.values(group).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div>
      <br/>
      <div className="input-group mb-3">
  <input
    type="text"
    className="form-control"
    placeholder="Search..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
  
</div>
      <Button onClick={() => setShowModal(true)}>Create a Project</Button>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create a Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="fypId">
              <Form.Label>FYP ID</Form.Label>
              <Form.Control
                type="text"
                value={fypId}
                onChange={(e) => setFypId(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="fypTitle">
              <Form.Label>FYP Title</Form.Label>
              <Form.Control
                type="text"
                value={fypTitle}
                onChange={(e) => setFypTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="student1">
              <Form.Label>Select Student no 1</Form.Label>
              <Form.Control
                as="select"
                value={selectedStudent1}
                onChange={(e) => setSelectedStudent1(e.target.value)}
              >
                <option value="">Select Student no 1</option>
                {students.map((student) => (
                  <option key={student.id} value={student.name}>
                    {student.rollNo} - {student.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="student2">
              <Form.Label>Select Student no 2</Form.Label>
              <Form.Control
                as="select"
                value={selectedStudent2}

                onChange={(e) => setSelectedStudent2(e.target.value)}
                >
                  <option value="">Select Student no 2</option>
                  {students.map((student) => (
                    <option key={student.id} value={student.name}>
                      {student.rollNo} - {student.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="student3">
                <Form.Label>Select Student no 3</Form.Label>
                <Form.Control
                  as="select"
                  value={selectedStudent3}
                  onChange={(e) => setSelectedStudent3(e.target.value)}
                >
                  <option value="">Select Student no 3</option>
                  {students.map((student) => (
                    <option key={student.id} value={student.name}>
                      {student.rollNo} - {student.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="supervisor">
                <Form.Label>Select Supervisor</Form.Label>
                <Form.Control
                  as="select"
                  value={selectedSupervisor}
                  onChange={(e) => setSelectedSupervisor(e.target.value)}
                >
                  <option value="">Select Supervisor</option>
                  {supervisors.map((supervisor) => (
                    <option key={supervisor.id} value={supervisor.name}>
                      {supervisor.name} - {supervisor.designation}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="jury">
                <Form.Label>Select Jury</Form.Label>
                <Form.Control
                  as="select"
                  value={selectedJury}
                  onChange={(e) => setSelectedJury(e.target.value)}
                >
                  <option value="">Select Jury</option>
                  {jury.map((juryMember) => (
                    <option key={juryMember.id} value={juryMember.name}>
                      {juryMember.name} - {juryMember.designation}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="external">
                <Form.Label>Select External</Form.Label>
                <Form.Control
                  as="select"
                  value={selectedExternal}
                  onChange={(e) => setSelectedExternal(e.target.value)}
                >
                  <option value="">Select External</option>
                  {externals.map((externalMember) => (
                    <option key={externalMember.id} value={externalMember.name}>
                      {externalMember.name} - {externalMember.designation}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            {editingIndex !== null ? (
              <Button variant="success" onClick={handleSaveEdit}>
                Save Edit
              </Button>
            ) : (
              <Button variant="primary" onClick={handleCreateGroup}>
                Save Group
              </Button>
            )}
          </Modal.Footer>
        </Modal>
        <Table className='mt-4 mb-4'striped bordered hover>
          <thead>
            <tr>
              <th>FYP ID</th>
              <th>FYP Title</th>
              <th>Students</th>
              <th>Supervisor</th>
              <th>Jury</th>
              <th>External</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredGroups.map((group, index) => (
              <tr key={index}>
                <td>{group.fypId}</td>
                <td>{group.fypTitle}</td>
                <td>{group.students.join(', ')}</td>
                <td>{group.supervisor}</td>
                <td>{group.jury}</td>
                <td>{group.external}</td>
                <td>
                  <Button variant="warning" onClick={() => handleEditGroup(index)}>
                    Edit
                  </Button>{' '}
                  <Button variant="danger" onClick={() => handleDeleteGroup(index)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  };
  
  export default Groups;
  