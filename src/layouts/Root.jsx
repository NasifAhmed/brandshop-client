import { Outlet } from "react-router-dom";

const home = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default home;
