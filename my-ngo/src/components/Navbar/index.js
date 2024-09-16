import React from 'react';
import NGOSection from '../NGOSection';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyNavbar() {
  return (
    <>
    <NGOSection />
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">
      <div style={styles.logoContainer}>
        <img
          src="https://via.placeholder.com/150x50?text=NGO+Logo"
          alt="NGO Logo"
          style={styles.logo}
        />
      </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <Nav.Link href="#link">About Us</Nav.Link>
          <Nav.Link href="#link">Our Programs</Nav.Link>
          <Nav.Link href="#link">Get Involved</Nav.Link>
          <Nav.Link href="#link">Donate</Nav.Link>
          <Nav.Link href="#link">Success Stories</Nav.Link>
          <Nav.Link href="#link">News & Updates</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
    
  );
}

const styles= {
    logoContainer: {
        marginBottom: '20px',
      },
      logo: {
        maxWidth: '150px',
        height: 'auto',
      },
}
export default MyNavbar;
