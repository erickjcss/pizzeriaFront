import React, { useEffect, useRef, useState} from 'react'
import { toast } from 'react-toastify';

const Ofertas = () => {
  const [ofertas,setOfertas]=useState();
  const [cantidad,setCant]=useState(0);
  const [position,setPosition]=useState(0);
  const [redesSociales,setRedesSociales]=useState(false);
  const [comentarios,setComentarios]=useState(false);
  const [infoComentarios,setInfoComentarios]=useState();
  const [nick,setNick]=useState();
    const divRef = useRef(null);
    const [contenido, setContenido] = useState('');
  const [texto,setTexto]=useState('');
  const [cantEnvios,setCantEnvios]=useState(0);
  const imgRef = useRef(null);  
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const starImg='star.png';
  const starBlancaImg='starBlanca.png';
  const [calificaciones]=useState(['Pésimo','Mal','Regular','Bien','Excelente']);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [valorar,setValorar]=useState(false);
  const [cancelar,setCancelar]=useState(false);
   const HoverStar = () => {
    if (imgRef.current) {
      imgRef.current.src = starImg;
    }
  };

  const DesHoverStar = () => {
    if (imgRef.current) {
      imgRef.current.src = starBlancaImg;
    }
  };

const estiloFondo = ofertas && position < ofertas.length &&!comentarios
  ? { backgroundImage: `url('${ofertas[position].foto}')` } 
  : {backgroundColor:'rgb(99, 102, 241)' };
  function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
  useEffect(()=>{
    const obtenerOfertas=async()=>{
       const csrftoken = getCookie('csrftoken');
      try{
        const response=await fetch("https://pizzeria-4zfx.onrender.com/pizzas/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
              'X-CSRFToken': csrftoken 
            }
        }); 
          const data = await response.json();
          setOfertas(data);
          console.log(data);
          
          setCant(data.length)             
      } 
      catch(error){
        toast.error("Error en la conexión o en nuestro servidor");
      }
  }
obtenerOfertas()
}, [])
  useEffect(()=>{
    const obtenerComentarios=async()=>{
       const csrftoken = getCookie('csrftoken');
      try{
        const response=await fetch("https://pizzeria-4zfx.onrender.com/comentarios/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
              'X-CSRFToken': csrftoken 
            }
        }); 
          const data = await response.json();
          setInfoComentarios(data);
          console.log(data);
          
          setCant(data.length)             
      } 
      catch(error){
        toast.error("Error en la conexión o en nuestro servidor");
      }
  }
