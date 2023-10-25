import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    const navLinks = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/add-product">Add Product</NavLink>
            </li>
            <li>
                <NavLink to="/my-cart">My Cart</NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {navLinks}
                    </ul>
                </div>
                <div className="flex justify-center items-center">
                    <img
                        className="max-w-[110px]"
                        src="https://i.ibb.co/MV4Dv3f/pngwing-com.png"
                    />
                    <span className="btn btn-ghost normal-case text-xl">
                        Car Mania
                    </span>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{navLinks}</ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" />
                    </div>
                </label>
                <Link>
                    <button className="btn">Login</button>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
