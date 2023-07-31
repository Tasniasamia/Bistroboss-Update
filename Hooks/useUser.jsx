import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthData } from '../src/Components/Pages/Share/AuthProvider/AuthProvider';

const useUser = () => {
    const {user}=useContext(AuthData);
  
    const { isLoading, refetch, data:Alluser=[]} = useQuery({
        queryKey: ['repoData',user],
        queryFn: async() =>{
      
        const response = await fetch(`http://localhost:3650/AllusersData`)
        // if (!response.ok) {
        //   throw new Error('Network response was not ok')
        // }
        return response.json()
      },

      })

      return [isLoading,refetch,Alluser]
};

export default useUser;