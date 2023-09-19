
import driverlicenense from '../asset/new_drivers_licence_nigeria.png'
import {useState} from "react";
const DriverLicence = ()=>{

    const initialState = {
        driverlicense: null,
    }
    const[verifyForm,setVerifyForm]= useState(initialState)
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        setVerifyForm({ ...verifyForm, [e.target.name]: file });
    };
    const formDataToSend = new FormData();
    formDataToSend.append('profilePicture', verifyForm.driverlicense);


    return(
        <div>
          <div>
             <h1>Take a photo of your Driver's license</h1>
              <div>
                  <p>All 4 sides of the license should be photographed.
                      Ensure that the license number on the top left is
                      clearly visible in the image photographed</p>
              </div>
          </div>
            <div>
                {<img src={driverlicenense} alt="" /> }
            </div>


            <div>
                <label className="avatar-upload">
                    <input type="file" name="driverLicense" onChange={handleFileUpload} accept="image/*" style={{ display: 'none' }} />
                    {verifyForm.driverlicense ? (
                        <img src={URL.createObjectURL(verifyForm.driverlicense)} alt="Profile" className="avatar-image" />
                    ) : (
                        <span>upload profile picture</span>
                    )}
                </label>

            </div>

        </div>
    )
}

export default DriverLicence