import React from "react";
import {Link} from "react-router-dom";
//import data from "../data/data.json"; 

 export const Garzon = () => {
    return (
      <div>
        <h2> Garzón</h2>
        <ul>
          <li>data.desayuno</li>
          <li>articulo dos</li>
          <li>articulo tres</li>
        </ul>
        <nav>
        <Link to="/Inicio"><button className="h-20 px-20 font-semibold text-lg text-teal-50 transition-colors duration-150 bg-yellow-500 rounded-lg focus:shadow-outline hover:bg-yellow-600">Inicio</button></Link>
        </nav>

      </div>
    )
}


