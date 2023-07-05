import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter
 
} from "react-router-dom";
import HomeLayout from "./Components/Layout/HomeLayout";
import Home from "./Components/Pages/Home/Home/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      }
    ]
  },
]);