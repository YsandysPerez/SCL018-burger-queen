import "./App.css";
import React, {createContext, useState}from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Inicio } from "./componentes/Inicio.js";
import { Garzon } from "./componentes/Garzon.js";
import { Cocina } from "./componentes/Cocina.js";
import data from "../src/data/data.json";


const menu = data;
export const menuContext = createContext();

function App() {

  const [products, boxProducts] = useState({
    productList: menu,
    order: []
  });

  const addProduct = (product) => {
    return boxProducts({
      ...products,
      order: products.order.find((orderItem) => orderItem.id === product.id)
        ? products.order.map((orderItem) =>
        orderItem.id === product.id
              ? { ...orderItem, count: orderItem.count + 1 }
              : orderItem
          )
        : [...products.order, { ...product, count: 1 }]
    });
  };

  const allVar = { products, boxProducts, addProduct };

  return (
    <menuContext.Provider value={allVar}>
    <BrowserRouter>
            <Routes>
              <Route path= "/" element={ <Inicio/>}/>
              <Route path= "/Inicio" element={ <Inicio/>}/>
              <Route path= "/Garzon" element={ <Garzon/>}/>
              <Route path= "/Cocina" element={ <Cocina/>}/>
            </Routes>
    </BrowserRouter>
  </menuContext.Provider>
  );
}

export default App;
