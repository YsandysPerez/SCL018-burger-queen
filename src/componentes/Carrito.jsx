import React, { useContext } from "react";
import db from "../../src/firebase.js";
import { collection, addDoc } from "firebase/firestore";
import { traverseTwoPhase } from "react-dom/cjs/react-dom-test-utils.production.min";
import { menuContext } from "../App";
import {Button, ButtonToolbar , ButtonGroup, Container  } from "react-bootstrap";
import { Form } from "./Form";

export const Carrito = () => {
  const allContext = useContext(menuContext);

    const onSubmit = async (e) =>{
        e.preventDefault();

        try {
            await addDoc(collection(db, 'order'), {
                name: allContext.name,
                table: allContext.table,
                orderClient: allContext.products.resumeOrder,
                totalPrice: allContext.totalCartAmount,
                status: "Pendiente"
            });
        } catch (error) {
            console.log('Ingresaste mal los datos');
            console.log(error);
        }
    }

    const totalCartAmount = allContext.products.order
      .reduce((total, e) => (total = total + e.price * e.count), 0)
      .toFixed(2);
  
    return (
      <>
      <div class= "carrito">
      <Container >
        <div>
          <Form/>
        </div>

        <h3>Orden de mesa</h3>
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
        </Container>
      </div>
      <div>
      <h3>Total consumo: ${totalCartAmount}</h3>
      </div>
      <div class="boton" >
      <Button variant="warning" >Enviar a Cocina</Button>
      
      </div>
      </>
    );
  };
