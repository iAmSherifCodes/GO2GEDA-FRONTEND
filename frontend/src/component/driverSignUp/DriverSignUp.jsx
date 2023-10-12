import { useState, useEffect } from "react";
import "../driverSignUp/DriverSignUp.css";
import image from "../driverSignUp/illustration.jpg";
import axios from "axios";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, json } from "react-router-dom";

const DriverSignUp = () => {
  const initialValue = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    id:"",
  };

  const [details, setDetails] = useState(initialValue);
  const [responseData, setResponseData] = useState(null);

  const storedUserId = window.localStorage;

  const handleChange = async (e) => {
    e.preventDefault();
    setDetails((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  console.log(details);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const obj = {
      firstName: details.firstName,
      lastName: details.lastName,
      email: details.email,
      phoneNumber: details.phoneNumber,
      password: details.password,
    };

    const baseUrl  = "http://localhost:8080";
    try {

      const response = await axios
          .post(`${baseUrl}/api/v1/go2geda/driver/registerDriver`, obj)
          .then((response) => {
            setResponseData(response.data);
          })
          .catch((error) => {
            if(error.response.data=="EMAIL_ALREADY_EXIST"){
              alert("EMAIL ALREADY EXIST");
            }
          });

//
      if (response.data.error === "Email already exists") {
        alert("EMAIL ALREADY EXIST");
      } else {
        alert("REGISTRATION SUCCESFUL");
      }
    } catch (error) {
      console.log("An error occured", error);
    }
  };

  useEffect(() => {
    if (responseData) {
      console.log(responseData);
      storedUserId.setItem("id", responseData.id);
      console.log("ID:", responseData.id);
      console.log("Name:", responseData.message);
    }

  }, [responseData]);

  return (
      <>
        <div className="dcontainer">
          <div className="dcard">
            <Link to="/" className="iom">
              <IoMdArrowRoundBack size="30px" />
            </Link>
            <div className="dleftSide">
              <img src={image} alt="DriverIllustration" />
            </div>
            <div className="drightSide">
              <h4>Become a driver</h4>
              <h5>Sign up to drive</h5>
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
export default DriverSignUp;