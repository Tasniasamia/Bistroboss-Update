import React, { useEffect, useState } from 'react';

const useMenu = () => {
    const [menu,setMenu]=useState([]);
   useEffect(()=>{

    fetch('http://localhost:3650/menudata')
    .then(res=>res.json())
    .then(data=>setMenu(data))
   },[])
   return menu;
};

export default useMenu;