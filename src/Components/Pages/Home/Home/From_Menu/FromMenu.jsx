import React from 'react';
import pik from '../../../../../assets/home/featured.jpg';
import Title from '../../../Share/Title/Title';


const FromMenu = () => {
    return (
        <div className="hero min-h-screen my-40 " style={{backgroundImage: `url(${pik})`,backgroundAttachment:"fixed"}}>
  <div className="hero-overlay bg-opacity-60 "></div>
  <div className="  text-neutral-content" >
  <Title title="---Check it Out---"subtitle="FROM OUR MENU"></Title>
    <div className="max-w-5xl flex flex-col md:flex-row justify-center items-center">
        
   <div className='md:w-[40%] w-fullmx-auto py-20'>
<img src={pik} className=" w-[400px]" alt="feature"/>
   </div>
   <div className='ms-6 md:w-[50%]'>

    <div>March 20, 2023</div>
    <div>WHERE CAN I GET SOME?</div>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</div>
    <button className='btn btn-outline border-0 border-b-2 capitalize text-white border-white'>Read More</button>
   </div>
    </div>
  </div>
  </div>
    );
};

export default FromMenu;