import { StrictMode } from 'react'
 import { ToastContainer, toast } from 'react-toastify';
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/Layout.jsx'
import Reservar from './pages/Reservar.jsx';
import LayoutSinMenu from './components/LayoutSinMenu.jsx';
import Ofertas from './pages/Ofertas.jsx';
import Fotos from './pages/Fotos.jsx';
const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[]
  },{
  path:'/',
  element:<LayoutSinMenu/>,
  children:[
    {
      path:"/reservar",
      element:<Reservar/>   
   },
     {
      path:"/ofertas",
      element:<Ofertas/>   
   },
   {
        path:"/fotos",
      element:<Fotos/>   
    
   }
  ]
  },
   
  
  ]);

const root = createRoot(document.getElementById('root')); 
root.render(
  <StrictMode>
    <RouterProvider router={router}/>
   <ToastContainer />
  </StrictMode>
);