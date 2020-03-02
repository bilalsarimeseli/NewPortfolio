import React, { Component } from "react";
export default class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio" title="true">
        <div className="row" title="true">
          <div className="twelve columns collapsed" title="true">
            <h1>Check Out Some of My Works</h1>
            {/* portfolio-wrapper */}
            <div
              title="true"
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              <div className="columns portfolio-item">
                <div className="item-wrap" title="true">
                  <a href="#modal-01" title = "true">
                    <img alt="" src="images/trainschedule.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Train Scheduler</h5>
                        <p>Firebase Project</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus" />
                    </div>
                  </a>
                </div>
              </div>{" "}
              {/* item end */}
              <div className="columns portfolio-item" title="true">
                <div className="item-wrap" title="true">
                  <a href="#modal-02" title="true">
                    <img alt="" src="images/wordguess.jpeg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Word Guess Game</h5>
                        <p>Vanilla JavaScript</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus" />
                    </div>
                  </a>
                </div>
              </div>{" "}
              {/* item end */}
              <div className="columns portfolio-item" title="true">
                <div className="item-wrap" title="true">
                  <a href="#modal-03" title="true">
                    <img alt="" src="images/crystal.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Crystal-Collector Game</h5>
                        <p>JavaScript Works</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus" />
                    </div>
                  </a>
                </div>
              </div>{" "}
              {/* item end */}
              <div className="columns portfolio-item" title="true">
                <div className="item-wrap" title="true">
                  <a href="#modal-04" title="true">
                    <img alt="" src="images/gifs.jpeg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Giftastic</h5>
                        <p>Ajax Calls</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus" />
                    </div>
                  </a>
                </div>
              </div>{" "}
              {/* item end */}
              <div className="columns portfolio-item" title="true">
                <div className="item-wrap" title="true">
                  <a href="#modal-05" title="true">
                    <img alt="" src="images/goldengate.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Project ShowMeAround</h5>
                        <p>Team Work</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus" />
                    </div>
                  </a>
                </div>
              </div>{" "}
              {/* item end */}
              <div className="columns portfolio-item" title="true">
                <div className="item-wrap" title="true">
                  <a href="#modal-06" title="true">
                    <img alt="" src="images/friend.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Friend Finder</h5>
                        <p>Node.Js</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus" />
                    </div>
                  </a>
                </div>
              </div>{" "}
              {/* item end */}
              <div className="columns portfolio-item" title="true">
                <div className="item-wrap" title="true">
                  <a href="#modal-07" title="true">
                    <img alt="" src="images/clickyninja.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Clicky-Game</h5>
                        <p>React</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus" />
                    </div>
                  </a>
                </div>
              </div>{" "}
              {/* item end */}
              <div className="columns portfolio-item" title="true">
                <div className="item-wrap" title="true">
                  <a href="#modal-08" title="true">
                    <img alt="" src="images/recipe.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Recipe App</h5>
                        <p>React</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus" />
                    </div>
                  </a>
                </div>
              </div>{" "}
              {/* item end */}
            </div>{" "}
            {/* portfolio-wrapper end */}
          </div>{" "}
          {/* twelve columns end */}
          {/* Modal Popup
              --------------------------------------------------------------- */}
          <div id="modal-01" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              src="images/portfolio/modals/train2.jpg"
              alt=""
            />
            <div className="description-box">
              <h4>Train Scheduler</h4>
              <p>
                A train schedule application that incorporates Firebase to host
                arrival and departure data.
              </p>
              <span className="categories">
                <i className="fa fa-tag" />
                JavaScript, Firebase
              </span>
            </div>
            <div className="link-box">
              <a href="https://bilalsarimeseli.github.io/Train-Schedule-Firebase/">
                Application
              </a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* modal-01 End */}
          <div id="modal-02" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              src="images/portfolio/modals/words.jpeg"
              alt=""
            />
            <div className="description-box">
              <h4>Word Guess</h4>
              <p>Simple Word guessing game using JavaScript, HTML and CSS.</p>
              <span className="categories">
                <i className="fa fa-tag" />
                JavaScript, Web Development
              </span>
            </div>
            <div className="link-box">
              <a href="https://bilalsarimeseli.github.io/Word-Guess-Game/">
                Application
              </a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* modal-02 End */}
          <div id="modal-03" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              src="images/portfolio/modals/crsytals.jpg"
              alt=""
            />
            <div className="description-box">
              <h4>Crystal Collector</h4>
              <p>
                Every Crystal is assigned a random number and you have got to
                find the targeted number. A simple game created in the hands
                JavaScript
              </p>
              <span className="categories">
                <i className="fa fa-tag" />
                JavaScript Randomizes
              </span>
            </div>
            <div className="link-box">
              <a href=" https://bilalsarimeseli.github.io/Crystals-Collector-Game/">
                Application
              </a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* modal-03 End */}
          <div id="modal-04" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              src="images/portfolio/modals/giftas.gif"
              alt=""
            />
            <div className="description-box">
              <h4>Gifify yourself</h4>
              <p>
                Choose a topic and hit the submit button. The app will be
                pleased to fetch gifs about it.
              </p>
              <span className="categories">
                <i className="fa fa-tag" />
                GIF`s in API calls
              </span>
            </div>
            <div className="link-box">
              <a href="https://bilalsarimeseli.github.io/giftastic/">
                Application
              </a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* modal-04 End */}
          <div id="modal-05" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              src="images/portfolio/modals/showme.jpg"
              alt=""
            />
            <div className="description-box">
              <h4>Show me Around</h4>
              <p>
                Get some information about the city you want to visit How is the
                weather like? Splash some images on your face with unsplash API
              </p>
              <span className="categories">
                <i className="fa fa-tag" />A teamwork product
              </span>
            </div>
            <div className="link-box">
              <a href="https://bilalsarimeseli.github.io/ShowMeAroundProject/">
                Application
              </a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* modal-05 End */}
          <div id="modal-06" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              src="images/portfolio/modals/friend.jpg"
              alt=""
            />
            <div className="description-box">
              <h4>Find your match</h4>
              <p>Fill in the survey to find your match.</p>
              <span className="categories">
                <i className="fa fa-tag" />
                Find your mate
              </span>
            </div>
            <div className="link-box">
              <a href="https://find-your-friend-match.herokuapp.com/">
                Application
              </a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* modal-06 End */}
          <div id="modal-07" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              src="images/portfolio/modals/ninja.jpg"
              alt=""
            />
            <div className="description-box">
              <h4>Clicky Ninja</h4>
              <p>
                Challenge your memory with the soft clicks on TMNT characters
              </p>
              <span className="categories">
                <i className="fa fa-tag" />
                Clicky Memory Challenge
              </span>
            </div>
            <div className="link-box">
              <a href="https://bilalsarimeseli.github.io/clicky_memory_game_react/">
                Application
              </a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* modal-07 End */}
          <div id="modal-08" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              src="images/portfolio/modals/recipes.jpg"
              alt=""
            />
            <div className="description-box">
              <h4>Simple Recipe App</h4>
              <p>
                Get 10 different recipes about an ingredient you wish. Just type
                its name and hit the button, let the taste come to you.
              </p>
              <span className="categories">
                <i className="fa fa-tag" />
                What React brings to your table
              </span>
            </div>
            <div className="link-box">
              <a href="https://bilalsarimeseli.github.io/MyRecipeApp/">
                Application
              </a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* modal-01 End */}
        </div>{" "}
        {/* row End */}
      </section>
    );
  }
}
