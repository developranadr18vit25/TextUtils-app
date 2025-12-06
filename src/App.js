
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import React, { useState } from 'react';

import Textform from './components/Textform';
import Alert from './components/Alert';
// import Table from './components/Table';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

let name = "dhruv";

function App() {

  const [mode, setmode] = useState("light");

  const [toggletext, settoggletext] = useState("dark");

  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      message: message,
      type: type
    })

    setTimeout(() => {
      setalert(null)
    }, 3000);
  }

  const toggleMode = () => {
    if (mode == "light") {
      setmode("dark");
      settoggletext("light");
      document.body.style.backgroundColor = "black";
      showalert("The dark mode is enabled", "success");
      document.title = "TextUtils-Dark Mode"

      setTimeout(() => {
        setalert(null)

      }, 3000);
    }

    else {
      setmode("light");
      settoggletext("dark");
      document.body.style.backgroundColor = "white";
      showalert("The light mode is enabled", "success");
      document.title = "TextUtils-Light Mode"

    }
  };

  const [myStyle, setmyStyle] = useState({
    color: "black",
    backgroundColor: "white"
  });

  const toggleabout = () => {
    if (myStyle.color === "black") {
      setmyStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white"
      })
    }
    else {
      setmyStyle({
        color: "black",
        backgroundColor: "white",
        border: "1px solid black"
      })
    }
  };
  return (
    <>
      <Router>
        <Navbar title="textUtils" about="learnmore" mode={mode} toggleMode={toggleMode} toggletext={toggletext} myStyle={myStyle} toggleabout={toggleabout} />
        {/* <Table /> */}
        <Alert alert={alert} />
        <div className="container my-3" >
          
          <Routes>
            <Route exact path="/about" element={<About myStyle={myStyle} toggleabout={toggleabout} />} />
            <Route exact path="/" element={<Textform mode={mode} alert={alert} showalert={showalert} />} />
            {/* <Textform heading="Enter the text to analyze below"  /> */}
          </Routes>
           
        </div>
      </Router>
    </>
  );
}

export default App; 
