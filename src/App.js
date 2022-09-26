import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import About from "./Components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const shoAlert = (message) => {
    setAlert({
      msg: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0e3840";
      shoAlert("Dark mode has been enabled");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#d4dbe1";
      shoAlert("light mode has been enabled");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          abouttext="AboutUs"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        {/* <Navbar/> */}
        <Routes>
          <Route
            exact
            path="/about"
            element={
              <div className="cotainer my-5">
                <About mode={mode} />
              </div>
            }
          />

          <Route
            exact
            path="/"
            element={
              <div className="container my-3">
                <TextForm
                  heading="Enter the text below"
                  alert={shoAlert}
                  mode={mode}
                />
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
