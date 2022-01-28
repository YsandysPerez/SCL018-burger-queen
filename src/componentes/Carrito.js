import React, { useContext } from "react";
import { menuContext } from "../App";

export const Carrito = () => {
    const allContext = useContext(menuContext);
    const totalCartAmount = allContext.products.order
      .reduce((total, e) => (total = total + e.price * e.count), 0)
      .toFixed(2);
  
    const totalCartCount = allContext.products.order.reduce(
      (total, e) => (total = total + e.count),
      0
    );
  
    return (
      <div>
        <h3>Carrito de compra</h3>
        {allContext.products.order.map((e, index) => {
            return(
            <div key = {index}>
              <h4>{e.name}</h4>
              <p>{e.price}</p>
              {/*<p>Toplam: &#8378;{(book.price * book.count).toFixed(2)}</p>
              <p>Sepetinizde bu kitaptan toplam {book.count} adet var.</p>
              <button onClick={() => context.decrease(book.id)}>-</button>
              <button onClick={() => context.removeFromCart(book.id)}>
                Sepetten Çıkar
              </button>
        <button onClick={() => context.increase(book.id)}>+</button>*/}
            </div>
            )
        })}
      </div>
    );
  };

/*export const Carrito = ({carrito}) => {
    
    return(
        <div>
            <h3>Carrito de compra</h3>
            {carrito.length > 0 ?
           carrito.map((producto, index) => {
               return(
                   <div key = {index}>
                       <div>
                           {producto.nombre}
                       </div>
                       Cantidad: {producto.cantidad}
                   </div>
               )
           })
            :
            <p>no tienes nada</p>
        }
        </div>

    );
}*/