import illustration from "../homepage/assets/g2g.png";
import "../homepage/HomePage.css";
import naira from "../homepage/assets/naira.png";
import group from "../homepage/assets/friends.png";
import partner from "../homepage/assets/partnership.png";
import anime from "../homepage/assets/anime.json";
import Lottie from "lottie-react";
import NavBar from "./Navbar";
import Footer from "../footer/footer";

const HomePage = () => {
  return (
    <>
    <NavBar/>
      <div className="homepage-container">
        <div className="homepage-first-step">
          <div className="homepage-first-step-text">
            <h3>
              Welcome to <span style={{ color: "rgb(50, 50, 251)" }}>Go2Geda</span>
            </h3>
            <p>Transportation made easy.</p>
            <p id="homepage-first-step-ensure">
              Ensuring comfortable and affordable transportation
            </p>
          </div>
          <Lottie className="homepage-first-step-anime-container" animationData={anime}></Lottie>
        </div>

        <div className="homepage-second-step">
          <h3>What makes us unique?</h3>
          <p>
            Go2Geda is an innovative mobility solution that empowers users to
            efficiently book transportation and share costs
            <br /> with others who share similar travel patterns. It not only
            optimizes transportation logistics but also fosters social <br />
            network connectivity, enhancing the overall commuting experience.
          </p>
        </div>

        <div className="homepage-third-step">
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

        <div className="homepage-fourth-step">
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
      <Footer />
    </>
  );
};

export default HomePage;
