import React from 'react';

const Menupik = ({bgpik,text,subtext}) => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: `url(${bgpik})`}}>
  <div className=""></div>
  <div className="text-center text-neutral-content ">
    <div className="md:w-[800px] w-full md:p-24 p-10 bg-[rgba(0,0,0,0.3)] ">
      <h1 className="mb-5 text-5xl font-bold">{text}</h1>
      <p className="mb-5">{subtext}</p>
      
    </div>
  </div>
</div>
    );
};

export default Menupik;