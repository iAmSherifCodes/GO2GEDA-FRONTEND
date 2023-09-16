import classes from "../component/signUp/SignUp.module.css";

const NavBar = () =>{
    return(
        <>
        <div className= {classes.Header}>
        <h3>Go2Geda</h3>
        <ul className={classes.navBar}>
            <a href="/">Home</a>
            <a href="">FAQ</a>
            <a href="/join-ride">Join to ride</a>
            <a href="/join-drive">Join to drive</a>
            <a href="/join-partner">Join to partner</a>
        </ul>
        <button className={classes.loginButton}><a>Login</a></button>
        </div> 

        </>
    );
}

export default NavBar;