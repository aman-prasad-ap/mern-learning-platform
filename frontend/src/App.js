import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
//import AuthPage from './components/Auth/AuthPage';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';


import Home from "./pages/Home";
//import Courses from "./pages/Courses";
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/*
          <Route path="/courses" element={<Courses />} />
          */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
