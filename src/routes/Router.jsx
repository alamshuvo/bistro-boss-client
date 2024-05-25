import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../Pages/Shared/secret/Secret";
import Dashboard from "../MainLayout/Dashboard";
import Cart from "../Pages/Dashboard/Dashboard/Cart/Cart";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
       {
        path:"/",
        element :<Home></Home>
       },
       {
        path:"/menu",
        element:<Menu></Menu>
       },
       {
        path:"/order/:category",
        element:<Order></Order>
       },
       {
        path:"/login",
        element: <Login></Login>
       },
       {
        path:"/register",
        element:<SignUp></SignUp>
       },
       {
        path:"/secret",
        element:<PrivateRoutes><Secret></Secret></PrivateRoutes>
       }
      ]
    },
    {
      path:"dashboard",
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:"cart",
          element:<Cart></Cart>
        }
      ]
    }
  ]);

export default router;