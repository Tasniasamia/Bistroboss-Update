import React from 'react';

const Menudata = ({data}) => {
    return (
        <div className='flex gap-x-5 items-center'>
            <div>
                <img src={data.image} style={{height:"50px",width:"110px",borderRadius:"0px 200px 200px 200px"}} alt="imagedata"/>
            </div>
            <div>
<div>{data.name}--------</div>
<div>{data.recipe}</div>
            </div>
            <div style={{color:"#BB8506"}}>
                ${data.price}
            </div>
        </div>
    );
};

export default Menudata;