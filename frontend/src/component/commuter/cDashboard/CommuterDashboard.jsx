import { CgProfile } from "react-icons/cg";
import { Link, Outlet } from "react-router-dom";
import CommuterSideMenu from "../commuterSideMenu/CommuterSideMenu";


const CommuterDashboard = () => {
  return (
    <>
      <div className="dashboard-navbar">
        <Link className="bar-name"to="/"><h2>Go2Geda</h2></Link> 
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
