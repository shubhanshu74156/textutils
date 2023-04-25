import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // const Damn = () =>{
  //   setTimeout(() => {
  //     document.title='hehhehe';
  //   }, 1000);
  //   setTimeout(() => {
  //     document.title='gotcha';
  //   }, 2000);
  // }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "Success");
      // setInterval(() => {
      //   Damn();
      // }, 3000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "Success");
    }
  };
  return (
    <BrowserRouter>
        <Navbar
          title="TextUtils"
          aboutText="About textutils"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route/>
            <Route path="/" element={<TextForm showAlert={showAlert} title="Enter text below to analyse" />}/>
            <Route path="/About" element={<About />}/>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
