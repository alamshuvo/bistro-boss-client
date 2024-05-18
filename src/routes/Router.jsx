import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Home from "../Pages/Home/Home/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
       {
        path:"/",
        element :<Home></Home>
       }
      ]
    },
  ]);

export default router;