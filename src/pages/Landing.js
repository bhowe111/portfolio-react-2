import React from "react";

export default function Landing() {
  return (
    <div className="top-container">
      {/* Background Image */}
      <div className="background-image parallax bg1">
        <div className="greeting-wrapper">
          <div className="deconstructed">
            <div>BRENDAN HOWE</div>
            <div>BRENDAN HOWE</div>
            <div>BRENDAN HOWE</div>
            <div>BRENDAN HOWE</div>
          </div>
          <h2 className="subheading">Front-End Web Developer</h2>
        </div>
      </div>
      {/* Content */}
      <section className="s2">
        <div className="main-container">
          <div id="about" className="about-wrapper">
            <div className="panel">
              <h2 style={{ textAlign: "center" }}>About Me</h2>
              <p>
                I'm a front-end junior web developer. Experienced in gathering,
                analyzing and compiling information from disparate resources
                into engaging products. My background in the service industry,
                education and nonprofit radio informs my problem-solving
                approach of doing more with less.
              </p>
              <br />
              <p>
                I write, conduct, record and produce interviews with innovators
                in business technology and the arts. I also play music and climb
                rocks.
              </p>
              <h3 style={{ textAlign: "center" }}>Skills and Experience</h3>
              <p className="navigation" style={{ textAlign: "center" }}>
                <a target="_blank" href="brendanhowe_resume.pdf">
                  Download Resume
                </a>
              </p>
              <div id="skills">
                <ul>
                  <li>Django</li>
                  <li>Python</li>
                  <li>React</li>
                  <li>React Native</li>
                  <li>JavaScript</li>
                  <li>SASS</li>
                  <li>HTML/CSS</li>
                </ul>
                <ul>
                  <li>Node</li>
                  <li>Express</li>
                  <li>Postgres</li>
                  <li>SQL</li>
                  <li>Google Maps API</li>
                  <li>Google Analytics</li>
                  <li>Heroku</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="s1">
        <div id="projects" className="panel">
          <h2 style={{ textAlign: "center" }}>Projects</h2>
          <div className="post-wrapper">
            <div>
              <div className="post">
                <img
                  className="thumbnail"
                  src="../images/geoquakes-thumbnail.png"
                  alt="project one"
                />
                <div className="post-preview">
                  <h4 className="post-title">GeoQuakes</h4>
                  <p className="post-intro">
                    A React app that utilizes information the US Geological
                    Survey API to map the most recent earthquakes around the
                    globe.
                  </p>
                  <a href="post.html">View Project</a>
                </div>
              </div>
            </div>
            <div>
              <div className="post">
                <img
                  className="thumbnail"
                  src="images/triptych-thumbnail.png"
                  alt="project two"
                />
                <div className="post-preview">
                  <h4 className="post-title">Triptych</h4>
                  <p className="post-intro">
                    A full MERN stack customizable art gallery.
                  </p>
                  <a href="post.html">View Project</a>
                </div>
              </div>
            </div>
            <div>
              <div className="post">
                <img
                  className="thumbnail"
                  src="images/whatsapp-clone-thumbnail.png"
                  alt="project three"
                />
                <div className="post-preview">
                  <h4 className="post-title">WhatsAppAgain</h4>
                  <p className="post-intro">
                    A full MERN stack WhatsApp clone utilizing Pusher for
                    simultaneous front-end updates of back-end info.
                  </p>
                  <a href="post.html">View Project</a>
                </div>
              </div>
              <div className="navigation">
                <a target="_blank" href="https://github.com/bhowe111">
                  Check out more projects on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="s2">
        <div className="panel">
          <p style={{ textAlign: "center" }}>© Brendan Howe 2021</p>
        </div>
      </section>
    </div>
  );
}
