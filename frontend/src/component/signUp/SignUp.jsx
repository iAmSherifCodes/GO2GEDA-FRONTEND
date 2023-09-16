import classes from "./SignUp.module.css";
import loginimage from "../signUp/assests/loginPicture.svg";
const SignUp = () =>{
    return(
        <>
        <div className={classes.everything}>

        <div className={classes.loginForm}>
            <img src={loginimage} alt="" className={classes.loginPicture}/>
            <div className={classes.form}>
                <h1>Login</h1>
                <p>don't have an account yet? <a href="">signUp</a></p>
                <input type="password" placeholder="Password" className={classes.password}></input> <br />
                <input type="email" placeholder="Email" className={classes.email}></input> <br/>
                <button className={classes.submitLoginDetails}>Login</button>
            </div>
        </div>
        </div>
        </>
    )
}
export default SignUp;