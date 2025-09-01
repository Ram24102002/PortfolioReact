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
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/common/Footer";




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/temp" elament={<Temp />} />

        {/* other routes */}
      <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
