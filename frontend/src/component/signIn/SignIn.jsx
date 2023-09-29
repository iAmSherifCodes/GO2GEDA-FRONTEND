import { useState } from "react";
// import axios from "axios";
import illustration from "../signIn/assests/login.jpg";
import axios from "axios";
// import { registerCommuter } from "../api/Api";

const SignIn = () => {
    const initialValue = {
        email: "",
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
        email: details.email,
        password: details.password,
      };
    
      const response = await axios.post("http://localhost:8080/api/v1/go2geda/login", data)
    
      console.log(data);
    
    }
  return (
    <>
      <div className="dcontainer">
        <div className="dcard">
          <div className="dleftSide">
            <img src={illustration} alt="DriverIllustration" />
          </div>
          <div className="drightSide">
            <h4>Welcome Back</h4>
            <h5>Sign in to your account</h5>
            <form className="forms">
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
              <input
                type="text"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </form>

            <div className="dbelow-forms">
              <p>Don't have an account yet?</p>
              <a href="/">Sign Up</a>
            </div>

            <button className="dsign-ups" onClick={handleSubmit}>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignIn;
