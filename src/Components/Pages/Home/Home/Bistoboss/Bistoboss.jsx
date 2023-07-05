import React from 'react';
import imgs from '../../../../../assets/home/chef-service.jpg'
const Bistoboss = () => {
    return (
        <div className="hero min-h-screen my-20" style={{backgroundImage: `url(${imgs})`}}>
  <div className=" "></div>
  <div className="hero-content text-center ">
    <div className="max-w-5xl bg-white md:p-24 p-10">
      <h1 className="mb-2 text-5xl  font-secondary"style={{color:"#151515"}}>BISTRO BOSS</h1>
      <p className="mb-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
      
    </div>
  </div>
</div>
    );
};

export default Bistoboss;