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
import GetInTouch from "./pages/GetInTouch";
import Inbox from "./pages/Inbox";
import Sample from "./pages/sample";

function AppContent() {
  const location = useLocation();
  const hideLayoutNav = ["/get-in-touch", "/temp", "/inbox"]; // Remove Nav
  const hideLayoutFooter = ["/get-in-touch", "/inbox", "/temp"]; // Remove Footer

  const shouldHideLayoutNav = hideLayoutNav.includes(location.pathname);
  const shouldHideLayoutFooter = hideLayoutFooter.includes(location.pathname);

  return (
    <>
      {!shouldHideLayoutNav && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/temp" element={<Temp />} />
        <Route path="/sample" element={<Sample />} />
        <Route path="/get-in-touch" element={<GetInTouch />} />
        <Route path="/inbox" element={<Inbox />} />

        {/* catch-all route */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {!shouldHideLayoutFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
