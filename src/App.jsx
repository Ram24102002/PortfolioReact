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




function AppContent(){
  const location = useLocation();
  const hideLayoutRoutes = ['/get-in-touch'];

  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

return(
<>

  {!shouldHideLayout &&  <Navbar />}


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/temp" elament={<Temp />} />
        <Route path="/get-in-touch" element={<GetInTouch />} />

        {/* other routes */}
      <Route path="*" element={<PageNotFound />} />
      </Routes>
      
  {!shouldHideLayout &&  <Footer />}
</>
)
  



}


function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
