import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter
 
} from "react-router-dom";
import HomeLayout from "./Components/Layout/HomeLayout";
import Home from "./Components/Pages/Home/Home/Home";
import Our_Menu from "./Components/Pages/Home/Our Menu/Our Menu";
import Our_Shop from "./Components/Pages/Home/Our Shop/Our_Shop";


export const router = createBrowserRouter([
  {
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
        path:"/Our_shop",
        element:<Our_Shop></Our_Shop>
      },{
        path:"/Our_shop/:title",
        element:<Our_Shop></Our_Shop>
      }
    ]
  },
]);