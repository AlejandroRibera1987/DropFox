import React from 'react'


export const Login = () => {
  return (
    <main className=' h-screen w-screen flex justify-start items-center px-32' >
      <div className='flex flex-col justify-start items-center gap-y-8'>
          <h1 className='text-black text-7xl'>DropFox</h1>
          <div className=' bg-slate-400 h-[400px] w-[400px] flex flex-col justify-center items-center bg-opacity-50 rounded-lg shadow-lg shadow-gray-500 gap-y-6'>
            <h2 className=' text-white font-light text-4xl mt-4'>Inicio Sesión</h2> 
            <form action="" className=' flex flex-col gap-y-2 w-[300px]'>
              <h2 className=' text-center text-white font-light text-2xl'>Usuario:</h2>
              <input type="text" className=' w-full text-center rounded-lg py-1'/>
              <h2 className=' text-center text-white font-light text-2xl'>Contraseñas:</h2>
              <input type="password" className=' w-full text-center rounded-lg py-1'/>
            </form>
          <div className=' flex justify-between gap-x-7'>
            <div className=' flex justify-start flex-col'>
              <p className=' text-blue-600 text-[15px]'><a href="#">Olvidaste tu Contraseña?</a></p>
              <p className=' text-blue-600 text-[15px]'><a href="#">Olvidaste tu Usuario?</a></p>
            </div>
            <div className=' flex items-center justify-center'>
              <button className=' bg-green-500 w-[80px] h-10 rounded-xl border-solid border-blue-200 font-light text-white hover:bg-blue-500'>Ingresar</button>
            </div>
          </div>
          </div>
      </div>
    </main>
  )
}
