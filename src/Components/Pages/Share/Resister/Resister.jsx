import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthData } from '../AuthProvider/AuthProvider';

const Resister = () => {
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
            reset();
            logOut();
            
        }).catch((error) => {
         
        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
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
        </div></div></div>
      )
};

export default Resister;