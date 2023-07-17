import React, { useState } from 'react';
import useMenu from '../../../../../Hooks/useMenu';
import Menudata from '../../Home/Home/Menudata/Menudata';

const MenuCollection = ({data,category}) => {
    const menu=useMenu();
   
  const filterdata= menu.filter(index=>index.category==category);


    
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 gap-10 p-4 md:p-0 my-20'>
            {
                filterdata.map(index=><Menudata key={index._id} data={index}></Menudata>)
            }
            
        </div>
    );
};

export default MenuCollection;