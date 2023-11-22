import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ handleCMSSessionClick }) => {
  const buttonStyle = {
    color: "white",
    textDecoration: "none",
    width: "100px",
    textAlign: "center"
  };

  return (
    <div style={{ backgroundColor: "#333", padding: "15px", height: "100%" }}>
      <h1 style={{ color: "white" }}>SETTINGS</h1>
      <br />
      <Link to="" style={buttonStyle}>
        <div
          className="btn btn-danger my-2"
          onClick={() => handleCMSSessionClick()}
          style={{ width: "200px" }}
        >
          CMS SESSION
        </div>
      </Link>

      <Link to="" style={buttonStyle}>
        <div className="btn btn-danger my-2" style={{ width: "200px" }}>
          IP SETTING
        </div>
      </Link>

      <Link to="" style={buttonStyle}>
        <div className="btn btn-danger my-2" style={{ width: "200px" }}>
          EMAIL TEMPLATE
        </div>
      </Link>

      <Link to="" style={buttonStyle}>
        <div className="btn btn-danger my-2" style={{ width: "200px" }}>
          SITE SETTING
        </div>
      </Link>

      <Link to="" style={buttonStyle}>
        <div className="btn btn-danger my-2" style={{ width: "200px" }}>
          SUPPORT TICKET
        </div>
      </Link>

      <Link to="" style={buttonStyle}>
        <div className="btn btn-danger my-2" style={{ width: "200px" }}>
          LOGIN HISTORY
        </div>
      </Link>
    </div>
  );
};

const Home = () => {
  const [showCMSSessionButtons, setShowCMSSessionButtons] = useState(false);

  const handleCMSSessionClick = () => {
    setShowCMSSessionButtons(!showCMSSessionButtons);
  };

  return (
    <div className="d-flex">
      <div
        style={{
          width: "250px",
          height: "100vh"
        }}
      >
        <Sidebar handleCMSSessionClick={handleCMSSessionClick} />
      </div>
      <div
        style={{
          backgroundImage:
            "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))",
          flex: 1,
          padding: "20px"
        }}
      >
        <h1>ADMIN DASHBOARD</h1>
        <Link to="/login" className="btn btn-dark my-5">
          Logout
        </Link>

        {showCMSSessionButtons && (
          <div>
            {/* Render the three buttons related to CMS SESSION */}
            <Link
              to="/about"
              style={{ color: "white", textDecoration: "none" }}
            >
              <div className="btn btn-light my-2" style={{ width: "100px" }}>
                About
              </div>
            </Link>
            <br />
            <Link
              to="/terms"
              style={{ color: "white", textDecoration: "none" }}
            >
              <div className="btn btn-light my-2" style={{ width: "100px" }}>
                Terms
              </div>
            </Link>
            <br />
            <Link
              to="/privacy"
              style={{ color: "white", textDecoration: "none" }}
            >
              <div className="btn btn-light my-2" style={{ width: "100px" }}>
                Privacy
              </div>
            </Link>
          </div>
        )}
      </div>
     
    </div>
  );
};

export default Home;
