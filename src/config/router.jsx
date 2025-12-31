import { createBrowserRouter, RouterProvider } from "react-router"
import { Inicio } from "@pages";
const router = createBrowserRouter([
    {
        element:<Inicio/>,
        path:'/'        
    }
]);

const Routers = ()=> <RouterProvider router={router}/>;
export default Routers;