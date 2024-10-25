import "./Home.css";
import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container-home">
      <header className="header-home">
        <Link to="/register">Cerrar Sesión</Link>
      </header>
      <h1>Esto es el Home</h1>
      <main>
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
    </div>
  );
};

export default Home;
