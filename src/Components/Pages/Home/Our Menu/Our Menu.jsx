import React from 'react';
import pik from '../../../../assets/menu/banner3.jpg'
import pik1 from "../../../../assets/menu/dessert-bg.jpeg"
import pik2 from "../../../../assets/menu/pizza-bg.jpg"
import pik3 from "../../../../assets/menu/salad-bg.jpg"
import pik4 from "../../../../assets/menu/soup-bg.jpg"
import Menupik from '../../Share/Header/Menupik';

import Title from '../../Share/Title/Title';
import MenuCollection from '../../Share/MenuCollection/MenuCollection';
import { Link } from 'react-router-dom';


const Our_Menu = () => {
    
    return (
       <div>
<Menupik bgpik={pik}text="Contact"subtext="WOULD YOU LIKE TO TRY A DISH?"></Menupik>
<Title title="--Don't miss--"subtitle="TODAY'S OFFER"></Title>

    <MenuCollection category="drinks"></MenuCollection>
    <div className='text-center my-10'>
<button className="btn btn-outline border-0 border-b-2 capitalize"><Link to={`/Our_shop/${"drinks"}`}>Order Your Favourite Food</Link></button></div><Menupik bgpik={pik1}text="DESSERTS"subtext="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Menupik>
<MenuCollection category="dessert"></MenuCollection>
<div className='text-center my-10'>
<button className="btn btn-outline border-0 border-b-2 capitalize"><Link to={`/Our_shop/${"dessert"}`}>Order Your Favourite Food</Link></button></div><Menupik bgpik={pik2}text="PIZZA"subtext="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Menupik>
<MenuCollection category="pizza"></MenuCollection>
<div className='text-center my-10'>
<button className="btn btn-outline border-0 border-b-2 capitalize"><Link to={`/Our_shop/${"pizza"}`}>Order Your Favourite Food</Link></button></div><Menupik bgpik={pik3}text="SALAD"subtext="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Menupik>
<MenuCollection category="salad"></MenuCollection>
<div className='text-center my-10'>
<button className="btn btn-outline border-0 border-b-2 capitalize"><Link to={`/Our_shop/${"salad"}`}>Order Your Favourite Food</Link></button></div><Menupik bgpik={pik4}text="SOUP"subtext="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Menupik>
<MenuCollection category="soup"></MenuCollection>
<div className='text-center my-10'>
<button className="btn btn-outline border-0 border-b-2 capitalize"><Link to={`/Our_shop/${"soup"}`}>Order Your Favourite Food</Link></button></div>
       </div>
    );
};

export default Our_Menu;