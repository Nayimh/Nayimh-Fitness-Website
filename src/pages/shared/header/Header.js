import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';


const Header = () => {
  const { user, logOut } = useAuth();
    return (
        <div >
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" >
  <Container>
  <Navbar.Brand href="#home">Smart Fit</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
                <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      {/* <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
      <Nav.Link as={HashLink} to="/home#trainer">Trainer</Nav.Link> */}
      <Nav.Link as={HashLink} to="/experts">Our Trainer</Nav.Link>
      <Nav.Link as={HashLink} to="/tips">Tips</Nav.Link>
      {/* <Nav.Link as={HashLink} to="/home#contact">Contact Us</Nav.Link> */}
      <Nav.Link as={HashLink} to="/aboutUs">About Us</Nav.Link>
 
    </Nav>
    <Nav>
      <Nav.Link as={HashLink} to="/register">Register</Nav.Link>
      <Nav.Link as={HashLink} to="/Login">LogIn</Nav.Link>
                
      <Nav.Link eventKey={2}>Signed in as:   
                 
                   
                    { user?.displayName ? user?.displayName : user?.email}  
                </Nav.Link>
                {user?.email &&
                  <Nav.Link as={HashLink} to="/Login"><button onClick={logOut} className="btn-warning text-black">Logout</button></Nav.Link>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;