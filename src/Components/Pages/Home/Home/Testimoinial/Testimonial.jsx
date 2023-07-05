import React, { useEffect, useState,useRef } from 'react';
import Title from '../../../Share/Title/Title';
import img from '../../../../../assets/Group(1).png';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
// import required modules
const Testimonial = () => {
    const [test,setTest]=useState([]);
    useEffect(()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=>setTest(data))
    },[])
    return (
        <div className='my-40'>
             <Title title="---What Our Clients Say---"subtitle="TESTIMONIALS"></Title>
        
               <div>
               <Swiper
        
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >{
        test.map(index=><SwiperSlide key={index._id}><div className='flex flex-col items-center px-12 md:px-20 space-y-4'>
     <div>
     <Rating
      style={{ maxWidth: 180 }}
      value={index.rating}
      readOnly
    />
     </div>
        <div><img src={img} style={{height:"40px"}} alt="image"/></div>
        <div style={{fontSize:"16px"}}>{index.details}</div>
        <div className='text-2xl'style={{color:"#D99904"}}>{index.name}</div>
        </div></SwiperSlide>)
      }
        
      
      </Swiper>
                </div> 
           
        </div>
    );
};

export default Testimonial;