import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { AuthData } from '../src/Components/Pages/Share/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const  axiosSecure=axios.create({
    baseURL:`http://localhost:3650`
   })
const useAxiosSecure = () => {
    const{user}=useContext(AuthData);
    const {logOut}=useContext(AuthData);
    const navigate=useNavigate();
 useEffect(()=>{
    axiosSecure.interceptors.request.use(req=>{
        const token=localStorage.getItem('token')
        if(token){
            req.headers.Authorization=`Bears ${token}`
          
        }
        return req;
    
    })
    axiosSecure.interceptors.response.use(
        response=> response,
        error=>{console.log(error.response);
        if((error?.response) && ((error?.response?.status===403) || (error?.response?.status === 401)))

{

    alert("Unauthorized User");
    logOut();
    navigate("/");

}
        
return error.response();
        
        }
    )

    
 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[navigate,logOut,axiosSecure])
 return [axiosSecure];
};

export default useAxiosSecure;