import { useState } from "react";
// import axios from "axios";
import classes from "../signIn/SignIn.module.css"
import loginimage from "../signIn/assests/loginPicture.svg"
import axios from "axios";
// import { registerCommuter } from "../api/Api";


const SignIn = () =>{
    const credentials = {
        email:"",
        password:"",
    }
    const [loginDetails, setLoginDetails] = useState(credentials)

    const CollectLoginDetails =async (e) =>{
        e.preventDefault();

        setLoginDetails((state)=>({
            ...state,
            [e.target.name]: e.target.value,
        }));
    }
    const handleSubmit = async (event) =>{
        event.preventDefault();
        const signInData = {
            email: loginDetails.email,
            password: loginDetails.password,
        };

        // const response = await axios.post(registerCommuter, signInData);

        console.log(signInData)
    }
    return(
        <div className={classes.everything}>

        <div className={classes.loginForm}>
            <img src={loginimage} alt="" className={classes.loginPicture}/>
            <div className={classes.form}>
                <h1 className={classes.heading}>Login</h1>
                <p className={classes.heading2}>don't have an account yet? <a href="">signUp</a></p>
                <input type="email" placeholder="Email" name="email" onChange={CollectLoginDetails} className={classes.email}></input> <br />
                <input type="password" placeholder="Password" name="password" onChange={CollectLoginDetails} className={classes.password}></input> <br/>
                <button className={classes.submitLoginDetails} onClick={handleSubmit}>login</button>
            </div>
        </div>
        </div>
    )
}
export default SignIn;