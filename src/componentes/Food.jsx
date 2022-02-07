import React, {useState, useContext} from "react";
import data from "./../data/data.json";
import { menuContext } from "../App";
import {Button} from "react-bootstrap";

const Foods = () => {
    const allContext = useContext(menuContext);
    const [show, showMenu]= useState(true);
    const food = data.food;
    return ( 
        <>
        {show === true ?
        <div>
        <Button class="btn btn-warning btn-lg" onClick={() => showMenu(false)}>Comida</Button>
        </div>
        :
        <div >
        <Button class="btn btn-warning btn-lg" onClick={() => showMenu(true)}>Comida</Button>
        <div>
        {food.map((element, index) => {
            
            return(
            <div key={index} >
                <Button class="btn btn-warning btn-lg" onClick={() => allContext.addProduct(element)}>{element.name} ${element.price}</Button>
            </div>
            );
        })}
    </div>
    </div>
    
     }
     </>
     );
}
 
export default Foods;