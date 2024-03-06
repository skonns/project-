import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./home/HomePage";
import MenuPage from "./home/MenuPage";
import AboutMePage from "./home/AboutMePage";
import ContactPage from "./home/ContactPage";
import ProjectsPage from "./components/pasta/ProjectsPage";
import ProjectPages from "./components/pizza/ProjectsPage";
import Login from "./home/Login/Login"; // Sesuaikan path dengan lokasi file Login.jsx
import "./App.css"; // Sesuaikan path dengan lokasi file App.css

function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src="logo.png" alt="logo" width="49" height="99" />
          </div>

          <nav className="nav-links">
            <NavLink to="/" className="nav-link" activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/pasta" className="nav-link" activeClassName="active">
              Pizza
            </NavLink>
            <NavLink to="/pizza" className="nav-link" activeClassName="active">
              Pasta
            </NavLink>
            <NavLink to="/AboutMe" className="nav-link" activeClassName="active">
              About
            </NavLink>
            <NavLink to="/Menu" className="nav-link" activeClassName="active">
              Menu
            </NavLink>
            <NavLink to="/Contact" className="nav-link" activeClassName="active">
              Contact
            </NavLink>
            <NavLink to="/Login" className="nav-link" activeClassName="active">
              Login
            </NavLink>
          </nav>
        </div>
      </header>
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pizza" element={<ProjectsPage />} />
          <Route path="/pasta" element={<ProjectPages />} />
          <Route path="/AboutMe" element={<AboutMePage />} />
          <Route path="/Menu" element={<MenuPage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
