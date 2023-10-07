import { useState } from "react";
import classes from "../createTrip/CreateTrip.css";
import axios from "axios";

const CreateTrip = () => {
  const initialObj = {
    to: "",
    numberOfSeats: "",
    pickUpTime: "",
    from: "",
    pricePerSeat: "",
    email: "awofiranyesherif4@gmail.com",
  };
  const [createTripData, setCreateTripData] = useState(initialObj);

  const handleChange = async (e) => {
    e.preventDefault();

    setCreateTripData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      to: createTripData.to,
      numberOfSeats: createTripData.numberOfSeats,
      from: createTripData.from,
      pricePerSeat: createTripData.pricePerSeat,
      pickUpTime: createTripData.pickUpTime,
      email: "awofiranyesherif4@gmail.com",
    };

    console.log(createTripData);

    const response = await axios.post(
      "http://localhost:8080/trip/createTrip",
      data
    );
    console.log(response === 200);
    // setCreateTripData((prev) => [...prev, response]);

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
        <div className="header">
          <h3>Start Time</h3>
          <input
            type="text"
            
            name="pickUpTime"
            onChange={handleChange}
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
