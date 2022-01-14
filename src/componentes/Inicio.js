import React from "react";
import {NavLink} from "react-router-dom";

export const Inicio = () => {
  return (
    <header className="App-header">
      {/*<img src={logo} className="App-logo" alt="logo" />*/}
      <h1>Burger Queen</h1>
      <nav>
        <NavLink to="/Garzon"> Garzón</NavLink>
        <NavLink to="/Cocina"> Cocina</NavLink>
      </nav>
    </header>
  );
};
