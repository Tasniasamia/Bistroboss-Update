import React, { useState } from 'react';

const Chefcard = ({chefdata}) => {
    const [Button,setButton]=useState(false);
    const activebutton=()=>{
        setButton(!Button);
    }
    return (
        <div className="card w-96 md:h-[500px] h-[500px] bg-base-100 shadow-xl rounded-none">
            <div className='md:h-[400px]'>
  <figure ><img src={chefdata.image} className='w-full'  alt="food" /></figure></div>
  <div className="card-body  items-center text-center space-y-2 ">
    <h2 className="card-title">{chefdata.name}</h2>
    <p>{chefdata.recipe}</p>
    <div className="card-actions ">
        <div onClick={activebutton}>

        {
            Button?      <button className="btn "style={{color:"#BB8506",background:"#1F2937"}}>Add To Cart</button>
            :      <button className="btn "style={{color:"#BB8506",borderBottom:"3px solid #BB8506"}}>Add To Cart</button>

        }</div>
    </div>
  </div>
</div>
    );
};

export default Chefcard;