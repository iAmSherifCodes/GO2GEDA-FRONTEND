// import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style//verifyDriver.css";
import React from "react";


const VerifyDriver= ()=>{
    return(
        <div className="main">
        <div className="main-container">
            <div className="welcom">
                <h1>Welcome,</h1>
                    <h3 id="regd">Required steps</h3>
                <div>
                    <p id="need">Here's what you need to do to set up your account.</p>
                </div>

            </div>
             <div className="required">
                 <uL>
                 <div>
                     <Link to={"/basicInfo"} style={{ textDecoration: 'none' }} className="link">Basic Info
                     </Link>
                 </div>
                     <hr  id="h"/>
                 <div>
                     <Link to={"/acctInfo"} style={{ textDecoration: 'none' }}  className="link">Account Information
                     </Link>
                     < hr id="h"/>
                 </div> `

                     <div>
                         <Link to={"/drive"} style={{ textDecoration: 'none' }}  className="link">Driver Photo
                         </Link>
                         < hr id="h"/>
                     </div> `

                 <div>
                     <Link to={"/licence"}  style={{ textDecoration: 'none' }} className="link">
                         Driver License
                         {/*<FontAwesomeIcon icon={faChevronRight}  id="fowrd3" />*/}
                     </Link>
                     <hr  id="h"/>
                 </div>
                   <div>
                       <Link to={"/vehicleInfo"} style={{ textDecoration: 'none' }} className="link">
                           Vehicles Information
                       </Link>
                       <hr id="h" />
                   </div>
                     <div className="submitbasicverif">
                         <button type="submit">Done</button>
                     </div>
                 </uL>
             </div>
        </div>
      </div>

  );
};
export default VerifyDriver;
