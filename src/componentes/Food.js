import React, {useState, useContext} from "react";
import data from "./../data/data.json";
import { menuContext } from "../App";

const Foods = () => {
    const allContext = useContext(menuContext);
    const [show, showMenu]= useState(true);
    const food = data.food;
    return ( 
        <>
        {show === true ?
        <div>
        <button class="btn btn-warning btn-lg" onClick={() => showMenu(false)}>Comida</button>
        </div>
        :
        <div >
        <button class="btn btn-warning btn-lg" onClick={() => showMenu(true)}>Comida</button>
        <div>
        {food.map((element, index) => {
            
            return(
            <div key={index} >
                <button class="btn btn-warning btn-lg" onClick={() => allContext.addProduct(element)}>{element.name} ${element.price}</button>
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