import React from 'react';
import { useContext } from 'react';
import { AuthData } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Card = ({food}) => {
  const {user}=useContext(AuthData);
 
  
  const pikdata=(fooddata)=>{
   
   console.log(fooddata);
   if(user && user?.email){
    const datacollection={
      email: user?.email, menuid:fooddata._id,  name:fooddata.name , image:fooddata.image , price:fooddata.price
    }
    console.log(datacollection);
    fetch('http://localhost:3650/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datacollection),
    })
    .then((res) => res.json())
    .then((data)=> {
        console.log(data);
        if (data.insertedId) {
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Your work has become successful',
                showConfirmButton: false,
                timer: 1500
            });
        }
    });







   }
     
  }
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
                <button className="btn "onClick={()=>{pikdata(food)}} style={{color:"#BB8506",borderBottom:"3px solid #BB8506"}}>Add To Cart</button>

       </div>
    </div>
  </div>
</div>
    );
};

export default Card;