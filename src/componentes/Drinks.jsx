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
        <Button variant="warning" size="lg" onClick={() => showMenu(false)}>Bebidas</Button>
    </div>
    :
    <div>
    <Button variant="warning" size="lg" onClick={() => showMenu(true)}>Bebidas</Button>
    <div >
    {drink.map((element, index) => {
        return(
        <div key={index} className="w-1/2">
        <Button variant="warning" size="lg" onClick={() => allContext.addProduct(element)}>{element.name} ${element.price}</Button>
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