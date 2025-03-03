import { useContext } from "react";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();

  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("user logOut");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salads">Order Food</Link>
      </li>

      {
        // user ? "true" : "false"
        // user ? condition ? "double true" : "one true" : "false"
      }

      {user ? (
        isAdmin ? (
          <li>
            <Link to="/dashboard/admin-home">Dashboard</Link>
          </li>
        ) : (
          <li>
            <Link to="/dashboard/user-home">Dashboard</Link>
          </li>
        )
      ) : (
        <li>
          <Link to="/dashboard/user-home">Dashboard</Link>
        </li>
      )}

      {/* {user && isAdmin && (
        <li>
          <Link to="/dashboard/admin-home">Dashboard</Link>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <Link to="/dashboard/user-home">Dashboard</Link>
        </li>
      )} */}

      <li>
        <Link to="/dashboard/cart">
          <button className="btn btn-ghost h-0 min-h-0">
            <BsCart4 className="mr-2" />
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </Link>
      </li>

      {user ? (
        <>
          <button
            onClick={handleLogOut}
            className="btn btn-sm btn-ghost font-normal mt-1"
          >
            LogOut
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar fixed z-50 max-w-screen-xl  opacity-90 bg-black text-white">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">BISTRO BOSS</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
