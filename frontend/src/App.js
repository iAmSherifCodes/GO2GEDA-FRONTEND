import NavBar from "./component/Navbar";
import Footer from "./component/footer/footer";
import HomePage from "./component/homepage/HomePage";
import SignIn from "./component/signIn/SignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VerifyDriver from "./component/verification/VerifyDriver";
import BasicInformation from "./component/verification/BasicInformation";
import DriverPhoto from "./component/verification/DriverPhoto";
import DriverLicence from "./component/verification/DriverLicence";
import VehicleInformation from "./component/verification/VehicleInformation";

function App() {
  return (
    <BrowserRouter>
    <div>
        <NavBar />
        <Routes>
          <Route exact path="/" Component={HomePage} />
          <Route path="/sign-in" Component={SignIn} />
            <Route path="/verify" Component={VerifyDriver} />
            <Route path="/basicInfo" Component={BasicInformation} />
            <Route path="/drive" Component={DriverPhoto} />
            <Route path="/licence" Component={DriverLicence} />
            <Route path="/vehicleInfo" Component={VehicleInformation} />
        </Routes>
        {/*<Footer />*/}
        </div>
    </BrowserRouter>
  );
}

export default App;
