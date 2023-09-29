import { useState } from "react";
import classes from "../sideBar/SideBar.module.css";
import profile from "../Profile/assests/profilepic.jpeg";
import { Link } from "react-router-dom";
import ProfileInfo from "../Profile/ProfileInfo";
import createTripLogo from "./assests/CreateTriplogo.svg";
import cancelTripLogo from "./assests/CancelTriplogo.svg";
import bookingTripLogo from "./assests/BookingTriplogo.svg";
import viewHistoryLogo from "./assests/ViewHistorylogo.svg";
import viewGroupLogo from "./assests/ViewGrouplogo.svg";
import reviewLogo from "./assests/Reviewlogo.svg";
import profileLogo from "./assests/EditProfilelogo.svg";

const CommuterSideBar = () => {
  return (
    <div className={classes.card}>
      <div>
        <ProfileInfo></ProfileInfo>

        
         
      </div>
    </div>
  );
};
export default CommuterSideBar;
