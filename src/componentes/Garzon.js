import React, {useState} from "react";
import { Link } from "react-router-dom";
import Drinks from "./Drinks";
import Food from "./Food";
import { Carrito } from "./Carrito.js";

export const Garzon = () => {
 const[carrito, cambiarCarrito] = useState([]);
   const agregar = (idProducto, nombre) => {
   if(carrito.length === 0){
     cambiarCarrito ([{id: idProducto , nombre: nombre , cantidad: 1}]);
   }else{
     const nuevoCarrito = [...carrito];
     const carritoReady = nuevoCarrito.filter((productoCarrito)=>{
      return productoCarrito.id === idProducto
     }).length > 0; 
     if(carritoReady){
       nuevoCarrito.forEach((productoCarrito, index)=>{
        if(productoCarrito.id === idProducto){
          const cantidad = nuevoCarrito[index].cantidad;
          nuevoCarrito[index] = {
            id: idProducto, 
            nombre: nombre, 
            cantidad: cantidad + 1 }

        }
       })
     }  
   }
  }

  return (
    <div>
      <Drinks agregar={agregar} />
      <Food agregar={agregar} />
      <nav>
        <Link to="/Inicio">
          <button className="h-20 px-20 font-semibold text-lg text-teal-50 transition-colors duration-150 bg-yellow-500 rounded-lg focus:shadow-outline hover:bg-yellow-600">
            Inicio
          </button>
        </Link>
      </nav>
      <aside>
        <Carrito carrito = {carrito} />
      </aside>
    </div>
  );
};
