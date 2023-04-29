import "../styles/accordian.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

export default function Accordian() {
  const [isActive, setIsActive] = useState(false);
  const [is2Active, setIs2Active] = useState(false);
  const [is3Active, setIs3Active] = useState(false);
  const [is4Active, setIs4Active] = useState(false);
  return (
    <>
      <div className="accordian">
        <div className="accordian_menu">
          <div className="accordian_text">Got questions?</div>
          <div className="accordian_box">
            <div
              className="accordian_title"
              onClick={() => setIsActive(!isActive)}
            >
              How do I create a playlist?
              <span>
                {isActive ? (
                  <FontAwesomeIcon
                    icon={faAngleUp}
                    style={{ color: "#000000", fontSize: "0.8rem" }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    style={{ color: "#000000", fontSize: "0.8rem" }}
                  />
                )}
              </span>
            </div>
            {isActive && (
              <div className="accordian_content">
                <p>
                  Playlists are a great way to save collections of music, either
                  for your own listening or to share.
                </p>
                <div className="steps">
                  <div>1. Tap Your Library.</div>
                  <div>
                    2. Tap <span className="green">CREATE.</span>
                  </div>
                  <div>3. Give your playlist a name.</div>
                  <div>4. Start adding songs (and we'll help you along).</div>
                </div>
              </div>
            )}
          </div>
          <div className="accordian_box">
            <div
              className="accordian_title"
              onClick={() => setIs2Active(!is2Active)}
            >
              How do I activate Data Saver mode?
              <span>
                {is2Active ? (
                  <FontAwesomeIcon
                    icon={faAngleUp}
                    style={{ color: "#000000", fontSize: "0.8rem" }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    style={{ color: "#000000", fontSize: "0.8rem" }}
                  />
                )}
              </span>
            </div>
            {is2Active && (
              <div className="accordian_content">
                <div className="steps">
                  <div>
                    1. Tap <span className="green">Home.</span>
                  </div>
                  <div>
                    2. Tap <span className="green">Settings.</span>
                  </div>
                  <div>
                    3. Tap <span className="green">Data Saver.</span>
                  </div>
                  <div>4. Switch on Data Saver.</div>
                </div>
              </div>
            )}
          </div>
          <div className="accordian_box">
            <div
              className="accordian_title"
              onClick={() => setIs3Active(!is3Active)}
            >
              Is it only possible to shuffle play music?
              <span>
                {is3Active ? (
                  <FontAwesomeIcon
                    icon={faAngleUp}
                    style={{ color: "#000000", fontSize: "0.8rem" }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    style={{ color: "#000000", fontSize: "0.8rem" }}
                  />
                )}
              </span>
            </div>
            {is3Active && (
              <div className="accordian_content">
                <p>Any playlist with the shuffle icon will play on shuffle.</p>
                <p>Some playlists won't have the shuffle icon, so you can tap any song to play it.</p>
                
              </div>
            )}
          </div>
          <div className="accordian_box">
            <div
              className="accordian_title"
              onClick={() => setIs4Active(!is4Active)}
            >
              Where can I find Podcasts?
              <span>
                {is4Active ? (
                  <FontAwesomeIcon
                    icon={faAngleUp}
                    style={{ color: "#000000", fontSize: "0.8rem" }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    style={{ color: "#000000", fontSize: "0.8rem" }}
                  />
                )}
              </span>
            </div>
            {is4Active && (
              <div className="accordian_content">
                <p>
                Tap <span className="green">Search</span>. Under <span className="green">Browse All</span>, tap Podcasts.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
