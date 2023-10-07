import "../tripHistory/TripHistory.css";

const TripHistory = () => {
  return (
    <>
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
            <tr>
              <td>Lekki Phase 1</td>
              <td>Obalende</td>
              <td>1,000.00</td>
              <td>2</td>
              <td>19:00</td>
              <td>OPEN</td>
            </tr>
            <tr>
              <td>Ajah</td>
              <td>Yaba Sabo</td>
              <td>1,500.00</td>
              <td>1</td>
              <td>10:00</td>
              <td>COMPLETED</td>
            </tr>
            <tr>
              <td>Iyana Ipaja</td>
              <td>Ikeja</td>
              <td>700.00</td>
              <td>3</td>
              <td>2:00</td>
              <td>COMPLETED</td>
            </tr>
            <tr>
              <td>Ajegunle</td>
              <td>Apapa</td>
              <td>1700.00</td>
              <td>4</td>
              <td>4:00</td>
              <td>CLOSED</td>
            </tr>
            <tr>
              <td>Iyana Ipaja</td>
              <td>Ikeja</td>
              <td>700.00</td>
              <td>3</td>
              <td>2:45</td>
              <td>COMPLETED</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default TripHistory;
