import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Inicio } from "./componentes/Inicio.js";
import { Garzon } from "./componentes/Garzon.js";
import { Cocina } from "./componentes/Cocina.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <main>
            <Routes>
              <Route path= "/Inicio" element={ <Inicio/>}/>
              <Route path= "/Garzon" element={<Garzon/> }/>
              <Route path= "/Cocina" element={ <Cocina/>}/>
            </Routes>
          </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
