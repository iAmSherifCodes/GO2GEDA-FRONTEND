import React, {useState} from "react";
import './style/accountInformation.css'

const AccountInformation =()=>{
    const initialState ={
        BankName: '',
        Bvn: '',
        AccountName:''
    }
    const[accountForm,setAccountForm]= useState(initialState)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAccountForm({ ...accountForm, [name]: value });
    };

    return(
        <div className="acctinfomaincontain">
            <form>
            <div className="acct-main">
                <div className="accttxt">
                    <h3>Account Information</h3>
                </div>
                <br/>
            <div className="accountName">
                <label>AccountName</label>
                <input type="text" name="HomeAddress" value={accountForm.AccountName} onChange={handleInputChange} required />
            </div>
                <br/>
            <div className="bank-verif">
                <label>BankVerifica</label>
                <input type="text" name="Bvn" value={accountForm.Bvn} onChange={handleInputChange} required />
            </div>
                <br/>
            <div className="bank-name">
                <label>Bank Name</label>
                <input type="text" name="HomeAddress" value={accountForm.BankName} onChange={handleInputChange} required />
            </div>
                <div className="submitbasicAcc">
                    <button type="submit">Submit</button>
                </div>
        </div>
            </form>
        </div>
    )
}

export  default  AccountInformation