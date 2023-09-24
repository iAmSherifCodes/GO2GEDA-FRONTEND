import NavBar from "./component/Navbar";
import Footer from "./component/footer/footer";
import HomePage from "./component/homepage/HomePage";
import SignIn from "./component/signIn/SignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./component/signUp/SignUp";


import ViewTrips from "./component/viewtrips/viewtrips";
import ProfileInfo from "./component/Profile/ProfileInfo";
import SideBar from "./component/sideBar/SideBar";
import DriverDashBoard from "./component/driverDashboard/DriverDashBoard";

import VerifyDriver from "./component/verification/VerifyDriver";
import BasicInformation from "./component/verification/BasicInformation";
import DriverPhoto from "./component/verification/DriverPhoto";
import DriverLicence from "./component/verification/DriverLicence";
import VehicleInformation from "./component/verification/VehicleInformation";
import CreateTrip from "./component/createTrip/CreateTrip";
import CommuterDashBoard from "./component/commuterDashboard/CommuterDashBoard";



function App() {
  return (
    <BrowserRouter>
    <div>
        {/* <NavBar/> */}
        <Routes>
          <Route exact path="/" Component={HomePage} />
          <Route path="/sign-in" Component={SignIn} />
          <Route path="/sign-up" Component={SignUp} />
          <Route path="/view-trips" Component={ViewTrips} />
          <Route path="/createTrip" Component={CreateTrip} />
          <Route path="/commuter-dashboard" Component={CommuterDashBoard} />
           

          <Route path="/profile" Component={ProfileInfo}/>
          <Route path="/sideBar" Component={SideBar}/>
          <Route path = "/driver-dashboard" Component={DriverDashBoard}/>
          <Route path="/verify" Component={VerifyDriver} />
          <Route path="/basicInfo" Component={BasicInformation} />
          <Route path="/drive" Component={DriverPhoto} />
          <Route path="/licence" Component={DriverLicence} />
          <Route path="/vehicleInfo" Component={VehicleInformation} />
          <Route path="/sign-up" Component={SignUp} />
        </Routes>
        {/*<Footer />*/}

        </div>
    </BrowserRouter>
  );
}

export default App;
