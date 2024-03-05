import React, { useState } from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom'


export const Navbar = () => {

    const [ toggleDrop, setToggleDrop ] = useState( false )

    const active = () => {
      setToggleDrop(!toggleDrop)
    }  

  return (
    <nav className=' w-screen flex justify-between items-center shadow-xl shadow-gray-700 py-3 px-6 bg-[#3c6382]'>
    <h1 className=' text-5xl font-serif px-1 text-stone-50'><Link to='/'>StockFlow</Link></h1>
    <div className=' flex items-center justify-center w-full'>
      <ul className=' gap-x-6 flex'>
          <li className=' text-stone-50 hover:text-black hover:cursor-pointer'><Link to='/Ventas'>Ventas</Link></li>
          <li className=' text-stone-50 hover:text-black hover:cursor-pointer'><Link to='/Stock'>Stock</Link></li>
          <li className=' text-stone-50 hover:text-black hover:cursor-pointer'><Link to='/Compras'>Compras</Link></li>
          <li className=' text-stone-50 hover:text-black hover:cursor-pointer'><Link to='/Clientes'>Clientes</Link></li>
          <li className=' text-stone-50 hover:text-black hover:cursor-pointer'><Link to='/Balance'>Balance</Link></li>
          <li className=' text-stone-50 hover:text-black hover:cursor-pointer'><Link to='/Usuarios'>Usuarios</Link></li>
        </ul>
    </div>  
    <div className=' '>
      <div className=' relative flex flex-col justify-center pr-7'>
        <button onClick={active}><FaRegUserCircle className=' text-3xl text-center text-stone-50 '/></button>
        { toggleDrop && (
          <div className=' flex flex-col gap-y-10 justify-center px-4 py-6 items-center top-12 right-[-20px] h-auto w-[350px] rounded-bl-xl shadow-lg shadow-gray-300 bg-[#3c6382] absolute'>
            <p className=' text-[18px] text-stone-50'>alejandro@hotmail.com</p>
            <div className=' w-full flex items-center justify-center'>
            < button className=' border border-black px-6 py-3 rounded-md font-serif hover:bg-red-500 ease-in duration-150'>Cerrar Sesión</button>
            </div>
          </div>
        )}            
      </div>
    </div>
  </nav>
  )
}
