import { useEffect, useState } from "react";

const ViewTripHistory = () => {
  const [tripHistory, setTripHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const storedSesstion = localStorage.getItem("user");

  useEffect(() => {
    fetch(`http://localhost:8080/trip/viewCommuterTrips/${storedSesstion}`)
      .then((response) => response.json())
      .then((data) => {
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
      return (
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : tripHistory.length > 0 ? (
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
                {tripHistory.map((trip, index) => (
                  <tr key={index}>
                    <td>{trip.pickup}</td>
                    <td>{trip.destination}</td>
                    <td>{trip.pricePerSeat}</td>
                    <td>{trip.numberOfSeatsAvailable}</td>
                    <td>{trip.startTime}</td>
                    <td>{trip.tripStatus}</td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        ) : (
            <p>No trip history</p>
        )}
      </div>
      );
    </>
  );
};

export default ViewTripHistory;
