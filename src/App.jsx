import './App.css'
import { Principal } from './contents/principal/Principal'
import { Login } from './contents/login/Login'
import { Route, Routes, BrowserRouter, Link, Navigate } from 'react-router-dom'
import { Compras } from './contents/compras/Compras'
import { Balance } from './contents/balance/Balance'
import { Stock } from './contents/stock/Stock'
import { Usuarios } from './contents/usuarios/Usuarios'
import { Ventas } from './contents/ventas/Ventas'
import { Clientes } from './contents/clientes/Clientes'

const user = [
  { 
    usuario: '32890754',
    pass: '1234',
    log: true
  }
]

function App() {

  const Islog = user.some(( usuario ) => usuario.log === true ) 
  console.log("Valor de Islog:", Islog);

  return (
    <BrowserRouter>
        {Islog 
        ? 
          <Routes>
            <Route path="/" element={<Principal />} />
            <Route path='Compras' element={<Compras />} />
            <Route path='Ventas' element={<Ventas />} />
            <Route path='Stock' element={<Stock />} />
            <Route path='Balance' element={<Balance />} />
            <Route path='Clientes' element={<Clientes />} />
            <Route path='Usuarios' element={<Usuarios />} />
            <Route path='*' element={<Navigate to="/" />} />
          </Routes>
         : 
          <Routes>
            <Route path='/' element={<Navigate to="/Login" />}/> 
            <Route path="/Login" element={<Login />} />
          </Routes>
        }
        
    </BrowserRouter>
  )
}

export default App
