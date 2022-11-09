import React from 'react'

const Perfil = () => {
  return (
    <div>
        <h2>Nombre: {localStorage.getItem("Nombre")}</h2>
        <h2>Rut : {localStorage.getItem("Rut")}</h2>
        <h2>Apellido paterno : {localStorage.getItem("ApellidoPaterno")}</h2>
        <h2>Apellido Materno : {localStorage.getItem("ApellidoMaterno")}</h2>
    </div>
  )
}

export default Perfil