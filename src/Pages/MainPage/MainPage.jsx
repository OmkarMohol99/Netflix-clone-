import React, { useState, useEffect } from "react";
import "./Main.css";
import MainImage from "../../Images/Main.jpg";
// import video from "../../Images/video.png";
import { Button } from "antd";
import playStore from "../../Images/playStore.png";
import appStore from "../../Images/appStore.png";
import Loader from "../../Components/Loader/Loader";
import tvGif from "../../Images/tvGif.gif";
import mobGif from "../../Images/mobileGif.gif";

const MainPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="container">
          <img className="main-image" src={MainImage} alt="MainImage" />
          <div>
            <Loader />
          </div>
        </div>
      ) : (
        <>
          <div className="container">
            <img className="main-image" src={MainImage} alt="MainImage" />
            <div className="app-name-container">
              {/* <img className="video-image" src={video} alt="popcorn" /> */}
              <h1>Omkar.</h1>
            </div>
            <div className="main-data">
              <text>Unlimited movies, TV shows and more</text>
              <h2>Watch anywhere. Enjoy anytime.</h2>
              <p>Ready to watch? Create your account or Sign in.</p>
              <div className="button-container">
                <Button className="signup-button">Sign up</Button>
                <Button className="login-button">Log in</Button>
              </div>
              <div className="app-store-container">
                <text>Download the App</text>
                <div className="store-container">
                  <img
                    height={60}
                    className="store-image"
                    src={playStore}
                    alt="playStore"
                  />
                  <img
                    height={60}
                    className="store-image"
                    src={appStore}
                    alt="appStore"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="enjoy-tv">
            <div className="tv-desc">
              <text>Enjoy on your TV</text>
              <h3>Watch on smart TVs, PlayStation, Xbox,</h3>
              <h3>Chromecast, Apple TV, Blu-ray players and</h3>
              <h3>more.</h3>
            </div>
            <div className="tv-gif-container">
              <img src={tvGif} alt="tv-show" />
            </div>
          </div>
          <div className="enjoy-mobile">
            <div className="mobile-gif-container">
              <img src={mobGif} alt="mobile-show" />
            </div>
            <div className="mobile-desc">
              <text>Download your shows to watch offline</text>
              <h3>Save your favourites easily and always have </h3>
              <h3>something to watch.</h3>
            </div>
          </div>
          <div className="enjoy-everywhere">
            <div className="everywhere-gif-container">
              <img src={tvGif} alt="everywhere-show" />
            </div>
            <div className="everywhere-desc">
              <text>Watch everywhere</text>
              <h3>Stream unlimited movies and TV shows on</h3>
              <h3>your phone, tablet, laptop, and TV.</h3>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MainPage;
