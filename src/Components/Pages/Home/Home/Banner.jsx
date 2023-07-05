import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import pik1 from '../../../../assets/home/01.jpg';
import pik2 from '../../../../assets/home/02.jpg';
import pik3 from '../../../../assets/home/03.png';
import pik4 from '../../../../assets/home/04.jpg';
import pik5 from '../../../../assets/home/05.png';
import pik6 from '../../../../assets/home/06.png';
const Banner = () => {
    return (
        <Carousel  className='text-center'>
        <div>
            <img src={pik1} />
          
        </div>
        <div>
            <img src={pik2}/>
         
        </div>
        <div>
            <img src={pik3} />
            
        </div>
        <div>
            <img src={pik4} />
       
        </div>
        <div>
            <img src={pik5} />
            
        </div>
        <div>
            <img src={pik6} />
    
        </div>
    </Carousel>
    );
};

export default Banner;