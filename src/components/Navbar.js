import "../styles/navbar.css";
import logo from "../images/logo.png";
import profile from "../images/profile.png";
export default function Navbar() {
  return (
    <>
      <div className="main">
        <div className="left">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="right">
          <div className="items">Premium</div>
          <div className="items">Support</div>
          <div className="items">Download</div>
          <div className="items">|</div>
          <div className="items">
            <img className="profile" src={profile} alt="User" />
          </div>
          <div className="items" id="profile">
            Profile
          </div>
        </div>
      </div>
    </>
  );
}
