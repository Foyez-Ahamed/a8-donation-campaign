import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Header/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-5 md:px-10 lg:px-16 py-3 my-3">
           <div>
           <Navbar></Navbar>
           </div>

            <div className="mt-5 lg:mt-16">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;