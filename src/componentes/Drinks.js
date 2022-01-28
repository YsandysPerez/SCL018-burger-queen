import React, {useState} from "react";
import data from "./../data/data.json";

const Drinks = ({agregar}) => {
    const [show, showMenu]= useState(true);
    const drink = data.drinks;
    return ( 
    <>
    {show === true ?
    <div className=" ">
        <button className="h-20 my-6  mx-2 px-20 font-semibold text-lg text-teal-50 transition-colors duration-150 bg-yellow-500 rounded-lg focus:shadow-outline hover:bg-yellow-600" onClick={() => showMenu(false)}>Bebidas</button>
    </div>
    :
    <div className=" w-full">
    <button className="h-20 my-6 mx-2 px-20 font-semibold text-lg text-teal-50 transition-colors duration-150 bg-yellow-500 rounded-lg focus:shadow-outline hover:bg-yellow-600" onClick={() => showMenu(true)}>Bebidas</button>
    <div className=" ">
    {drink.map((element, index) => {
        return(
        <div key={index} className= "w-full p-1 ">
        <button onClick={() => agregar(element.id, element.name)} className=" mx-12 w-1/2 h-20 bg-yellow-500 text-teal-50 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-yellow-600 ">{element.name} ${element.price}</button>
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