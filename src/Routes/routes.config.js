import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import About from "../Pages/About/About"
import { Blogs } from "../Pages/Blogs/Blogs"
import ErrorPage from "../Pages/ErrorPage"
import { Home } from "../Pages/Home"
import { Products } from "../Pages/Products/Products"
import { Signup } from "../Pages/signup/Signup"
import { Login } from "../Pages/login/Login"




const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/signup',
                element: <Signup></Signup>,
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/products',
                element: <Products />,
            },
            {
                path: '/blogs',
                element: <Blogs />,
            },

        ],

    },
    {
        path: '/dashboard',
        // element: <><DashboardLayout></DashboardLayout></>,
        children: [
            // {
            //     path: '',
            //     element: <Welcome />,

            // },
            // {
            //     path: 'my-bookings',
            //     element: <PrivateRoute><MyBookings /></PrivateRoute>,

            // },

        ]
    },
])

export default router