obtenerComentarios()
}, [cantEnvios])

   const alante=()=>{
      if (position==cantidad-1){
        setPosition(0)
      }
      else{
        setPosition(position+1)
      }
    }
    const atras=()=>{
      if (position==0){
        setPosition(cantidad-1);
      }
        else{
        setPosition(position-1);
      }
    }
   
    const compartirEnWhatsApp = () => {
    const mensaje= `Hola, disfrute de nuestras deliciosas ofertas, FiboPizzas a su alcance: ${ofertas[position].nombre} 😋"`;
    
    const textoCodificado = encodeURIComponent(mensaje);
    window.open(`https://wa.me/?text=${textoCodificado}`, '_blank');
  };
   const compartirTelegram = () => {
    const mensaje = generarMensaje();
    const textoCodificado = encodeURIComponent(mensaje);
    window.open(`https://t.me/share/url?text=${textoCodificado}`, '_blank');
    setMostrarOpciones(false);
  };

    const generarMensaje = () => {
        return `Hola, disfrute de nuestras deliciosas ofertas, FiboPizzas a su alcance 😋`;
     };
  const compartirFacebook = () => {
   
    const mensaje = generarMensaje();
    const textoCodificado = encodeURIComponent(mensaje);
    const urlCodificada = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${urlCodificada}&quote=${textoCodificado}`, '_blank');
    setMostrarOpciones(false);
  };

  const compartirInstagram = async () => {
    const mensaje = generarMensaje();
    navigator.clipboard.writeText(mensaje)
      .then(() => {
        toast.success('Mensaje copiado al portapapeles. Ahora puedes pegarlo en Instagram');
        const esMovil = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
        if (esMovil) {
    window.open('instagram://app', '_blank');
    setTimeout(() => {
      window.open('https://www.instagram.com', '_blank');
    }, 500);
  } else {
    window.open('https://www.instagram.com', '_blank');
  }
            })
      .catch(async () => {
        const textArea = document.createElement('textarea');
        textArea.value = mensaje;
        document.body.appendChild(textArea);
        textArea.select();
        
        try {
          await navigator.clipboard.writeText(mensaje);
        } catch (err) {
          console.error('No se pudo copiar al portapapeles:', err);
        } finally {
          document.body.removeChild(textArea);
        }
        
        toast.success('Mensaje copiado al portapapeles. Ahora puedes pegarlo en Instagram');
        const esMovil2 = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
        if (esMovil2) {
    window.open('instagram://app', '_blank');
    setTimeout(() => {
      window.open('https://www.instagram.com', '_blank');
    }, 500);
  } else {
    window.open('https://www.instagram.com', '_blank');
  }  });    
    setMostrarOpciones(false);
};

  const handleInput = (e) => {
    const nuevoTexto = e.currentTarget.textContent || e.currentTarget.innerText;
    setTexto(nuevoTexto);
  };
  
const formatearFecha=(fechaOriginal)=>{
  console.log(fechaOriginal)
  const fecha = new Date(fechaOriginal);
  const fechaFormateada = fecha.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
}).replace(/\//g, '-');
return fechaFormateada
}
const formatearHora=(fechaOriginal)=>{
  const fecha = new Date(fechaOriginal);
  const horaFormateada = fecha.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false 
});
return horaFormateada
}

  const handleMouseEnter = (index) => {
    setHoverRating(index + 1);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

   const handleClick = (index) => {
    setRating(index + 1);
   }
const enviar=async(e)=>{
  e.preventDefault();
 if(texto.trim()==''){
  toast.warning("Su comentario no puedo estar vacío");
  return;
 }
 const datos = {
        nombre_oferta:ofertas[position].nombre ,  
        numero_oferta: position,               
        comentario: texto,
        resumen: (texto.length > 20 
            ? texto.substring(0, 20) + "..."
            : texto)};
    const csrftoken = getCookie('csrftoken');
   try{
        const response=await fetch("https://pizzeria-4zfx.onrender.com/comentarios/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              'X-CSRFToken': csrftoken 
            },
                  body: JSON.stringify(datos)
        }); 
         setTexto("");
         if (divRef.current) {
      divRef.current.innerHTML = ""; 
      divRef.current.textContent = ""; 
    }
         if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        setCantEnvios(cantEnvios+1);
        return await response.json();
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
  
}

 const enviarValoracion = () => {
    if (rating > 0) {
      setIsSubmitted(true);
     toast.success(`Nos has valorado con ${rating} estrellas, gracias por su opinión`);
      setValorar(false);
      } else {
      toast.error('Por favor, selecciona una valoración antes de enviar');
    }
  };

const setValorarr=()=>{
  if(!cancelar){
    setValorar(true);
    setCancelar(true);
    }}
const setCancelarValorar=()=>{
  setCancelar(false);
  setValorar(false);
  }

  return (
    <div>
        <h2 className='text-center pt-8 text-xl lg:text-3xl relative left-[.5rem]  text-[#641821] font-bold max-[350px]:text-lg   '>Revise y valore nuestras ofertas</h2>

      
        <div className='inline-flex w-[100vw]  justify-center content-center ml-auto mr-auto mb-16'>
          
 <div>
  <section className='bg-indigo-400 h-40 w-80  mt-[40px] ml-auto mr-auto min-[450px]:inline-block  mb-16'>
    {!comentarios&&( <div className=' inline-flex  absolute top-92  w-80 justify-between    text-white  '>
            <div 
          className="cursor-pointer -translate-y-1/2 bg-black  rounded-full w-8 h-8 flex items-center justify-center z-[80000] justify-self-start relative  hover:bg-white hover:text-black"   
          onClick={() => atras(position)}
        >
          <h5 className='text-sm'>{"<<"}</h5> 
        </div>
          <div 
          className="cursor-pointer -translate-y-1/2 bg-black  rounded-full w-8 h-8 flex items-center justify-center z-[80000] relative  hover:bg-white hover:text-black"   
          onClick={() => alante(position)}
        >
          <h5 className='text-sm'>{">>"}</h5> 
        </div>
      </div>)}
      
  <h4 className='text-center h-8 mt-1 italic ml-16 text-[14px]'>
  {ofertas && position < ofertas.length ? ofertas[position].nombre : ""}
  <img src="../../iconos/pizza.png" className='h-6 w-8 inline-block' alt="" />
  <span className='text-right relative left-[0.415rem] text-brown-700'>
    {ofertas && position < ofertas.length ? ofertas[position].precio : ""}
  </span>
</h4>



  <div className="h-50 w-80 bg-cover bg-no-repeat bg-center max-h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 " style={estiloFondo}>
  {comentarios&&infoComentarios?.map((comentario, index) => (
    <div key={index} className='ml-2 mt-1 pl-1 w-[299px] mb-2 bg-gray-100'>
    
      <span>{comentario.comentario} </span>
      <div className='inline-flex w-[289px]  gap-[2px] justify-end'>
      <span className='text-[10px] relative text-cyan-700    '>{formatearFecha(comentario.fecha)}</span>
      <span className='text-[10px] relative text-cyan-700 '>{formatearHora(comentario.fecha)}</span>
      </div>
    </div>
  ))}
</div>
  
  <button className='bg-indigo-500 h-[35px] w-80 hover:bg-indigo-600    cursor-pointer text-white  pt-1  border-gray-400  ' /* onClick={()=>Reserva(2)} */>
    {!comentarios?( <div className='fotos   w-full inline-flex justify-evenly relative '>    
        
 <div className="container inline-flex ">
<div className='valorar hover:text-sm  text-xs absolute bottom-1 ' onMouseEnter={(e)=>setValorarr()} 

  >
<img
src="star.png"
alt="Imagen"
className=" h-7 w-8 inline-block relative bottom-[3px] left-1 "

onClick={(e) => Megusta(e)}
/>
{/*   <span className='relative bottom-[2.7rem] text-[#000080] left-[8vw] min-[350px]:left-[7.5vw] min-[390px]:left-[7.2vw] min-[400px]:left-[7vw] min-[425px]:left-[6.5vw] min-[480px]:left-[6vw] min-[500px]:left-[5.6vw] min-[540px]:left-[5vw] min-[600px]:left-[4.7vw] min-[650px]:left-[4.3vw] min-[700px]:left-[3.7vw] min-[800px]:left-[3.3vw] min-[860px]:left-[3vw] min-[900px]:left-[2.7vw] min-[1128px]:bottom-[.3rem] min-[1128px]:left-[-2.2rem] '>5</span> */}
<span   className={`w-[20px] relative left-2  cursor-pointer inline-block mt-1 hover:top-[3px]  ${valorar?"text-[11px] top-2":""}`} onClick={(e)=>setValorarCancelar()}> {!valorar?'Valorar':""} </span>
{cancelar&&(
<span className='w-[20px] relative right-3 z-[2]  cursor-pointer inline-block mt-1 hover:text-[12px] top-[8px] hover:top-[8px]' onClick={(e)=>setCancelarValorar()}>{valorar?"Cancelar Valoración":""} </span>
)}

</div>
{valorar&&(
 <div className="star-rating-container absolute top-[-7px] left-[-20px]">
      <p className="rating-text"></p>
      <div className='stars-rating'>
        {[...Array(5)].map((_, index) => (
          <img
          
            key={index}
            src={
              (hoverRating > 0 && index < hoverRating) || 
              (hoverRating === 0 && index < rating) 
                ? starImg 
                : starBlancaImg
            }
            alt={`Estrella ${index + 1}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index)}
            className="star h-12 w-12"
          />
        ))}
         <button 
        className={`submit-rating-btn ${rating === 0 ? 'disabled' : ''}`}
        onClick={enviarValoracion}
        disabled={rating === 0}
      >
        {isSubmitted ? 'Enviar Valoración' : 'Enviar Valoración'}
      </button>
        
      </div>

    </div>
)}

