import React from "react";
import "./navigation.css";
import { Link, Outlet } from "react-router-dom";
import { motion } from "framer-motion";

function Navigation() {
  return (
    <>
      <div className="navigation">
        <motion.div whileTap={{ scale: 0.8, y: "5%" }} className="linkk">
          <Link className="home nav-link" to="/">
            Home
          </Link>
        </motion.div>
        <motion.div whileTap={{ scale: 0.8, y: "5%" }}>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </motion.div>
        <motion.div whileTap={{ scale: 0.8, y: "5%" }}>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </motion.div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
