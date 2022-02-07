import React from "react";
import { Link } from "react-router-dom";
import Drinks from "./Drinks.js";
import Food from "./Food.js";
import { Carrito } from "./Carrito.js";
import {Navbar, Container, Nav} from "react-bootstrap";

export const Garzon = () => {
 {/*const[carrito, cambiarCarrito] = useState([]);*/}

  return (
    <div>
       <Container fluid= " sm, md, lg, xl">
    <Navbar bg="light" expand="lg">
    <Navbar>Burger Queen</Navbar>
      <Nav className="me-auto">
        <Nav.Link href="/Inicio">Inicio</Nav.Link>
       </Nav>
       </Navbar>
      <div class="container">
  <div class="row ">
    <div class="col">
    <div class="row row-cols-2">
    <Drinks/>
    <Food/>
    </div>
    </div>
    <div class="col-4">
    <Carrito/>
    </div>
  </div>
    </div>
    </Container>
   </div>
   
  );
};
