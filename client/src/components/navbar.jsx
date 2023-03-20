import 'bootstrap/dist/css/bootstrap.min.css';  
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';

function LandingNavBar() {
  return (
    <Navbar bg="warning" expand="md" className="land-nav">  
    <Container>  
        <Navbar.Brand href="/">MyCab</Navbar.Brand>  
      <Navbar.Toggle aria-controls="basic-navbar-nav" />  
        <Navbar.Collapse id="basic-navbar-nav">  
        <Nav className="ms-auto me-3">  
          <NavDropdown title="Registration" id="basic-nav-dropdown">  
            <NavDropdown.Item href="/register">Customer</NavDropdown.Item>     
          </NavDropdown>  
          <Nav.Link href="/login">Login</Nav.Link> 
        </Nav>  
      </Navbar.Collapse>  
    </Container>  
  </Navbar>     
  );
}

export default LandingNavBar;