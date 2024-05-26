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
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/Dashboard/AddItems/AddItems";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../Pages/Dashboard/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";

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
      element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children:[
        {
          path:"cart",
          element:<Cart></Cart>
        },


        // admin routes
        {
         path:"additems",
         element:<AdminRoutes><AddItems></AddItems></AdminRoutes>
        },
        {
          path:"allusers",
          element:<AdminRoutes><AllUsers></AllUsers></AdminRoutes>
        },
        {
          path:'updateitem/:id',
          element:<AdminRoutes><UpdateItem></UpdateItem></AdminRoutes>,
          loader:({params})=>fetch(`http://localhost:5000/menu/${params.id}`)
        },
        {
          path:"manageitems",
          element:<AdminRoutes><ManageItems></ManageItems></AdminRoutes>
        }
      ]
    }
  ]);

export default router;