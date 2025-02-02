import { AiOutlineMenu } from "react-icons/ai";
import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaShoppingCart,
} from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { MdOutlinePayment } from "react-icons/md";
import { TbToolsKitchen3 } from "react-icons/tb";
import { Link, NavLink, Outlet } from "react-router-dom";
import bistroImg from "../assets/bistro-boss.png";

const Dashboard = () => {
  // TODO: get admin from database
  const isAdmin = true;

  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-[#D1A054]">
        <ul className="menu p-4">
          <div className="flex ml-5 my-7">
            <Link to="/">
              <img className="w-2/3" src={bistroImg} alt="bistro-boss" />
            </Link>
          </div>
          {isAdmin ? (
            <>
              {/* user home */}
              <li>
                <NavLink to="/dashboard/admin-home">
                  {" "}
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              {/* reservation */}
              <li>
                <NavLink to="/dashboard/add-items">
                  {" "}
                  <TbToolsKitchen3 />
                  Add Items
                </NavLink>
              </li>
              {/* payment history */}
              <li>
                <NavLink to="/dashboard/manage-items">
                  {" "}
                  <FaList /> Manage Items
                </NavLink>
              </li>
              {/* my cart */}
              <li>
                <NavLink to="/dashboard/bookings">
                  {" "}
                  <FaBook /> Manage Bookings
                </NavLink>
              </li>
              {/* add review */}
              <li>
                <NavLink to="/dashboard/users">
                  {" "}
                  <HiUserGroup /> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}

          {/* divider */}
          <div className="divider"></div>

          {/* shared nav links */}
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
          <li>
            <NavLink to="/menu">
              {" "}
              <FaEnvelope />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* dashboard content */}
      <div className="flex-1 lg:px-28 md:px-20 px-9 py-10 bg-[#F6F6F6]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
