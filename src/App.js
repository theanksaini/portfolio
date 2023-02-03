import React, { useState } from "react";
import "./App.css";
import Education from "./Components/Education.js";
import WorkEx from "./Components/WorkEx.js";
import Skills from "./Components/Skills.js";
import Contact from "./Components/Contact.js";

const constant = "Change is the only constant!⚡";

function App() {
  const [showComponent, setShowComponent] = useState("Education");

  return (
    <div className="App">
      <header className="App-header">
        <p
          onClick={() =>
            setShowComponent(
              showComponent === "Education"
                ? "WorkEx"
                : showComponent === "WorkEx"
                ? "Skills"
                : showComponent === "Skills"
                ? "Contact"
                : "Education"
            )
          }
        >
          {constant}
        </p>
        {showComponent === "Education" ? (
          <Education />
        ) : showComponent === "WorkEx" ? (
          <WorkEx />
        ) : showComponent === "Skills" ? (
          <Skills />
        ) : (
          <Contact />
        )}
      </header>
    </div>
  );
}

export default App;
