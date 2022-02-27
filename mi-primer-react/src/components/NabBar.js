import React from 'react'
import CardWidget from './CardWidget'
import botonMenu from '../Media/boton.svg';

const imgBoton = botonMenu;

const NabBar = () => {
    return (
       <header className="text-stone-600 body-font bg-stone-300">
         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        
           <div className="flex title-font font-medium items-center text-orange-600 mb-4 md:mb-0"> 
           <CardWidget></CardWidget> 
             <span className="ml-3 text-xl">Mi e-Comerce</span>
           </div>
           <nav >
             <ul className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center" >
               <li className="mr-5 hover:text-gray-900" ><a href="#" >Home</a></li>
               <li className="mr-5 hover:text-gray-900" ><a href="#" >articulos</a></li>
               <li className="mr-5 hover:text-gray-900" ><a href="#" >carrito</a></li>
             </ul>
            </nav>
           <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Carrito
           </button>
         </div>
       </header>
    );
}

export default NabBar
