import React, { useContext } from "react";
import { menuContext } from "../App";

export const Carrito = () => {
    const allContext = useContext(menuContext);
    const totalCartAmount = allContext.products.order
      .reduce((total, e) => (total = total + e.price * e.count), 0)
      .toFixed(2);
  
    return (
      <>
      <div>
        <h3>Carrito de compra</h3>
        {allContext.products.order.map((e, index) => {
            return( 
            <div key = {index}>
              <h4>{e.name}</h4>
              <p>{e.price}</p>
              <p>Total: ${(e.price * e.count).toFixed(2)}</p>
              <p>Cantidad: {e.count}</p>
              <button onClick={() => allContext.removeProduct(e.id)}>remover</button>
              <button onClick={() => allContext.decreProduct(e.id)}>-</button>
              <button onClick={() => allContext.increProduct(e.id)}>+</button>
            </div>
            )
        })}
      </div>
      <div>
      <h3>Total consumo: ${totalCartAmount}</h3>
      </div>
      </>
    );
  };
