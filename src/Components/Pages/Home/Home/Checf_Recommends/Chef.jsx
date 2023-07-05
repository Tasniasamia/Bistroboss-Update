import React, { useEffect, useState } from 'react';
import Title from '../../../Share/Title/Title';
import Chefcard from './Chefcard';

const Chef = () => {
    const [chef,setChef]=useState([]);
    const [True,setTrue]=useState(false);
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>setChef(data))
    },[])
    const False=()=>{
        setTrue(!True);
    }
    return (
        <div className='my-20'>
             <div className='my-12'>
                <Title title="---Should Try---"subtitle="CHEF RECOMMENDS"></Title>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-10 	justify-items-center'>
            {
                chef.slice(0,True?chef.length:3).map(index=><Chefcard key={index._id} chefdata={index}></Chefcard>)
            }
</div>
{
            True || <div className='text-center my-12'onClick={False}>
            <button className="btn btn-outline border-0 border-b-2 capitalize">View All Cards</button>
        
            </div>
        }
        </div>
    );
};

export default Chef;