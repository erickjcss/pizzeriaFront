import React, { useState } from 'react'
import FormReserva from '../components/FormReserva';
 import { ToastContainer, toast } from 'react-toastify';
const Reservar = () => {
  const [formulario,setFormulario]=useState(false);
    const [cantAsientos,setCantAsientos]=useState(0)
    
  const Reserva=(number)=>{
    setCantAsientos(number)
    setFormulario(true)
  }
    return (
    <div >
      <section>
    <h2 className='text-center pt-8 text-xl lg:text-3xl relative  text-[#641821] font-bold'>Mesas disponibles</h2>
</section>
      {formulario&&(
        <FormReserva className='formu' cantAsientos={cantAsientos} setCantAsientos={setCantAsientos}/>
  )}
    <article className='grid min-[450px]:grid-cols-2 min-[750px]:grid-cols-3'>
   <section className='bg-gray-300 h-40 w-40 min-[450px]:ml-10 min-[520px]:ml-[5rem] min-[640px]:ml-[6rem] min-[700px]:ml-[7.5rem] min-[750px]:ml-[4rem] mt-[40px] ml-auto mr-auto min-[450px]:inline-block min-[1024px]:ml-[8rem]'>
   <h2 className='text-center h-8 mt-1  italic 
     '> Mesa para dos</h2>
         <img src="mesa2.jpg" className='h-32' alt="" />
          <button className='bg-indigo-500 w-[100%] h-[30px] hover:bg-indigo-600 hover:text-cyan-200 inline-block  cursor-pointer text-white' onClick={()=>Reserva(2)}>Reservar</button>
        
      </section>
      <section className=' h-40 w-40 min-[450px]:ml-10 mt-[40px] ml-auto mr-auto min-[450px]:inline-block min-[1024px]:ml-[6rem] bg-gray-300 italic '>
   <h2 className='text-center h-8 mt-1'> Mesa para cuatro</h2>
          <img src="mesa4.jpg" className='h-32' alt="" />
          <button className='bg-indigo-500 w-[100%] h-[30px] inline-block  cursor-pointer text-white hover:bg-indigo-600 hover:text-cyan-200' onClick={()=>Reserva(4)} >Reservar</button>
        
          </section>
          <div className='w-[95vw] flex justify-center '>
      <section className='bg-gray-300 italic ml-auto mr-auto relative left-[11px] h-40 w-40 min-[750px]:ml-10 mt-[60px] min-[450px]:inline-block mb-12 min-[750px]:mt-[40px] min-[1024px]:ml-[4rem]'>
        <h2 className='text-center h-8 mt-1'> Mesa personalizada</h2>
        <img src="mesa-personalizada.jpg" className='h-32' alt="" />
        <button onClick={()=>Reserva(1)} className='bg-indigo-500 w-[100%] h-[30px] inline-block  cursor-pointer text-white hover:bg-indigo-600 hover:text-cyan-200'>Reservar</button>
        
        
      </section>
      </div>
    </article>  
    </div>
  )
}

export default Reservar
