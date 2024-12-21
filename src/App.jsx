import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NHS from "./pages/NHS";
import Contact from "./pages/Contact";
import './App.css'
import Footer from "./pages/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nhs" element={<NHS />} />
        <Route path="/affiliates" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
