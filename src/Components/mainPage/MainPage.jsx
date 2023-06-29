import React, { useState } from "react";
import "./mainPage.css";
import Navigation from "../../routes/navigation/Navigation";

function MainPage() {
  const [next, setNext] = useState(false);

  return (
    <div className="mainPage">
      <h3>HELLO</h3>
      <h1>Shall we START</h1>
      <button
        onClick={() => {
          setNext(true);
        }}
      >
        START
      </button>
      {next ? <Navigation /> : <h1>Click the BUTTON</h1>}
    </div>
  );
}

export default MainPage;
