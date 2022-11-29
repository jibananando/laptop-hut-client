import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddAProduct from "../../Pages/AddAProduct/AddAProduct";
import AllCategory from "../../Pages/AllCaterory/AllCategory";
import Blog from "../../Pages/Blog/Blog";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivetRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/addproduct',
                element: <AddAProduct></AddAProduct>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/category/:name',
                element: <PrivateRoute>
                    <AllCategory></AllCategory>
                </PrivateRoute>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])

export default router;