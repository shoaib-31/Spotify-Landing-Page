import "../styles/memo.css";
import phone from "../images/phone.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import MediaQuery from "react-responsive";

export default function memo() {
  return (
    <div className="memo">
      <div className="memo_main">
        <MediaQuery minWidth={991}>
          <div className="memo_phone">
            <div className="phone">
              <span className="mic">
                <FontAwesomeIcon icon={faMinus} style={{ color: "#000000" }} />
              </span>
              <img src={phone} className="screen" alt="phone" />
            </div>
          </div>
        </MediaQuery>

        <div className="memo_content">
          <div className="content-text">
            Play millions of songs and podcasts, for free.
            <button className="get-spotify">GET SPOTIFY FREE</button>
          </div>
        </div>
      </div>
    </div>
  );
}
