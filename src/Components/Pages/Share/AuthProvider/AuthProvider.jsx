import React from 'react';
import { useState,useEffect } from 'react';
import { createContext } from 'react';
import { getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword,updateProfile,onAuthStateChanged,signOut} from "firebase/auth";
import { app } from '../../../../../Firebase/Firebase_Config';
export const AuthData=createContext();

const AuthProvider = ({children}) => {
    const auth = getAuth(app);

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

    //Manage User
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {
         setLoad(false);
          setUser(user);
            } else {
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
    const datacollection={word,user,load,setLoad,login,SignUp,UpdateProfile,logOut}
    return (
       <AuthData.Provider value={datacollection}>
{children}
       </AuthData.Provider>
    );
};

export default AuthProvider;