import { useState } from "react";
import '../AdminLoginPage/AdminLogin.css'
const AdminLogin = () =>{
    const loginDetails = {
        emailAddress:"",
        password:"",
     }
     const[data,setData] = useState(loginDetails);

     const CollectLoginDetails = async(event) =>{
        event.preventDefault();

        setData((state)=>({
            ...state,
            [event.target.name]: event.target.value
        }));
      

    }
    const handleSubmit = async (event) =>{
        event.preventDefault();
        const AdminLoginData = {
            emailAddress:data.emailAddress,
            password:data.password
        }
        console.log(AdminLoginData)

        
    }
  
    
    return(
        <div className="main-contain">
            <div className="loginPage">
                     <h1>Admin Login</h1>
               
               <form className="form" onSubmit={handleSubmit}>
                    <input type="email" placeholder="EmailAddress" name="emailAddress" onChange={CollectLoginDetails} ></input><br/>
                    <input type="password" placeholder="Password" name="password" onChange={CollectLoginDetails} ></input><br/>
                    <button className="submitBtn" onClick={handleSubmit}>Submit</button>
                </form>  
                {/* </div> */}
            </div>

        </div>
    )




}
export default AdminLogin


