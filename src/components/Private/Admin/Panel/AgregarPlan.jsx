import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


const AgregarPlan = () => {

    const [plan, setPlan] = useState({nombre:'', precio :'', horas:''}) 

    const inputChange = ({target}) => {
        const {name , value } = target
        setPlan({
          ...plan,
          [name] : value
        })
      }

    const Validar = () =>{
        axios.post('http://localhost:4000/api/planes/agregar', plan)
        .then(({data}) =>{
            console.log("Plan Registrado")
        })
        .catch(({response})=>{
          console.log(response.data)
        })
    }
  return (
    <div>
        <Container>
        <Row>
            <Col><h1>Ingresar Plan</h1></Col>
            <Col>
                <Form onSubmit={Validar}>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type='texto'
                        value={plan.nombre}
                        name='nombre'
                        placeholder='ingresa tu nombre'
                        onChange={inputChange}
                        required
                    />
                    <Form.Label>Precio</Form.Label>
                    <Form.Control
                        value={plan.precio}
                        name='precio'
                        type='texto'
                        placeholder='ingresa tu Apellido Paterno'
                        onChange={inputChange}
                        required
                    />
                    <Form.Label>Horas</Form.Label>
                    <Form.Control
                        value={plan.horas}
                        name='horas'
                        type= "number"
                        placeholder='ingresa la cantidad de horas'
                        onChange={inputChange}
                        required
                    />
                    <Button variant='success' type='submit'>Ingresar Plan</Button>
                </Form>         
            </Col>
            <Col><h1>Ingresar Plan</h1></Col>
        </Row>
        </Container>
    </div>
  )
}

export default AgregarPlan