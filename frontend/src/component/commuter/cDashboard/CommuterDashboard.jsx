import { CgProfile } from "react-icons/cg";
import SideMenu from "../../sideMenu/SideMenu";
import { Outlet } from "react-router-dom";
import CommuterSideMenu from "../commuterSideMenu/CommuterSideMenu";

const CommuterDashboard = () => {
  return (
    <>
      <div className="dashboard-navbar">
        <h2>Go2Geda</h2>
        <div className="icon">
          <CgProfile size={45} />
        </div>
      </div>
      <div className="dashboard-container">
        <CommuterSideMenu />
        <Outlet />
      </div>
    </>
  );
};

export default CommuterDashboard;
