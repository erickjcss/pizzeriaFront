import React, { useState } from 'react'
 import { ToastContainer, toast } from 'react-toastify';
const FormReserva = ({cantAsientos,setCantAsientos}) => {
  
  const hoy = new Date().toISOString().split('T')[0];
  const [cliente,setCliente]=useState("");
  const fecha0=new Date();
  const [fechaHoy,setFechaHoy]=useState(fecha0.getFullYear()+'-'+(fecha0.getMonth()<=9?fecha0.getMonth()+1:'0'+(fecha0.getMonth()+1))+'-'+(fecha0.getDay()<9?fecha0.getDate():'0'+fecha0.getDate()));
  const [fecha,setFecha]=useState("");
  const [contacto,setContacto]=useState("+53 ");
  const [hora,setHora]=useState("");
    const enviar=(e)=>{
      e.preventDefault();
      if(hora==''||contacto==''||fecha==''||cliente==''||contacto==''){
        toast.error("No puede haber ningún campo vacío",{
           autoClose:2000,
          position: "top-center",
          pauseOnHover: false,
draggable: true,
        })
        return;
      }
      const regex3=/^\+?(?:\d{1,3}|\(\d{1,3}\)) ?[\d()]*$/;;
      if(!regex3.test(contacto)){
        toast.error("El contacto solo puede tener el signo + al inicio, paréntisis intermediarios, espacio después de los 3 primeros caracteres y números",{
           autoClose:2000,
          position: "top-center",
          pauseOnHover: false,
draggable: true,        }        )
        
  return
    
          };
      const regex=/^[a-zA-Z\s]{1,20}$/;
      if(!regex.test(cliente)){
        toast.error("El nombre no puede estar vacío, solo puede tener letras y un máximo de 20 caracteres",{
           autoClose:2000,
          position: "top-center",
          pauseOnHover: false,
draggable: true,
          
        }
        )
        setTimeout(() => {
                return
        }, 2000);
  
      }else{

      const regex2=/^\+.*/
      if(!regex2.test(contacto)){
        if(contacto.length<8){
           toast.error("El número de contacto debe contener un mínimo de 8 caracteres",{
           autoClose:2000,
          position: "top-center",
          pauseOnHover: false,
draggable: true,
          
        }
        )
        setTimeout(() => {
                return
        }, 2000);    
        }
        else{
          toast.success("Reserva realizada con éxito",{
      position: "top-right",
autoClose: 2000,
pauseOnHover: false,
draggable: true,
    })}}
        else{
           if(contacto.length<11){
           toast.error("El número de contacto debe contener un mínimo de 11 caracteres",{
           autoClose:2000,
          position: "top-center",
          pauseOnHover: false,
draggable: true,})
        setTimeout(() => {
                return
        }, 2000);    
        }
        else{
          toast.success("Reserva realizada con éxito",{
      position: "top-right",
autoClose: 2000,
pauseOnHover: false,
draggable: true,
    })    
        }
        }
      }
      
    }
    const setCant=(e)=>{
      e=parseInt(e)
      if(e<1){
        return
      }
      if(e>24){
        toast.error("La cantidad máxima de asientos por mesa es de 24",{
          position:"top-right",autoClose: 2000,
          pauseOnHover: false,
          draggable: true,
      })
      }
      else{
        
        setCantAsientos(e)
      }
    }
    const setContactoo=(e)=>{
      
        if(e.length>24){
        toast.error("La longitud máxima del número de contacto es de 24",{
          position:"top-right",autoClose: 2000,
          pauseOnHover: false,
          draggable: true,
      })
      }
      else{
        setContacto(e);
      }
    }
    const setFechaa=(e)=>{
     
      alert(fechaHoy)
    setFecha(e)
    const [year, mes, dia] = e.split('-').map(Number);
    const fechaComparar = new Date(year, mes - 1, dia); 

    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

     
    if(fechaComparar<hoy){
       toast.error("La fecha de la reserva no puede ser anterior a la fecha actual, por defecto le pondremos la fecha de hoy, seleccione esa o la que desee",{
           autoClose:2000,
          position: "top-center",
          pauseOnHover: false,
draggable: true,
        })
        setFecha(fechaHoy);
        return;
    }
    }
  return (
    <div className='formu h-[20rem] z-[15]  fixed text-center ml-[270px]  w-[50vw] bottom-[70px]'>

      <form action="" className='bg-gray-300  opacity-80' noValidate onSubmit={e=>enviar(e)}
      >
        <div className='flex items-center justify-between gap-2   w-[inherit] mt-16    '>
          <label htmlFor="fecha" className='ml-4 ' >Seleccione la fecha</label>
        <input type="date" id='fecha' className='bg-gray-300 h-12  w-[200px] mr-4' value={fecha} onChange={e=>setFechaa(e.target.value)} min={hoy} />
        </div>
        <div className='flex items-center justify-between gap-2   w-[inherit]   mt-2 '>
          <label htmlFor="hora" className='ml-4 ' >Seleccione la hora de la reserva</label>
        <input type="time" id='hora' className='bg-gray-300 h-12 w-[200px] mr-4' value={hora} onChange={e=>setHora(e.target.value)}  />
        </div>
        <div className='flex items-center justify-between gap-2   w-[inherit]   mt-2 '>
          <label htmlFor="asientos" className='ml-4 ' >Seleccione la cantidad de asientos</label>
        <input type='number' id='asientos' className='bg-gray-300 h-12 w-[200px] mr-4' value={cantAsientos} onChange={e=>setCant(e.target.value)} />
        </div>
        <div className='flex items-center justify-between gap-2   w-[inherit]   mt-1 '>
          <label htmlFor="cliente" className='ml-24 ' >Cliente</label>
        <input type='texto' id='cliente' className='bg-gray-300 h-12 w-[200px] mr-4 p-1' value={cliente} onChange={e=>setCliente(e.target.value)}  placeholder='Cliente'/>
        </div>  

        <div className='flex items-center justify-between gap-2   w-[inherit]   mt-1 '>
          <label htmlFor="contacto" className='ml-24 ' >Número de contacto</label>
        <input type='texto' id='contacto' className='bg-gray-300 h-12 w-[200px] mr-4 p-1' value={contacto} onChange={e=>setContactoo(e.target.value)}  placeholder='Contacto'/>
        </div>  

        <input type="submit" id='send' className='bg-indigo-600 p-2 text-white cursor-pointer mb-2  hover:bg-indigo-700' value="Pedir reserva" />
      </form>
    </div>
  )
}

export default FormReserva
