
import classes from "../commuterDashboard/CommuterDashboad.module.css"
import { useState } from "react";
import CommuterSideBar from "../sideBar/CommuterSideBar";
import CommuterNavBar from "./CommuterNavBar";


const CommuterDashBoard = () =>{
    
    return(<div>
        {/* <CommuterNavBar></CommuterNavBar> */}
        <div className={classes.main}>
            <CommuterSideBar></CommuterSideBar>
          <div>
          <button className={classes.searchButton}>Search Trip</button>
          </div>
          <div className={classes.bookedTrips}></div>
        </div>
        {/* <div className={classes.bookedTrips}></div>
        <div className=""></div> */}
        </div>
    )
}
export default CommuterDashBoard