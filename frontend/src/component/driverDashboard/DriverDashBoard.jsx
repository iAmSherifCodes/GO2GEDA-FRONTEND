import SideBar from "../sideBar/SideBar"
import dashboardimage from "../driverDashboard/assests/driverdashboardImagebackground.webp"
import classes from "../driverDashboard/DriverDashBoard.module.css"


const DriverDashBoard = () =>{
    return(
        <div className={classes.main}>
          <div>
            <SideBar></SideBar>
          </div>
          {/* <div><img src={dashboardimage} alt="This is an image" /></div>  */}
        </div>
    )
}
export default DriverDashBoard