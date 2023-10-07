import { useState } from "react";
import classes from "../Profile/ProfileInfo.module.css";
import profile from "../Profile/assests/profilepic.jpeg";

const ProfileInfo = () => {
  return (
    <>
      <div>
        <h2>Profile</h2>
        <form>
          {/* //onSubmit={handleSubmit}> */}
          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              // value={userProfile.firstName}
              // onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              // value={userProfile.lastName}
              // onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              // value={userProfile.email}
              // onChange={handleInputChange}
            />
          </div>
          {/* Add more profile fields and inputs as needed */}
          <button type="submit">Save</button>
        </form>
      </div>
    </>
  );
};
export default ProfileInfo;
