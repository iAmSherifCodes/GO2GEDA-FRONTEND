import SideBar from "../sideBar/SideBar"
import dashboardimage from "../driverDashboard/assests/driverdashboardImagebackground.webp"
import classes from "../driverDashboard/DriverDashBoard.module.css"
import { useState } from "react";


const DriverDashBoard = () =>{
  
  const myVariable = 
     {
      subProperty1: 'value1',
      subProperty2: 'value2',
  };

  const [driverHasCreatedTrips, setDriverHasCreatedTrips] = useState(false);
  const [Trips, setTrips] = useState(myVariable);
  
  
    
  const renderTrips = () => {
    
    if (driverHasCreatedTrips) {
      return (
        <div>
          <h2>Trips</h2>
        
          <ul>
          {Object.keys(Trips).map((key) => (<li key={key}>{key}: {Trips[key]}</li>))}
        </ul>


        </div>
      );
    } 
  };

    return(
        <div className={classes.main}>
          <div>
            <SideBar></SideBar>
            {renderTrips()}

          </div>
          
        </div>
    )
}
export default DriverDashBoard