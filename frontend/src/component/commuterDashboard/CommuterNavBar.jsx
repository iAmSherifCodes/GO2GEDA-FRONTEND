import classes from "../commuterDashboard/CommuterNavBar.module.css";

const CommuterNavBar = () =>{
    return(
        <>
        <div className= {classes.Header}>
        <h3 className={classes.logo}>Go2Geda</h3>
        <div className={classes.navBar}>
            <a href="/">Home</a>
            <a href="faq">FAQ</a>
            <a href="/join-drive">Join to drive</a>
        </div>
            <button className={classes.loginButton}>Log out</button>
        </div> 

        </>
    );
}

export default CommuterNavBar;