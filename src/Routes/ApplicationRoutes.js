import {createBrowserRouter } from "react-router-dom";
import { Home } from "../Views/Home";
import { MovieDetail } from "../Views/MovieDetail";

const router = createBrowserRouter([
    {
    path: '/',
    element: <Home />,
    },
    {
    path: '/movie/:id',
    element: <MovieDetail />,
    },
    ]);

    export default router