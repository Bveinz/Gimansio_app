import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useAuthContext} from '../contexts/authContext'
import PublicNavbar from './views/PublicNavbar';
import ClientNavbar from '../components/Private/Client/ClientNavbar'


function BasicExample() {

  const {isAuthenticated} = useAuthContext();

  if(isAuthenticated){
    return <ClientNavbar></ClientNavbar>
  }
  else{
    return <PublicNavbar></PublicNavbar> 
  }
  return (
    <Navbar id="navbar" expand="lg">
      
      <Container>
      <Navbar.Brand id="titulo1"href="/">Maestranza Leiva</Navbar.Brand>
        <Navbar.Toggle id="c-item" aria-controls="basic-navbar-nav"   />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
           <Nav.Link id='l-nav' href='/'>Home</Nav.Link>
            <Nav.Link id='l-nav' href="/servicios">Servicios</Nav.Link>
            <Nav.Link id='l-nav' href="/nosotros">Nosotros</Nav.Link>
            <Nav.Link id='l-nav' href="/contacto">Contacto</Nav.Link>
          </Nav>
           <Nav.Link href='/login' id='l-nav'>Ingresar</Nav.Link>
        </Navbar.Collapse>
      
      </Container>
   
    </Navbar>
  );
}

export default BasicExample;