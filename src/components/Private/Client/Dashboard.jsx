import React from 'react'
import { Link } from 'react-router-dom'
import { LOGOUT } from '../../../config/Routes'

const Dashboard = () => {


  return (
    <div>
        <h1>Dashboard Privado</h1>
        <h2> Bienvenido {localStorage.getItem("Nombre")}</h2>
        <h2>User id {localStorage.getItem("idClientes")}</h2>
        <h3>Nombre {localStorage.getItem("ApellidoPaterno")}</h3>
        <h3>Rut: {localStorage.getItem("Rut")}</h3>
        <Link to={LOGOUT}>Salir</Link>
        
    </div>
  )
}

export default Dashboard