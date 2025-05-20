import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Marketplace from "./components/Marketplace";
import Rankings from "./components/Rankings";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Connect from "./components/Connectwallet";
import Footer from "./components/Footer";
import Test from "./components/Test";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-dark">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/test" element={<Test />} />
          <Route path="/rankings" element={<Rankings />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
