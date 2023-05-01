import "../styles/whys.css";
import play from "../images/logo_play.png";
import playlist from "../images/logo_playlist.png";
import like from "../images/logo_like.png";
import data from "../images/logo_data.png";
import MediaQuery from "react-responsive";

export default function Whys() {
  return (
    <>
      <div className="whys_main">
        <div className="whys_card">
          Why Spotify?
          <MediaQuery minWidth={991}>
            <div className="whys_icons">
              <div className="icon_box">
                <img className="icon" src={play} alt="play" />
                <div className="icon_bold">Play Your Favorites.</div>
                <div className="icon_small">
                  Listen to the songs you love, and discover new music and
                  podcasts.
                </div>
              </div>
              <div className="icon_box">
                <img className="icon" src={playlist} alt="playlist" />
                <div className="icon_bold">Playlists made easy.</div>
                <div className="icon_small">
                  We'll help you make playlists. Or enjoy playlists made by
                  music experts.
                </div>
              </div>
              <div className="icon_box">
                <img className="icon" src={like} alt="like" />
                <div className="icon_bold">Make it yours.</div>
                <div className="icon_small">
                  Tell us what you like, and we'll recommend music for you.
                </div>
              </div>
              <div className="icon_box">
                <img className="icon" src={data} alt="data_saver" />
                <div className="icon_bold">Save mobile data.</div>
                <div className="icon_small">
                  To use less data when you play music, turn on Data Saver in
                  Settings.
                </div>
              </div>
            </div>
          </MediaQuery>
          <MediaQuery maxWidth={991}>
            <div className="whys_icons">
              <div className="icon_sub-box">
                <img className="icon" src={play} alt="play" />
                <div className="icon_text">
                <div className="icon_bold">Play Your Favorites.</div>
                <div className="icon_small">
                  Listen to the songs you love, and discover new music and
                  podcasts.
                </div>
                </div>
              </div>
              <div className="icon_sub-box">
              <img className="icon" src={playlist} alt="playlist" />
                <div className="icon_text">
                  <div className="icon_bold">Playlists made easy.</div>
                  <div className="icon_small">
                    We'll help you make playlists. Or enjoy playlists made by
                    music experts.
                  </div>
                </div>
              </div>
            </div>
            <div className="whys_icons">
              <div className="icon_sub-box">
              <img className="icon" src={like} alt="like" />
                <div className="icon_text">
                <div className="icon_bold">Make it yours.</div>
                <div className="icon_small">
                  Tell us what you like, and we'll recommend music for you.
                </div>
                </div>
              </div>
              <div className="icon_sub-box">
              <img className="icon" src={data} alt="data_saver" />
                <div className="icon_text">
                <div className="icon_bold">Save mobile data.</div>
                <div className="icon_small">
                  To use less data when you play music, turn on Data Saver in
                  Settings.
                </div>
                </div>
              </div>
            </div>
          </MediaQuery>
        </div>
      </div>
    </>
  );
}
