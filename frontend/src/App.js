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


function App() {
  return (
    <BrowserRouter>
    <div>
        <NavBar/>
        <Routes>
          <Route exact path="/" Component={HomePage} />
          <Route path="/sign-in" Component={SignIn} />
          <Route path="/sign-up" Component={SignUp} />
          <Route path="/view-trips" Component={ViewTrips} />
          <Route path="/profile" Component={ProfileInfo}/>
          <Route path="/sideBar" Component={SideBar}/>
          <Route path = "/driver-dashboard" Component={DriverDashBoard}/>
        </Routes>

        {/* <Footer /> */}
        </div>
    </BrowserRouter>
  );
}

export default App;
