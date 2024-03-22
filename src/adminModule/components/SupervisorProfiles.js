import React, { useState } from 'react';
import { Modal, Form, Button, Table } from 'react-bootstrap';
import SupervisorProfileModal from './SupervisorProfileModal';

const SupervisorProfiles = () => {
  const [showModal, setShowModal] = useState(false);
  const [supervisors, setSupervisors] = useState([
    { id: 1, email: 'supervisor1@example.com', name: 'John Doe', contactNo: '+1234567890', domain: 'example.com' },
    { id: 2, email: 'supervisor2@example.com', name: 'Jane Smith', contactNo: '+9876543210', domain: 'example.net' },
    // Add more supervisors as needed
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSupervisor, setSelectedSupervisor] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedSupervisor, setEditedSupervisor] = useState({});

  const handleCloseModal = () => {
    setShowModal(false);
    setEditMode(false);
    setSelectedSupervisor(null);
    setEditedSupervisor({});
  };

  const handleEditClick = (supervisor) => {
    setSelectedSupervisor(supervisor);
    setEditMode(true);
    setShowModal(true);
    setEditedSupervisor({ ...supervisor });
  };

  const handleSaveChanges = () => {
    const updatedSupervisors = supervisors.map((supervisor) =>
      supervisor.id === editedSupervisor.id ? editedSupervisor : supervisor
    );
    setSupervisors(updatedSupervisors);
    handleCloseModal();
  };

  const handleInputChange = (e, field) => {
    setEditedSupervisor({
      ...editedSupervisor,
      [field]: e.target.value,
    });
  };

  const filteredSupervisors = supervisors.filter((supervisor) =>
    supervisor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    supervisor.name.toLowerCase().includes(searchTerm.toLowerCase())
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
      <Button onClick={() => setShowModal(true)}>Add Supervisor</Button>
      <SupervisorProfileModal
        show={showModal}
        handleClose={handleCloseModal}
        supervisor={selectedSupervisor}
        handleSave={handleSaveChanges}
      />
      <Table className="mt-4 mb-4" striped bordered hover>
        <thead>
          <tr>
            <th>Email</th>
            <th>Name</th>
            <th>Contact No</th>
            <th>Domain</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredSupervisors.map((supervisor) => (
            <tr key={supervisor.id}>
              <td>{supervisor.email}</td>
              <td>{supervisor.name}</td>
              <td>{supervisor.contactNo}</td>
              <td>{supervisor.domain}</td>
              <td>
                <Button variant="warning" onClick={() => handleEditClick(supervisor)}>
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

export default SupervisorProfiles;
