import SideBar from "../sideBar/SideBar"
import classes from "../createTrip/CreateTrip.module.css"
const CreateTrip = () => {
    return (
        <div className={classes.everything}>
            <SideBar></SideBar>
            <div className={classes.createTripForm}>
                <h1 className={classes.heading}>Create Trip</h1>
                <input type="text" placeholder="From" name="from" className={classes.input}></input> <br/>
                <input type="text" placeholder="To" name="to" className={classes.input}></input> <br/>
                <input type="email" placeholder="Number of available seat" name="number of available seat" className={classes.input}></input> <br />
                <input type="email" placeholder="price per seat" name="price" className={classes.input}></input> <br/>
                <input type="password" placeholder="Start Time" name="startTime" className={classes.input}></input> <br/>
                <input type="password" placeholder="End Time" name="endTime" className={classes.input}></input> <br/>
                <button>createTrip</button>
            </div>
        </div>
    )
}
export default CreateTrip