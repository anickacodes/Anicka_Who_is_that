import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NHS from "./pages/NHS";
import Contact from "./pages/Contact";
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clnStylez" element={<NHS />} />
        <Route path="/affiliates" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
