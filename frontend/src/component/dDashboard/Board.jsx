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
    const [driverHasCreatedTrips, setDriverHasCreatedTrips] = useState(false);
    const [driverHasRequest, setDriverHasRequests] = useState(false)
    const [createdTrip, setCreatedTrips] = useState([])
    const driverId = localStorage.getItem("user")
    // const driverId = sessionStorage.getItem("id")
    // console.log("((((())))====> session id" + driverId);

    const [tripRequests, setTripRequests] = useState([]);

    useEffect(() => {
        if (driverId) {
            const response = axios.get(`http://localhost:8080/trip/trip-requests/${driverId}`)
        .then((response) => {
                console.log(response);
                setTripRequests(response.data);
                setDriverHasRequests(true)
            })
                .catch((error) => {
                    console.error('Error fetching trip requests:', error);
                });
        } else {
            console.error('User ID not found in local storage');
        }
    }, []);

    // const fetchCreatedTrips = async () => {
    //   try {
    //     const response = await axios.get(`http://localhost:8080/trip/driver-Trip/${driverId}`);
    //     const trips = response.data;
    //     setCreatedTrips(trips);
    //     setDriverHasCreatedTrips(true);
    //   } catch (error) {
    //     console.error('Error fetching created trips:', error);
    //   }
    // };


    useEffect(() => {
        const fetchCreatedTrips = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/trip/driver-Trip/${driverId}`);
                const trips = response.data;
                setCreatedTrips(trips);
                setDriverHasCreatedTrips(true);
            } catch (error) {
                console.error('Error fetching created trips:', error);
            }
        };

        fetchCreatedTrips();
    }, [driverId]);


    const startTrip = async (tripid) => {
        try {
            const response = await axios.post(`http://localhost:8080/trip/startTrip/${tripid}`);
            const trips = response.data;
            console.log(trips)
        } catch (error) {
            console.error('Error fetching created trips:', error);
        }
    };

    const endTrip = async (tripid) => {
        try {
            const response = await axios.post(`http://localhost:8080/trip/endTrip/${tripid}`);
            const trips = response.data;
            console.log(trips)
        } catch (error) {
            console.error('Error fetching created trips:', error);
        }
    };

    const cancelTrip = async (tripid) => {
        try {
            const response = await axios.post(`http://localhost:8080/trip/cancelTrip/${tripid}`);
            const trips = response.data;
            console.log(trips)
        } catch (error) {
            console.error('Error fetching created trips:', error);
        }
    };

    const acceptRequest = async (tripId,commuterId) => {
        try {
            const request = {
                tripId,
                commuterId,
            };
            const response = await axios.post("http://localhost:8080/trip/acceptTrip",request);
            const trips = response.data
            console.log(trips);
        } catch (error) {
            console.error('Error accepting trip request:', error);
        }
    };
    const rejectRequest = async (tripId, commuterId) => {
        const confirmation = window.confirm("Are you sure you want to reject this trip request?");
        if (confirmation) {
            const request = {
                tripId,
                commuterId,
            };
            const response = await axios.post("http://localhost:8080/trip/rejectTrip", request);
            const trips = response.data
            console.log(trips);
            console.log(response);
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
                                    <p>Pickup: {trip.pickup}</p>
                                </div>
                                <div className="destination">
                                    <p>Dest.: {trip.destination}</p>
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
            return (<div>
                <p>No Trip has been created</p>
            </div>);
        }
    };
    return (
        <>
            <div className="container">
                <div className="dashboard-container">
                    {/* <SideMenu /> */}
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
                                <div ><ul >
                                    {tripRequests.map((request) => (
                                        <div key={request.id} className="card" >
                                            <div className="avatar">
                                                <Avatar name={request.senderFirstName + " " + request.senderLastName} size="50" round={true} />
                                            </div>
                                            <div className="name">
                                                <p>{request.senderFirstName + " " + request.senderLastName}</p>
                                            </div>
                                            <div className="checks">
                                                <ImCheckboxChecked size={23} color="green"  />
                                                <GiCancel size={23} color="red"   onClick={() => rejectRequest(request.tripId, request.commuterId)}/>
                                            </div>
                                        </div>
                                    ))}
                                </ul></div>
                                {/* <div className="card">
                  <div className="avatar">
                    <Avatar name="Obinali Goodness" size="50" round={true} />
                  </div>
                  <div className="name">
                    <p>Obinali Goodness</p>
                  </div>
                  <div className="checks">
                    <ImCheckboxChecked size={23} color="green" />
                    <GiCancel size={23} color="red" />
                  </div>
                </div> */}
                                {/* <div className="card">
                  <div className="avatar">
                    <Avatar name="Elon Musk" size="50" round={true} />
                  </div>
                  <div className="name">
                    <p>Elon Musk</p>
                  </div>
                  <div className="checks">
                    <ImCheckboxChecked size={23} color="green" />
                    <GiCancel size={23} color="red" />
                  </div>
                </div> */}
                                {/* <BookingRequest /> */}




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
                                    <tr>
                                        <td>Lekki Phase 1</td>
                                        <td>Obalende</td>
                                        <td>1,000.00</td>
                                        <td>2</td>
                                        <td>19:00</td>
                                        <td>Open</td>
                                    </tr>
                                    <tr>
                                        <td>Ajah</td>
                                        <td>Yaba Sabo</td>
                                        <td>1,500.00</td>
                                        <td>4</td>
                                        <td>10:00</td>
                                        <td>Closed</td>
                                    </tr>
                                    <tr>
                                        <td>Iyana Ipaja</td>
                                        <td>Ikeja</td>
                                        <td>700.00</td>
                                        <td>4</td>
                                        <td>2:00</td>
                                        <td>Closed</td>
                                    </tr>
                                </table>
                            </div>
                            {/* <TripHistory /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Board;