import React from 'react'
import { Navbar } from '../navbar/Navbar'
import { IoIosSearch } from "react-icons/io";
import { TbCircleArrowUp } from "react-icons/tb";
import { TbCircleArrowDown } from "react-icons/tb";
import { FaRegTrashAlt } from "react-icons/fa";


export const Ventas = () => {
  return (
    <>
    <Navbar />
    <div className=' h-full overflow-hidden flex justify-center items-center'>
      <div className=' flex flex-col pt-10 mt-8 h-full w-[1350px] bg-gray-400 rounded-xl shadow-md shadow-gray-500 '>
        <div className=' flex justify-between gap-x-2 ml-5'>
          <div className=' flex flex-col'>
            <h1 className=' font-serif'>ID:</h1>
            <input type="text" className=' border rounded-md w-28 pl-2'/>
            <h1 className=' font-serif'>Nombre:</h1>
            <input type="text" className=' border rounded-md w-[400px] pl-2' />
            <h1 className=' font-serif'>Apellido::</h1>
            <input type="text" className=' border rounded-md w-[400px] pl-2' />
          </div>
          <div className=' flex flex-col'>
            <h1 className=' font-serif'>Email:</h1>
            <input type="mail" className=' border rounded-md w-[400px] pl-2' />
            <h1>DNI:</h1>
            <input type="text" className=' border rounded-md w-[400px] pl-2' />
          </div>
          <div className=' flex flex-col gap-2 mr-5'>
            <button className=' bg-blue-500 border-black rounded-lg border-2 text-xl font-serif p-1'>Volver</button>
            <button className=' bg-blue-500 border-black rounded-lg border-2 text-xl font-serif p-1'>Cargar Compras</button>
            <button className=' bg-blue-500 border-black rounded-lg border-2 text-xl font-serif p-1'>Cargar Cliente</button>
          </div>
          <div className=' flex flex-col gap-2 mr-5'>
            <button className=' bg-blue-500 border-black rounded-lg border-2 text-xl font-serif p-1'>Efectivo</button>
            <button className=' bg-blue-500 border-black rounded-lg border-2 text-xl font-serif p-1'>Credito</button>
            <button className=' bg-blue-500 border-black rounded-lg border-2 text-xl font-serif p-1'>Debito</button>
          </div>
        </div>
        <hr  className=' mt-3'/>
        <div className=' flex justify-start mt-3 gap-4'>
          <h1 className=' ml-4'>Id Producto:</h1>
          <input type="text" className=' border rounded-md w-28 pl-2' />
          <IoIosSearch className=' text-2xl text-black bg-blue-300 border border-black rounded-md' />
          <h1>Buscar Producto:</h1>
          <input type="text" className=' border rounded-md w-[400px] pl-2' />
          <IoIosSearch className=' text-2xl text-black bg-blue-300 border border-black rounded-md' />
        </div>
        <hr className=' mt-6'/>
        <div>
          <ul className=' w-full flex justify-around mt-8 font-bold font-serif bg-[#fff1cf] items-center border border-black'>
            <li className=' basis-1/12 text-center'>ID</li>
            <li className=' basis-7/12 text-center'>Producto</li>
            <li className=' basis-1/12 text-center'>Precio Unitario</li>
            <li className=' basis-1/12 text-center'>Cantidad</li>
            <li className=' basis-1/12 text-center'>Precio Total</li>
            <li className=' basis-1/12 text-center'>Operacion</li>
          </ul>
          <ul className=' w-full flex justify-center items-center border border-black'>
            <li className=' basis-1/12 text-center'>1515223</li>
            <li className=' basis-7/12 text-center'>ARBOL DE LEVA HONDA 125 TITAN 200.(2 EN 1)...SUNIK</li>
            <li className=' basis-1/12 text-center'>$25894.26</li>
            <li className=' basis-1/12 text-center'>4</li>
            <li className=' basis-1/12 text-center overflow-hidden'>$103577.04</li>
            <div className=' flex basis-1/12 items-center'>
              <li><TbCircleArrowDown  className=' ml-4 text-blue-700 text-2xl'/></li>
              <li><TbCircleArrowUp  className=' text-blue-700 text-2xl m-2'/></li>
              <li><FaRegTrashAlt className=' text-red-700 text-2xl m-2' /></li>
            </div>
          </ul>
          <ul className=' w-full flex justify-center items-center border border-black'>
            <li className=' basis-1/12 text-center'>1515223</li>
            <li className=' basis-7/12 text-center'>Baterias le litio</li>
            <li className=' basis-1/12 text-center'>$100</li>
            <li className=' basis-1/12 text-center'>4</li>
            <li className=' basis-1/12 text-center overflow-hidden'>$400</li>
            <div className=' flex basis-1/12 items-center'>
              <li><TbCircleArrowDown  className=' ml-4 text-blue-700 text-2xl'/></li>
              <li><TbCircleArrowUp  className=' text-blue-700 text-2xl m-2'/></li>
              <li><FaRegTrashAlt className=' text-red-700 text-2xl m-2' /></li>
            </div>
          </ul>
          <ul className=' w-full flex justify-center items-center border border-black'>
            <li className=' basis-1/12 text-center'>1515223</li>
            <li className=' basis-7/12 text-center'>AMORT.HARLEY DAVIDSON CROM/RE.12 1/2"(JGO)5124107Co</li>
            <li className=' basis-1/12 text-center'>$100</li>
            <li className=' basis-1/12 text-center'>4</li>
            <li className=' basis-1/12 text-center overflow-hidden'>$400</li>
            <div className=' flex basis-1/12 items-center'>
              <li><TbCircleArrowDown  className=' ml-4 text-blue-700 text-2xl'/></li>
              <li><TbCircleArrowUp  className=' text-blue-700 text-2xl m-2'/></li>
              <li><FaRegTrashAlt className=' text-red-700 text-2xl m-2' /></li>
            </div>
          </ul>
        <div className=' w-full flex justify-between items-center gap-x-3  bg-[#fff1cf]'>
          <div className=' flex justify-center p-3'>
            <h1>Subtotal:</h1>
            <p className=' ml-2 font-medium text-center'>$5256315</p>
          </div>
          <div className=' flex justify-center p-3'>
            <h1>Descuento 10%:</h1>
            <p className=' ml-2 font-medium text-center'>$145215</p>
          </div>
          <div className=' flex justify-center p-3'>
            <h1>Total:</h1>
            <p className=' ml-2 font-medium text-center'>$5155521</p>
          </div>        
        </div>
        </div>
      </div>
    </div>
    </>
  )
}
