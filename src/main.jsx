import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {NextUIProvider} from '@nextui-org/react'
import {

  RouterProvider,
} from "react-router-dom";
import router from './routes/Router';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './components/Provider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     
  <AuthProvider>
     <HelmetProvider>
       <div className='max-w-screen-xl mx-auto'>
       <NextUIProvider>
       <RouterProvider router={router} />
       </NextUIProvider>
       </div>
     </HelmetProvider>
  </AuthProvider>

  </React.StrictMode>,
)
