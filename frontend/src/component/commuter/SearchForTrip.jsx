import { useEffect, useState } from "react";
import "../commuter/style/SearchForTrip.css";
import { HiOutlineSearch } from "react-icons/hi";
import Avatar from "react-avatar";
import axios from "axios";

const SearchForTrip = () => {
  const [destination, setDestination] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const storedSesstion = sessionStorage.getItem("id");

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handlePickupLocationChange = (e) => {
    setPickupLocation(e.target.value);
  };

  const handleSearchButtonClick = () => {
    if (!destination && !pickupLocation) {
      return;
    }

    setIsLoading(true);

    fetch(
      `http://localhost:8080/trip/searchTripBy/from=${pickupLocation}&to=${destination}`
    )
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data);
        console.log(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching trip data:", error);
        setIsLoading(false);
      });
  };

  const handleTripRequest = (tripIds) => {
    // console.log(2);
    // console.log("(())++>>trid id " + tripId);
    // console.log("(())++>>session id " + storedSesstion);
    const request = axios.post("http://localhost:8080/trip/bookTrip", {tripId:  tripIds, commuterId: storedSesstion} )
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    // <BookingRequest />
  };

  return (
    <>
      <div className="container">
        <div className="search-form">
          <h2>Search for Your Trip</h2>
          <br />
          <div className="search-bar">
            <input
              placeholder="Enter pick-up location"
              value={pickupLocation}
              onChange={handlePickupLocationChange}
            />
            <input
              placeholder="Enter destination"
              value={destination}
              onChange={handleDestinationChange}
            />
            <button onClick={handleSearchButtonClick} disabled={isLoading}>
              <HiOutlineSearch />
              {isLoading ? "Searching..." : "Search"}
            </button>
          </div>

          <div className="card-list">
            <div>
              {isLoading ? (
                <p>Loading...</p>
              ) : searchResults.length > 0 ? (
                <div className="card-list">
                  <h4>Available Trips</h4>
                  {searchResults.map((result) => (
                    <div className="card">
                        {result.driver.user.profilePicture ? (
                          <img src={result.driver.user.profilePicture} />
                        ) : (
                          <Avatar
                            name={
                              result.driver.user.basicInformation.firstName +
                              " " +
                              result.driver.user.basicInformation.lastName
                            }
                            size="50"
                            round={true}
                          />
                        )}
                        <div key={result.id} className="trip-details">
                          <h4>
                            {result.pickup} - {result.destination}
                          </h4>
                          <p>{result.pickUpTime}</p>
                        </div>
                        <h5>{result.pricePerSeat}</h5>
                        <p>{result.numberOfSeatsAvailable} seats</p>
                      <button onClick={handleTripRequest(result.id)}>
                        Request for trip
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No trip results found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchForTrip;
