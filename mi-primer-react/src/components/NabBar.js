import React from 'react'
import CardWidget from './CardWidget'


const NabBar = () => {
    return (
       <header className="text-stone-600 body-font bg-stone-300">
         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
           <p className="flex title-font font-medium items-center text-orange-600 mb-4 md:mb-0">  
           <CardWidget></CardWidget>
             <span className="ml-3 text-xl">Mi e-Comerce</span>
           </p>
           <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
           <p className="mr-5 hover:text-gray-900"   href="">home</p>
           <p className="mr-5 hover:text-gray-900"   href="">item1</p>
           <p className="mr-5 hover:text-gray-900"   href="">item2</p>
           <p className="mr-5 hover:text-gray-900"   href="">item3</p>
           </nav>
           <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
               <path d="M5 12h14M12 5l7 7-7 7"></path>
             </svg>
           </button>
         </div>
       </header>
    );
}

export default NabBar
