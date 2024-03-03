import React, { useState } from 'react'
import { Navbar } from '../navbar/Navbar';
import { Login } from '../login/Login';


export const Principal = () => {



  return (
    <>
    <Navbar />
    <div className=' h-full overflow-hidden flex justify-center items-center'>
      <div className=' flex justify-between pt-10 mt-8 h-full w-[1350px] bg-gray-400 rounded-xl shadow-md shadow-gray-500 '>
        <div className=' flex flex-col justify-between h-[455px] w-[600px] mb-8'>
          <div className=' flex flex-col justify-center items-center gap-y-8'>
            <img src="src/images/inventario.png" alt="Inventario" className=' h-[100px]' />            
            <a href="#">
            <h1 className=' text-5xl font-serif text-stone-50'>Reporte de inventario</h1>
            </a>
          </div>
          <div className=' flex flex-col justify-center items-center gap-y-8'>           
            <img src="src/images/ventas.png" alt="Control de Stock" className=' h-[100px]' /> 
            <a href="#">           
            <h1 className=' text-5xl font-serif text-stone-50'>Control de Ventas</h1>
            </a>
          </div>      
        </div>
        <div className=' flex flex-col justify-between h-[455px] w-[600px] mb-8' >
        <div className=' flex flex-col justify-center items-center gap-y-8'>
            <img src="src/images/compras.png" alt="Compras" className=' h-[100px]' />  
            <a href="#">
            <h1 className=' text-5xl font-serif text-stone-50'>Compras</h1>
            </a>          
          </div>
          <div className=' flex flex-col justify-center items-center gap-y-8'>
            <img src="src/images/balance.png" alt="Balance" className=' h-[100px]' />
            <a href="#">
            <h1 className=' text-5xl font-serif text-stone-50'>Balance</h1>
            </a>                        
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
