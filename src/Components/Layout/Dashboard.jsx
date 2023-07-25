import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink, Outlet } from 'react-router-dom';
import useUser from '../../../Hooks/useUser';
const Dashboard = () => {
  const [isLoading,refetch,Alluser]=useUser();
  let IsAdmin=true;
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-row">
        <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="m-4 drawer-button lg:hidden"><AiOutlineMenu style={{color:"darkblue",fontSize:"30px"}}/></label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
  {
    IsAdmin? <>          <NavLink to="/Dashboard">Admin Home</NavLink>
    <NavLink>Add Item</NavLink>
    <NavLink  to="/Dashboard/Alluser">Manage User</NavLink>
    <NavLink>Manage Item</NavLink></>:      <>   <NavLink to="/Dashboard">User Home</NavLink>
    <NavLink>Reservation</NavLink>
    <NavLink>Payment Histor</NavLink>
    <NavLink to="/Dashboard/Mycart">MyCart</NavLink></> 
  }
            <div className="flex flex-col w-full border-opacity-50">
  <div className="divider"></div>
</div>
<NavLink to="/">Home</NavLink>
<NavLink to="/Our_Menu">Our Menu</NavLink>
<NavLink to="Our_shop">Our Shop</NavLink>
 
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;