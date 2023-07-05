import React from 'react';
import Header from '../Pages/Share/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Share/Footer/Footer';

const HomeLayout = () => {
    return (
        <div >
        <Header></Header>
        <Outlet/>
        <Footer></Footer>
        </div>
    );
};

export default HomeLayout;