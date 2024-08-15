import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";


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


<details className="dropdown mr-5 lg:flex hidden">
  <summary className="btn m-1 text-xl"><GiHamburgerMenu className="mt-1 text-2xl" /> Categories</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>

<label className="hidden input input-bordered border-gray-800 rounded-full lg:w-[500px] lg:flex items-center gap-2 mr-5">
  <input type="text" className="grow" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>

        <li> <NavLink className={({ isActive }) => isActive ? "btn btn-outline btn-success text-bold text-xl" : "text-xl font-bold"} to="/" > Home </NavLink> </li>
        <li> <NavLink className={({ isActive }) => isActive ? "btn btn-outline btn-success text-bold text-xl" : "text-xl font-bold"} to="/about" > About </NavLink> </li>
       
      
        <li> <NavLink className={({ isActive }) => isActive ? "btn btn-outline btn-success text-bold text-xl" : "text-xl font-bold"} to="/profile" > Profile </NavLink> </li>
        <li> <NavLink className={({ isActive }) => isActive ? "btn btn-outline btn-success text-bold text-xl" : "text-xl font-bold"} to="/contact" > Contact </NavLink> </li>



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
                    <a className="btn btn-ghost text-3xl">ShopSmart</a>
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