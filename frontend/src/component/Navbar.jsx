import classes from "../component/signUp/SignUp.module.css";

const NavBar = () =>{
    return(
        <>
        <div className= {classes.Header}>
        <h3>Go2Geda</h3>
        <ul className={classes.navBar}>
            <li>Home</li>
            <li>FAQ</li>
            <li>Join to ride</li>
            <li>Join to drive</li>
            <li>Join to partner</li>
        </ul>
        <button className={classes.loginButton}>login</button>
        </div> 

        </>
    );
}

export default NavBar;