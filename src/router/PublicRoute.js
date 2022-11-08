import {Navigate, Outlet} from 'react-router-dom';
import {PRIVATE,ADMIN} from '../config/Routes'
import {useAuthContext} from '../contexts/authContext';

export default function PublicRoute() {
  const {isAuthenticated} = useAuthContext();

  if (isAuthenticated) { 

    if (localStorage.getItem("idClientes") === "4"){
      return <Navigate to={ADMIN} />;
    }
    else{
      return <Navigate to={PRIVATE} />;
    }
  }
  return (
    <div>
      <Outlet />
    </div>
  );
}
