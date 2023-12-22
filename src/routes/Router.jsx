import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddTask from "../pages/AddTask/AddTask";
import PrivateRoute from "./PrivateRoute";
import Faq from "../pages/Faq/Faq";
import Support from "../pages/Support/Support";
import MyTasks from "../pages/MyTasks/MyTasks";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard /></PrivateRoute>,
            },
            {
                path: '/add-task',
                element: <PrivateRoute><AddTask /></PrivateRoute>,
            },
            {
                path: '/my-tasks',
                element: <PrivateRoute><MyTasks /></PrivateRoute>,
            },
            {
                path: '/faq',
                element: <Faq />,
            },
            {
                path: '/support',
                element: <Support />,
            },
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register />,
    }
]);

export default router;