import React from 'react';
import useCart from '../../../../../Hooks/useCart';

const About = () => {
    const[isLoading,refetch,cart]=useCart();
    console.log(cart);
    return (
        <div className='my-20'>
            About
        </div>
    );
};

export default About;