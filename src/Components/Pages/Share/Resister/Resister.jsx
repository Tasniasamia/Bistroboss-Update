import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AuthData } from '../AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Google from '../Google_sign/Google';
import { useState } from 'react';
import axios from 'axios';
import useAxiosSecure from '../../../../../Hooks/useAxiosSecure';

const Resister = () => {
  const [axiosSecure]=useAxiosSecure();
    const navigate=useNavigate();
    const[err,setErr]=useState(null);
    const{SignUp,UpdateProfile,logOut}=useContext(AuthData);
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {console.log(data);
    const email=data.email;
    const password=data.password;
    const photo=data.photo;
    const name=data.name;
    SignUp(email,password).then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);

        UpdateProfile(photo,name).then(() => {
          

          
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Your information has been saved',
                showConfirmButton: false,
                timer: 1500
              })

              const data={ email:user.email, name:user.displayName}
const token=localStorage.getItem('token');

// axiosSecure.post(' /Allusers',  data)
//   .then(data=>{console.log(data);
//                 if(data.data.insertedId){
//                   Swal.fire({
//                     position: 'top-center',
//                     icon: 'success',
//                     title: 'Users information has been saved into Database',
//                     showConfirmButton: false,
//                     timer: 1500
//                   })

//                   reset();
//                    logOut();
//                    navigate('/login');
              

//                 }
              
//               }) .catch(error => {
//                 console.log('Error fetching data:', error.message);
//                 // setErr(error.message);
//                 Swal.fire({
//                   icon: 'error',
//                   title: 'Oops...',
//                   text: `${error.message}`,
//                   footer: '<a href="">Why do I have this issue?</a>'
//                 })
//               });
           
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

                  reset();
                  logOut();
                  navigate('/login');
                }
              })
              .catch(error => {
                console.error('Error fetching data:', error.message);
                setErr(error.message);
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: `${err}`,
                  footer: '<a href="">Why do I have this issue?</a>'
                })
              });
           
            
          
            
        }).catch((error) => {
          const message=error.message;
     
          
         
        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErr(errorMessage);
        console.log(errorMessage);
      });
    
    }
    
      // watch input value by passing the name of it
    
      return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
         
          <div className="card flex-shrink-0 p-5 w-full md:w-[150%] max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text"name="name"id="name"  {...register("name", { required: true })} className="input input-bordered" />
              </div>
          {/* include validation with required or other standard HTML validation rules */}
          <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text"name="email"id="email" {...register("email", { required: true })} className="input input-bordered" />
         
         {errors.email && <span>This field is required</span>}              </div>
         <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text"name="password"id="password" {...register("password", { required: true })} className="input input-bordered" />
         
         {errors.password && <span>This field is required</span>}              </div>
         <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text"name="photo"id="photo" {...register("photo", { required: true })} className="input input-bordered" />
         
         {errors.photo && <span>This field is required</span>}              </div>
          <input type="submit"value="Sign Up"className="btn btn-primary w-full my-5" />
        </form>

        <div className='text-center my-5'>
          <Google></Google>
        </div>

        <p className="text-center py-2">Aready exist a Account? <Link to="/login">Sign In</Link></p>
        </div></div></div>
      )
};

export default Resister;