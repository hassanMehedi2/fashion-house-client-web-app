import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";

const Root = () => {
    return (
        <div className="font-poppins max-w-[1380px] mx-auto p-2">
            <Outlet></Outlet>
            <Toaster />
            <Footer></Footer>
        </div>
    );
};

export default Root;