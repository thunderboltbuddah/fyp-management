import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function FormDetails(props) {
  const [formData, setFormData] = useState({
    acceptance: '', // Initialize form data
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    setFormData({
      acceptance: '',
    });
    props.onHide(); 
  };

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="acceptance">Would you approve XYZ as the supervision project?</label>
            <select
              className="form-control"
              id="acceptance"
              name="acceptance"
              value={formData.acceptance}
              onChange={handleInputChange}
            >
              <option value="">Please select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <br/>
          <button type="submit" className="btn btn-primary">Save Changes</button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FormDetails;
