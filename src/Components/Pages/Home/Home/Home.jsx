import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import Title from '../../Share/Title/Title';
import Swipers from './Swiper/Swiper';
import Bistoboss from './Bistoboss/Bistoboss';
import Menudata from './Menudata/Menudata';
import Contact from './Contact';
import Chef from './Checf_Recommends/Chef';
import FromMenu from './From_Menu/FromMenu';
import Testimonial from './Testimoinial/Testimonial';



const Home = () => {
    const[menu,setMenu]=useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{console.log(data); 
        const filterdata=data.filter(index=>index.category==="popular")
        setMenu(filterdata);
        
        })
    },[])
    console.log(menu);
    return (
        <div>
            <Banner></Banner>
            <div>
                <Title title="---From 11:00am to 10:00pm---"subtitle="ORDER ONLINE"></Title>
            </div>
            <Swipers></Swipers>
            <Bistoboss></Bistoboss>
            <div className='my-40'>
                <Title title="---Check it out---"subtitle="FROM OUR MENU"></Title>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-10 p-4 md:p-0'>
                {menu.map(index=><Menudata key={index._id} data={index}></Menudata>)}
            </div>
            <div>
                <Contact></Contact>
            </div>
            <div>
                <Chef></Chef>
            </div>
            <FromMenu></FromMenu>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;