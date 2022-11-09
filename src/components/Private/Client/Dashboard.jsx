import React from 'react'
import { Link } from 'react-router-dom'
import { LOGOUT } from '../../../config/Routes'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import SeleccionPlan from './Planes/PanelPlanes';
import Perfil from './MisDatos/Perfil';


const Dashboard = () => {
  const [active, setActive] = useState("FirstCard");

  return (
    <div>
        <Container>
          <Row md={4}>
            <Col xs = {4}>
              <h1 id = "title_panel">Panel</h1>
              <Card id = "menu_b"><Button id = "b_ds" onClick={() => setActive("Datos")}>Mis Datos</Button></Card>
              <Card id = "menu_b"><Button id = "b_ds" onClick={() => setActive("Planes")} >Mi Plan</Button></Card>
              <Card id = "menu_b"><Button id = "b_ds" onClick={() => setActive("Pagos")}>Mis Pagos</Button></Card>
              <Card id = "menu_b"><Button id = "b_ds" onClick={() => setActive("Soporte")} >Soporte</Button></Card>
              <Card id = "menu_b"><Button href={LOGOUT} id = "salir">Salir</Button></Card>
            </Col>
            <Col id = "render" xs={7} md={8}>
              {active === "Planes" && <SeleccionPlan/>}
              {active === "Datos" && <Perfil/>}
              {active === "Pagos" && <SeleccionPlan/>}
              {active === "Soporte" && <SeleccionPlan/>}
            </Col>
          </Row>
        </Container>
        
    </div>
  )
}

export default Dashboard