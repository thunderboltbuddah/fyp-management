import React, { useState } from 'react';
import { Modal, Button, Form, Col,Card } from 'react-bootstrap';

const MeetingComponent = () => {
    const [showModal, setShowModal] = useState(false);
  const [meetingData, setMeetingData] = useState({
    agenda: '',
    groupId: '',
    schedule: '',
    venue: 'physical',
    googleFormLink: '',
    status: 'pending', // 'pending', 'done', 'missed'
  });
  const [scheduledMeetings, setScheduledMeetings] = useState([]);
  const [editMeetingId, setEditMeetingId] = useState(null);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setEditMeetingId(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMeetingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSetMeeting = () => {
    if (editMeetingId !== null) {
      // Handle editing the meeting
      setScheduledMeetings((prevMeetings) =>
        prevMeetings.map((meeting) =>
          meeting.id === editMeetingId ? { ...meeting, ...meetingData } : meeting
        )
      );
    } else {
      // Handle setting a new meeting
      const newMeeting = { ...meetingData, id: Date.now(), status: 'pending' }; // Generate a unique ID
      setScheduledMeetings((prevMeetings) => [...prevMeetings, newMeeting]);
    }

    setMeetingData({
      agenda: '',
      groupId: '',
      schedule: '',
      venue: 'physical',
      googleFormLink: '',
      status: 'pending',
    });
    handleCloseModal();
  };

  const handleEditSchedule = (meetingId) => {
    const meetingToEdit = scheduledMeetings.find((meeting) => meeting.id === meetingId);
    setMeetingData({ ...meetingToEdit });
    setEditMeetingId(meetingId);
    handleShowModal();
  };

  const handleDeleteMeeting = (meetingId) => {
    // Implement delete meeting functionality
    setScheduledMeetings((prevMeetings) =>
      prevMeetings.filter((meeting) => meeting.id !== meetingId)
    );
  };

  const handleMarkAsDone = (meetingId) => {
    // Implement mark as done functionality
    setScheduledMeetings((prevMeetings) =>
      prevMeetings.map((meeting) =>
        meeting.id === meetingId ? { ...meeting, status: 'done' } : meeting
      )
    );
  };

  const handleMarkAsMissed = (meetingId) => {
    // Implement mark as missed functionality
    setScheduledMeetings((prevMeetings) =>
      prevMeetings.map((meeting) =>
        meeting.id === meetingId ? { ...meeting, status: 'missed' } : meeting
      )
    );
  };

  return (
    <>
    
      <Button variant="primary" onClick={handleShowModal}>
        Set Meeting
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Set Meeting</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="agenda">
              <Form.Label>Agenda</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter meeting agenda"
                name="agenda"
                value={meetingData.agenda}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="groupId">
              <Form.Label>Group ID</Form.Label>
              <Form.Control
                as="select"
                name="groupId"
                value={meetingData.groupId}
                onChange={handleInputChange}
              >
                <option value="">Select Group ID</option>
                {/* Add options for group IDs */}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="schedule">
              <Form.Label>Schedule</Form.Label>
              <Form.Control
                type="datetime-local"
                name="schedule"
                value={meetingData.schedule}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="venue">
              <Form.Label>Venue</Form.Label>
              <Form.Control
                as="select"
                name="venue"
                value={meetingData.venue}
                onChange={handleInputChange}
              >
                <option value="physical">Physical</option>
                <option value="online">Online</option>
              </Form.Control>
            </Form.Group>

            {meetingData.venue === 'online' && (
              <Form.Group controlId="googleFormLink">
                <Form.Label>Google Form Link</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Google Form Link"
                  name="googleFormLink"
                  value={meetingData.googleFormLink}
                  onChange={handleInputChange}
                />
              </Form.Group>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSetMeeting}>
            Set Meeting
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="mt-4">
        <h4>Scheduled Meetings</h4>
        {scheduledMeetings.map((meeting) => (
          <Card key={meeting.id} className="mb-3">
            <Card.Body>
             
            {meeting.status === 'done' && (
                <div className="text-success">Meeting Done</div>
              )}
              {meeting.status === 'missed' && (
                <div className="text-danger">Meeting Missed</div>
              )}
              <Card.Title>{meeting.agenda}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Schedule: {meeting.schedule}
              </Card.Subtitle>
              <Card.Text>Group ID: {meeting.groupId}</Card.Text>
              <Card.Text>Venue: {meeting.venue}</Card.Text>
              {meeting.venue === 'online' && (
                <Card.Text>Google Form Link: {meeting.googleFormLink}</Card.Text>
              )}
             <div className="d-flex flex-row ">
                <div className="m-2">
                  <Button variant="info" onClick={() => handleEditSchedule(meeting.id)}>
                    Edit Schedule
                  </Button>
                </div>
                <div className="m-2">
                  <Button variant="danger" onClick={() => handleDeleteMeeting(meeting.id)}>
                    Delete Meeting
                  </Button>
                </div>
                <div className="m-2">
                  <Button variant="success" onClick={() => handleMarkAsDone(meeting.id)}>
                    Mark as Done
                  </Button>
                </div>
                <div className="m-2">
                  <Button variant="warning" onClick={() => handleMarkAsMissed(meeting.id)}>
                    Mark as Missed
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default MeetingComponent;
