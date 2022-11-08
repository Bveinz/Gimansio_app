import {useEffect} from 'react';
import {useAuthContext} from '../contexts/authContext';

function Logout() {
  const {logout} = useAuthContext();
  
  useEffect(() => logout());
  localStorage.removeItem("idClientes")
  localStorage.removeItem("ApellidoPaterno")
  localStorage.removeItem("ApellidoMaterno")
  localStorage.removeItem("Rut")
  localStorage.removeItem("Nombre")


  return null;
}

export default Logout;
