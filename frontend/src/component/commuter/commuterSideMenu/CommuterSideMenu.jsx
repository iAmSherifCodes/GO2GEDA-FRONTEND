import { RiAddCircleFill } from "react-icons/ri";
import { HiMiniClipboardDocumentList } from "react-icons/hi2";
import { IoMdChatboxes } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { LuHistory } from "react-icons/lu";
import { HiOutlineSearch } from "react-icons/hi";
import { AiFillCar } from "react-icons/ai";
import "../../dDashboard/DashboardStyle.css"
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";


const CommuterSideMenu = ()=>{
    return(
        <>
            <div className="side-menu">
            <h2>Commuter Dashboard</h2>
            <Link to="/commuter-dashboard/" className="menu">
              <AiFillCar />
              <h5>Dashboard</h5>
            </Link>
            <Link to= "/commuter-dashboard/search-for-trip" className="menu">
              <HiOutlineSearch />
              <h5>Search For Trip</h5>
            </Link>
            <Link to="/commuter-dashboard/book-request" className="menu">
              <HiMiniClipboardDocumentList />
              <h5>Pending Request</h5>
            </Link>
            <Link className="menu">
              <IoMdChatboxes />
              <h5>Group Chat</h5>
            </Link>
            <Link to="/commuter-dashboard/view-trip-history" className="menu">
              <LuHistory />
              <h5>View Trip History</h5>
            </Link>
            <Link to="/commuter-dashboard/profile-setting" className="menu">
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

export default CommuterSideMenu;