import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import Donate from "../Components/Donations/Donate/Donate";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const myCreatedRouter = createBrowserRouter([

    {
        path : '/',
        element : <MainLayout></MainLayout>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },

            {
                path : '/donate/:id',
                element : <Donate></Donate>,
                loader : () => fetch('/donation.json')
            },

            {
                path : '/donation',
                element : <Donation></Donation>
            },

            {
                path : '/statistics',
                element : <Statistics></Statistics>
            }
        ]
    }

])

export default  myCreatedRouter;