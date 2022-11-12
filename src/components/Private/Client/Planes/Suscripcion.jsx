import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import {useState, useEffect} from 'react'
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import Suscribirse from './components/Suscribirse';
import Form from 'react-bootstrap/Form'

const URI = 'http://localhost:4000/api/planes/'
const URI2 = 'http://localhost:4000/api/suscripcion'

const Suscripcion = () => {

  const [active, setActive] = useState("Planes");
  const [plan, setPlan] = useState([]);
 
  const [suscripcion, setSuscripcion] = useState({ idPlan:'', idCliente: '' })
  
  useEffect( ()=>{
      getPlanes()
  },[])

  //procedimineto para mostrar todos los blogs
  const getPlanes = async () => {
      const res = await axios.get(URI)
      setPlan(res.data)
  } 
 
  //hacer la suscripcion
  const inputChange = ({target}) => {
    const {name , value } = target
    setSuscripcion({
      ...suscripcion,
      [name] : value
    })
  }  
  
  const Suscripcion = () =>{
    axios.post('http://localhost:4000/api/suscripcion', suscripcion)
    .then(({data}) =>{
        console.log(data)
    })
    .catch(({response})=>{
      console.log(response.data)
    })
}

  
  return (
  <div>

    <h1 id = "title_planes">Planes</h1>
    <Container id ="contenedor_planes">
      <Row>
      <Col>
        
        { plan.map ( (plan) => (
            <Card id = "plan" key={ plan.Planes}>
              
              <text>Nombre Plan : {plan.Nombre}</text>
              <text>Nombre Plan : {plan.Precio}</text>
              <text>Nombre Plan : {plan.Horas}</text>
              <text>Nombre Plan : {plan.idPlanes}</text>
  
            </Card>
        )) }

      </Col>
      <Col>
        <Form onSubmit={Suscripcion}>

                <Form.Group className="mb-3">
                      <Form.Label htmlFor="disabledSelect">Cliente</Form.Label>
                      <Form.Select id="disabledSelect"
                        value = {suscripcion.idCliente}
                        name = 'idCliente'
                        onChange = {inputChange}
                      >
                        <option>{localStorage.getItem("idClientes")}</option>
                        <option>{localStorage.getItem("idClientes")}</option>
                      </Form.Select>
                </Form.Group>

              <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledSelect">Seleccionar Plan</Form.Label>
              <Form.Select id="disabledSelect"
                value = {suscripcion.idPlan}
                onChange = {inputChange}
                name = 'idPlan'
              
              >
              { plan.map ( (plan) => (
                <option>
                  {plan.idPlanes}
                </option>
              )) }
              </Form.Select>
              </Form.Group>
              <Button variant='success' type='submit'>Suscribirme</Button>

          </Form>    
      </Col>
      </Row>
    </Container>

  </div>
  )
}

export default Suscripcion
