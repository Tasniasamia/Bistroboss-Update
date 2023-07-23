import React, { useContext } from 'react';
import { AuthData } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location=useLocation();
   const {user,load}=useContext(AuthData);
   if(user){
    return children;
   }
   if(load){
    return <div>Loading.....</div>
   }
   return <Navigate to="/login" state={{ from:location }} replace></Navigate>
};

export default PrivateRoute;