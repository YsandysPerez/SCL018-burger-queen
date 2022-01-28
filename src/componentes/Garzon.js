import React from "react";
import { Link } from "react-router-dom";
import Drinks from "./Drinks.js";
import Food from "./Food.js";
import { Carrito } from "./Carrito.js";

export const Garzon = () => {
 {/*const[carrito, cambiarCarrito] = useState([]);*/}

  return (
    <div>
      <Drinks/>
      <Food/>
      <nav>
        <Link to="/Inicio">
          <button className="h-20 px-20 font-semibold text-lg text-teal-50 transition-colors duration-150 bg-yellow-500 rounded-lg focus:shadow-outline hover:bg-yellow-600">
            Inicio
          </button>
        </Link>
      </nav>
      <aside>
        <Carrito/>
      </aside>
    </div>
  );
};
