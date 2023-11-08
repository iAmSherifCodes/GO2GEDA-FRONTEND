import "./NavbarStyle.css";
import logo from "./assets/go2geda-logo.png";
import {FiLogIn} from "react-icons/fi"

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <div className="navbar-left">
            <div className="logo">
              <img src={logo} className="navbar-logo" />
              <h2>
                <a href="/" className="navbar-go2geda-text">
                  Go2Geda{" "}
                </a>
              </h2>
            </div>

            <div className="navbar-options">
              <a href="/">Home</a>
              <a href="faq">FAQ</a>
              <a href="/commuter-sign-up">Join to ride</a>
              <a href="/driver-sign-up">Join to drive</a>
              <a href="/join-partner">Join to partner</a>
            </div>
          </div>

          {/* <div > */}
            <button className="navbar-login" onClick="/sign-in">
            Login
            <FiLogIn />
            </button>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default NavBar;
