import './App.css'
import { Principal } from './contents/principal/Principal'
import { Login } from './contents/login/Login'
import { Route, Routes, BrowserRouter, Link, Navigate } from 'react-router-dom'


const user = [
  { 
    usuario: '32890754',
    pass: '1234',
    log: false
  }
]

function App() {

  const Islog =  user.some(( usuario ) => usuario.log === true ) 
  console.log("Valor de Islog:", Islog);

  return (
    <BrowserRouter>
        {Islog 
        ? 
          <Routes>
            <Route path="/" element={<Principal />} />
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
