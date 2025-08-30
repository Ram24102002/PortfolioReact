import React from "react";
import "./App.css";
import Temp from "./pages/temp";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/common/NavBar";
import Home from "./pages/home";




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/temp" elament={<Temp />} />
      </Routes>
    </Router>
  );
}

export default App;
