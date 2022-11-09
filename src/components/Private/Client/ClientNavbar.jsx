import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ClientNavbar() {
  
    return (
      <Navbar id="navbar" expand="lg">
      
      <Container>
      <Navbar.Brand id="titulo1"href="/">UNDPRECEDENTED</Navbar.Brand>
        <Navbar.Toggle id="c-item" aria-controls="basic-navbar-nav"   />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
           <Nav.Link id='l-nav' href='/'>Bienvenido : {localStorage.getItem("Nombre")}</Nav.Link>
          </Nav>
          <Card id = "menu_b"><Button id = "salir">Salir</Button></Card>
        </Navbar.Collapse>
      
      </Container>
   
    </Navbar>
  );
}

export default ClientNavbar;