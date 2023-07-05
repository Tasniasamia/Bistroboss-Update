import React from 'react';

const Title = ({title,subtitle}) => {
    return (
        <div className='md:w-1/4 w-3/4 md:px-0 text-center mx-auto my-20'>
            <div className='pb-2'style={{color:"#D99904"}}>{title}</div>
            <div className='text-2xl border-0 border-y-2 py-3'>{subtitle}</div>
        </div>
    );
};

export default Title;