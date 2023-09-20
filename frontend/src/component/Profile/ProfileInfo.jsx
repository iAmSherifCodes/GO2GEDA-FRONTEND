import { useState } from "react"
import classes from "../Profile/ProfileInfo.module.css"
import profile from "../Profile/assests/profilepic.jpeg"

const ProfileInfo = () =>{
    const initialState = {
        image: null,
        name: ""
    }
    const [image, setImage] = useState(initialState.image)
    const [name, setName] =  useState("Goodness")

    
    return(
        <>
    <div>
        <img src={profile}alt=""className={classes.image}></img>
        <h2>Welcome,{name}</h2>
    </div>
    </>
    )
}
export default ProfileInfo