import React from "react";
import "./home.css";
import profile from "../../images/profile.jpg";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Home() {
  const handleClick = () => {
    alert("WhatsApp Number: 992398XXXX");
  };
  return (
    <>
      {/* <h1>This is home Page</h1> */}

      <div className="main-container">
        <motion.div className="child-left">
          <motion.div
            whileTap={{
              scale: 0.8,
              borderRadius: "100%",
            }}
            className="pp"
          >
            <motion.img
              whileHover={{ scale: 1.2 }}
              className="profile_pic"
              src={profile}
              alt="Prashant"
            />
          </motion.div>
        </motion.div>
        <div className="child-right">
          <div className="cr-content">
            <h1>
              <span style={{ color: "#FF7722" }}>P</span>rashant{" "}
              <span style={{ color: "#FF7722" }}>S</span>harma
            </h1>
            <div className="type">
              <span
                className="typewriter"
                style={{
                  color: "#FF7722",
                  fontSize: "1.5rem",
                  fontFamily: "monospace",
                  lineHeight: "1",
                }}
              >
                <Typewriter
                  words={[
                    "Front-End Developer 🧑🏼‍💻",
                    "Rract JS Developer 🥳",
                    "Competitive Gamer 🎮",
                    "Anime Freek ❄️",
                  ]}
                  loop={Infinity}
                  cursor
                  cursorStyle="<"
                  typeSpeed={100}
                />
              </span>
            </div>
            <p className="para">
              Creative{" "}
              <span style={{ color: "#FF7722", fontWeight: "bold" }}>
                React Js
              </span>{" "}
              Developer based in New Chandigarh and loves to develop front-end
              websites with the help of{" "}
              <span style={{ color: "#FF7722", fontWeight: "bold" }}>
                React Js...
              </span>
              <hr className="hr-line" style={{ color: "white" }} />
            </p>
            <div className="links">
              <motion.a
                className="fac"
                whileTap={{ scale: 0.5 }}
                whileHover={{ scale: 1.2 }}
                href="https://www.facebook.com/profile.php?id=100005881630531"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookSquare />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.5 }}
                href="https://www.linkedin.com/in/prashant-sharma-43b295137/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn
                  className="linkdin"
                  style={{ background: "white" }}
                />
              </motion.a>
              <motion.a
                className="whatsapp"
                whileTap={{ scale: 0.5 }}
                whileHover={{ scale: 1.2 }}
                href
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp onClick={handleClick} />
              </motion.a>
              <motion.a
                whileTap={{ scale: 0.5 }}
                whileHover={{ scale: 1.2 }}
                style={{ color: "white" }}
                href="https://github.com/wolf-dagger"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithubSquare />
              </motion.a>
              <motion.a
                whileTap={{ scale: 0.5 }}
                whileHover={{ scale: 1.2 }}
                style={{ color: "pink" }}
                href="https://www.instagram.com/wolf_dager/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <p className="copyright">&copy;Made by Prashant Sharma</p>
      </div> */}
    </>
  );
}

export default Home;
