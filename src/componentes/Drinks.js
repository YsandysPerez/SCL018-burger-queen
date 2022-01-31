import React, {useState, useContext} from "react";
import data from "./../data/data.json";
import { menuContext } from "../App";

const Drinks = () => {
    const allContext = useContext(menuContext);
    const [show, showMenu]= useState(true);
    const drink = data.drinks;
    return ( 
    <>
    {show === true ?
    <div >
        <button class="btn btn-info btn-lg" onClick={() => showMenu(false)}>Bebidas</button>
    </div>
    :
    <div>
    <button class="btn btn-info btn-lg" onClick={() => showMenu(true)}>Bebidas</button>
    <div >
    {drink.map((element, index) => {
        return(
        <div key={index}>
        <button class="btn btn-info btn-lg" onClick={() => allContext.addProduct(element)}>{element.name} ${element.price}</button>
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