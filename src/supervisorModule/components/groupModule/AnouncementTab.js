import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const AnnouncementTab = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [newAnnouncementTitle, setNewAnnouncementTitle] = useState('');
  const [newAnnouncementText, setNewAnnouncementText] = useState('');
  const [newAnnouncementSeverity, setNewAnnouncementSeverity] = useState('ordinary');
  const [activeTab, setActiveTab] = useState('create');
  const [editAnnouncementId, setEditAnnouncementId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [severityFilter, setSeverityFilter] = useState('all');

  const handleTitleChange = (e) => {
    setNewAnnouncementTitle(e.target.value);
  };

  const handleTextChange = (e) => {
    setNewAnnouncementText(e.target.value);
  };

  const handleSeverityChange = (e) => {
    setNewAnnouncementSeverity(e.target.value);
  };

  const handleCreateAnnouncement = () => {
    if (newAnnouncementTitle.trim() !== '' && newAnnouncementText.trim() !== '') {
      if (editAnnouncementId !== null) {
        setShowUpdateModal(true);
      } else {
        // Add new announcement
        setAnnouncements([
          ...announcements,
          {
            id: Date.now(),
            title: newAnnouncementTitle,
            text: newAnnouncementText,
            severity: newAnnouncementSeverity,
          },
        ]);
        setNewAnnouncementTitle('');
        setNewAnnouncementText('');
        setNewAnnouncementSeverity('ordinary');
      }
    }
  };

  const handleEditAnnouncement = (id) => {
    const announcementToEdit = announcements.find((announcement) => announcement.id === id);
    if (announcementToEdit) {
      setNewAnnouncementTitle(announcementToEdit.title);
      setNewAnnouncementText(announcementToEdit.text);
      setNewAnnouncementSeverity(announcementToEdit.severity);
      setEditAnnouncementId(id);
      setActiveTab('create');
    }
  };

  const handleUpdateAnnouncement = () => {
    // Update announcement
    const updatedAnnouncements = announcements.map((announcement) =>
      announcement.id === editAnnouncementId
        ? {
            ...announcement,
            title: newAnnouncementTitle,
            text: newAnnouncementText,
            severity: newAnnouncementSeverity,
          }
        : announcement
    );
    setAnnouncements(updatedAnnouncements);
    setEditAnnouncementId(null);
    setNewAnnouncementTitle('');
    setNewAnnouncementText('');
    setNewAnnouncementSeverity('ordinary');
    setShowUpdateModal(false);
  };

  const handleDeleteAnnouncement = (id) => {
    setEditAnnouncementId(id);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    // Delete announcement
    const updatedAnnouncements = announcements.filter((announcement) => announcement.id !== editAnnouncementId);
    setAnnouncements(updatedAnnouncements);
    setEditAnnouncementId(null);
    setShowDeleteModal(false);
  };

  const handleCloseModal = () => {
    setShowUpdateModal(false);
    setShowDeleteModal(false);
  };

  const handleSeverityFilterChange = (e) => {
    setSeverityFilter(e.target.value);
  };

  const filteredAnnouncements =
    severityFilter === 'all'
      ? announcements
      : announcements.filter((announcement) => announcement.severity === severityFilter);

  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'create' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('create');
              setNewAnnouncementTitle('');
              setNewAnnouncementText('');
              setNewAnnouncementSeverity('ordinary');
              setEditAnnouncementId(null);
            }}
          >
            Create Announcement
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'view' ? 'active' : ''}`}
            onClick={() => setActiveTab('view')}
          >
            View Announcements
          </button>
        </li>
      </ul>

      <div className="tab-content mt-3">
        {activeTab === 'create' && (
          <div>
            <div className="card mb-3">
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="announcementTitle" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="announcementTitle"
                    value={newAnnouncementTitle}
                    onChange={handleTitleChange}
                    placeholder="Enter announcement title"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="announcementText" className="form-label">
                    Text
                  </label>
                  <textarea
                    className="form-control"
                    id="announcementText"
                    rows="3"
                    value={newAnnouncementText}
                    onChange={handleTextChange}
                    placeholder="Enter your announcement text"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="announcementSeverity" className="form-label">
                    Severity
                  </label>
                  <select
                    className="form-select"
                    id="announcementSeverity"
                    value={newAnnouncementSeverity}
                    onChange={handleSeverityChange}
                  >
                    <option value="important">Important</option>
                    <option value="ordinary">Ordinary</option>
                    <option value="critical">Critical</option>
                  </select>
                </div>
                <button className="btn btn-primary" onClick={handleCreateAnnouncement}>
                  {editAnnouncementId !== null ? 'Update Announcement' : 'Post Announcement'}
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'view' && (
          <div>
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
            <h3>Announcements</h3>
            {filteredAnnouncements.map((announcement) => (
              <div
                className={`card mb-3 ${
                  announcement.severity === 'ordinary'
                    ? 'bg-lightgreen'
                    : announcement.severity === 'important'
                    ? 'bg-green'
                    : 'bg-red'
                }`}
                key={announcement.id}
              >
                <div className="card-body">
                  <h5 className="card-title">{announcement.title}</h5>
                  <p className="card-text">{announcement.text}</p>
                  <small className="text-muted">Severity: {announcement.severity}</small>
                  <br />
                  <button
                    className="btn btn-warning btn-sm mx-2"
                    onClick={() => handleEditAnnouncement(announcement.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDeleteAnnouncement(announcement.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Update Confirmation Modal */}
      <Modal show={showUpdateModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to update this announcement?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdateAnnouncement}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this announcement?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AnnouncementTab;
