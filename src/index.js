import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Header } from "./Components/Header"
import {  RouterProvider } from 'react-router-dom';
import router from './Routes/ApplicationRoutes' 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<Header />
<RouterProvider router={router} />
</React.StrictMode>
);
