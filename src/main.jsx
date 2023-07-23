import React from 'react'
import ReactDOM from 'react-dom/client'


import { RouterProvider } from 'react-router-dom'
import { router } from './App'
import './index.css';
import AuthProvider from './Components/Pages/Share/AuthProvider/AuthProvider';
ReactDOM.createRoot(document.getElementById('root')).render(

   
    <div className='max-w-screen-xl mx-auto'>
     <AuthProvider>
 <RouterProvider router={router} />
 </AuthProvider>
 
 </div>


)
