import { ImCheckboxChecked } from "react-icons/im";
import { GiCancel } from "react-icons/gi";
import Avatar from "react-avatar";
import "../bookingRequest/BookingRequest.css";
import axios from "axios";
import { useState, useEffect } from "react";
const BookingRequest = () => {
  const [tripRequests, setTripRequests] = useState([]);

  const driverId = localStorage.getItem("user")

  useEffect(() => {
    if (driverId) {
      const response = axios.get(`http://localhost:8080/trip/trip-requests/${driverId}`)
        .then((response) => {
          setTripRequests(response.data);
          
        })
        .catch((error) => {
          console.error('Error fetching trip requests:', error);
        });
    } else {
      console.error('User ID not found in local storage');
    }
  }, []);
  return (
    <div className="bleft" >
      <div className="brequest">
        <h2> Booking Request</h2>
      </div>
      <ul >
      {tripRequests.map((request) => (
        <div key={request.id} className="card" >
          <div className="avatar">
            <Avatar name={request.senderFirstName + " " + request.senderLastName} size="50" round={true} />
          </div>
          <div className="name">
            <p>{request.senderFirstName + " " + request.senderLastName}</p>
          </div>
          <div className="checks">
            <ImCheckboxChecked size={23} color="green" />
            <GiCancel size={23} color="red" />
          </div>
        </div>
        
      ))}
    </ul></div>
  
  )
};

export default BookingRequest;
