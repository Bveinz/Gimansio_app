import React from 'react'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import {useState, useEffect} from 'react'


const URI = 'http://localhost:4000/api/clientes/'

const Clients = () => {

  const [active, setActive] = useState("table");

  const [blogs, setBlog] = useState([])
  useEffect( ()=>{
      getBlogs()
  },[])

  //procedimineto para mostrar todos los blogs
  const getBlogs = async () => {
      const res = await axios.get(URI)
      setBlog(res.data)
  }

  //procedimineto para eliminar un blog
  const deleteBlog = async (id) => {
     await axios.delete(`${URI}${id}`)
     getBlogs()
  }  
  return (
    <div>
        <h2>Tabla de Clientes</h2>
         <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/private/create" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"> Crear Blog</i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido Paterno</th>
                                <th>Apellido Materno</th>
                                <th>Rut</th>
                                <th>Fecha Nacimiento</th>
                            </tr>
                        </thead>
                        <tbody>
                            { blogs.map ( (blog) => (
                                <tr key={ blog.idClientes}>
                                    <td> { blog.Nombre } </td>
                                    <td> { blog.ApellidoPaterno } </td>
                                    <td> { blog.ApellidoMaterno } </td>
                                    <td> { blog.Rut}</td>
                                    <td>
                                        <Link to={`/edit/${blog.id}`} className='btn btn-info'>Editar<i className="fas fa-edit"></i></Link>
                                        <button onClick={()=>deleteBlog(blog.id) } className='btn btn-danger'>Eliminar<i className="fas fa-trash-alt"></i></button>
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

export default Clients