import ".//DashboardStyle.css";
import { CgProfile } from "react-icons/cg";
import { ImCheckboxChecked } from "react-icons/im";
import { GiCancel } from "react-icons/gi";
import Avatar from "react-avatar";
import { TbCurrencyNaira } from "react-icons/tb";
import BookingRequest from "../bookingRequest/BookingRequest";
import TripHistory from "../tripHistory/TripHistory";
import SideMenu from "../sideMenu/SideMenu";
import axios from "axios";
import { useState, useEffect } from "react";

const Board = () => {
  const [tripHistory, setTripHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const storedSesstion = localStorage.getItem("id");
  const [driverHasCreatedTrips, setDriverHasCreatedTrips] = useState(false);
  const [driverHasRequest, setDriverHasRequests] = useState(false);
  const [createdTrip, setCreatedTrips] = useState([]);
  const driverId = localStorage.getItem("id");
  // const driverId = sessionStorage.getItem("id")
  // console.log("((((())))====> session id" + driverId);

  const [tripRequests, setTripRequests] = useState([]);

  useEffect(() => {
    if (driverId) {
      const response = axios
          .get(`http://localhost:8080/trip/trip-requests/${driverId}`)
          .then((response) => {
            console.log(response);
            setTripRequests(response.data);
            setDriverHasRequests(true);
          })
          .catch((error) => {
            console.error("Error fetching trip requests:", error);
          });
    } else {
      console.error("User ID not found in local storage");
    }
  }, []);



  useEffect(() => {
    const fetchCreatedTrips = async () => {
      try {
        const response = await axios.get(
            `http://localhost:8080/trip/driver-Trip/${driverId}`
        );
        const trips = response.data;
        setCreatedTrips(trips);
        setDriverHasCreatedTrips(true);
      } catch (error) {
        console.error("Error fetching created trips:", error);
      }
    };

    fetchCreatedTrips();
  }, [driverId]);

  const startTrip = async (tripid) => {
    try {
      const response = await axios.post(
          `http://localhost:8080/trip/startTrip/${tripid}`
      );
      const trips = response.data;
      console.log(trips);
    } catch (error) {
      console.error("Error fetching created trips:", error);
    }
  };

  const endTrip = async (tripid) => {
    try {
      const response = await axios.post(
          `http://localhost:8080/trip/endTrip/${tripid}`
      );
      const trips = response.data;
      console.log(trips);
    } catch (error) {
      console.error("Error fetching created trips:", error);
    }
  };

  const cancelTrip = async (tripid) => {
    try {
      const response = await axios.post(
          `http://localhost:8080/trip/cancelTrip/${tripid}`
      );
      const trips = response.data;
      console.log(trips);
    } catch (error) {
      console.error("Error fetching created trips:", error);
    }
  };

  const renderTrips = () => {
    if (driverHasCreatedTrips) {
      return (
          <div>
            <ul>
              {createdTrip.map((trip) => (
                  <div className="created-trip-card" key={trip.id}>
                    <div className="pickup">
                      <p>Pickup {trip.pickup}</p>
                    </div>
                    <div className="destination">
                      <p>Dest. {trip.destination}</p>
                    </div>
                    <button onClick={() => startTrip(trip.id)}>Start</button>
                    <button onClick={() => endTrip(trip.id)}>End</button>
                    <button onClick={() => cancelTrip(trip.id)}>Cancel</button>
                  </div>
              ))}
            </ul>
          </div>
      );
    } else {
      return null;
    }
  };
  useEffect(() => {
    fetch(`http://localhost:8080/trip/viewDriverTrips/${storedSesstion}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setTripHistory(data);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
  }, [tripHistory]);

  const renderTripHistory = () => {
    return (
        <>
          {loading ? (
              <p>Loading...</p>
          ) : tripHistory.length > 0 ? (
              tripHistory.map((trip, index) => (
                  <tr key={index}>
                    <td>{trip.pickup}</td>
                    <td>{trip.destination}</td>
                    <td>{trip.pricePerSeat}</td>
                    <td>{trip.numberOfSeatsAvailable}</td>
                    <td>{trip.startTime}</td>
                    <td>{trip.tripStatus}</td>
                  </tr>
              ))
          ) : (
              <tr>
                <td colSpan="6">No trip history</td>
              </tr>
          )}
        </>
    );
  };

  return (
      <>
        <div className="container">
          <div className="dashboard-container">
            <div className="right-board">
              <div className="top">
                <div className="left">
                  <div className="no">
                    <h2>Created Trips</h2>
                  </div>
                  <div>{renderTrips()}</div>
                </div>

                <div className="middle">
                  <div className="request">
                    <h2>Request</h2>
                  </div>
                  <div>
                    <ul>
                      {tripRequests.map((request) => (
                          <div key={request.id} className="card">
                            <div className="avatar">
                              <Avatar
                                  name={
                                      request.senderFirstName +
                                      " " +
                                      request.senderLastName
                                  }
                                  size="50"
                                  round={true}
                              />
                            </div>
                            <div className="name">
                              <p>
                                {request.senderFirstName +
                                    " " +
                                    request.senderLastName}
                              </p>
                            </div>
                            <div className="checks">
                              <ImCheckboxChecked size={23} color="green" />
                              <GiCancel size={23} color="red" />
                            </div>
                          </div>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="right">
                  <div className="no">
                    <h2>Wallet Balance</h2>
                  </div>
                  <div className="numberOfTrips">
                    <TbCurrencyNaira />
                    <p>1,000.00</p>
                  </div>
                </div>
              </div>
              <div className="bottom">
                <h2>Trips</h2>
                <div className="Table">
                  <table>
                    <tr>
                      <th>Pick-up</th>
                      <th>Destination</th>
                      <th>Price</th>
                      <th>No. of Passengers</th>
                      <th>Time</th>
                      <th>Status</th>
                    </tr>
                    {
                      renderTripHistory()
                    }
                  </table>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </>
  );
};

export default Board;