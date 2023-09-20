import {useState} from "react";

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


    return(
        <div>
            {/*<div className="form-group">*/}
            {/*    <label>Age:</label>*/}
            {/*    <input type="text" name="age" value={basicForm.plateNumber} onChange={handleInputChange} required />*/}
            {/*</div>*/}
            <div className="form-group">
                <label>HomeAddress:</label>
                <input type="text" name="HomeAddress" value={basicForm.homeAddress} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
                <label>state:</label>
                <input type="text" name="state" value={basicForm.state} onChange={handleInputChange} required />
            </div>


        </div>
    )
}
export default BasicInformation;