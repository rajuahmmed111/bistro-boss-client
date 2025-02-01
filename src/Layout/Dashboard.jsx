import { AiOutlineMenu } from "react-icons/ai";
import {
  FaAd,
  FaCalendar,
  FaHome,
  FaList,
  FaShoppingCart,
} from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-[#D1A054]">
        <ul className="menu p-4">
          {/* user home */}
          <li>
            <NavLink to="/dashboard/user-home">
              {" "}
              <FaHome /> User Home
            </NavLink>
          </li>
          {/* reservation */}
          <li>
            <NavLink to="/dashboard/reservation">
              {" "}
              <FaCalendar /> Reservation
            </NavLink>
          </li>
          {/* payment history */}
          <li>
            <NavLink to="/dashboard/payment">
              {" "}
              <MdOutlinePayment /> Payment History
            </NavLink>
          </li>
          {/* my cart */}
          <li>
            <NavLink to="/dashboard/cart">
              {" "}
              <FaShoppingCart /> My Cart
            </NavLink>
          </li>
          {/* add review */}
          <li>
            <NavLink to="/dashboard/review">
              {" "}
              <FaAd /> Add Review
            </NavLink>
          </li>
          {/*  */}
          <li>
            <NavLink to="/dashboard/bookings">
              {" "}
              <FaList /> My Booking
            </NavLink>
          </li>
          <div className="divider"></div>{" "}
          <li>
            <NavLink to="/">
              {" "}
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              {" "}
              <AiOutlineMenu /> Menu
            </NavLink>
          </li>
        </ul>
      </div>

      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
