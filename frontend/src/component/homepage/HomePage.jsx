import image from "../homepage/assets/home.png";
import "../homepage/HomePage.css";
import { Icon } from "@iconify/react";
import userFriends from "@iconify/icons-fa-solid/user-friends";
import currencyNaira from '@iconify/icons-tabler/currency-naira';

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
            <Icon icon={userFriends} width="90" height="90" id="icon" />
            <p>
              Saying goodbye to expensive solo-ride and embracing <br />
              shared ride resulting in cheaper fare s per cheap{" "}
            </p>
          </div>
          <hr />
          <div className="info">
          <Icon icon={currencyNaira} width="90" height="90" id="icon1"/>
          <p>
            Enjoy you trip with minimum budget
          </p>
          </div>
          <hr />
          <div className="info">

          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
