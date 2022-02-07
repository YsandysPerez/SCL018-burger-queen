import "./App.css";
import React, {createContext, useState}from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Inicio } from "./componentes/Inicio.jsx";
import { Garzon } from "./componentes/Garzon.jsx";
import { Cocina } from "./componentes/Cocina.jsx";
import data from "../src/data/data.json";
import 'bootstrap/dist/css/bootstrap.min.css';



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

  const removeProduct = (id) => {
    boxProducts({
      ...products,
      order: products.order.filter((orderItem) => orderItem.id !== id)
    });
  };

  const increProduct = (id) => {
    boxProducts({
      ...products,
      order: products.order.map((orderItem) =>
      orderItem.id === id
          ? { ...orderItem, count: orderItem.count + 1 }
          : orderItem
      )
    });
  };

  const decreProduct = (id) => {
    boxProducts({
      ...products,
      order: products.order.map((orderItem) =>
      orderItem.id === id
          ? { ...orderItem, count: orderItem.count > 1 ? orderItem.count - 1 : 1 }
          : orderItem
      )
    });
  };

  const allVar = { products, boxProducts, addProduct, removeProduct, increProduct, decreProduct };

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
