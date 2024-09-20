import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Sobre from "./pages/sobre";
import Login from "./pages/login";
import Gerenciador from "./pages/dashboard";

function App() {
  const renderizarBotoes = () => (
    <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/app">Dashboard</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
          </ul>
        </nav>
      </div>
  );

  return (
        <Router>
          {renderizarBotoes()}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/app" element={<Gerenciador/>} />
          </Routes>
        </Router>
  );
}

export default App;
