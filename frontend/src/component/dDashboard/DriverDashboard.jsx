import ".//DashboardStyle.css";
import { CgProfile } from "react-icons/cg";
import SideMenu from "../sideMenu/SideMenu";
import { Outlet } from "react-router-dom";
import Board from "./Board";
import CreateTrip from "../createTrip/CreateTrip";
import BookingRequest from "../bookingRequest/BookingRequest";

const DriverDashboard = () => {
  return (
    <>
      <div className="dashboard-navbar">
        <h2>Go2Geda</h2>
        <div className="icon">
          <CgProfile size={45} />
        </div>
      </div>
      <div className="dashboard-container">
        <SideMenu />
        <Outlet />
      </div>
    </>
  );
};


export default DriverDashboard;