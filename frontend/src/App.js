import NavBar from "./component/Navbar";
import Footer from "./component/footer/footer";
import HomePage from "./component/homepage/HomePage";
import SignIn from "./component/signIn/SignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import SignUp from "./component/signUp/SignUp";
=======
import ViewTrips from "./component/viewtrips/viewtrips";
>>>>>>> 0a49784fe6bc94114ee59fdc24ff077dca1e2c83

function App() {
  return (
    <BrowserRouter>
    <div>
        <NavBar />
        <Routes>
          <Route exact path="/" Component={HomePage} />
          <Route path="/sign-in" Component={SignIn} />
<<<<<<< HEAD
          <Route path="/sign-up" Component={SignUp} />
=======
          <Route path="/view-trips" Component={ViewTrips} />
>>>>>>> 0a49784fe6bc94114ee59fdc24ff077dca1e2c83
        </Routes>

        <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
