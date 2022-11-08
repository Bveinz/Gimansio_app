import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


const Register = () => {
    const [usuario, setUsuario] = useState({nombre:'', apellido_paterno:'',apellido_materno: '', rut: '', fecha_nacimiento:'', password:''}) 

    const inputChange = ({target}) => {
        const {name , value } = target
        setUsuario({
          ...usuario,
          [name] : value
        })
      }

    const Validar = () =>{
        axios.post('http://localhost:4000/api/registro', usuario)
        .then(({data}) =>{
            console.log(data)
        })
        .catch(({response})=>{
          console.log(response.data)
        })
    }

  return (
    <div>
        <Container>
        <Row>
            <Col><h1>Registrarme</h1></Col>
            <Col>
                <Form onSubmit={Validar}>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type='texto'
                        value={usuario.nombre}
                        name='nombre'
                        placeholder='ingresa tu nombre'
                        onChange={inputChange}
                        required
                    />
                    <Form.Label>Apellido Paterno</Form.Label>
                    <Form.Control
                        value={usuario.apellido_paterno}
                        name='apellido_paterno'
                        type='texto'
                        placeholder='ingresa tu Apellido Paterno'
                        onChange={inputChange}
                        required
                    />
                    <Form.Label>Apellido Materno</Form.Label>
                    <Form.Control
                        value={usuario.apellido_materno}
                        name='apellido_materno'
                        type='texto'
                        placeholder='ingresa tu Apellido Materno'
                        onChange={inputChange}
                        required
                    />
                    <Form.Label>Rut</Form.Label>
                    <Form.Control
                        value={usuario.rut}
                        name='rut'
                        type='texto'
                        placeholder='ingresa tu Rut'
                        onChange={inputChange}
                        required
                    />
                    <Form.Label>Fecha Nacimiento</Form.Label>
                    <Form.Control
                        value={usuario.fecha_nacimiento}
                        name='fecha_nacimiento'
                        type='date'
                        onChange={inputChange}
                        required
                    />
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password" 
                        placeholder="contraseña" 
                        value= {usuario.password}
                        name = 'password'
                        onChange={inputChange}
                        required
                    />
                    <Button variant='success' type='submit'>Registrarme</Button>
                </Form>         
            </Col>
            <Col><h1>Registrarme</h1></Col>
        </Row>
        </Container>
    </div>
  )
}

export default Register