{/* <div className='absolute inline-flex stars top-[31px]'>
    <img 
        ref={imgRef}
        src={starBlancaImg}
        alt="Imagen interactiva"
        onMouseEnter={HoverStar}
        onMouseLeave={DesHoverStar}
        className="instant-hover-image"
      />
       <img src="starBlanca.png" alt="" /> 
         <img src="starBlanca.png" alt="" /> 
           <img src="starBlanca.png" alt="" /> 
             <img src="starBlanca.png" alt="" /> 

      
</div> */}
  
 </div>
 <div className="container  cursor-pointer mr-[6vw] inline-flex min-[529px]:mr-4  " onClick={(e)=>setComentarios(!comentarios)} >
  <img src="chat.png"    className='h-6 w-8 inline-block '  ></img>
 <span className=' block xl:inline ml-1 cursor-pointer text-xs mt-[3px]  hover:text-sm'>Comentarios</span>
 </div> 


 <div className="container  cursor-pointer   mr-[2vw] inline-flex " onClick={()=>setRedesSociales(!redesSociales)}>                <img src="share.png"  className='h-8 w-16 inline-block  relative bottom-1' ></img> 
 <span className='comp cursor-pointer ml-1 block xl:inline relative top-[0.16rem] text-xs hover:text-sm' >Compartir</span></div>
 
  </div>):(<div className='relative bg-indigo-600 pt-1  '>
    <form action=""  className='inline-flex text-sm   w-full' onSubmit={enviar}>
      <div className='relative bottom-1 inline-flex justify-evenly  w-full'>
      <button className=' cursor-pointer hover:text-[16px]' onClick={(e)=>setComentarios(false)}>Cancelar</button>   
   <div
      ref={divRef}
      contentEditable
      onInput={handleInput}
      className="p-2 w-[170px] border border-gray-600 rounded min-h-[40px] max-h-[60px] overflow-y-auto mt-1
                placeholder-gray-400 empty:before:content-[attr(data-placeholder)] empty:before:text-gray-400"
      data-placeholder="Valore la oferta"
      style={{
        whiteSpace: 'pre-wrap', 
        wordWrap: 'break-word' 
      }}
    />
      <button 
  type="submit"
  className="cursor-pointer flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 mt-1 mb-1 py-2 rounded-lg transition-colors "
>
  <img src="enviar.png" alt="" className="w-5 h-5" />

</button>


      
      </div>
    </form>

  </div>)}
           
  
