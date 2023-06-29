import React from "react";
import "./about.css";
import profile from "../../images/spects.jpg";
import ProgressBar from "@ramonak/react-progress-bar";
import cu from "../../images/chandigarhUnicersity.png";
import omni from "../../images/omninos.jpeg";
import mph from "../../images/mphasis.jpeg";
import rain from "../../images/rain-02.jpg";

function About() {
  return (
    <>
      <div className="head-tag">
        <h1 className="about_me">
          <span style={{ color: "#FF7722" }}>A</span>bout{" "}
          <span style={{ color: "#FF7722" }}>M</span>e
        </h1>
        <hr style={{ color: "white" }} />
      </div>
      <div className="main-about">
        <div className="main-img">
          <div className="pic">
            <img src={profile} alt="Prashant" />
          </div>
        </div>
        <div className="main-text">
          <p>
            Hi, my name is{" "}
            <span
              style={{ color: "#FF7722", fontWeight: "bold", fontSize: "2rem" }}
            >
              Prashant Sharma
            </span>{" "}
            and I began working on React Js for last{" "}
            <span style={{ color: "#FF7722", fontWeight: "bold" }}>
              6 months
            </span>
            . I've spent most of my waking hours practicing{" "}
            <span style={{ color: "#FF7722", fontWeight: "bold" }}>
              React Js
            </span>{" "}
            and still learning some stuff. One of my specialties is taking an
            idea from scratch and creating a full-fledged{" "}
            <span style={{ color: "#FF7722", fontWeight: "bold" }}>
              Responsive Web App
            </span>
            . I go beyond to produce sites with a unique, outstanding,
            contemporary{" "}
            <span style={{ color: "#FF7722", fontWeight: "bold" }}>
              look-and-feel
            </span>
            . With current knowledge of React Js, I'm able to make a web
            application fully working and Responsive as well. I like to work in
            a team as i am a great{" "}
            <span style={{ color: "#FF7722", fontWeight: "bold" }}>
              Team Player
            </span>
            . <br />{" "}
            <center className="response">
              <span
                style={{
                  color: "#FF7722",
                  fontWeight: "bold",
                  paddingTop: "1rem",
                }}
              >
                Looking forward for your response
              </span>
            </center>
          </p>
        </div>
      </div>
      <hr className="hr-line" style={{ color: "white" }} />
      <div className="details">
        <div className="details-left">
          <ul>
            <li>
              <span style={{ fontWeight: "bold" }}>Birthday:</span> 5th Oct 1998
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Age:</span> 24
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Address:</span>New Chandigarh
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Email:</span>{" "}
              cu.17bcs4556@gmail.com
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Phone:</span> +91-992398XXXX
            </li>
          </ul>
        </div>
        <div className="details-right">
          <ul>
            <li>
              <span style={{ fontWeight: "bold" }}>Nationality:</span>{" "}
              <span>Indian</span>
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Study:</span> Chandigarh
              University
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Degree:</span>B.E/B.Tech. CSE
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Interest:</span>{" "}
              Valorant,Apex Legends,CSGO
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Available:</span> Yes
            </li>
          </ul>
        </div>
      </div>
      <hr className="hr-line" style={{ color: "white" }} />

      <div className="details skills">
        <div className="details-left skills-left">
          <h1>
            <span style={{ color: "#ff7722" }}>P</span>rogramming{" "}
            <span style={{ color: "#ff7722" }}>S</span>kills
          </h1>
          <ul>
            <li>
              React Js <br />
              <ProgressBar
                completed={80}
                baseBgColor="White"
                height="5px"
                width="80%"
                customLabel=""
                bgColor="#ff7722"
                labelAlignment="outside"
              />
            </li>
            <li>
              Javascript <br />
              <ProgressBar
                completed={70}
                baseBgColor="White"
                height="5px"
                width="80%"
                customLabel=""
                bgColor="#ff7722"
                labelAlignment="outside"
              />
            </li>
            <li>
              HTML / CSS <br />
              <ProgressBar
                completed={85}
                baseBgColor="White"
                height="5px"
                width="80%"
                customLabel=""
                bgColor="#ff7722"
                labelAlignment="outside"
              />
            </li>
          </ul>
        </div>
        <div className="details-right skills-right">
          <h1>
            <span style={{ color: "#ff7722" }}>L</span>anguage{" "}
            <span style={{ color: "#ff7722" }}>S</span>kills
          </h1>
          <ul>
            <li>
              English <br />
              <ProgressBar
                completed={95}
                baseBgColor="White"
                height="5px"
                width="80%"
                customLabel=""
                bgColor="#ff7722"
                labelAlignment="outside"
              />
            </li>
            <li>
              Hindi <br />
              <ProgressBar
                completed={99}
                baseBgColor="White"
                height="5px"
                width="80%"
                customLabel=""
                bgColor="#ff7722"
                labelAlignment="outside"
              />
            </li>
            <li>
              Punjabi <br />
              <ProgressBar
                completed={65}
                baseBgColor="White"
                height="5px"
                width="80%"
                customLabel=""
                bgColor="#ff7722"
                labelAlignment="outside"
              />
            </li>
          </ul>
        </div>
      </div>
      <hr className="hr-line" style={{ color: "white" }} />
      <h1 className="eduh1">
        <span style={{ color: "#ff7722" }}>E</span>ducation{" "}
        <span style={{ color: "#ff7722" }}>Q</span>ualification
      </h1>
      <div className="education">
        <div className="edu-1">
          <div className="edu1-left">
            <img src={cu} alt="Chandigarh University" />
          </div>
          <div className="edu1-right">
            <div className="text">
              <h1>
                <span style={{ color: "#ff7722" }}>C</span>HANDIGARH{" "}
                <span style={{ color: "#ff7722" }}>U</span>NIVERSITY
              </h1>
              <h5>B.E./B.Tech Computer Science Engineering</h5>
              <h5>Hon. Internet Of Things</h5>
              <h6>CGPA : 7.07</h6>
              <h6>(2017-2021)</h6>
            </div>
          </div>
        </div>
      </div>
      <hr className="hr-line" style={{ color: "white" }} />
      <h1 className="eduh1">
        <span style={{ color: "#ff7722" }}>E</span>xperience{" "}
      </h1>
      <div className="education experience">
        <div className="edu-1">
          <div className="edu1-left">
            <img src={omni} alt="Chandigarh University" />
          </div>
          <div className="edu1-right">
            <div className="text">
              <h1>
                <span style={{ color: "#ff7722" }}>O</span>mninos{" "}
                <span style={{ color: "#ff7722" }}>S</span>oftware{" "}
                <span style={{ color: "#ff7722" }}>S</span>olution
              </h1>
              <h5>React js Intern</h5>
              <h5>(Oct-2022)-(Present)</h5>
              <h6>
                Working on React js technoligy creating awesome front end web
                app fully <span style={{ color: "#ff7722" }}>Responsive</span>
              </h6>
            </div>
          </div>
        </div>
        <div className="edu-1 edu-2">
          <div className="edu1-left edu2-left">
            <img src={mph} alt="Chandigarh University" />
          </div>
          <div className="edu1-right edu2-right">
            <div className="text">
              <h1>
                <span style={{ color: "#ff7722" }}>M</span>phasis{" "}
                <span style={{ color: "#ff7722" }}>P</span>vt.{" "}
                <span style={{ color: "#ff7722" }}>L</span>td.
              </h1>
              <h5>Associate Software Engineer</h5>
              <h5>PeopleSoft Developer</h5>
              <h5>(june-2021)-(july-2022)</h5>
              <h6>
                Worked as a PeopleSoft Developer and developed processes and
                managed them.
              </h6>
            </div>
          </div>
        </div>
      </div>
      <hr className="hr-line" style={{ color: "white" }} />

      {/* ------------------------------ */}

      <h1 className="eduh1">
        <span style={{ color: "#ff7722" }}>P</span>rojects{" "}
      </h1>
      <div className="education experience">
        <div className="edu-1">
          <div className="edu1-left">
            <img className="rain" src={rain} alt="project" />
          </div>
          <div className="edu1-right">
            <div className="text">
              <h1>
                <span style={{ color: "#ff7722" }}>W</span>eaher{" "}
                <span style={{ color: "#ff7722" }}>A</span>pplication{" "}
              </h1>
              <h5>React js Project</h5>
              <h5>
                link:{" "}
                <span>
                  {" "}
                  <a
                    href="https://wolf-dagger.github.io/weatherApp/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Weather App link
                  </a>
                </span>
              </h5>

              <h6>
                Made this project with the help of React js using the knowledge
                of Api
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <h6>&copy; Made By Prashant Sharma</h6>
      </div>
    </>
  );
}

export default About;
