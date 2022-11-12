import React from 'react'
import axios from 'axios';
import {useState, useEffect} from 'react'


const URI = 'http://localhost:4000/api/misuscripcion'

const MiPlan = () => {

  //CONSULTA A LA BASE DE DATOS ...

  const [sucripcion, setSuscripcion] = useState([])
  useEffect( ()=>{
      getSuscripcion()
  },[])

  const getSuscripcion= async () => {
    const res = await axios.get(URI)
    setSuscripcion(res.data)
}

return (
    <div>
        <h1 id = "title_planes">Mi Plan</h1>
        <h1></h1>


    </div>
  )
}

export default MiPlan