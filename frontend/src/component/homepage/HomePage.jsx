import illustration from "../homepage/assets/g2g.png";
import "../homepage/HomePage.css";
import naira from "../homepage/assets/naira.png";
import group from "../homepage/assets/friends.png";
import partner from "../homepage/assets/partnership.png";
import anime from "../homepage/assets/anime.json";
import Lottie from "lottie-react";
import NavBar from "../Navbar";

const HomePage = () => {
  return (
    <>
    <NavBar/>
      <div className="container">
        <div className="first-step">
          <div className="text">
            <h3>
              Welcome to <span style={{ color: "blue" }}>Go2Geda</span>
            </h3>
            <h4>Transportation made easy.</h4>
            <h4 id="ensure">
              Ensuring comfortable and affordable transportation
            </h4>
          </div>
          <Lottie className="anime-container" animationData={anime}></Lottie>
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
            <img src={naira} alt="naira icon" />
            <p>Enjoy you trip with minimum budget</p>
          </div>
          <hr />
          <div className="info">
            <img src={partner} alt="partner icon" />
            <p>Have fun and get the opportunity to make new friends</p>
          </div>
        </div>

        <div className="fourth-step">
          <h3>BOOK A RIDE WITH US TODAY</h3>
          <p>Discover new connections, save on costs, and travel in comfort.</p>
          <div className="btn">
            <button className="button">
              <a href="/commuter-sign-up">Join to ride</a>
            </button>
            <button className="button">
              <a href="driver-sign-up">Join to drive</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
