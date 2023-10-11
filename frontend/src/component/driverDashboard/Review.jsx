import { useState,useEffect } from "react"
import axios from "axios"
const Review =()=>{
    const [reviews,setReviews]= useState([])
    const [driverHasReviews,setDriverHasReviews] = useState(false)
    const driverId = localStorage.getItem("user")
    useEffect(() => {
        if (driverId) {
          const response = axios.get(`http://localhost:8080/admin/findDriverReview/${driverId}`)
            .then((response) => {
              setReviews(response.data);
              if(response!== null){
              setDriverHasReviews(true)}
              console.log(response.data)
            })
            .catch((error) => {
              console.error('Error fetching reviews requests:', error);
            });
        } else {
          console.error('User ID not found in local storage');
        }
      }, []);

      const renderReviews = () => {
        if(driverHasReviews){
          return (
            <div className="bleft">
                <div className="brequest"><h2>Reviews</h2></div>
            <div className="review">
            {reviews.map((review) => (
              <div key={review.id}>
                  <p>{review.senderFirstName + " " + review.senderLastName+ ":   "}{review.review}</p>
              </div>
            ))}
          </div>
          </div>
          );
            }
      };

    return(<div>
       {renderReviews()}
    </div>)
}
export default Review