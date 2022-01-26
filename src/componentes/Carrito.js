import React from "react";
export const Carrito = ({carrito}) => {
    
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
}

