import React, { Component } from "react";
export default class Testimonials extends Component {
  render() {
    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1>
                <span>Client Testimonials</span>
              </h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  <li>
                    <blockquote>
                      <p>
                        I had the pleasure of working with Bilal on several
                        projects at Berkeley coding boot camp. Bilal’s ability
                        to handle multiple projects was impressive and he made a
                        dramatic increase in the productivity level of our team.
                        By training Bilal is a physicist, he is very much
                        enthusiastic about solving problem, be it a math problem
                        or writing algorithm for responsive website. Bilal is
                        also a multilingual person. He speaks very fluently in
                        English, French, Bangla and of course in Turkish. As a
                        team member or a leader, Bilal earns my highest
                        recommendation.
                      </p>
                      <cite>
                        Dr.Nazim Uddin, Materials Scientist, Coatings and
                        Adhesives Researcher, and Full-Stack web developer
                      </cite>
                    </blockquote>
                  </li>{" "}
                  {/* slide ends */}
                  <li>
                    <blockquote>
                      <p>
                        Coding is so widespread a concept that prevails the
                        entire universe. From the genes of the smallest beings
                        to the mathematical embroidery of the gigantic celestial
                        bodies. Even the slightest typo in the fabric of
                        configuration thereof, would mean a nasty error leading
                        to non-existence. I believe coding is a natural mimicry
                        of creation.
                      </p>
                      <cite>
                        Bilal Sarimeseli, Full Stack Web Developer, Physics
                        Teacher
                      </cite>
                    </blockquote>
                  </li>{" "}
                  {/* slide ends */}
                  <li>
                    <blockquote>
                      <p>
                        I had the great opportunity to work with Bilal on two
                        different projects at the UC Berkeley Coding BootCamp.
                        We developed several working Apps using the MERN stack
                        and other programs that helped us build upon our
                        existing skills. I would be more than happy to have the
                        chance to work with him again. Thank you Bilal for your
                        sympathy and your hard work!
                      </p>
                      <cite>
                        Angel Cochachez, Full Stack Web Developer at Code with
                        Corgis
                      </cite>
                    </blockquote>
                  </li>{" "}
                  {/* slide ends */}
                  {/* slide ends */}
                  <li>
                    <blockquote>
                      <p>
                        Working alongside Bilal was not only a pleasure but a
                        great learning experience. His background in teaching
                        allowed us to effectively communicate with one another
                        while keeping a light-hearted atmosphere. Bilal is a
                        team player and his enthusiasm to continue to learn as a
                        developer is motivating. I wish him all the best moving
                        forward.
                      </p>
                      <cite>
                        Frederick Saba, Front-End Developer at Universal Tennis
                      </cite>
                    </blockquote>
                  </li>{" "}
                  {/* slide ends */}
                </ul>
              </div>{" "}
              {/* div.flexslider ends */}
            </div>{" "}
            {/* div.flex-container ends */}
          </div>{" "}
          {/* row ends */}
        </div>{" "}
        {/* text-container ends */}
      </section>
    );
  }
}
