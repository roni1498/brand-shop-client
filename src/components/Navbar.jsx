import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import userDefaultPhoto from "../assets/user.png"

const Navbar = () => {
  const { cart, user, logOut } = useContext(AuthContext);

  // handle logOut
  const handleSignOut = () => {
    logOut()
    .then(() =>{
      Swal.fire({
        title: "Loged Out!",
        text: "You log out Successfully!",
        icon: "success"
      });
    })
    .catch();
  };
  
  // handle total price
  let total = 0;
  for (const item of cart) {
    total = total + Number(item?.price)
  }
  console.log("total", total)
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/addProducts"}>Add Product</NavLink>
      </li>
      <li>
        <NavLink to={"/allProducts"}>All Product</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <div className="flex lg:flex-col items-center">
          <img
            className="lg:h-16 lg:w-16 w-12 h-12 object-cover"
            src={logo}
            alt="Logo"
          />
          <div className="text-center md:-m-2 -mt-3">
            <h2 className="lg:text-2xl"> Nexcus </h2>
            <h4 className="lg:text-xl text-base lg:font-semibold -m-2 text-orange-400">
              Electro
            </h4>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">{links}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item bg-yellow-400">
                  {cart.length}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg text-green-400 border-none">
                  {cart.length} Items
                </span>
                <span className="text-info">Subtotal: ${total? total:0}</span>
                <div className="">
                  <Link className="" to={'/myCart'}><button className="w-full btn btn-primary text-white rounded-xl">
                    View cart
                  </button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {user && (
              <div className="flex items-center">
                <p className="">{user.displayName}</p>
                {user.photoURL ? (
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src={user.photoURL} />
                    </div>
                  </label>
                ) : (
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar mr-3"
                  >
                    <div className="w-10 rounded-full">
                      <img src={userDefaultPhoto} />
                    </div>
                  </label>
                )}
              </div>
            )}
          {
            user ? (<button onClick={handleSignOut} className="btn rounded-lg bg-orange-400 text-white font-medium md:text-lg border-none mr-3"> LogOut
            </button>) : (
        <Link to={"/login"}><button className="btn rounded-lg bg-orange-400 text-white font-medium md:text-lg border-none mr-3"> Login
          </button></Link>

            )

          }
      </div>
    </div>
  );
};

export default Navbar;
