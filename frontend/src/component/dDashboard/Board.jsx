import ".//DashboardStyle.css";
import { CgProfile } from "react-icons/cg";
import { ImCheckboxChecked } from "react-icons/im";
import { GiCancel } from "react-icons/gi";
import Avatar from "react-avatar";
import { TbCurrencyNaira } from "react-icons/tb";
import BookingRequest from "../bookingRequest/BookingRequest";
import TripHistory from "../tripHistory/TripHistory";
import SideMenu from "../sideMenu/SideMenu";

const Board = () => {
  return (
    <>
      <div className="container">
        <div className="dashboard-container">
          {/* <SideMenu /> */}
          <div className="right-board">
            <div className="top">
              <div className="left">
                <div className="request">
                  <h2>Request</h2>
                </div>
                <div className="card">
                  <div className="avatar">
                    <Avatar name="Duru Oluchi" size="50" round={true} />
                  </div>
                  <div className="name">
                    <p>Duru Oluchi</p>
                  </div>
                  <div className="checks">
                    <ImCheckboxChecked size={23} color="green" />
                    <GiCancel size={23} color="red" />
                  </div>
                </div>
                <div className="card">
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
                </div>
                <div className="card">
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
                </div>
                {/* <BookingRequest /> */}
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

export default Board;
