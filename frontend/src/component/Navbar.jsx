import classes from "../component/signIn/SignIn.module.css";

const NavBar = () =>{
    return(
        <>
        <div className= {classes.Header}>
        <h2><a href="/">Go2Geda</a></h2>
        <div className={classes.navBar}>
            <a href="/">Home</a>
            <a href="faq">FAQ</a>
            <a href="/commuter-sign-up">Join to ride</a>
            <a href="/driver-sign-up">Join to drive</a>
            <a href="/join-partner">Join to partner</a>
        </div>
        <button className={classes.loginButton}><a href="/sign-in">Login</a></button>
        </div> 

        </>
    );
}

export default NavBar;