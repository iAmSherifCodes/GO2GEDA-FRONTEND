
import driverlicenense from '../asset/new_drivers_licence_nigeria.png'
import React, {useState} from "react";
import './style/driverLicence.css'
import {useNavigate} from "react-router-dom";
const DriverLicence = ()=>{

    const initialState = {
        driverlicense: null,
    }
    const[verifyForm,setVerifyForm]= useState(initialState)
    const handleFileUpload = async(e) => {
        const file = e.target.files[0];
        setVerifyForm({ ...verifyForm, [e.target.name]: file });
    };
    const formDataToSend = new FormData();
    formDataToSend.append('profilePicture', verifyForm.driverlicense);

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("successful")
        navigate('/verify');
        console.log(verifyForm)

    };

    return(
        <div className="driverlic-main">
            <form onSubmit={handleSubmit}>
        <div className="driverlicence-maincontainer">
          <div>
             <h1>Take a photo of your Driver's license</h1>
              <div>
                  <p>All 4 sides of the license should be photographed.
                      Ensure that <br/>the license number on the top left is
                      clearly visible in the image <br/>photographed</p>
              </div>
          </div>
            <div className="drive-liceImage">
                <img src={driverlicenense} alt="" />
            </div>


            <div>
                <div className="pic-uploadlic">
                    <label>Upload Profile Picture</label>
                    <input type="file" name="profilePicture" onChange={handleFileUpload} required />
                </div>
                <div className="submitdriverlicAcc">
                    <button type="submit">Submit</button>
                </div>

            </div>

        </div>
            </form>
        </div>
    )
}

export default DriverLicence