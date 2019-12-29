import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/bilalprofile.JPG" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
              I am Bilal, and I live in San Jose, California with my wife Zehra and two sons. I worked as a physics teacher
              more than 10 years and pursuing my passion, I enrolled to UC Berkeley
              Coding Bootcamp. I was trained in Web Development using HTML, CSS, JSS, React.Js, Node.Js
              MongoDB, mySQL, Python and Algorithms. I enjoy reading, coding, singing, playing recorder, learning new lanugages
              and improving myself in Software Development. I can speak 5 languages. 
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Bilal Sarimeseli</span>
                  <br />
                  <span>
                    457 Buena Vista Av.
                    <br />
                    Alameda, CA 94501 US
                  </span>
                  <br />
                  <span>(669)265-4820</span>
                  <br />
                  <span>bilalsarimeseli@gmail.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="#" className="button">
                    <i className="fa fa-download" />
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
