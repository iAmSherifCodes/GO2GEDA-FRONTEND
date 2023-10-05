import NavBar from "./component/Navbar";
import Footer from "./component/footer/footer";
import HomePage from "./component/homepage/HomePage";
import SignIn from "./component/signIn/SignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";


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

import AccountInformation from "./component/verification/AccountInformation";
import VerifyCommuter from "./component/verification/commuterVerification/VerifyCommuter";
import DriverSignUp from "./component/driverSignUp/DriverSignUp";
import AdminLogin from "./component/AdminLoginPage/AdminLogin.jsx";
import Faq from "./component/faqestion/Faq";
import JoinToPartner from "./component/joinToPartner/JoinToPartner";
import CommuterSignUp from "./component/commuterSignUp/CommuterSignUp";



function App() {
  return (
    <BrowserRouter>
    <div>
        <NavBar/>
        <Routes>
          <Route exact path="/" Component={HomePage} />
          <Route path="/sign-in" Component={SignIn} />
          <Route path="/commuter-sign-up" Component={CommuterSignUp} />
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
          <Route path="/acctInfo" Component={AccountInformation}/>
          <Route path="/verifyCommuter" Component={VerifyCommuter}/>
          <Route path="/adminlogin" Component={AdminLogin}/>
          <Route path="/driver-sign-up" Component={DriverSignUp} />
          <Route path="/faq" Component={Faq} />
          <Route path="/join-partner" Component={JoinToPartner} />
        </Routes>
        {/*<Footer />*/}

        </div>
    </BrowserRouter>
  );
}

export default App;
