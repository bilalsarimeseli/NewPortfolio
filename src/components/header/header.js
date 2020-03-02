import React, { Component } from "react";
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#" title="Hide navigation">
              Hide navigation
            </a>
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume">
                  Resume
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio">
                  Works
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#testimonials">
                  Testimonials
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">I'm Bilal Sarimeseli</h1>
              <h3>
                I'm a SF Bay Area based <span>Full-stack Web Developer</span>.{" "}
                Let's{" "}
                <a className="smoothscroll" href="#about">
                  start scrolling
                </a> and learn more {" "}
                <a className="smoothscroll" href="#about">
                  about me
                </a>
                .
              </h3>
              <hr />
              <ul className="social">
                <li>
                  <a href="https://www.facebook.com/profile.php?id=677027769">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/bilalsarimeseli">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/bilalsarimeseli">
                    <i className="fa fa-github" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/bilal-sarimeseli-61928348/">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/bilalsarimeseli/?hl=en">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle" />
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
