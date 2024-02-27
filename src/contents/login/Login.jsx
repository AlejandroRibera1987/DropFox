import React from 'react'
import { Link } from 'react-router-dom'


export const Login = () => {
  return (
    <main className=' h-screen w-screen flex justify-start items-center px-32' >
      <div className='flex flex-col justify-start items-center gap-y-8'>
          <h1 className=' text-blue-400 font-serif text-7xl rounded'>DropFox</h1>
          <div className=' bg-slate-400 h-[400px] w-[400px] flex flex-col justify-center items-center bg-opacity-50 rounded-lg shadow-lg shadow-gray-500 gap-y-6'>
            <h2 className=' text-white font-serif text-4xl mt-4'>Iniciar Sesión</h2> 
            <form action="" className=' flex flex-col gap-y-2 w-[300px]'>
              <h2 className=' text-center text-white font-serif text-2xl'>Usuario:</h2>
              <input type="text" className=' w-full text-center rounded-lg py-1'/>
              <h2 className=' text-center text-white font-serif text-2xl'>Contraseña:</h2>
              <input type="password" className=' w-full text-center rounded-lg py-1'/>
            </form>
          <div className=' flex justify-between gap-x-7'>
            <div className=' flex justify-start flex-col'>
              <p className=' text-gray-800 text-[12px] font-medium'><a href="#">RECUPERAR USUARIO</a></p>
              <p className=' text-gray-800 text-[12px] font-medium'><a href="#">RECUPERAR CONTRASEÑA</a></p>
            </div>
            <div className=' flex items-center justify-center'>
              <button className=' bg-blue-500 w-[80px] h-10 rounded-xl border-solid border-blue-200 font-serif text-black hover:bg-blue-500 ml-6'><Link to='/Principal'>Ingresar</Link></button>
            </div>
          </div>
          </div>
      </div>
    </main>
  )
}
