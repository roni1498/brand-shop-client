import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import Root from "../layout/Root";
import PageNotFound from "../components/PageNotFound";
import AddProducts from "../components/AddProducts";
import MyCart from "../components/MyCart";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import AllProducts from "../components/AllProducts";
import ProductsByBrand from './../components/ProductsByBrand';
import UserPage from "../components/UserPage";
import UpdateProduct from "../components/UpdateProduct";
import PrivateRoutes from "./PrivateRoutes";
import ProductDetails from "../components/ProductDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <PageNotFound></PageNotFound>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/updateProduct/:id",
                element: <PrivateRoutes><UpdateProduct></UpdateProduct></PrivateRoutes>,
                loader: ({params}) => fetch(`https://brandshop-backend.vercel.app/single-product/${params.id}`)
            },
            {
                path: "/addProducts",
                element: <PrivateRoutes><AddProducts></AddProducts></PrivateRoutes>
            },
            {
                path: "/myCart",
                element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>,
                loader: () => fetch('https://brandshop-backend.vercel.app/addToCart')
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/allProducts",
                element: <AllProducts></AllProducts>,
                loader: () => fetch('https://brandshop-backend.vercel.app/product')
            },
            {
                path: "products/:brandName",
                element: <ProductsByBrand></ProductsByBrand>,
                loader: ({params}) => fetch(`https://brandshop-backend.vercel.app/product/${params.brandName}`)
            },
            {
                path: "/userPage",
                element: <UserPage></UserPage>
            },
            {
                path: "/productDetails/:id",
                element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
                loader: ({params}) => fetch(`https://brandshop-backend.vercel.app/single-product/${params.id}`)
            }
           
        ]
    }
])
export default router;