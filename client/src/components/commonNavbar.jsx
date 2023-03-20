import 'bootstrap/dist/css/bootstrap.min.css';  
import { Navbar, Container } from 'react-bootstrap';

function CommonNavBar() {
  return (
    <Navbar bg="warning" expand="md" className="land-nav">  
    <Container>  
        <Navbar.Brand href="/">MyCab</Navbar.Brand>  
      <Navbar.Toggle aria-controls="basic-navbar-nav" />  
    </Container>  
  </Navbar>     
  );
}

export default CommonNavBar;