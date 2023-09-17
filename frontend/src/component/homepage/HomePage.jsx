import image from "../homepage/assets/home.png";
import "../homepage/HomePage.css";
import naira from "../homepage/assets/naira.png"
import group from "../homepage/assets/friends.png"
import partner from "../homepage/assets/partnership.png"

const HomePage = () => {
  return (
    <>
      <div className="container">
        <div className="first-step">
          <img src={image} alt="Riders" />
        </div>

        <div className="second-step">
          <h3>What make us unique?</h3>
          <p>
            Go2Geda is an innovative mobility solution that empowers users to
            efficiently book transportation and share costs
            <br /> with others who share similar travel patterns. It not only
            optimizes transportation logistics but also fosters social <br />
            network connectivity, enhancing the overall commuting experience.
          </p>
        </div>

        <div className="third-step">
          <div className="info">
            <img src={group} alt="group icon" />
            <p>
              Saying goodbye to expensive solo-ride and embracing <br />
              shared ride resulting in cheaper fare s per cheap{" "}
            </p>
          </div>
          <hr />
          <div className="info">
          <img src={naira} alt="naira icon"/>
          <p>
            Enjoy you trip with minimum budget
          </p>
          </div>
          <hr />
          <div className="info">
          <img src={partner} alt="partner icon"/>
          <p>
          have fun and get the opportunity to make new friends 
          </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
