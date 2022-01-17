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
        <Link to="/Inicio"><button className="h-20 px-20 font-semibold text-lg text-teal-50 transition-colors duration-150 bg-yellow-500 rounded-lg focus:shadow-outline hover:bg-teal-800">Inicio</button></Link>
        </nav>

      </div>
    )
}

