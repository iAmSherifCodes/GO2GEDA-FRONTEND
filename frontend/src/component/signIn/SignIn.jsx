import classes from "../signIn/SignIn.module.css"
import loginimage from "../signIn/assests/loginPicture.svg"
const SignIn = () =>{
    return(
        <div className={classes.everything}>

        <div className={classes.loginForm}>
            <img src={loginimage} alt="" className={classes.loginPicture}/>
            <div className={classes.form}>
                <h1>Login</h1>
                <p>don't have an account yet? <a href="">signUp</a></p>
                <input type="password" placeholder="password" className={classes.password}></input> <br />
                <input type="email" placeholder="Email" className={classes.email}></input> <br/>
                <button className={classes.submitLoginDetails}>login</button>
            </div>
        </div>
        </div>
    )
}
export default SignIn;