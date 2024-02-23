import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddProduct from "../pages/AddProduct/AddProduct";
import BrandsProducts from "../pages/BrandsProducts/BrandsProducts";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";
import PrivateRoute from "./PrivateRoute";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/brands.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addProduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: '/brandsProducts/:brand',
                element: <BrandsProducts></BrandsProducts>,
                loader: ({ params }) => fetch(`https://fashion-house-server-web-app.vercel.app/products/brand/${params.brand}`)
            },
            {
                path: '/updateProduct/:id',
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({ params }) => fetch(`https://fashion-house-server-web-app.vercel.app/products/${params.id}`)
            },
            {
                path: '/product/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`https://fashion-house-server-web-app.vercel.app/products/${params.id}`)
            },
            {
                path:'/cart',
                element:<PrivateRoute> <Cart></Cart></PrivateRoute>,
                loader: ()=> fetch('https://fashion-house-server-web-app.vercel.app/cart')
                
            }
        ]
    }
])

export default routes;