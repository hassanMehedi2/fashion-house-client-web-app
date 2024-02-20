import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="font-poppins max-w-[1380px] mx-auto">
            <Outlet></Outlet>
            <Toaster />
        </div>
    );
};

export default Root;