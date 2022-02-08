import React from "react";
import {Link} from "react-router-dom";
import logo from "./logo.png";
import {Button } from "react-bootstrap";

export const Inicio = () => {
  return (
    <>
    <div class="back">
      <div class="logo">
      <img src={logo} alt="" />
      </div>
      <div class="botones">
      <Link to="/Garzon"><Button  variant="warning"  >Garzón</Button> </Link>
      <Link to="/Cocina"><Button variant="warning" >Cocina</Button></Link>
      </div>
    </div>
   </>
  );
};
