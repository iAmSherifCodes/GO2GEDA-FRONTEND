import { useState } from "react"
import classes from "../sideBar/SideBar.module.css"
import profile from "../Profile/assests/profilepic.jpeg"
import { Link } from 'react-router-dom';
import ProfileInfo from "../Profile/ProfileInfo";
import createTripLogo from "./assests/CreateTriplogo.svg"
import cancelTripLogo from "./assests/CancelTriplogo.svg"
import bookingTripLogo from "./assests/BookingTriplogo.svg"
import viewHistoryLogo from "./assests/ViewHistorylogo.svg"
import viewGroupLogo from "./assests/ViewGrouplogo.svg"
import reviewLogo from "./assests/Reviewlogo.svg"
import profileLogo from "./assests/EditProfilelogo.svg"

const CommuterSideBar = () =>{
   
    return(
        <div className={classes.card}>
            <div>
            <ProfileInfo></ProfileInfo>
            
            <div className={classes.bord}>
            
            <div className={classes.linkDiv}><img src={createTripLogo} className={classes.createTripLogo} alt="" /><Link to ={"/createTrip"}className={classes.link} >View All Trip</Link></div>
            {/* <div className={classes.linkDiv}><img src={cancelTripLogo} className={classes.createTripLogo} alt="" /><Link to ={"/cancelTrip"}className={classes.link}>Cancel Trip</Link></div> */}
            {/* <div className={classes.linkDiv}><img src={bookingTripLogo} className={classes.createTripLogo} alt="" /><Link to ={"/bookingRequest"}className={classes.link}>Booking Request</Link></div> */}
            <div className={classes.linkDiv}><img src={viewHistoryLogo} className={classes.createTripLogo} alt="" /><Link to ={"/tripHistory"}className={classes.link}>View Trip History</Link></div>
            <div className={classes.linkDiv}><img src={viewGroupLogo} className={classes.createTripLogo} alt="" /><Link to ={"/group"}className={classes.link}>View Group</Link></div>
            <div className={classes.linkDiv}><img src={profileLogo} className={classes.createTripLogo} alt="" /><Link to ={"/viewProfile"}className={classes.link}>Edit Profile</Link></div>
            <div className={classes.linkDiv}><img src={reviewLogo} className={classes.createTripLogo} alt="" /><Link to ={"/Reviews"}className={classes.link}>View Reviews</Link></div>
        </div>
        </div>
    </div>
    )
}
export default CommuterSideBar