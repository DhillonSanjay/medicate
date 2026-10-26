import React from "react";
import "../Styles/About.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ftr from "../Assets/what-is-dentcare.png";

function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="aboutbg">
        <h2>About Us</h2>
      </div>

      <div className="about-section">
        <div className="about-image-content">
          <img src={ftr} alt="" className="about-image1" />
        </div>

        <div className="about-text-content">
          <h3 className="about-title">About Us</h3>
          <h4>We believe a healthy smile is a confident smile.</h4>
          <p>
            One of the first major discoveries relevant to the field of
            pulmonology was the discovery of pulmonary circulation. Originally,
            it was thought that blood reaching the right side of the heart
            passed through small ‘pores’ in the septum.
          </p>
          <br />
          <p>
            We streamline dental operations through seamless lab
            synchronization, ensuring faster turnaround and accurate results.
            This integration enhances efficiency and improves patient care at
            every step.
          </p>
        </div>
      </div>

      <div className="pq-counter">
        <div className="pq-style-2">
          <div className="pq-counter-contain">
            <h5>100K</h5>
            <p>Saves Hearts</p>
          </div>
        </div>

        <div className="pq-style-2">
          <div className="pq-counter-contain">
            <h5>125K</h5>
            <p>Expert Doctors</p>
          </div>
        </div>

        <div className="pq-style-2">
          <div className="pq-counter-contain">
            <h5>250K</h5>
            <p>saved tooth</p>
          </div>
        </div>

        <div className="pq-style-2">
          <div className="pq-counter-contain">
            <h5>554K</h5>
            <p>Happy Patients</p>
          </div>
        </div>
      </div>

      <div className="about-sbt">
        <h3>Let’s Know Short Story About Us</h3>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.
        </p>

        <a href="" className="callNow">Call Now</a>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
