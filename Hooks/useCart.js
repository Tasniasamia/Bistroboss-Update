import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthData } from '../src/Components/Pages/Share/AuthProvider/AuthProvider';

const useCart = () => {
    const {user}=useContext(AuthData);
  const token=localStorage.getItem("token");
    const { isLoading, refetch, data:cart=[]} = useQuery({
        queryKey: ['repoData',user?.email],
        queryFn: async() =>{
      
        const response = await fetch(`http://localhost:3650/cart?email=${user?.email}`,
        {
          headers:{
            authorization: `Bearers ${token}`
          }
        })
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      },

      })

      return [isLoading,refetch,cart]
};

export default useCart;