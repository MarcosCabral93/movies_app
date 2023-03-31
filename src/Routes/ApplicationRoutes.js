import { Route, Routes } from "react-router-dom";
import { Home } from "../Views/Home";


export const ApplicationRoutes = () => (
<>
<Routes>
<Route exact path="/" element={<Home />}/>
</Routes>
</>
);