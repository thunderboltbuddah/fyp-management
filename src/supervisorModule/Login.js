import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

const LoginForm = () => {
  const [userType, setUserType] = useState('admin');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here based on userType and formData
    console.log('Logging in as:', userType, 'with data:', formData);
    // Reset the form after submission if needed
    setFormData({
      username: '',
      password: '',
    });
  };

  return (
    <Container className="mt-5 main w-50">
        <div className='text-center'>
        <h1>
            Enter Your Details
        </h1>
        <br/>
        </div>
       
      <Row className="justify-content-md-center ">
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="userType">
            <Form.Label>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"/>
</svg>  </Form.Label>
              <Form.Label>User Type</Form.Label>
              <Form.Control as="select" value={userType} onChange={(e) => handleUserTypeChange(e.target.value)}>
                <option value="admin">Admin</option>
                <option value="student">Student</option>
                <option value="supervisor">Supervisor</option>
              </Form.Control>
            </Form.Group>
<br/>
            <Form.Group controlId="username">
            <Form.Label>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"/>
</svg>  </Form.Label>
           
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </Form.Group>
<br></br>
            <Form.Group controlId="password">
            <Form.Label>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/>
</svg>   </Form.Label>
           
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </Form.Group>
<br></br>
          <div className='container'>
          <Link to="/" className='btn btn-primary w-25'>
             Login
             </Link>
            </div>    
            
              
         
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
