// import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style//verifyDriver.css";
//  import { FontAwesomeIcon } from "@fortawesome//react-fontawesome";
//  import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

<<<<<<< HEAD
const VerifyDriver = () => {
  return (
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
              <Link
                to={"/basicInfo"}
                style={{ textDecoration: "none" }}
                className="link"
              >
                Basic Info
                {/* <FontAwesomeIcon icon={faChevronRight} id="fowrd1" /> */}
              </Link>
            </div>
            <hr id="h" />
            <div>
              <Link
                to={"/drive"}
                style={{ textDecoration: "none" }}
                className="link"
              >
                Driver Photo
                {/* <FontAwesomeIcon icon={faChevronRight} id="fowrd2" /> */}
              </Link>
              <hr id="h" />
            </div>{" "}
            `
            <div>
              <Link
                to={"/licence"}
                style={{ textDecoration: "none" }}
                className="link"
              >
                Driver License
                {/* <FontAwesomeIcon icon={faChevronRight} id="fowrd3" /> */}
              </Link>
              <hr id="h" />
            </div>
            <div>
              <Link
                to={"vehicleInfo"}
                style={{ textDecoration: "none" }}
                className="link"
              >
                Vehicles Information
                {/* <FontAwesomeIcon icon={faChevronRight} id="fowrd4" /> */}
              </Link>
              <hr id="h" />
            </div>
          </uL>
=======
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
                         <FontAwesomeIcon icon={faChevronRight} id="fowrd1" />
                     </Link>
                 </div>
                     <hr  id="h"/>
                 <div>
                     <Link to={"/drive"} style={{ textDecoration: 'none' }}  className="link">Driver Photo
                             <FontAwesomeIcon icon={faChevronRight} id="fowrd2" />
                     </Link>
                     < hr id="h" />
                 </div> `

                 <div>
                     <Link to={"/licence"}  style={{ textDecoration: 'none' }} className="link">
                         Driver License
                         <FontAwesomeIcon icon={faChevronRight}  id="fowrd3" />
                     </Link>
                     <hr  id="h"/>
                 </div>
                   <div>
                       <Link to={"/vehicleInfo"} style={{ textDecoration: 'none' }} className="link">
                           Vehicles Information
                           <FontAwesomeIcon icon={faChevronRight}  id="fowrd4"/>
                       </Link>
                       <hr id="h" />
                   </div>
                 </uL>
             </div>
>>>>>>> a9643b352ef7ca2477d0506a9ecb0a08ffaf8dd5
        </div>
      </div>
    </div>
  );
};
export default VerifyDriver;
