import { useEffect, useState } from "react";
import "../commuter/style/SearchForTrip.css";
import { HiOutlineSearch } from "react-icons/hi";
import Avatar from "react-avatar";
import axios from "axios";

const SearchForTrip = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchInputChange = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  const handleSearchButtonClick = () => {
    if (!searchQuery) {
      return;
    }

    setIsLoading(true);

    fetch(`http://localhost:8080/trip/searchByPickup/${searchQuery}`)
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

  return (
    <>
      <div className="container">
        <div className="search-form">
          <h2>Search for Your Trip</h2>
          <br />
          <div className="search-bar">
            <input
              placeholder="Enter your trip pick up"
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            <input
              placeholder="Enter your trip destination"
              value={searchQuery}
              onChange={handleSearchInputChange}
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
                  {searchResults.map((result) => (
                    <div className="card">
                      {result.driver.user.profilePicture ? <img src={result.driver.user.profilePicture}/> : (<Avatar name={result.driver.user.basicInformation.firstName + " " + result.driver.user.basicInformation.lastName} size="50" round={true} />) }
                      <div key={result.id} className="trip-details">
                        <h4>{result.pickup} - {result.destination}</h4>
                        <p>{result.pickUpTime}</p>
                      </div>
                      <h5>{result.pricePerSeat}</h5>
                      <p>{result.numberOfSeatsAvailable} seats</p>
                      <button>Book now</button>
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
