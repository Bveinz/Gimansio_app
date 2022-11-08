import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {REGISTRO, PRIVATE, PRIVATEHOME, LOGIN, LOGOUT, SERVICIOS, CONTACTO, NOSOTROS, ADMIN} from './config/Routes'
import Register from './components/Register';
import AuthContextProvider from './contexts/authContext'
import PrivateRoute from './router/PrivateRoute'
import PublicRoute from './router/PublicRoute';
import Logout from './contexts/Logout';
import Login2 from './components/Login2'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage';
import Servicios from './components/views/Servicios';
import Contacto from './components/views/Contacto';
import Nosotros from './components/views/Nosotros';
import Dashboard from './components/Private/Client/Dashboard';
import AdminPanel from './components/Private/Admin/AdminPanel'

function App() {
  return (
    <>
    <AuthContextProvider>
    <BrowserRouter>
    <Navbar></Navbar>
        <Routes>
          <Route path={PRIVATE} element={<PrivateRoute/>}>
              <Route index element ={<Dashboard/>}/>
              <Route path={PRIVATEHOME} element={<Dashboard/>}/>
              <Route path={LOGOUT} element={<Logout/>} />
              {/* admin routes */}
              <Route path={ADMIN} element={<AdminPanel/>}></Route>
          </Route>    
           
          <Route path="/" element = {<PublicRoute/>}>
            <Route index element= {<HomePage/>}/>
            <Route path={LOGIN} element={<Login2/>}/>
            <Route path={REGISTRO} element ={<Register/>}/>
            <Route path={SERVICIOS} element ={<Servicios/>}/>
            <Route path={CONTACTO} element ={<Contacto/>}/>
            <Route path={NOSOTROS} element ={<Nosotros/>}/>
          </Route>
        </Routes>
     </BrowserRouter>
    </AuthContextProvider>
    </>
  );
}
export default App;
