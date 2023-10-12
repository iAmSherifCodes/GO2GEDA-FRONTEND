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
  const storedSession = localStorage.getItem("id");
  const baseUrl = "http://localhost:8080/";

  useEffect(() => {
    fetch(`${baseUrl}trip/viewBookedTrip/${storedSession}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBookedTrips(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert(error);
      });
  }, [bookedTrips]);

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

export default CommuterBoard;
