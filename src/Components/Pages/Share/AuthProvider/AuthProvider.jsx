import React from 'react';
import { useState,useEffect } from 'react';
import { createContext } from 'react';
import { getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword,updateProfile,onAuthStateChanged,signOut,GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import { app } from '../../../../../Firebase/Firebase_Config';
import axios from 'axios';
export const AuthData=createContext();

const AuthProvider = ({children}) => {
    const auth = getAuth(app);


    const provider = new GoogleAuthProvider();
    const word="Hellow";
    const[user,setUser]=useState(null);
    const[load,setLoad]=useState(true);

    //Login
    const login=(email,password)=>{
        setLoad(true);
return     signInWithEmailAndPassword(auth, email, password);

    }
    //Sign Up
    const SignUp=(email,password)=>{
        setLoad(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    //UpdateProfile
    const UpdateProfile=(photo,name)=>{
        setLoad(true);
     return   updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }
//Google Sign in
const googleSignIn=()=>{
  setLoad(true);
  return signInWithPopup(auth, provider)

}
    //Manage User
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {
         setLoad(false);
          setUser(user);
axios.post('http://localhost:3650/jwt',{email:user.email})
.then(data=>{console.log(data.data.tokenkey);
localStorage.setItem("token",data.data.tokenkey)

})
          
            } else {
              localStorage.removeItem("token")
              // User is signed out
              // ...
            }
          });
          return ()=>{
            unsubscribe();
          }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    console.log(user);


    //logOut
    const logOut=()=>{
       
 signOut(auth).then(() => {
    setUser('');
    setLoad(false);
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
    }
    const datacollection={word,user,load,setLoad,login,SignUp,UpdateProfile,logOut,googleSignIn}
    return (
       <AuthData.Provider value={datacollection}>
{children}
       </AuthData.Provider>
    );
};

export default AuthProvider;