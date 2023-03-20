import 'bootstrap/dist/css/bootstrap.min.css';  
import { Navbar, Container } from 'react-bootstrap';

function HomeNavBar() {
  return (
    <Navbar bg="warning" expand="md" className="home-nav">  
    <Container>  
        <Navbar.Brand href="/homepage">MyCab</Navbar.Brand>  
      <Navbar.Toggle aria-controls="basic-navbar-nav" />  
    </Container>  
  </Navbar>     
  );
}

export default HomeNavBar;