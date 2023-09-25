import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import './style/basicInfo.css'

const BasicInformation = ()=>{
    const initialState ={
        homeAddress: '',
        state:'',
        localGoverment:''
    }
    const[basicForm,setBasicForm]= useState(initialState)
    const navigate = useNavigate();
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBasicForm({ ...basicForm, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("successful")
        navigate('/verify');
        console.log(basicForm)


    };
    return(

        <div className="main-containerHome">
            <form onSubmit={handleSubmit}>
            <div className="homemain">
                <h2>Address</h2>
            <div className="home-addres">
                <label>HomeAddress</label>
                <input type="homeAddress" name="homeAddress"  onChange={handleInputChange} required/>
            </div>
                <div className="state-addres">
                    <label>State</label>
                    <input type="state" name="state"  onChange={handleInputChange} required/>
                </div>
                <div className="local-addres">
                    <label>Local Gov</label>
                    <input type="localGoverment" name="localGoverment" onChange={handleInputChange} required/>
                </div>



                <div className="form-group">
                <div className="submitbasic">
                    <button type="submit">Submit</button>
                </div>e
            </div>

            </div>
            </form>
        </div>
    )
}
export default BasicInformation;