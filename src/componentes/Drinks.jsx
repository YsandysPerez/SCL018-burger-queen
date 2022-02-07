import React, {useState, useContext} from "react";
import data from "./../data/data.json";
import { menuContext } from "../App";
import {Button} from "react-bootstrap";

const Drinks = () => {
    const allContext = useContext(menuContext);
    const [show, showMenu]= useState(true);
    const drink = data.drinks;
    return ( 
    <>
    {show === true ?
    <div >
        <Button onClick={() => showMenu(false)}>Bebidas</Button>
    </div>
    :
    <div>
    <Button onClick={() => showMenu(true)}>Bebidas</Button>
    <div >
    {drink.map((element, index) => {
        return(
        <div key={index}>
        <Button  onClick={() => allContext.addProduct(element)}>{element.name} ${element.price}</Button>
        </div>
            );
        })}
    </div>
    </div>
    }
    </>
     );
}
 
export default Drinks;