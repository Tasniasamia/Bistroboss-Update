import React from 'react';
import { useContext } from 'react';
import { AuthData } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Google = () => {
    const navigate=useNavigate();
    // const [errormessage,setMessageerror]=useState("data")
    const{googleSignIn,setLoad}=useContext(AuthData);
   const token=localStorage.getItem("token");
   console.log(token);
    const goolesign=()=>{
        googleSignIn().then((result) => {
          
            const user = result.user;
            console.log(user);
            navigate('/')
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your login has been saved',
                showConfirmButton: false,
                timer: 1500
              })
              const data={
                email:user.email , name:user.displayName
              }
              fetch('http://localhost:3650/Allusers',{
                method:"POST",
              
                  headers:{
                    authorization: `Bearers ${token}`
                  }
              ,
                body:JSON.stringify(data)
              }).then(res=>res.json())
              .then((data)=>{

                if(data.insertedId){
                  Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Users information has been saved into Database',
                    showConfirmButton: false,
                    timer: 1500
                  })

                  // reset();
                  // logOut();
                  navigate('/login');
                }
              })
            //   .catch(error => {
            //     console.error('Error fetching data:', error.message);
            //     setErr(error.message);
            //     Swal.fire({
            //       icon: 'error',
            //       title: 'Oops...',
            //       text: `${err}`,
            //       footer: '<a href="">Why do I have this issue?</a>'
            //     })
            //   });
           
          }).catch((error) => {
        
            const errorMessage = error.message;
            console.log(errorMessage);
           
          });
    }

    return (
        <div>
            <button className='btn btn-outline-primary'onClick={goolesign}>Login With Google</button>
        </div>
    );
};

export default Google;