import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import db from "../firebase.js";
import {Link} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";

export const Cocina = () => {
  const [kitOrder, changeKitOrder]= useState([]);

  useEffect(() => {
    onSnapshot(
      collection(db, "order"),
      (snapshot) => {
          const listOrders = snapshot.docs.map((document) => {
          return { ...document.data(), id: document.id };
      })
 changeKitOrder(listOrders);
},
(error) => {
  console.log(error);
}
)
  },[]);

    return (
      <div className="kitchen">
         <Navbar bg="light" expand="lg">
    <Navbar>Burger Queen Cocina</Navbar>
      <Nav className="me-auto">
        <Nav.Link href="/Inicio">Inicio</Nav.Link>
       </Nav>
       </Navbar>
        {kitOrder.map((e, index) => (
          <div className="ticket" key={index}>
          <p>Número de mesa: {e.table}</p>
          <p>
          {e.order.map((item, index) => <li key={index}>
            {item.count} {item.name}
          </li>)}
          </p>
          </div>
        ))}

      </div>
    )
}

