import React, {useState} from "react";

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
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(address)
        console.log(profilePicture)
    }
    return(
        <div className="main-com">
            <h2>Commuter Verification</h2>
            <form onSubmit={handleSubmit}>
                <div className="commuter-verify-innerConatiner">
                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={handleAddressChange}
                        required
                    />
                </div>
                <div className="commuter picture">
                    <label htmlFor="profilePic">Profile Picture:</label>
                    <input
                        type="file"
                        id="profilePic"
                        accept="image/*"
                        onChange={handleProfilePicture}/>
                            </div>
                <div className="state-addres">
                    <label>State</label>
                    <input type="state" name="state"  required/>
                </div>
                <div className="local-addres">
                    <label>Local Gov</label>
                    <input type="localGoverment" name="localGoverment" required/>
                </div>
                <div className="form-group">
                    <div className="submitbasic">
                        <button type="submit">Submit</button>
                    </div>
                </div>

                         </form>
            {/*{verificationStatus && <p>{verificationStatus}</p>}*/}

        </div>
    )
}
export  default VerifyCommuter;

