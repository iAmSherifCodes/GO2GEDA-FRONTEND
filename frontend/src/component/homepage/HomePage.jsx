import illustration from "../homepage/assets/g2g.png";
import "../homepage/HomePage.css";
import naira from "../homepage/assets/naira.png";
import group from "../homepage/assets/friends.png";
import partner from "../homepage/assets/partnership.png";
// import Paper from '@mui/material/Paper';

const HomePage = () => {
  return (
    <>
      <div className="container">
        <div className="first-step">
          {/* <div className="text-container">

          </div> */}
          <div className="illustration">
            {/* <h3>GO2GEDA</h3> */}
            <img src={illustration} alt="Riders" />
          </div>
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
              <a href="join-to-ride">Join to ride</a>
            </button>
            <button className="button">
              <a href="join-to-ride">Join to drive</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
