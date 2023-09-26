import { useState } from "react";
import "../driverSignUp/DriverSignUp.css";
import image from "../driverSignUp/illustration.jpg";
import axios from "axios";

const DriverSignUp = () => {
  const initialValue = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  };

  const [details, setDetails] = useState(initialValue);

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

  const response = await axios.post("http://localhost:8080/api/v1/go2geda/register-driver", data)

  console.log(data);

}

  return (
    <>
      <div className="dcontainer">
        <div className="dcard">
          <div className="dleftSide">
            <img src={image} alt="DriverIllustration" />
          </div>
          <div className="drightSide">
            <h4>Become a driver</h4>
            <h5>Sign up to drive</h5>
            <form className="forms">
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
              <input type="email"
               placeholder="Email"
               name="email"
               onChange={handleChange} />
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
