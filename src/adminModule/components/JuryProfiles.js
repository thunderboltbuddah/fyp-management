import React, { useState } from 'react';
import { Container, Row, Col, InputGroup, FormControl, ListGroup, Table, Button } from 'react-bootstrap';

const dummyJuryData = [
  {
    id: 1,
    email: 'jury1@example.com',
    name: 'Jane Smith',
    contactNo: '+9876543210',
    expertise: 'Law',
    noOfCases: 5,
  },
  // Add more dummy data as needed
];

function JuryProfiles() {
  const [selectedJury, setSelectedJury] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [editMode, setEditMode] = useState(false);

  const handleJuryClick = (jury) => {
    setSelectedJury(jury);
    setEditMode(false); // Reset edit mode when a new jury is selected
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    setEditMode(false);
    // Handle saving the edited values (you can update your state or make an API call here)
  };

  const handleInputChange = (e, field) => {
    setSelectedJury((prevJury) => ({
      ...prevJury,
      [field]: e.target.value,
    }));

    // Update the searchQuery when modifying the name or email
    if (field === 'name' || field === 'email') {
      setSearchQuery(e.target.value);
    }
  };

  const filteredJuries = dummyJuryData.filter((jury) =>
    jury.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    jury.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <br />
      <Button className='mt-2 mb-3'>
        Create a new Jury Profile
      </Button>
      <h4>Search Profiles</h4>

      <Row>
        {/* Search bar and list of jury emails */}
        <Col md={4}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search by Email or Name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </InputGroup>

          <ListGroup>
            {filteredJuries.map((jury) => (
              <ListGroup.Item
                key={jury.id}
                action
                onClick={() => handleJuryClick(jury)}
              >
                {jury.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>

        {/* Display selected jury's information */}
        <Col md={8}>
          {selectedJury && (
            <div>
              <h3>Jury Information</h3>
              <Table striped bordered hover>
                <tbody>
                  <tr>
                    <td>Email:</td>
                    <td>{editMode ? (
                      <FormControl
                        type="text"
                        value={selectedJury.email}
                        onChange={(e) => handleInputChange(e, 'email')}
                      />
                    ) : (
                      selectedJury.email
                    )}</td>
                  </tr>
                  <tr>
                    <td>Name:</td>
                    <td>{editMode ? (
                      <FormControl
                        type="text"
                        value={selectedJury.name}
                        onChange={(e) => handleInputChange(e, 'name')}
                      />
                    ) : (
                      selectedJury.name
                    )}</td>
                  </tr>
                  <tr>
                    <td>Contact No:</td>
                    <td>{editMode ? (
                      <FormControl
                        type="text"
                        value={selectedJury.contactNo}
                        onChange={(e) => handleInputChange(e, 'contactNo')}
                      />
                    ) : (
                      selectedJury.contactNo
                    )}</td>
                  </tr>
                  <tr>
                    <td>Expertise:</td>
                    <td>{editMode ? (
                      <FormControl
                        type="text"
                        value={selectedJury.expertise}
                        onChange={(e) => handleInputChange(e, 'expertise')}
                      />
                    ) : (
                      selectedJury.expertise
                    )}</td>
                  </tr>
                  <tr>
                    <td>No of Cases:</td>
                    <td>{editMode ? (
                      <FormControl
                        type="number"
                        value={selectedJury.noOfCases}
                        onChange={(e) => handleInputChange(e, 'noOfCases')}
                      />
                    ) : (
                      selectedJury.noOfCases
                    )}</td>
                  </tr>
                </tbody>
              </Table>

              {editMode ? (
                <Button variant="success" onClick={handleSaveClick}>
                  Save
                </Button>
              ) : (
                <Button variant="warning" onClick={handleEditClick}>
                  Edit
                </Button>
              )}
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default JuryProfiles;
