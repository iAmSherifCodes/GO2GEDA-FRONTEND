import React, {useState} from "react";
import './style/basicInfo.css'
import VehicleCss from "./style/vehicleInformation.module.css";

const BasicInformation = ()=>{
    const initialState ={
        age: '',
        homeAddress: '',
        state:''
    }
    const[basicForm,setBasicForm]= useState(initialState)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBasicForm({ ...basicForm, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };


    return(
        <div className="main-containerHome">
            <form onSubmit={handleSubmit}>
            <div className="homemain">
            <div className="home-addres">
                <label>HomeAddress</label>
                <input type="text" name="HomeAddress" value={basicForm.homeAddress} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
                <div className="submitbasic">
                    <button type="submit">Submit</button>
                </div>
            </div>
            </div>
            </form>
        </div>
    )
}
export default BasicInformation;