</button>
{redesSociales&&( <div className="inline-flex gap-2 mb-6 justify-between">
           <img src='facebook.png' 
            onClick={compartirFacebook}
            className="bg-indigo-500 h-[45px] text-xs w-28 hover:bg-indigo-600 cursor-pointer text-white"
          ></img>
              <img src='whatsapp.png' alt='ja' 
            onClick={compartirEnWhatsApp}
            className="bg-indigo-500 h-[45px] text-xs w-28 hover:bg-indigo-600 cursor-pointer text-white"
          ></img>
           <img src='telegram.jpg' alt='ja' 
            onClick={compartirTelegram}
            className="bg-indigo-500 h-[45px] text-xs w-28 hover:bg-indigo-600 cursor-pointer text-white"
          ></img>
            <img src='instagram.jpg' alt='ja' 
            onClick={compartirInstagram}
            className="bg-indigo-500 h-[45px] text-xs w-28 hover:bg-indigo-600 cursor-pointer text-white"
          ></img>
   
          <button 
            onClick={()=>setRedesSociales(false)}
            className="bg-indigo-600 text-white border-none py-2 px-5 rounded cursor-pointer w-full hover:bg-gray-900 transition-colors"
          >
            Cerrar
          </button>
        </div>      )}

      
      </section></div>
   
</div>
    


   </div>
  )
}

export default Ofertas
