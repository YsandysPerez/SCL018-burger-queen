import React, {useState} from "react";
import data from "./../data/data.json";

const Foods = ({agregar}) => {
    const [show, showMenu]= useState(true);
    const food = data.food;
    return ( 
        <>
        {show === true ?
        <div className="">
        <button className="text-lg font-semibold flex justify-start  w-6/12 bg-yellow-500 text-teal-50 text-center"onClick={() => showMenu(false)}>Comida</button>
        </div>
        :
        <div className="">
        <button className="text-lg font-semibold flex justify-start  w-6/12 bg-yellow-500 text-teal-50 text-center"onClick={() => showMenu(true)}>Comida</button>
        <div>
        {food.map((element, index) => {
            
            return(
            <div key={index} className= "w-1/2 p-1 ">
                <button onClick={() => agregar(element.id, element.name)}className=" m-2 w-1/2 h-12 bg-yellow-500 text-teal-50 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-yellow-600 ">{element.name} ${element.price}</button>
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