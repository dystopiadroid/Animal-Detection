import React from "react";
import Classify from "./Classify";
import Detect from "./Detect";
import react from "./logoicons/react.png";
import tf from "./logoicons/tf.png";
import keras from "./logoicons/keras.png";

const Landing = () => {
  return (
    <>
    <div className="App">
      <div id="overlayer"></div>

      <div className="site-wrap">
        <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle"></span>
            </div>
          </div>
          <div className="site-mobile-menu-body"></div>
        </div>

        <div className="site-section" id="glance-section" data-aos="fade">
          <div
            className="site-section bg-dark"
            id="demo-section"
            data-aos="fade"
          >
            <div className="heading-container">
                  <h2 className="section-title">Animal Detection </h2>
            </div>
            <div style={{ marginTop: "10px", marginBottom: "100px" }}>
              <Classify />
            </div>
            <div style={{ marginTop: "100px", marginBottom: "50px" }}>
              <Detect />
            </div>
          </div>
          <div style={{ marginTop: "100px" }} className="container">
            <div className="row" 
                >
              <div
                style={{ textAlign: "center" }}
                className="col-lg-4 col-md-6 col-sm-12 mb-5"
              >
                <img
                  style={{ display: "inline-block" }}
                  src={react}
                  width="250"
                  height="250"
                  alt="react"
                />
              </div>
              <div
                style={{ textAlign: "center" }}
                className="col-lg-4 col-md-6 col-sm-12 mb-5"
              >
                <img
                  style={{ display: "inline-block" }}
                  src={tf}
                  width="250"
                  height="250"
                  alt="tf"
                />
              </div>
              <div
                style={{ textAlign: "center", color: "black" }}
                className="col-lg-4 col-md-6 col-sm-12 mb-5"
              >
                <img
                  style={{ display: "inline-block" }}
                  src={keras}
                  width="200"
                  height="200"
                  alt="keras"
                />
                <h1>Keras</h1>
              </div>
              <div
                style={{ textAlign: "center", color: "black" }}
                className="col-lg-3 col-md-6 col-sm-12 mb-5"
              >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Landing;
