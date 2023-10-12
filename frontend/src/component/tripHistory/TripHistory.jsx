import { useEffect, useState } from "react";
import "../tripHistory/TripHistory.css";

const TripHistory = () => {
  const [tripHistory, setTripHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const storedSesstion = localStorage.getItem("id");

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

  return (
    <>
      <div>
        
          <div className="history">
            <h2>Trip History</h2>
            <div className="dTable">
              <table>
                <tr>
                  <th>Pick-up</th>
                  <th>Destination</th>
                  <th>Price</th>
                  <th>No. of Passengers</th>
                  <th>Time</th>
                  <th>Status</th>
                </tr>
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
              </table>
            </div>
          </div>
      </div>
    </>
  );
};

export default TripHistory;
