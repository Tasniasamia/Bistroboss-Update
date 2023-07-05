// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';


// // import './styles.css';

// // import required modules
// import { Pagination } from 'swiper/modules';

// export default function Swipers() {
//   return (
//     <>
//       <Swiper
//         slidesPerView={4}
//         spaceBetween={10}
//         centeredSlides={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination]}
//         className="mySwiper w-full "
//       >
//         <SwiperSlide><div><img src={slide1} alt="slide"/>
//         <div className=' text-3xl  text-white  -mt-12 mx-auto font-bold'>
//             Salad</div><div className='mt-10'></div></div></SwiperSlide>
//         <SwiperSlide><div><img src={slide2} alt="slide"/> <div className=' text-3xl text-white -mt-12 mx-auto font-bold'>
//             Pizza</div></div></SwiperSlide>
//         <SwiperSlide><div><img src={slide3} alt="slide"/> <div className=' text-3xl  text-white  -mt-12 mx-auto font-bold'>
//             Soup</div></div></SwiperSlide>
//         <SwiperSlide><div><img src={slide4} alt="slide"/> <div className=' text-3xl  text-white  -mt-12 mx-auto font-bold'>
//             Dessert</div></div></SwiperSlide>
//         <SwiperSlide><div><img src={slide5} alt="slide"/> <div className=' text-3xl text-white   -mt-12 mx-auto font-bold'>
//             Salad</div></div></SwiperSlide>
      
//       </Swiper>
//     </>
//   );
// }
import React, { useRef, useState } from 'react';
// Import Swiper React components
import slide1 from '../../../../../assets/home/slide1.jpg';
import slide2 from  '../../../../../assets/home/slide2.jpg';
import slide3 from  '../../../../../assets/home/slide3.jpg';
import slide4 from  '../../../../../assets/home/slide4.jpg';
import slide5 from  '../../../../../assets/home/slide5.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Swipers.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper w-full"
      >
       <SwiperSlide><div><img src={slide1} alt="slide"/>
        <div className=' md:text-3xl  text-white  -mt-12 mx-auto font-bold'>
            Salad</div><div className='mt-12'></div></div></SwiperSlide>
        <SwiperSlide><div><img src={slide2} alt="slide"/> <div className=' md:text-3xl text-white -mt-12 mx-auto font-bold'>
            Pizza</div></div></SwiperSlide>
        <SwiperSlide><div><img src={slide3} alt="slide"/> <div className=' md:text-3xl  text-white  -mt-12 mx-auto font-bold'>
            Soup</div></div></SwiperSlide>
        <SwiperSlide><div><img src={slide4} alt="slide"/> <div className=' md:text-3xl  text-white  -mt-12 mx-auto font-bold'>
            Dessert</div></div></SwiperSlide>
        <SwiperSlide><div><img src={slide5} alt="slide"/> <div className=' md:text-3xl text-white   -mt-12 mx-auto font-bold'>
            Salad</div></div></SwiperSlide>
      
      </Swiper>
    </>
  );
}
