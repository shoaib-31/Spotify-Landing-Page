import "../styles/navbar.css";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faAngleDown} from "@fortawesome/free-solid-svg-icons";
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
          <div >|</div>
          <div className="items">
          <FontAwesomeIcon className="profile" icon={faCircleUser}/>
          &nbsp; Profile &nbsp; <FontAwesomeIcon icon={faAngleDown}/>
          </div>
        </div>
      </div>
    </>
  );
}
