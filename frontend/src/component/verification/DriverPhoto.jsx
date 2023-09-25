import React, {useState} from "react";
import {Form, useNavigate} from "react-router-dom";
import headshot from '../asset/headshot2.jpg'
import './style/driverPhoto.css'
import VehicleCss from "./style/vehicleInformation.module.css";
const DriverPhoto =()=>{
    const initialState = {
        profilePicture: null,
    }
    const[verifyForm,setVerifyForm]= useState(initialState)
    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        setVerifyForm({ ...verifyForm, [e.target.name]: file });
    };

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("successful")
        navigate('/verify');
        console.log(verifyForm)


    };


    const formDataToSend = new FormData();
    formDataToSend.append('profilePicture', verifyForm.profilePicture);
    return(
        <div className="main-driverphoto">
            <form onSubmit={handleSubmit}>
        <div className="main-containerdriverphoto">
            <h1 id={"profilephoto"}>Take your profile photo</h1>

            <div  className="youProfiletxt">
                <p>Your profile photo helps people recognize you.Please note that <br/>  once you submit
                    your profile photo it cannot be changed.</p>
            </div>

            <div className={"othertxt"}>
                <p>1.Face the camera directly with your eyes and mouth clearly visible
                    </p>
                <p>2.Make sure the photo is well lit, free of glare, and in focus</p>
                <p>3.No photos of a photo, filters, or alterations</p>
            </div>
       <div className="headshotImage">
           <img src={headshot} alt="" className="headshotpic" />
       </div>
            <div className="avatar-upload">
                <label>Upload Profile Picture</label>
                <input type="file" name="profilePicture" onChange={handleFileUpload} required/>
            </div>
                <div className="submitphotoAcc">
                    <button type="submit">Submit</button>
                </div>
        </div>
            </form>
        </div>
    )
}
export default  DriverPhoto;