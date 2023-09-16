import NavBar from "./component/Navbar";
import HomePage from "./component/homepage/HomePage";
import SignIn from "./component/signIn/SignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div>
        <NavBar />
        <Routes>
          <Route exact path="/" Component={HomePage} />
          <Route path="/sign-up" Component={SignIn} />
        </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
