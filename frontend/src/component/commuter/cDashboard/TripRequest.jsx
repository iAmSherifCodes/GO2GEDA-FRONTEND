import React, {useEffect, useState} from "react";
import axios from "axios";

function TripRequest() {
    const [tripRequests, setTripRequests] = useState([]);

    useEffect(() => {
        const userId = localStorage.getItem("user");
        if (userId) {
      const response =      axios.get(`http://localhost:8080/trip/trip-requests/${userId}`)
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
        <div>
            <h1>Trip Requests</h1>
            <ul>
                {tripRequests.map((request) => (
                    <li key={request.id}>
                        {/* Display trip request details */}
                        {/*<div>Name: {request.name}</div>*/}
                        <div>{request.message}</div>
                        {/* Add more details as needed */}
                    </li>

                ))}
            </ul>

        </div>
    );
}
export default TripRequest;
