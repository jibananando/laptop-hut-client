import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AllCategory from "../../Pages/AllCaterory/AllCategory";
import Blog from "../../Pages/Blog/Blog";
import AddAProudct from "../../Pages/Dashboard/AddAProudct";
import AllBuyer from "../../Pages/Dashboard/AllBuyer";
import AllSeller from "../../Pages/Dashboard/AllSeller";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Myorders from "../../Pages/Dashboard/Myorders";
import MyProducts from "../../Pages/Dashboard/MyProducts";
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
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: 'myorders',
                        element: <Myorders></Myorders>
                    },
                    {
                        path: 'myproducts',
                        element: <MyProducts></MyProducts>
                    },
                    {
                        path: 'addAproduct',
                        element: <AddAProudct></AddAProudct>
                    },
                    {
                        path: 'allseller',
                        element: <AllSeller></AllSeller>
                    },
                    {
                        path: 'allbuyer',
                        element: <AllBuyer></AllBuyer>
                    }
                ]
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