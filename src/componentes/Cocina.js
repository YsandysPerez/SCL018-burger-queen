import React from "react";
import {Link} from "react-router-dom";

export const Cocina = () => {
    return (
      <div>
        <h2>Cocina</h2>
        <ul>
          <li>articulo uno</li>
          <li>articulo dos</li>
          <li>articulo tres</li>
        </ul>
        <nav>
        <Link to="/Inicio"> Inicio</Link>
        </nav>

      </div>
    )
}

