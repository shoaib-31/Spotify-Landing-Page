import React from "react";
import "../styles/footer.css";
import footer_logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAsia } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer_content">
          <div className="footer_logo">
            <img src={footer_logo} className="flogo" alt="logo" />
          </div>
          <div className="footer_main">
            <div className="footer_sub">
              <div className="sub_head">COMPANY</div>
              <div className="sub_head_items">About</div>
              <div className="sub_head_items">Jobs</div>
              <div className="sub_head_items">For the Records</div>
            </div>
            <div className="footer_sub">
              <div className="sub_head">COMMUNITIES</div>
              <div className="sub_head_items">For Artists</div>
              <div className="sub_head_items">Developers</div>
              <div className="sub_head_items">Advertising</div>
              <div className="sub_head_items">Investors</div>
              <div className="sub_head_items">Vendors</div>
              <div className="sub_head_items">Spotify for Work</div>
            </div>
            <div className="footer_sub">
              <div className="sub_head">USEFUL LINKS</div>
              <div className="sub_head_items">Support</div>
              <div className="sub_head_items">Web Player</div>
              <div className="sub_head_items">Free Mobile App</div>
            </div>
          </div>
          <div className="footer_handles">
            <div className="social">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="social">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className="social">
              <FontAwesomeIcon icon={faFacebook} />
            </div>
          </div>
          <div className="footer_language">
            <FontAwesomeIcon icon={faEarthAsia} style={{ color: "#cccccc" }} />
            &nbsp; <div className="hg">India (English)</div>
          </div>
          <div className="footer_info">
            <div className="f-info_left">
              <div className="hg">Legal</div>
              <div className="hg">Privacy Center</div>
              <div className="hg">Privacy Policy</div>
              <div className="hg">Cookies</div>
              <div className="hg">About Ads</div>
            </div>
            <div className="f-info_right">&copy; 2023 Spotify AB</div>
          </div>
        </div>
      </div>
    </>
  );
}
