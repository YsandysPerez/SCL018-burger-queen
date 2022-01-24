import React from "react";
export const Carrito = ({carrito}) => {
    
    return(
        <div>
            <h3>Carrito de compra</h3>
            {carrito.length > 0 ?
           carrito.map((producto, index) => {
               return(
                   <producto key = {index}>
                       <div>
                           {producto.nombre}
                       </div>
                       Cantidad: {producto.cantidad}
                   </producto>
               )
           })
            :
            <p>no tienes nada</p>
        }
        </div>

    );
}

