import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainchatbot from "./components/mainchatbot";
import Home from "./components/HomePage";
import { useNavigate } from "react-router-dom"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/chatbot" element={<Mainchatbot />} />
      </Routes>
    </Router>
  );
}

export default App;
