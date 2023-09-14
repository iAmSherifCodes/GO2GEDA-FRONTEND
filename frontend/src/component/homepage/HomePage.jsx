import image from "../homepage/assets/home.png";
import "../homepage/HomePage.css";
const HomePage = () =>{
    return(
        <>
        <div className="first-step">
            <img src={image} alt="Riders" />
        </div>
        </>
    );
}

export default HomePage;