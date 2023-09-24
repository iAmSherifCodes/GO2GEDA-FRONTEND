import React, {useState} from "react";
import './style/accountInformation.css'
import {useNavigate} from 'react-router-dom';


const AccountInformation =()=>{
    const initialState ={
        BankName: '',
        Bvn: '',
        AccountName:''
    }
    const[accountForm,setAccountForm]= useState(initialState)
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAccountForm({ ...accountForm, [name]: value });
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("successful");
         navigate('/verify')
        console.log(accountForm)

        setAccountForm(null);

    }
    return(
        <div className="acctinfomaincontain">
            <form onSubmit={handleSubmit}>
            <div className="acct-main">
                <div className="accttxt">
                    <h3>Account Information</h3>
                </div>
                <br/>
            <div className="accountName">
                <label>AccountName</label>
                 <input type="text" name="AccountName"
                        onChange={handleInputChange} required/>
            </div>
                <br/>
            <div className="bank-verif">
                <label>BankVerifica</label>
                <input type="text" name="Bvn" onChange={handleInputChange} required />
            </div>
                <br/>
            <div className="bank-name">
                <label>Bank Name</label>
                <input type="text" name="BankName" onChange={handleInputChange} required/>
            </div>
                <div className="submitbasicAcc">
                    <button type="submit" >Submit</button>
                </div>
        </div>
            </form>
        </div>
    )
}

export  default  AccountInformation