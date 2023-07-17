import React, { useState } from 'react';
import Menupik from '../../Share/Header/Menupik';
import pik from '../../../../assets/shop/banner2.jpg';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import useMenu from '../../../../../Hooks/useMenu';
import 'react-tabs/style/react-tabs.css';
import Card from '../../Share/Card/Card';
import { useParams } from 'react-router-dom';
const Our_Shop = () => {
    const {title}=useParams();
    console.log(title)
    const menu=useMenu();
    const salad= menu.filter(index=>index.category=="salad");
    const pizza= menu.filter(index=>index.category=="pizza");
    const soup= menu.filter(index=>index.category=="soup");
    const dessert= menu.filter(index=>index.category=="dessert");
    const drinks= menu.filter(index=>index.category=="drinks");
  
    const allitem=["salad","pizza","soup","dessert","drinks"];
    let index=allitem.indexOf(title);
    

    const [tabIndex, setTabIndex] = useState(()=>{
        if(title==undefined){
            return 0;
        }
        else{
            return index;
        }
    });
    // if(index){
    //     setTabIndex(index);
    // }

    

    return (
        <div>
         <Menupik bgpik={pik} text="OUR SHOP"subtext="WOULD YOU LIKE TO TRY A FISH"></Menupik>
       

<div className='my-10'>
  <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index || 0)}>
    <TabList>
        {
            allitem.map((index,index2)=><Tab key={index2}>{index}</Tab>)
        }
     
    </TabList>
    <TabPanel>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-10 	justify-items-center'>
        {
            salad.map(index=><Card key={index._id} food={index}></Card>)
        }</div>
    </TabPanel>
    <TabPanel>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-10 	justify-items-center'>
        {
            pizza.map(index=><Card key={index._id} food={index}></Card>)
        }</div>
        
    </TabPanel>
    <TabPanel>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-10 	justify-items-center'>
        {
            soup.map(index=><Card key={index._id} food={index}></Card>)
        }</div>
    </TabPanel>
    <TabPanel>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-10 	justify-items-center'>
        {
            dessert.map(index=><Card key={index._id} food={index}></Card>)
        }</div>
    </TabPanel>
    <TabPanel>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-10 	justify-items-center'>
        {
            drinks.map(index=><Card key={index._id} food={index}></Card>)
        }</div>
    </TabPanel>
  </Tabs></div>

        </div>
    );
};

export default Our_Shop;