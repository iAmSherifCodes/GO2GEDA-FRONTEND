// import classes from "../signUp/SignUp.module.css";
import login from "../commuterSignUp/login.jpg";
import { useState } from "react";
import axios from "axios";
import { registerDriverCommuter } from "../api/Api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
// import { collapseClasses } from "@mui/material"
const CommuterSignUp = () => {
  const initialValue = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  };

  const [details, setDetails] = useState(initialValue);
  const navigate = useNavigate();

  const handleChange = async (e) => {
    e.preventDefault();

    setDetails((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      firstName: details.firstName,
      lastName: details.lastName,
      email: details.email,
      phoneNumber: details.phoneNumber,
      password: details.password,
    };
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/go2geda/commuter/register-commuter",
        data
      );

      console.log(response.data)
      // console.log(data);
      const commuterId = response.data.id;
      sessionStorage.setItem('id',commuterId)

      if (response.data.error === "Email already exists") {
        alert("Email already exists. Please use a different email.");
      } else {
        alert("REGISTRATION SUCCESFUL");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  const storedCommuterId = sessionStorage.getItem('id');
  console.log(storedCommuterId)

  return (
    <>
      <div className="dcontainer">
        <div className="dcard">
          <Link to="/" className="iom">
            <IoMdArrowRoundBack size="30px" />
          </Link>
          <div className="dleftSide">
            <img src={login} alt="Illustration" />
          </div>
          <div className="drightSide">
            <h4>Become a rider</h4>
            <h5>Sign up to ride</h5>
            <form className="dforms">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />
              <input
                type="text"
                name="phoneNumber"
                placeholder="PhoneNumber"
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </form>

            <div className="dbelow-forms">
              <p>Already have an account?</p>
              <a href="/login">Login</a>
            </div>

            <button className="dsign-ups" onClick={handleSubmit}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CommuterSignUp;
