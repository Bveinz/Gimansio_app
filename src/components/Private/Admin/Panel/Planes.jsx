import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import {useState} from 'react'
import AgregarPlan from './AgregarPlan'
import TablaPlanes from './TablaPlanes'
import Prueba from './Prueba';

const Planes = () => {

  const [active, setActive] = useState("");

  return (
    <div>
        <h2>Tabla de Planes</h2>
         <div className='container'>
            <div className='row'>
                <div className='col'>
                  <Button onClick={() => setActive("AgregarPlan")}>AgregarPlan</Button>
                  <Button onClick={() => setActive("Planes")}>Ver Planes</Button>
                    {active === "AgregarPlan" && <AgregarPlan/>}
                    {active === "Planes" && <TablaPlanes/>}
                </div>    
            </div>
        </div>
  </div>
  )
}

export default Planes