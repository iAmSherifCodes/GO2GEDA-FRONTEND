import React, {useState} from "react";
import '../style/verifyCommuter.css'
import {useNavigate} from "react-router-dom";

const VerifyCommuter = ()=>{
    const[address,setAddress]=useState("")
    const[profilePicture,setProfilePicture]=useState("")
    const handleAddressChange = (e)=>{
        setAddress(e.target.value)
    }
    const handleProfilePicture = (e) =>{
        const file = e.target.file[0]
        setProfilePicture(file)
    }
    const navigate = useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault()
        alert(" Verification successful")
        console.log(address)
        console.log(profilePicture)
        navigate('/verify');
    }
    return(
        <div className="main-com">
            <div className="commuter-verify-innerConatiner">
                <h2>Welcome</h2>
            <form onSubmit={handleSubmit}>
                <div  className="add">
                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={handleAddressChange}
                        required
                    />
                </div>
                <div className="commuterpicture">
                    <label htmlFor="profilePic">Profile Picture</label>
                    <input
                        type="file"
                        id="profilePic"
                        accept="image/*"
                        onChange={handleProfilePicture}/>
                </div>
                <div className="sta-addres">
                    <label>State</label>
                    <input type="state" name="state"  required/>
                </div>
                <div className="loc-addres">
                    <label>Local Gov</label>
                    <input type="localGoverment" name="localGoverment" required/>
                </div>
                <div className="form-group">
                    <div className="submitverify">
                        <button type="submit">Verify</button>
                    </div>
                </div>

            </form>
            {/*{verificationStatus && <p>{verificationStatus}</p>}*/}
            </div>
        </div>
    )
}
export  default VerifyCommuter;

