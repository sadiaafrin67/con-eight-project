import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";


const MainLayout = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <div className="py-10">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;