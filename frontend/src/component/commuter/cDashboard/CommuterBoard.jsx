import { CgProfile } from "react-icons/cg";
import { ImCheckboxChecked } from "react-icons/im";
import { GiCancel } from "react-icons/gi";
import Avatar from "react-avatar";
import { TbCurrencyNaira } from "react-icons/tb";
import BookingRequest from "../../bookingRequest/BookingRequest";
import TripHistory from "../../tripHistory/TripHistory";
import SideMenu from "../../sideMenu/SideMenu";
import { BiTrip } from "react-icons/bi";
import { useEffect, useState } from "react";
import axios from "axios";

const CommuterBoard = () => {
  const [bookedTrips, setBookedTrips] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tripHistory, setTripHistory] = useState([]);
  const storedSession = sessionStorage.getItem("id");
  const baseUrl = "http://localhost:8080/";

  // useEffect(() => {
  //   fetch(`${baseUrl}trip/viewBookedTrip/${storedSession}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setBookedTrips(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setLoading(false);
  //       alert(error);
  //     });
  // }, [bookedTrips]);

  const renderBookedTrips = () => {
    return (
      <>
        {loading ? (
          <p>Loading...</p>
        ) : bookedTrips.length > 0 ? (
          bookedTrips.map((trip, index) => (
            <div className="card">
              <div className="avatar">
                <BiTrip size="27" />
              </div>
              <div className="pickup">
                <p>Pickup {trip.pickup}</p>
              </div>
              <div className="destination">
                <p>Dest. {trip.destination}</p>
              </div>
              <div className="checks">
                <ImCheckboxChecked size={23} color="green" />
                <GiCancel size={23} color="red" />
              </div>
            </div>
          ))
        ) : (
          <p>No trips available</p>
        )}
      </>
    );
  };

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

  useEffect(() => {
    fetch(`http://localhost:8080/trip/viewCommuterTrips/${storedSession}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setTripHistory(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('An error occurred:', error);
        setLoading(false); // You might want to set an error state here or display an error message.
      });
  }, [storedSession]); // Assuming storedSession is the actual dependency for this effect
  

  // useEffect(() => {
  //   fetch(`http://localhost:8080/trip/viewCommuterTrips/${storedSession}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setTripHistory(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setLoading(false);
  //       console.log(error);
  //     });
  // }, [tripHistory]);

  return (
    <>
      <div className="container">
        <div className="commuter-dashboard-container">
          {/* <SideMenu /> */}
          <div className="right-board">
            <div className="top">
              <div className="left">
                <div className="request">
                  <h2>Booked Trips</h2>
                </div>
                <div>{renderBookedTrips()}</div>
              </div>
              <div className="middle">
                <div className="no">
                  <h2>Number of Trips</h2>
                </div>
                <div className="numberOfTrips">
                  <p>12</p>
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

export default CommuterBoard;
