import NavBar from "./component/Navbar";
import Footer from "./component/footer/footer";
import HomePage from "./component/homepage/HomePage";
import SignIn from "./component/signIn/SignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./component/signUp/SignUp";
import ViewTrips from "./component/viewtrips/viewtrips";

function App() {
  return (
    <BrowserRouter>
    <div>
        <NavBar />
        <Routes>
          <Route exact path="/" Component={HomePage} />
          <Route path="/sign-in" Component={SignIn} />
          <Route path="/view-trips" Component={ViewTrips} />
          <Route path="/sign-up" Component={SignUp} />
        </Routes>

        <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
