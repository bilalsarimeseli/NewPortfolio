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
                <h3>University of Life</h3>
                <p className="info">
                  UC BERKELEY CODING BOOTCAMP<span>•</span>{" "}
                  <em className="date">2019</em>
                </p>
                <p>
                  I graduated from the Coding Bootcamp in UC Berkeley as a
                  FullStack Web Developer trained in technologies like HTML5,
                  CSS, JavaScript, JQuery, Node.Js, HandleBars, React.Js,
                  MongoDB, MySQL, Data Structures and Algorithms and Python
                </p>

                <p className="info">
                  Master of Education<span>•</span>{" "}
                  <em className="date">2012-2013</em>
                </p>
                <p>
                  I worked as the head of Physics Department in Bangladesh for
                  about 6 years and at the time, I have also completed a M.Ed
                  degree in a local private university (Uttara Unv.)
                </p>
                <p className="info">
                  B.Sc and M.Sc in Physics Education<span>•</span>{" "}
                  <em className="date">2002-2008</em>
                </p>
                <p>
                  I completed B.Sc and M.Sc in the School of Education (Teaching
                  Physics Department) and trained rigorously as a teacher in
                  Bosphorus University (Istanbul)
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
                  I worked in Uzbekistan for about two years as my first
                  professional experience abroad. It was a private international
                  school which catered educationl services to mostly to the kids
                  of expatriates living in Tashkent. It contributed a lot to my
                  skills of working in a diverse and multi-cultural setting.
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
                  IHSB was another international school that followed an
                  International UK curriculum. I took various professional
                  positions there ranging from a physics teacher, department
                  lead to administrative deputy head.
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
                    NEA Community Learning Center is public charter school
                    situated in Alameda, California. After earning my California
                    Teaching Credential, I got hired by NEA. I facilitated
                    classes in a diverse community, upholding the values of
                    equity, inclusion and diversity. I also taught elective
                    Computer Programming ( HTML, CSS, Python ) class as well as
                    facilating "Girls Who Code" Club with one of my senior
                    students.
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
            <div class="container">
              <div class="row">
                <div class="col-sm">
                  <img src="images/react.png" alt="react" />
                  <img src="images/html.png" alt="html" />
                  <img src="images/css.png" alt="css" />
                  <img src="images/js.png" alt="js" />
                </div>
                <div class="col-sm">
                  <img src="images/jquery.png" alt="jquery" />
                  <img src="images/heroku.png" alt="heroku" />
                  <img src="images/github.png" alt="github" />
                  <img src="images/python.png" alt="python" />

                  <img src="images/node.png" alt="nodejs" />
                </div>
                <div class="col-sm"></div>
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
