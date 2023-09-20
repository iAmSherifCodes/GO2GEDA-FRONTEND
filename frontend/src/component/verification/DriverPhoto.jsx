import {useState} from "react";
import {Form} from "react-router-dom";
import headshot from '../asset/headshot2.jpg'

const DriverPhoto =()=>{
    const initialState = {
        profilePicture: null,
    }
    const[verifyForm,setVerifyForm]= useState(initialState)
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        setVerifyForm({ ...verifyForm, [e.target.name]: file });
    };
    const formDataToSend = new FormData();
    formDataToSend.append('profilePicture', verifyForm.profilePicture);

    return(
        <div>
            <h1>Take your profile photo</h1>

            <div>
                <p>Your profile photo helps people recognize you. Please note that once you submit
                    your profile photo it cannot be changed.</p>
            </div>


            <div>
                <p>1.Face the camera directly with your eyes and mouth clearly visible
                    </p>
                <p>2.Make sure the photo is well lit, free of glare, and in focus</p>
                <p>3.No photos of a photo, filters, or alterations</p>
            </div>
       <div>

           {<img src={headshot} alt="" /> }
       </div>
            {/* Circular avatar-like upload button */}
            <label className="avatar-upload">
                <input type="file" name="profilePicture" onChange={handleFileUpload} accept="image/*" style={{ display: 'none' }} />
                {verifyForm.profilePicture ? (
                    <img src={URL.createObjectURL(verifyForm.profilePicture)} alt="Profile" className="avatar-image" />
                ) : (
                    <span>upload profile picture</span>
                )}
            </label>


            <div>


            </div>



        </div>
    )
}
export default  DriverPhoto;