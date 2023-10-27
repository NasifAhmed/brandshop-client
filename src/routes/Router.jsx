import { createBrowserRouter } from "react-router-dom";
import server from "../utility/server";
import Home from "../pages/Home";
import Root from "../layouts/Root";
import AddProduct from "../pages/AddProduct";
import MyCart from "../pages/MyCart";
import PrivateRoute from "./PrivateRouter";
import Login from "../pages/LogIn";
import Register from "../pages/Register";
import Product from "../pages/Product";
import ProductDetails from "../pages/ProductDetails";
import UpdateProduct from "../pages/UpdateProduct";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("../../brands.json"),
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/add-product",
                element: (
                    <PrivateRoute>
                        <AddProduct></AddProduct>
                    </PrivateRoute>
                ),
            },
            {
                path: "/my-cart",
                element: (
                    <PrivateRoute>
                        <MyCart></MyCart>
                    </PrivateRoute>
                ),
            },
            {
                path: "/Product/:brand",
                element: <Product></Product>,
            },
            {
                path: "/ProductDetails/:product",
                element: (
                    <PrivateRoute>
                        <ProductDetails></ProductDetails>
                    </PrivateRoute>
                ),
            },
            {
                path: "/UpdateProduct/:id",
                element: (
                    <PrivateRoute>
                        <UpdateProduct></UpdateProduct>
                    </PrivateRoute>
                ),
            },
        ],
    },
]);

export default router;
