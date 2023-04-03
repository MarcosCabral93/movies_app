import {createBrowserRouter,Outlet } from "react-router-dom";
import { Home } from "../Views/Home";
import { MovieDetail } from "../Views/MovieDetail";


import {Header} from '../Components/Header'

const App =()=>{
    return(
        <>
        <Header/>
        <Outlet/>
        </>
    )
};

const router = createBrowserRouter([
    {
        element:<App/>,
        children:[
            {
                path: '/',
                element: <Home />,
                },
                {
                path: '/movie/:id',
                element: <MovieDetail />,
                },
        ]

    }
  
    ]);

    export default router