import React,{useState} from "react";
import {Link} from "react-router-dom";
import './style//verifyDriver.css'
const VerifyDriver= ()=>{
    return(
        <div>

        <div className="main-container">
            <div className="welcom">
                <h1>Welcome,</h1>
                <div>
                    <h3 id="regd">Required steps</h3>
                    <p id="need">Here's what you need to do to set up your account.</p>
                </div>
            </div>
         <div className="required">
             <uL>
             <div>
                 <Link to={"/basicInfo"} style={{ textDecoration: 'none' }} className="link">Basic Info</Link>
             </div>
                 <hr  id="h"/>
             <div>
                 <Link to={"/drive"} style={{ textDecoration: 'none' }}  className="link">Driver Photo
                     <button>
                       >
                     </button>
                 </Link>
                 < hr id="h" />
             </div>

             <div>
                 <Link to={"/licence"}  style={{ textDecoration: 'none' }} className="link">
                     Driver License</Link>
                 <hr  id="h"/>
             </div>
               <div>
                   <Link to={"vehicleInfo"} style={{ textDecoration: 'none' }} className="link">
                       Vehicles Information</Link>
                   <hr id="h" />
               </div>
             </uL>
         </div>
        </div>

        </div>
    )
}
export default VerifyDriver;