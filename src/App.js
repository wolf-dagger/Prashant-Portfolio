import React, { useEffect, useState } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home.jsx";
import About from "./routes/about/About.jsx";
import Contact from "./routes/contact/Contact.jsx";
import Navigation from "./routes/navigation/Navigation";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <ClimbingBoxLoader
          className="animate"
          color={"white"}
          loading={loading}
          size={15}
          style={{ color: "white" }}
        />
      ) : (
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index={true} element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
