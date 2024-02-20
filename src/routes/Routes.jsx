import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader: ()=> fetch('/brands.json')
            },
            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>
            }
        ]
    }
])

export default routes;