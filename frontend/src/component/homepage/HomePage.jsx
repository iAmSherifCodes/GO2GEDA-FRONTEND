import image from "../homepage/assets/home.png";
import "../homepage/HomePage.css";
const HomePage = () => {
  return (
    <>
      <div className="container">
        <div className="first-step">
          <img src={image} alt="Riders" />
        </div>

        <div className="second-step">
            <h3>What make us unique?</h3>
            <p>Go2Geda is an innovative mobility solution that empowers users to efficiently book transportation and share costs<br /> with others who share similar travel patterns. It not only optimizes transportation logistics but also fosters social <br />network connectivity, enhancing the overall commuting experience.</p>

        </div>
      </div>
    </>
  );
};

export default HomePage;
