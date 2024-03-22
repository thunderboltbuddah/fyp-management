import React, { useState } from 'react';
import { Button, Modal, Form, Tabs, Tab } from 'react-bootstrap';
import PendingSubmissionTab from './PendingSubmissionTab';
import SubmittedSubmissionsTab from './SubmittedSubmissionsTab';

const Milestones = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ file: null });
  const [milestones, setMilestones] = useState([
    // Your milestones data
  ]);

  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setFormData({ file: null });
  };

  const handleUpload = () => {
    // Handle upload logic here
    console.log('Uploading file:', formData.file);
    handleClose();
  };

  const handleUnsubmit = (index) => {
    // Handle unsubmission logic here
    console.log('Unsubmitting milestone:', index);
    // Remove the submission from the submitted list
    const updatedSubmissions = submittedSubmissions.filter((_, i) => i !== index);
    setSubmittedSubmissions(updatedSubmissions);
  };

  // Dummy data for pending submissions
  const pendingSubmissions = [
    {
      title: 'Complete Project A',
      supervisor: 'John Doe',
      dueDate: '2023-12-31',
    },
    {
      title: 'Submit Final Report',
      supervisor: 'Jane Smith',
      dueDate: '2024-01-15',
    },
  ];

  // Dummy data for submitted submissions
  const [submittedSubmissions, setSubmittedSubmissions] = useState([
    {
      title: 'Complete Project A',
      fileName: 'project_a_report.pdf',
      submissionTime: '2023-12-30 10:30 AM',
    },
    {
      title: 'Submit Final Report',
      fileName: 'final_report.docx',
      submissionTime: '2024-01-15 03:45 PM',
    },
  ]);

  return (
    <div>
      <Tabs className='mb-4' defaultActiveKey="pending" id="uncontrolled-tab-example">
      
        <Tab eventKey="pending" title="Pending Submissions">
          <PendingSubmissionTab
            pendingSubmissions={pendingSubmissions}
            showModal={showModal}
            handleClose={handleClose}
            handleUpload={handleUpload}
            formData={formData}
            setFormData={setFormData}
          />
        </Tab>
        <Tab eventKey="submitted" title="Submitted Submissions">
          <SubmittedSubmissionsTab
            submittedSubmissions={submittedSubmissions}
            handleUnsubmit={handleUnsubmit}
          />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Milestones;
