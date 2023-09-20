import classes from "../component/signIn/SignIn.module.css";

const NavBar = () =>{
    return(
        <>
        <div className= {classes.Header}>
        <h3>Go2Geda</h3>
        <div className={classes.navBar}>
            <a href="/">Home</a>
            <a href="faq">FAQ</a>
            <a href="/join-ride">Join to ride</a>
            <a href="/join-drive">Join to drive</a>
            <a href="/join-partner">Join to partner</a>
        </div>
        <button className={classes.loginButton}>Login</button>
        </div> 

        </>
    );
}

export default NavBar;