import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import {useState, useEffect} from 'react'

const URI = 'http://localhost:4000/api/planes/'

const TablaPlanes = () => {

  const [plan, setPlan] = useState([])
  useEffect( ()=>{
      getPlanes()
  },[])

  //procedimineto para mostrar todos los blogs
  const getPlanes = async () => {
      const res = await axios.get(URI)
      setPlan(res.data)
  }

  //procedimineto para eliminar un blog
  const deleteBlog = async (id) => {
     await axios.delete(`${URI}${id}`)
     getPlanes()
  }  
  return (
    <div>
        <h2>Tabla de Planes</h2>
         <div className='container'>
            <div className='row'>
                <div className='col'>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Horas</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            { plan.map ( (plan) => (
                                <tr key={ plan.idClientes}>
                                    <td> { plan.Nombre } </td>
                                    <td> { plan.Precio } </td>
                                    <td> { plan.Horas } </td>
                                    <td>
                                        <Link to={`/edit/${plan.id}`} className='btn btn-info'>Editar<i className="fas fa-edit"></i></Link>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>    
            </div>
        </div>
  </div>
  )
}

export default TablaPlanes