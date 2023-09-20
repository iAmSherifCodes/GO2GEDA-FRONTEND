import {useState} from "react";

const AccountInformation =()=>{
    const initialState ={
        Bank: '',
        Bvn: '',
        AccountName:''
    }
    const[accountForm,setAccountForm]= useState(initialState)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAccountForm({ ...accountForm, [name]: value });
    };

    return(
        <div>
            <div className="form-group">
                <label>AccountName:</label>
                <input type="text" name="HomeAddress" value={accountForm.AccountName} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
                <label>BankVerificationNumber:</label>
                <input type="text" name="Bvn" value={accountForm.Bvn} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
                <label>HomeAddress:</label>
                <input type="text" name="HomeAddress" value={accountForm.homeAddress} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
                <label>HomeAddress:</label>
                <input type="text" name="HomeAddress" value={accountForm.homeAddress} onChange={handleInputChange} required />
            </div>
        </div>
    )
}
