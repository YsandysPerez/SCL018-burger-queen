import React, { useContext } from "react";
import { traverseTwoPhase } from "react-dom/cjs/react-dom-test-utils.production.min";
import { menuContext } from "../App";
import {Button, ButtonToolbar , ButtonGroup  } from "react-bootstrap";

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
              <ul class="list-group">
            <div key = {index}>
            <li class="list-group-item"> {e.name} ${e.price} {'\n'}
             Total: ${(e.price * e.count).toFixed(2)}</li>
              <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
              <ButtonGroup className="me-2" aria-label="First group">
              <Button variant="secondary" onClick={() => allContext.decreProduct(e.id)}> - </Button>{' '}
              <Button variant="secondary" onClick={() => allContext.removeProduct(e.id)}> Remover </Button>{' '}
              <Button variant="secondary" onClick={() => allContext.increProduct(e.id)}>+ </Button>{' '}
              <Button variant="outline-secondary"> {e.count}</Button>
              </ButtonGroup>
              </ButtonToolbar>
              
            </div>
           </ul>
            )
        })}
      </div>
      <div>
      <h3>Total consumo: ${totalCartAmount}</h3>
      </div>
      </>
    );
  };
