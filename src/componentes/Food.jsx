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
        <div >
        <Button variant="warning"  size="lg" onClick={() => showMenu(false)}>Comida</Button>
        </div>
        :
        <div >
        <Button variant="warning" size="lg" onClick={() => showMenu(true)}>Comida</Button>
        <div>
        {food.map((element, index) => {
            
            return(
            <div key={index} className="w-1/2">
                <Button className= "menuBtn" variant="warning" size="lg" onClick={() => allContext.addProduct(element)}>{element.name} ${element.price}</Button>
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