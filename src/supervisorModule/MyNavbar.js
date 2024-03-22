import React from 'react';
import { Navbar, Nav, Container, Button,Image } from 'react-bootstrap';
import logo from './logo.png'; // Replace with the actual path to your logo

const MyNavbar = () => {
  const userId = '123'; // Replace with the actual user ID

  const handleLogout = () => {
    // Handle logout logic here
    console.log('User logged out');
  };

  return (
    <>
      {/* First Navbar */}
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <Image src={logo} alt="Logo" height="30" className="d-inline-block align-top" />
            {' Fast FYP Hub'}
          </Navbar.Brand>
        </Container>
      </Navbar>

      {/* Second Navbar */}
      <Navbar bg="dark" variant="dark" className="">
        <Container>
          <Navbar.Text className="text-light">Welcome User ID: {userId}</Navbar.Text>
          <Nav className="ml-auto">
            <Button variant="outline-light" onClick={handleLogout}>
              Logout
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
