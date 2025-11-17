/*  <tbdoy>
              <tr className='flex justify-evenly w-[25vw] relative right-[20%] xl:right-[23%] mt-4'>
                <th className='w-[70%] mr-[100px]'>Pizza Napolitana Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure fuga magnam neque nostrum laboriosam recusandae expedita dignissimos tenetur quaerat, ullam dolores hic vitae sed nobis voluptatem amet? Harum veniam incidunt sit voluptate facere nisi molestiae eveniet provident itaque, quis consequatur, soluta unde hic fugit molestias animi eaque laudantium suscipit quia accusamus deleniti repellat voluptas odit perferendis. Molestiae rem culpa magni hic neque omnis aliquam distinctio quidem voluptatem repellendus nam architecto nobis dignissimos modi saepe ex voluptatum veritatis facere, quisquam reprehenderit ad sapiente eos illum aspernatur. Commodi rem explicabo beatae aut vero eum voluptates, nulla totam quibusdam, ipsam non, modi ipsum?</th>
                <td className='relative w-[100px] right-[50px]'>200 cup</td>
              </tr>
              <tr><td>s</td></tr>
            </tbdoy>
            */

import React, { useState, useEffect } from 'react'



const Menu = () => {
  const [position,setPosition]=useState(0);
  const backgrounds=["../../menu_page1.jpg",

     "../../menu_page2.jpg",
  ]
  /*   useEffect(() => {
      const interval = setInterval(() => {
        setPositionBg((prev) => (prev + 1) % backgrounds.length);
      }, 4000);
  
      return () => clearInterval(interval);
    }, []); */

    const alante=()=>{
      if (position==1){
        setPosition(0)
      }
      else{
        setPosition(1)
      }
    }
    const atras=()=>{
      if (position==0){
        setPosition(1);
      }
      else{
        setPosition(0);
      }
    }
  
  return (
    <div className="bg-contain bg-no-repeat bg-top w-[98vw] h-[340vh] right-[0.1rem] mx-auto min-[310px]:[top-[-200px]] mt-8 mb-16 overflow-y-scroll scroll-auto "   style={{ backgroundImage: `url(${backgrounds[position]})` }}>
      <div className=' inline-flex h-16 fixed top-48 justify-between    text-white w-[98vw] '>
            <div 
          className="cursor-pointer -translate-y-1/2 bg-black  rounded-full w-8 h-8 flex items-center justify-center z-[80000] justify-self-start relative left-7 hover:bg-white hover:text-black"   
          onClick={() => atras(position)}
        >
          <h5 className='text-sm'>{"<<"}</h5> 
        </div>
          <div 
          className="cursor-pointer -translate-y-1/2 bg-black  rounded-full w-8 h-8 flex items-center justify-center z-[80000] relative right-7 hover:bg-white hover:text-black"   
          onClick={() => alante(position)}
        >
          <h5 className='text-sm'>{">>"}</h5> 
        </div>
      </div>
      <article>
      {/*   <section>
          <h2 className='text-center pt-8 text-xl lg:text-3xl relative   bold '><span className='font-bold   '>Dirección:</span> Calle 51#19023/ Calle 88 y 90, Matanzas ✅, también ofertamos servicio a domicilio</h2>
        </section> */}
            {/*  <div className=' italic font-bold  grid grid-flow-col  grid-rows-3 justify-evenly    my-8 comidas '>
      
        <section className='mb-16'>
          <h2 className='text-[#641821] font-[800] relative  left-[8rem] min-[380px]:left-[8rem] min-[440px]:left-[10rem] min-[600px]:left-[17rem] min-[702px]:left-[4rem]'>Pizzas <img src="../../iconos/pizza.png" className='girarPizza w-8 min-[314px]:w-12   min-[380px]:w-16 relative min-[380px]:right-[10px]' alt="" /></h2>
        
          <table className='w-full relative top-[20px]'>
      <thead>
        <tr className='relative min-[714px]:top-8 flex justify-evenly '>
          <th className='block relative text-xs right-[-15%]   min-[702px]:right-[-1rem]  min-[1078px]:right-[35%] min-[1204px]:right-[55%] justify-self-start  min-[800px]:text-2xl min-[1024px]:text-3xl mb-8  min-[400px]:text-base min-[400px]:right-[-2.5rem] min-[702px]:text-lg'>
            Oferta
          </th>
          <th className='block text-xs relative left-[7rem] min-[486px]:left-[11rem] min-[400px]:left-[9rem] min-[600px]:left-[11.5rem] min-[650px]:left-[11.5rem] min-[702px]:text-lg min-[702px]:left-[.9rem]   min-[800px]:text-2xl min-[1024px]:text-3xl min-[400px]:text-base min-[778px]:left-[3.8rem] min-[900px]:left-[5.2rem] min-[1000px]:left-[6rem]'>
            Precio
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className='w-[85vw] relative right-[20%] xl:right-[23%] mt-4'>
          <td className='relative p-2 left-[4rem] block w-[200px] min-[440px]:w-[250px] min-[600px]:w-[450px] min-[600px]:left-[8rem] min-[702px]:w-[12.3rem] min-[702px]:left-[4.5rem] min-[778px]:w-[13rem] min-[900px]:w-[14.2rem] min-[900px]:left-[4rem] min-[1000px]:w-[15rem] min-[1000px]:left-[3rem]'>
            Pizza Napolitana (30*30cm, queso gouda) 
          </td>
          <td className='relative min-[702px]:inline-block w-[90px] left-[4.5rem] min-[330px]:left-[5rem] min-[400px]:left-[7rem] min-[486px]:left-[9rem] min-[600px]:left-[7.8rem] min-[702px]:left-[13.4rem] min-[778px]:left-[1.5rem]  min-[900px]:left-[2.8rem] min-[702px]:top-[-5rem] min-[778px]:bottom-[.8rem] min-[1000px]:left-[4rem]'>12000 cup</td>
        </tr>
        <tr className='w-[85vw] relative right-[20%] xl:right-[23%] mt-4'>
          <td className='relative p-2 left-[4rem] block w-[200px] min-[440px]:w-[250px] min-[600px]:w-[450px] min-[600px]:left-[8rem] min-[702px]:w-[12.3rem] min-[702px]:left-[4.5rem] min-[778px]:w-[13rem] min-[900px]:w-[14.2rem] min-[900px]:left-[4rem] min-[1000px]:w-[15rem] min-[1000px]:left-[3rem]'>
            Pizza Napolitana (30*30cm, queso gouda) 
          </td>
          <td className='relative min-[702px]:inline-block w-[90px] left-[4.5rem] min-[330px]:left-[5rem] min-[400px]:left-[7rem] min-[486px]:left-[9rem] min-[600px]:left-[7.8rem] min-[702px]:left-[13.4rem] min-[778px]:left-[1.5rem]  min-[900px]:left-[2.8rem] min-[702px]:top-[-5rem] min-[778px]:bottom-[.8rem] min-[1000px]:left-[4rem]'>12000 cup</td>
        </tr>
       
         
      </tbody>
    </table>
        
        </section>
        <section className='mb-16'>
          <h2 className='text-[#641821] font-[800] relative  left-[8rem] min-[380px]:left-[8rem] min-[440px]:left-[10rem] min-[600px]:left-[17rem] min-[702px]:left-[-2.5rem]'>Spaghettis <img src="../../iconos/spaghetti.png" className='girarPizza w-8 min-[314px]:w-12   min-[380px]:w-16 relative min-[380px]:right-[10px]' alt="" /></h2>
        
          <table className='w-full relative top-[20px]'>
      <thead>
        <tr className='relative min-[714px]:top-8 flex justify-evenly '>
          <th className='block relative text-xs right-[-15%]   min-[702px]:right-[5rem]  min-[1078px]:right-[35%] min-[1204px]:right-[55%] justify-self-start  min-[800px]:text-2xl min-[1024px]:text-3xl mb-8  min-[400px]:text-base min-[400px]:right-[-2.5rem] min-[702px]:text-lg'>
            Oferta
          </th>
          <th className='block text-xs relative left-[7rem] min-[486px]:left-[11rem] min-[400px]:left-[9rem] min-[600px]:left-[11.5rem] min-[650px]:left-[11.5rem] min-[702px]:text-lg min-[702px]:left-[-3rem]   min-[800px]:text-2xl min-[1024px]:text-3xl min-[400px]:text-base min-[778px]:left-[3.8rem] min-[900px]:left-[5.2rem] min-[1000px]:left-[6rem]'>
            Precio
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className='w-[85vw] relative right-[20%] xl:right-[23%] mt-4'>
          <td className='relative p-2 left-[4rem] block w-[200px] min-[440px]:w-[250px] min-[600px]:w-[450px] min-[600px]:left-[8rem] min-[702px]:w-[12.3rem] min-[702px]:left-[.5rem] min-[778px]:w-[13rem] min-[900px]:w-[14.2rem] min-[900px]:left-[4rem] min-[1000px]:w-[15rem] min-[1000px]:left-[3rem]'>
           Spaghettis de queso (300 gramos, queso gouda) 
          </td>
          <td className=' inline-block relative w-[100px] left-[4.5rem] min-[330px]:left-[5rem] min-[400px]:left-[7rem] min-[486px]:left-[9rem] min-[600px]:left-[7.8rem] min-[702px]:left-[-4.4rem] min-[778px]:left-[1.5rem]  min-[900px]:left-[2.8rem] min-[702px]:bottom-[1.5rem] min-[778px]:bottom-[.8rem] min-[1000px]:left-[4rem]'>1200 cup</td>
        </tr>
        <tr className='w-[85vw] relative right-[20%] xl:right-[23%] mt-4'>
        <td className='relative p-2 left-[50px] block w-[200px] min-[440px]:w-[250px]'>
            Pizza de Jamón (30*30cm, queso gouda, jamón serrano)
          </td>
       
          <td className='relative w-[100px] left-[65px] min-[400px]:left-[105px]'>1500 cup</td>
        </tr>
       
         
      </tbody>
    </table>
        
        </section>
        <section className='mb-16'>
          <h2 className='text-[#641821] font-[800] relative  left-[8rem] min-[380px]:left-[8rem] min-[440px]:left-[10rem] min-[600px]:left-[17rem] min-[702px]:left-[-7.5rem]'>Bebidas <img src="../../iconos/soft_drinks.png" className='girarPizza w-8 min-[314px]:w-12   min-[380px]:w-16 relative min-[380px]:right-[10px] min-[702px]:left-[.3rem]' alt="" /></h2>
        
          <table className='w-full relative top-[20px]'>
      <thead>
        <tr className='relative min-[714px]:top-8 flex justify-evenly '>
          <th className='block relative text-xs right-[-15%]   min-[702px]:right-[10rem]  min-[1078px]:right-[35%] min-[1204px]:right-[55%] justify-self-start  min-[800px]:text-2xl min-[1024px]:text-3xl mb-8  min-[400px]:text-base min-[400px]:right-[-2.5rem] min-[702px]:text-lg'>
            Oferta
          </th>
          <th className='block text-xs relative left-[7rem] min-[486px]:left-[11rem] min-[400px]:left-[9rem] min-[600px]:left-[11.5rem] min-[650px]:left-[11.5rem] min-[702px]:text-lg min-[702px]:left-[-9.3rem]   min-[800px]:text-2xl min-[1024px]:text-3xl min-[400px]:text-base min-[778px]:left-[3.8rem] min-[900px]:left-[5.2rem] min-[1000px]:left-[6rem]'>
            Precio
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className='w-[85vw] relative right-[20%] xl:right-[23%] mt-4'>
          <td className='relative p-2 left-[4rem] block w-[200px] min-[440px]:w-[250px] min-[600px]:w-[450px] min-[600px]:left-[8rem] min-[702px]:w-[9.3rem] min-[702px]:left-[-4.5rem] min-[778px]:w-[13rem] min-[900px]:w-[14.2rem] min-[900px]:left-[4rem] min-[1000px]:w-[15rem] min-[1000px]:left-[3rem]'>
            Refresco 335 ml (Mate, Cola, Limón, Naranja) 
          </td>
          <td className='relative w-[100px] left-[4.5rem] min-[330px]:left-[5rem] min-[400px]:left-[7rem] min-[486px]:left-[9rem] min-[600px]:left-[7.8rem] min-[702px]:left-[-11.4rem] min-[778px]:left-[1.5rem]  min-[900px]:left-[2.8rem] min-[702px]:bottom-[.8rem] min-[778px]:bottom-[.8rem] min-[1000px]:left-[4rem]'>200 cup</td>
        </tr>
        <tr className='w-[85vw] relative right-[20%] xl:right-[23%] mt-4'>
        <td className='relative p-2 left-[50px] block w-[200px] min-[440px]:w-[250px]'>
            Pizza de Jamón (30*30cm, queso gouda, jamón serrano)
          </td>
       
          <td className='relative w-[100px] left-[65px] min-[400px]:left-[105px]'>1500 cup</td>
        </tr>
       
         
      </tbody>
    </table>
        
        </section>        </div> */}
      </article>
    </div>
  )
}

export default Menu