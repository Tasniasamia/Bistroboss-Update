import React, { useContext } from 'react';
import { AuthData } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location=useLocation();
    console.log(location);
   const {user,load,setLoad}=useContext(AuthData);
   if(user){
    return children;
   }
   if(load){
 <div>Loading.....</div>
   }
  
  
   return <Navigate to="/login"state={{from:location}}></Navigate>
};

export default PrivateRoute;