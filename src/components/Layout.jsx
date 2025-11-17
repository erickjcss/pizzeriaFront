import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Menu from './../pages/Menu';

const Layout = () => {
  return (
   /* https://www.zarla.com/es/gu%C3%ADas/ejemplos-de-sitios-web-de-pizza#pizzas-piccolo */
<div className='w-full'>
  <div className='texto  text-red-900 text-3xl text-center w-full inline-flex italic font-black mt-4 align-text-bottom  '>    
  <div className='ml-4    w-[45px] h-[45px] flex items-center justify-center  cursor-pointer '>
   
 {/*      
    <section className='flex flex-col justify-between h-[15px] items-center mb-2  '>
  <button className='abre'>
    <div></div>
    <div></div>
    <div></div>
  </button>

</section> */}
   
</div>
<span className=" text-center w-[90vw] ">FiboPizzas</span>  

</div>

    <nav className='mt-8 mx-auto borderg-t-2 w-[95vw] options '>
        <ul className='flex justify-center gap-4 min-[500px]:gap-[2rem] min-[600px]:gap-[3rem] min-[700px]:gap-[4rem] min-[800px]:gap-[5rem] min-[900px]:gap-[6rem] text-base min-[650px]:text-xl min-[1024px]:gap-[14rem] min-[1024px]:text-2xl text-gray-600 min-[400px]:opacity-100  o '>
            <Link to="/" className='hover:text-red-800'>Menú</Link>
            <Link to="reservar" className='hover:text-red-800  z-[300000] '>Reservar</Link> 
            <Link to="/ofertas" className='hover:text-red-800 z-[300000]'>Ofertas</Link>
   
            <Link to="/fotos" className='hover:text-red-800'>Fotos</Link>
        </ul>
    </nav>
   <Menu/>
    <Outlet/>
</div>

    
  )
}

export default Layout