import React, { Component } from "react";
export default class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src="images/bilalprofile.JPG"
              alt="profilephoto"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
              Driven Full Stack Web Developer, trained and certified by UC
              Berkeley’s Web Development Bootcamp. Proud to be passionate
              physics teacher, lifelong learner , enthusiastic about
              programming, self-taught through various online courses.
              Successfully took part and practiced effective teamwork in three
              web development projects providing training and creation of a
              portfolio of games and web applications. Initiated a computer
              programming class for middle schools as well as facilitated a
              “Girls Who Code” club. Excited to leverage and hone skills in a
              collaborative team environment, seeking perpetual learning,
              improvement, and sharing.
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Bilal Sarimeseli</span>
                  <br />
                  <span>San Jose, CA</span>
                  <br />
                  <span>(669)265-4820</span>
                  <br />
                  <span>bilalsarimeseli@gmail.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a
                    href="https://drive.google.com/file/d/14Zi2Dk-u8Akzs3BB4gvFq9Fs0XcSMjMD/view?usp=sharing"
                    target="_blank"
                    download="resumebilal.jpg"
                    className="button"
                  >
                    <i className="fa " />
                    Download Resume
                  </a>
                </p>
              </div>
            </div>{" "}
            {/* end row */}
          </div>{" "}
          {/* end .main-col */}
        </div>
      </section>
    );
  }
}
