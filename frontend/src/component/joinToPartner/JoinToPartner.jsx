import { useState } from "react";
import investor from "../asset/black_investor.png"
import "../joinToPartner/JoinToPartner.css"

const JoinToPartner = () => {
    const loginData = {
        emailAddress: "",
    }
    const [data, setData] = useState(loginData);
    const collectLoginData = async (event) => {
        event.preventDefault();

        setData((state) => ({
            ...state,
            [event.target.name]: event.target.value,
        }));

    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const JoinToPartnerData = {
            emailAddress: data.emailAddress,
        }
        console.log(JoinToPartnerData)
    }

    return (
        <div className="joinPart-box">
            <div className="join-fields">
                <div className="textPage">
                    <h1>Join The Go2Geda Partner Program</h1>
                    <h4 className="sub">Invest in the Future of Transportation with Go2Geda!</h4>
                    <p>Are you ready to be part of a revolutionary change in the transportation industry?
                        Go2Geda is opening its doors to visionary investor like you.
                    </p>
                    <h4 className="sub">Why invest in Go2Geda</h4>
                    <p> Market Leader: Join a dynamic company at the forefront of the ride-sharing revolution.
                        Proven Growth: Our user base is rapidly expanding, and our revenue is soaring. <br />
                        Sustainable Mobility: Invest in a greener future by supporting eco-friendly transportation solutions. <br />
                        Cutting-Edge Tech: Go2Geda's state-of-the-art technology ensures seamless user experiences.</p>
                    <h4 className="sub"> Your Investment Powers Progress</h4>
                    <p>Investing in Go2Geda isn't just about financial returns; it's about shaping the future of
                        transportation and making a positive impact on the planet. Together, we can create
                        sustainable, convenient, and accessible mobility solutions for all.</p>
                        <form className="joinUs-form" onSubmit={handleSubmit}>
                    <input type="email" name="emailAddress" placeholder="EmailAddress" onChange={collectLoginData} />
                    <button className="submitBtn" onClick={handleSubmit}>Join Us</button>
                </form>
                <p className="DivP">Join us: on this exciting journey and help steer the transportation industry into a new era.
                        Contact us at invest@go2geda.com to explore investment opportunities today!</p>
                    
                </div>
              </div>
            <div className="invest">
                <img src={investor} alt="" />
            </div>
        </div>
    )
}
export default JoinToPartner