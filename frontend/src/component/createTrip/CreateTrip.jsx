import { useState } from "react";
import "../createTrip/CreateTrip.css";
import axios from "axios";
import {DateTimePicker} from "react-datetime-picker";
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

const CreateTrip = () => {
  const initialObj = {
    to: "",
    numberOfSeats: "",
    pickUpTime: new Date(),
    from: "",
    pricePerSeat: "",
    email: "",
  };
  const [createTripData, setCreateTripData] = useState(initialObj);

  const handleChange = async (e) => {
    e.preventDefault();

    setCreateTripData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };


  const[dateValue, setDateValue]= useState(new Date())
  console.log(dateValue.toLocaleString())

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      to: createTripData.to,
      numberOfSeats: createTripData.numberOfSeats,
      from: createTripData.from,
      pricePerSeat: createTripData.pricePerSeat,
      pickUpTime: dateValue.toLocaleString(),
      id:localStorage.getItem("user"),
    };

    console.log(data);

    const response = await axios.post(
        "http://localhost:8080/trip/createTrip",
        data
    );
    console.log(response === 200);


    console.log(data);
  };

  return (
      <div className="createTripContainer">
        <div className="createTripForm">
          <h2>New Trip</h2>
          <hr />
          <div className="header">
            <h3>Route</h3>
            <input
                type="location"
                required
                onChange={handleChange}
                name="from"
                placeholder="Pickup Location"
            />
            <input type="text"
                   name="to"
                   required
                   onChange={handleChange}
                   placeholder="Dropoff Location" />
          </div>
          <div className="header">
            <h3>Number Of Seats Available</h3>
            <input
                type="number"
                required
                name="numberOfSeats"
                onChange={handleChange}
                placeholder="Number of Seats available"
            />
          </div>
          <div className="header">
            <h3>Price Per Seat</h3>
            <input
                type="text"
                required
                name="pricePerSeat"
                onChange={handleChange}
                placeholder="Price Per Seat"
            />
          </div>
          <div >
            <h3>Start Time</h3>
            < DateTimePicker
                minDate= {new Date()}
                name="pickUpTime"
                onChange={setDateValue}
                placeholder="Start Time"
                required
            />
          </div>
          <button onClick={handleSubmit}>Create Trip</button>
        </div>
      </div>
  );
};
export default CreateTrip;