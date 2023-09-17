import "../footer/footer.css"

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-info">
          <h4>Go2Geda</h4>
          <p>
            "Go2Geda makes your daily commute hassle-free by connecting you with
            fellow commuters, helping you save on transportation costs, and
            providing a c omfortable ride-sharing experience."
          </p>
        </div>

        <div className="footer-info">
          <h4>EXPLORE</h4>
          <p>How to use</p>
          <p>News and events</p>
          <p>Privacy policy</p>
        </div>

        <div className="footer-info">
          <h4>Contact us</h4>
          <p>312, Herbert Macaulay, Yaba Lagos.</p>
          <p>contact@go2geda.com</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
