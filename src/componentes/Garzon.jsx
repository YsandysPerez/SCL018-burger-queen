import React from "react";
import { Link } from "react-router-dom";
import Drinks from "./Drinks.jsx";
import Food from "./Food.jsx";
import { Carrito } from "./Carrito.jsx";
import {Navbar, Container, Nav} from "react-bootstrap"


export const Garzon = () => {
  return (
    <div >
       <Container fluid= "md">
    <Navbar bg="light" expand="lg">
    <Navbar>Burger Queen</Navbar>
      <Nav className="me-auto">
        <Nav.Link href="/Inicio">Inicio</Nav.Link>
       </Nav>
       </Navbar>
      <div class="container carrito">
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
