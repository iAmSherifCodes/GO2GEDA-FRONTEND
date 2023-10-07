import { RiAddCircleFill } from "react-icons/ri";
import { HiMiniClipboardDocumentList } from "react-icons/hi2";
import { IoMdChatboxes } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { LuHistory } from "react-icons/lu";
import { BiListCheck } from "react-icons/bi";
import { AiFillCar } from "react-icons/ai";
import "../dDashboard/DashboardStyle.css"
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";


const SideMenu = ()=>{
    return(
        <>
        <div className="side-menu">
            <h2>Driver Dashboard</h2>
            <Link to="/driver-dashboard/" className="menu">
              <AiFillCar />
              <h5>Dashboard</h5>
            </Link>
            <Link to= "/driver-dashboard/create-trip" className="menu">
              <RiAddCircleFill />
              <h5>Create Trip</h5>
            </Link>
            <Link to="/driver-dashboard/book-request" className="menu">
              <HiMiniClipboardDocumentList />
              <h5>Booking Request</h5>
            </Link>
            <Link className="menu">
              <IoMdChatboxes />
              <h5>Group Chat</h5>
            </Link>
            {/* <Link to="/dDashboard/view-trips" className="menu">
              <BiListCheck />
              <h5>View Trips</h5>
            </Link> */}
            <Link to="/driver-dashboard/view-trip-history" className="menu">
              <LuHistory />
              <h5>View History</h5>
            </Link>
            <Link to="/driver-dashboard/profile-setting" className="menu">
              <CgProfile />
              <h5>Profile Settings</h5>
            </Link>
            <Link className="menu">
              <AiFillStar />
              <h5>Reviews</h5>
            </Link>
            <Link className="menu">
              <BiLogOut />
              <h5>Log Out</h5>
            </Link>
          </div>
        </>
    );
}

export default SideMenu;