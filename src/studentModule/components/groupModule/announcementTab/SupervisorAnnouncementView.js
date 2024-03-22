import React, { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';

const SupervisorAnnouncementView = ({ announcements }) => {
  const [severityFilter, setSeverityFilter] = useState('all');

  const handleSeverityFilterChange = (e) => {
    setSeverityFilter(e.target.value);
  };

  const filteredAnnouncements =
    severityFilter === 'all'
      ? announcements
      : announcements.filter((announcement) => announcement.severity === severityFilter);

  return (
    <div className="container mt-4">
      <h3>Announcements</h3>
      <div className="mb-3">
        <label htmlFor="severityFilter" className="form-label">
          Filter by Severity:
        </label>
        <select
          className="form-select"
          id="severityFilter"
          value={severityFilter}
          onChange={handleSeverityFilterChange}
        >
          <option value="all">All</option>
          <option value="important">Important</option>
          <option value="ordinary">Ordinary</option>
          <option value="critical">Critical</option>
        </select>
      </div>
      {filteredAnnouncements.map((announcement) => (
        <Card
          key={announcement.id}
          className={`mb-3 ${announcement.severity === 'important' ? 'border-warning' : ''} ${
            announcement.severity === 'ordinary' ? 'border-light' : ''
          } ${announcement.severity === 'critical' ? 'border-danger' : ''}`}
        >
          <Card.Body>
            <Card.Title>{announcement.title}</Card.Title>
            <Card.Text>{announcement.text}</Card.Text>
            <small className="text-muted">Date & Time: {announcement.dateTime}</small>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default SupervisorAnnouncementView;
