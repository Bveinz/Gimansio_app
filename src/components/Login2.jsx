import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import {useAuthContext} from '../contexts/authContext'
import { Link, Navigate } from 'react-router-dom';
import { REGISTRO } from '../config/Routes';

const Login = () => {

    const [body, setBody] = useState({username:'', password:''}) 
    const {login} = useAuthContext();
   
    const inputChange = ({target}) => {
      const {name , value } = target
      setBody({
        ...body,
        [name] : value
      })
    }

    const onSubmit = () => {
      axios.post('http://localhost:4000/api/login', body)
      .then(({data}) =>{
          console.log(data)
          login();
          localStorage.setItem("idClientes" , data.idClientes)
          localStorage.setItem("Nombre" , data.Nombre)
          localStorage.setItem("ApellidoPaterno" , data.ApellidoPaterno)
          localStorage.setItem("ApellidoMaterno" , data.ApellidoMaterno)
          localStorage.setItem("Rut", data.Rut)

          if(data.id === 1){
            // en esta validacion nos tiraremos con el admin authentication.
            localStorage.setItem("validacion" , true)

          }

      })
      .catch(({response})=>{
        console.log(response.data)
      })
    }

  return (
    <div>
        <Container>
        <Row>
            <Col><h1>LOGIN</h1></Col>
            <Col>
                <Form onSubmit={onSubmit}>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text" 
                        placeholder="ingresa tu nombre" 
                        value= {body.username}
                        name = 'username'
                        onChange={inputChange}
                        required
                    />
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password" 
                        placeholder="contraseña" 
                        value= {body.password}
                        name = 'password'
                        onChange={inputChange}
                        required

                    />
                    <Button variant='success' type='submit'>Ingresar</Button>
                    <Button variant='dark'><Link variant='success' to={REGISTRO}>Crear Cuenta</Link></Button>
                </Form>         
            </Col>
            <Col><h1>Login</h1></Col>
        </Row>
        </Container>
    </div>
  )
}

export default Login