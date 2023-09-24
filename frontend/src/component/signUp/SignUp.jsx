import classes from "../signUp/SignUp.module.css"
import loginimage from "../signIn/assests/loginPicture.svg"
import { useState } from "react"
// import { collapseClasses } from "@mui/material"
const SignUp = () =>{
    const credentials = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }
    const [SignInDetails,setSignInDetails] = useState(credentials)

    const CollectSignUpDetails =async (e) =>{
        e.preventDefault();

        setSignInDetails((state)=>({...state,[e.target.name]: e.target.value,}));
    }

    const handleSubmit =()=>{
        console.log(SignInDetails)
    }

    

    return(
        <div className={classes.everything}>

        <div className={classes.loginForm}>
            <img src={loginimage} alt="" className={classes.loginPicture}/>
            <div className={classes.form}>
                
                <h1 className={classes.heading}>SignUp</h1>
                <p className={classes.heading2}>have an account already? <a href="">Login</a></p>
                
                <input type="text" placeholder="FirstName"name="firstName" onChange={CollectSignUpDetails} className={classes.input}></input> <br />
                <input type="text" placeholder="LastName" name ="lastName"onChange={CollectSignUpDetails} className={classes.input}></input> <br/>
                <input type="email" placeholder="Email" name="email" onChange={CollectSignUpDetails} className={classes.input}></input> <br/>
                <input type="password" placeholder="Password" name ="password" onChange={CollectSignUpDetails} className={classes.input}></input> <br/>
                <input type="password" placeholder="Confirm Password" name="confirmPassword" onChange={CollectSignUpDetails} className={classes.input}></input> <br/>
                <button className={classes.submitSignUpDetails} onClick={handleSubmit}>login</button>
            </div>
        </div>
        </div>
    )
}
export default SignUp;