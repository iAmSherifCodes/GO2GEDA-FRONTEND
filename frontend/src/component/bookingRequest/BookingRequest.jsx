import { ImCheckboxChecked } from "react-icons/im";
import { GiCancel } from "react-icons/gi";
import Avatar from "react-avatar";
import "../bookingRequest/BookingRequest.css";
import axios from "axios";

const BookingRequest = () => {
  return (
      <>
        <div className="bleft">
          <div className="brequest">
            <h2>Booking Request</h2>
          </div>
          <div className="bcard">
            <div className="bavatar">
              <Avatar name="Duru Oluchi" size="50" round={true} />
            </div>
            <div className="bname">
              <p>Duru Oluchi</p>
            </div>
            <div className="bchecks">
              <ImCheckboxChecked size={23} color="green" />
              <GiCancel size={23} color="red" />
            </div>
          </div>
          <div className="bcard">
            <div className="bavatar">
              <Avatar name="Obinali Goodness" size="50" round={true} />
            </div>
            <div className="bname">
              <p>Obinali Goodness</p>
            </div>
            <div className="bchecks">
              <ImCheckboxChecked size={23} color="green" />
              <GiCancel size={23} color="red" />
            </div>
          </div>
          <div className="bcard">
            <div className="bavatar">
              <Avatar name="Elon Musk" size="50" round={true} />
            </div>
            <div className="bname">
              <p>Elon Musk</p>
            </div>
            <div className="bchecks">
              <ImCheckboxChecked size={23} color="green" />
              <GiCancel size={23} color="red" />
            </div>
          </div>
        </div>
      </>
  );
};

export default BookingRequest;
