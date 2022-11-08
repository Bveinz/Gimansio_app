import React from 'react'
import { Link } from 'react-router-dom'
import { CLIENTES, LOGOUT, PRIVATE } from '../../../config/Routes'
import { Navigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import {useState, useEffect} from 'react'
import Clients from './Panel/Clients';
import Instructores from './Panel/Instructores';
import Planes from './Panel/Planes';


const AdminPanel = () => {

  const [active, setActive] = useState("FirstCard");
 
  if (localStorage.getItem("idClientes") != 4){
    return <Navigate to={PRIVATE} />;
  }
  
  return (
    <div id = "panel">
    <h1 id ="panel_title">Panel de Administracion</h1>
   <Container id="panel_container">
    <Row>
      <Col className='col-lg-3'>
        <h2> Bienvenido {localStorage.getItem("username")}</h2 >
        <Card id ="boton">
          <Button onClick={() => setActive("Clientes")}>Clientes</Button>
        </Card>
        <br />
        <Card id ="boton">
          <Button onClick={() => setActive("Planes")}>Planes</Button>
        </Card>
        <br />
        <Card id ="boton">
          <Button onClick={() => setActive("Instructores")}>Instructores</Button>
        </Card>
        <br />
        <Card id ="boton">
          <Link>Pagos</Link>
        </Card>
        <br />
        <Card  className='bg-danger' id ="boton">
          <Link to= {LOGOUT}>Salir</Link>
        </Card>
      </Col>
      <Col id ="menu" className='col-lg-9'>
          {active === "Clientes" && <Clients/>}
          {active === "Instructores" && <Planes/>}   
          {active === "Planes" && <Planes/>}             
      </Col>
    </Row>
  </Container>
  </div>
  )
}

export default AdminPanel