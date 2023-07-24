import React from 'react'
import ReactDOM from 'react-dom/client'


import { RouterProvider } from 'react-router-dom'
import { router } from './App'
import './index.css';
import AuthProvider from './Components/Pages/Share/AuthProvider/AuthProvider';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
//   import { getTodos, postTodo } from '../my-api'
  
  // Create a client
  const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(

   
    <div className='max-w-screen-xl mx-auto'>
            <QueryClientProvider client={queryClient}>
            <AuthProvider>
 <RouterProvider router={router} />
 </AuthProvider>
    </QueryClientProvider>
    
 
 </div>


)
