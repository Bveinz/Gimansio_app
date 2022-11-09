import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Suscripcion from './Suscripcion';

const SeleccionPlan = () => { 

      const [active, setActive] = useState("FirstCard");


  return (
    <div>
        <Row>
            <Col>
                  <Card id = "menu_b"><Button onClick={() => setActive("Suscripcion")} id = "b_ds">Mi Suscripcion</Button></Card>
            </Col>
            <Col>
                  <Card id = "menu_b"><Button  onClick={() => setActive("VerPlanes")}  id = "b_ds">Ver Planes</Button></Card>
            </Col>
            <Col>
                  <Card id = "menu_b"><Button  onClick={() => setActive("Contratar")}  id = "b_ds">Seleccionar Plan</Button></Card>
            </Col>
        </Row>
        {active === "Suscripcion" && <Suscripcion/>}
        {active === "VerPlanes" && <Suscripcion/>}
        {active === "Contratar" && <Suscripcion/>}

  </div>
  )
}

export default SeleccionPlan;