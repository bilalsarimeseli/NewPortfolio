import React, { Component } from "react";
export default class Resume extends Component {
  render() {
    return (
      <section id="resume">
        {/* Education
      ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <p className="info">
                  UC BERKELEY CODING BOOTCAMP<span>•</span>{" "}
                  <em className="date">2019</em>
                </p>
                <p>
                  Graduated from the Coding Bootcamp in UC Berkeley as a Full
                  Stack Web Developer trained in technologies including HTML5,
                  CSS, JavaScript, JQuery, Node.Js, HandleBars, React.Js,
                  MySQL/Sequelize, MongoDB, MERN Stack, Data Structures,
                  Algorithms and Python3
                </p>

                <p className="info">
                  Master of Education<span>•</span>{" "}
                  <em className="date">2012-2013</em>
                </p>
                <p>
                  Earned a Master of Education degree in a local private when
                  working as a physics teacher (Uttara University , BANGLADESH)
                </p>
                <p className="info">
                  B.Sc and M.Sc in Physics Education<span>•</span>{" "}
                  <em className="date">2002-2008</em>
                </p>
                <p>
                  Completed B.Sc and M.Sc program in the School of Education
                  (Teaching Physics Department) and trained rigorously as a
                  teacher Bosphorus University (TURKEY)
                </p>
              </div>
            </div>{" "}
          </div>{" "}
          {/* main-col end */}
        </div>{" "}
        {/* End Education */}
        {/* Work
      ----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>TASHKENT ULUGBEK INTERNATIONAL SCHOOL</h3>
                <p className="info">
                  Physics Teacher <span>•</span>{" "}
                  <em className="date">August 2009 - January 2011</em>
                </p>
                <p>
                  I worked as a physics teacher in Uzbekistan in a private
                  international school which catered educational services to
                  mostly students of expatriates living in Tashkent which was an
                  amazing experience in gaining skills of working in a diverse
                  and multi-cultural setting.
                </p>
              </div>
            </div>{" "}
            {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>INTERNATIONAL HOPE SCHOOL BANGLADESH</h3>
                <p className="info">
                  Head of Physics Department<span>•</span>{" "}
                  <em className="date">March 2010 - January 2017</em>
                </p>
                <p>
                  I took various professional positions in IHSB ranging from a
                  physics teacher, department lead to administrative deputy
                  head.
                </p>
              </div>
              <div className="row item">
                <div className="twelve columns">
                  <h3>NEA COMMUNITY LEARNING CENTER</h3>

                  <p className="info">
                    Physics and Geometry Teacher<span>•</span>{" "}
                    <em className="date">February 2017 - December 2019</em>
                  </p>
                  <p>
                    Besides teachng physics and geometry, I taught elective
                    Computer Programming ( HTML, CSS, Python ) besides
                    facilitating "Girls Who Code" Club with one of my senior
                    students
                  </p>
                </div>
              </div>

              <div className="row item">
                <div className="twelve columns">
                  <h3>SUMMIT PUBLIC SCHOOLS TAHOMA</h3>

                  <p className="info">
                    Physics Teacher<span>•</span>{" "}
                    <em className="date">February 2020 - Present </em>
                  </p>
                  <p>
                    Facilitating project-based physics classes and mentoring
                    students.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* item end */}
          </div>{" "}
          {/* main-col end */}
        </div>{" "}
        {/* End Work */}
        {/* Skills
      ----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <p>
              The technologies I have "befriended" throughout my journey in
              creating this portfolio and coding at large.
            </p>
            <div className="container">
              <div className="row">
                <div className="col-sm">
                  <img src="images/react.png" alt="react" />
                  <img src="images/html.png" alt="html" />
                  <img src="images/css.png" alt="css" />
                  <img src="images/js.png" alt="js" />
                </div>
                <div className="col-sm">
                  <img src="images/jquery.png" alt="jquery" />
                  <img src="images/heroku.png" alt="heroku" />
                  <img src="images/github.png" alt="github" />
                  <img src="images/python.png" alt="python" />

                  <img src="images/node.png" alt="nodejs" />
                </div>
                <div className="col-sm"></div>
              </div>
            </div>
          </div>{" "}
          {/* main-col end */}
        </div>{" "}
        {/* End skills */}
      </section>
    );
  }
}
