import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import cart from '../../../../assets/icon/carticon.png';
import account from '../../../../assets/Vector.png';
import logo from '../../../../assets/Group 1.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AuthData } from '../AuthProvider/AuthProvider';
import './Header.css';
const Header = () => {
  const {user,logOut,setLoad}=useContext(AuthData);
  
    const list=(
        <>
        <NavLink to="/" className="active">Home</NavLink>
        <NavLink to="/Home">Contact Us</NavLink>
        <NavLink to="/Dashboard">Dashboard</NavLink>
        <NavLink to="/Our_Menu">Our Menu</NavLink>
        <NavLink to="/Our_shop">Our Shop</NavLink>
       
        <NavLink to="/Home"><img className='' style={{height:"20px"}}src={cart}alt="data"/></NavLink>
        {
          user?<NavLink onClick={logOut} to="/login">Sign Out</NavLink>:<NavLink to="/login">Login</NavLink>

        }
        
       
        {/* <NavLink to="/login"></NavLink> 

*/}
{
  user?<NavLink><img className="rounded-lg" style={{height:"20px"}} src={user?.photoURL}alt="data"title={user?.displayName}/></NavLink>:<NavLink ><img style={{height:"20px"}} src={account}alt="data"/></NavLink>
}
        

        
        </>
    )
    return (
        <div className="navbar   max-w-screen-xl  fixed z-40 "style={{background:"rgba(0,0,0,0.3)"}}>
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}
        <GiHamburgerMenu className='text-white'/>
      </label>
      <ul tabIndex={0} className="mymenu menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black text-white rounded-box w-52">
        {/* <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li> */}
        {list}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl"><img src={logo} style={{height:"50px"}} alt="logo"/></a>
  </div>
  <div className="navbar-end hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 mymenu">
      {/* <li><a>Item 1</a></li>
      <li tabIndex={0}>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li> */}
      {list}
    </ul>
  </div>
  {/* <div className="navbar-end">
    <a className="btn">Button</a>
  </div> */}
</div>
    );
};

export default Header;