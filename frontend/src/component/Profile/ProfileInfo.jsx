import { useState } from "react"
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
        <img src={profile}alt=""></img>
        <h1>Welcome,{name}</h1>
    </div>
    </>
    )
}
export default ProfileInfo