import React from 'react';
import { useContext } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { AuthData } from '../AuthProvider/AuthProvider';
const Login = () => {
    const {word,login}=useContext(AuthData);
    console.log(word);
    function onChange(value) {
        console.log("Captcha value:", value);
        setDisable(false);
      }
    const[disable,setDisable]=useState(true);
    const handlesubmit=(event)=>{
        event.preventDefault();
        let form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
        login(email,password).then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
          });
        
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
         
          <div className="card flex-shrink-0 w-full md:w-[150%] max-w-sm shadow-2xl bg-base-100">
            <form className="card-body"onSubmit={handlesubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email"name="name"id="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password"name="password"id="password" className="input input-bordered" />
                
              </div>

              {/* recapcha */}
              <ReCAPTCHA
    sitekey="6Lfwm0knAAAAALVoZe6iKA975UfTbSILC5Q_AT_x"
    onChange={onChange}
  />,
 
              <div className="form-control mt-6">
                <button className="btn btn-primary"disabled={disable}>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;