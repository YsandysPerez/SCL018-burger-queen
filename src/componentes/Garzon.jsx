import React from "react";
import { Link } from "react-router-dom";
import Drinks from "./Drinks.jsx";
import Food from "./Food.jsx";
import { Carrito } from "./Carrito.jsx";

export const Garzon = () => {
  return (
    <div classname="container">
    <div>
      <div class="container">
  <div class="row">
    <div class="col">
    <div class="row row-cols-2">
    <Drinks/>
    <Food/>
    </div>
    </div>
    <div class="col-4">
    <Carrito/>
    </div>
  </div>
</div>
     
     
      <nav>
        <Link to="/Inicio">
          <button className="h-10 m-6 px-20 font-semibold text-lg text-teal-50 transition-colors duration-150 bg-yellow-500 rounded-lg focus:shadow-outline hover:bg-yellow-600">
            Inicio
          </button>
        </Link>
      </nav>
      <aside>
       
      </aside>
    </div>
    </div>
  );
};
