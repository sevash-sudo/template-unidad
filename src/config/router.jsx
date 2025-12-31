import { createBrowserRouter, RouterProvider } from "react-router"

const router = createBrowserRouter([
    {
        element:<h1>Inicio</h1>,
        path:'/'        
    }
]);

const Routers = ()=> <RouterProvider router={router}/>;
export default Routers;