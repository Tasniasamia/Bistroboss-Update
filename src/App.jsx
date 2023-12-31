import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter
 
} from "react-router-dom";
import HomeLayout from "./Components/Layout/HomeLayout";
import Home from "./Components/Pages/Home/Home/Home";
import Our_Menu from "./Components/Pages/Home/Our Menu/Our Menu";
import Our_Shop from "./Components/Pages/Home/Our Shop/Our_Shop";
import Login from "./Components/Pages/Share/Login/Login";
import Resister from "./Components/Pages/Share/Resister/Resister";
import PrivateRoute from "./Components/Pages/Share/PrivateRoute/PrivateRoute";
import About from "./Components/Pages/Home/About/About";
import Dashboard from "./Components/Layout/Dashboard";
import MyCart from "./Components/Pages/Dashboard/MyCart";
import Alluser from "./Components/Pages/Dashboard/Alluser";
import AddItem from "./Components/Pages/Share/AddItem/AddItem";


export const router = createBrowserRouter([{
  
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/Our_Menu",
        element:<Our_Menu></Our_Menu>
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/Our_shop",
        element:<Our_Shop></Our_Shop>
      },{
        path:"/Our_shop/:title",
        element:<Our_Shop></Our_Shop>
      },
      
    ]}
    ,
    {
      path:"/login",
      element:<Login></Login>
    }
    ,{
      path:"/resister",
      element:<Resister></Resister>
    },
    {
      path:"Dashboard",
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:"Mycart",
          element:<MyCart></MyCart>

        },{
          path:"Alluser",
          element:<Alluser></Alluser>
        },{
          path:"AddItem",
          element:<AddItem></AddItem>
        }
      ]
    }
  
]);