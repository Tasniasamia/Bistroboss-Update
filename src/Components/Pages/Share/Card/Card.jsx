import React from 'react';

const Card = ({food}) => {
    return (
        <div className="card w-96 md:h-[500px] h-[500px] bg-base-100 shadow-xl rounded-none">
            <div className='md:h-[400px]'>
  <figure ><img src={food.image} className='w-full'  alt="food" /></figure></div>
  <div className="card-body  items-center text-center space-y-2 ">
    <h2 className="card-title">{food.name}</h2>
    <p>{food.recipe}</p>
    <div className="card-actions ">
        <div >

      
             {/* <button className="btn "style={{color:"#BB8506",background:"#1F2937"}}>Add To Cart</button> */}
                <button className="btn "style={{color:"#BB8506",borderBottom:"3px solid #BB8506"}}>Add To Cart</button>

       </div>
    </div>
  </div>
</div>
    );
};

export default Card;