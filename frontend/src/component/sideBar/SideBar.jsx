import { useState } from "react"
import classes from "../sideBar/SideBar.module.css"
import profile from "../Profile/assests/profilepic.jpeg"
import { Link } from 'react-router-dom';
import ProfileInfo from "../Profile/ProfileInfo";

const SideBar = () =>{
   
    return(
        <div className={classes.card}>
            <div>
            <ProfileInfo></ProfileInfo>
            
            <div className={classes.bord}>
            <div className={classes.linkDiv}><Link to ={"/classesreateTrip"}className={classes.link} > Create Trip</Link></div>
            <div className={classes.linkDiv}><Link to ={"/cancelTrip"}className={classes.link}> Cancel Trip</Link></div>
            <div className={classes.linkDiv}><Link to ={"/bookingRequest"}className={classes.link}> Booking Request</Link></div>
            <div className={classes.linkDiv}><Link to ={"/tripHistory"}className={classes.link}> View Trip History</Link></div>
            <div className={classes.linkDiv}><Link to ={"/group"}className={classes.link}> View Group</Link></div>
            <div className={classes.linkDiv}><Link to ={"/viewProfile"}className={classes.link}> Profile</Link></div>
            <div className={classes.linkDiv}><Link to ={"/Reviews"}className={classes.link}> View Reviews</Link></div>
        </div>
        </div>
    </div>
    )
}
export default SideBar