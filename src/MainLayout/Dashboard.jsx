import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUtensils,
} from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../Hooks/UseAdmin";

const Dashboard = () => {
  const [isAdmin] = UseAdmin()
  // todo get admin value from the database
  return (
    <div className="min-h-screen flex ">
      {/* dashboard sidebar */}
      <div className="md:w-64 w-1/2 bg-orange-500 ">
        <div className="drawer ">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="btn btn-primary drawer-button"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side z-[100]">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 md:w-80 w-1/2 min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              {isAdmin ? (
                <>
                  <li>
                    <NavLink to={"/dashboard/adminhome"}>
                      {" "}
                      <FaHome></FaHome>Admin Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/dashboard/additems"}>
                      {" "}
                      <FaUtensils></FaUtensils> Add Items
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/dashboard/manageitems"}>
                      {" "}
                      <FaList></FaList>  Manage Items
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/dashboard/bookings"}>
                      <FaBook></FaBook> Manage bookings
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/dashboard/allusers"}>
                      <FaUser></FaUser> All Users
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  {" "}
                  <li>
                    <NavLink to={"/dashboard/cart"}>
                      {" "}
                      <FaShoppingCart></FaShoppingCart> My Cart
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/dashboard/userhome"}>
                      {" "}
                      <FaHome></FaHome>Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/dashboard/reservation"}>
                      {" "}
                      <FaCalendar></FaCalendar>reservation
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/dashboard/reveiw"}>
                      {" "}
                      <FaAd></FaAd>Add a reveiw
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/dashboard/bookings"}>
                      <FaList></FaList> My bookings
                    </NavLink>
                  </li>
                </>
              )}

              {/* shared navlink */}
              <div className="divider divider-neutral"></div>
              <li>
                <NavLink to={"/"}>
                  <FaHome></FaHome> Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/order/salad"}>
                  <FaSearch></FaSearch> Order
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/contact"}>
                  <FaEnvelope></FaEnvelope> contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* dashboard content */}
      <div className="flex-1 p-4">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
