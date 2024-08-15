import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthProvider";


const Navbar = () => {
    const {logOut, user} = useContext(AuthContext);
    

    const handleLogout = () => {
        logOut()
          .then(() => {
            toast.error("User logged out successfully");
          })
          .catch((error) => {
            console.error(error.message);
          });
      };


    const Links = (<>

        <li> <NavLink className={({ isActive }) => isActive ? "btn btn-outline btn-success text-bold text-xl" : "text-xl font-bold"} to="/" > Home </NavLink> </li>



    </>
    )






    return (
        <div>
            <div className="navbar bg-base-100  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {Links}

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">ShopSmart</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {Links}
                    </ul>
                </div>

             

                <div className="navbar-end">
              

              {
                user ? 

                <button
                onClick={handleLogout}
                className="border-2   lg:w-20  font-bold bg-gray-100 h-10 rounded-xl border-gray-800   text-black lg:text-xl"
              >
                Log Out
              </button> :

                  <div>
                  <Link to='/login' className="border-2 p-1   lg:w-20  font-bold bg-gray-100 h-10 rounded-xl border-gray-800   text-black lg:text-xl">Login</Link>
                  </div>
              }
                </div>
            </div>

        </div>
    );
};

export default Navbar;