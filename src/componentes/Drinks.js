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
    <div className="bg-slate-700 m-0">
        <button className="text-lg font-semibold flex justify-start m-6 w-6/12 bg-yellow-500 text-teal-50 text-center" onClick={() => showMenu(false)}>Bebidas</button>
    </div>
    :
    <div className="bg-slate-700 m-0">
    <button className="text-lg font-semibold flex justify-start m-6 w-6/12 bg-yellow-500 text-teal-50 text-center" onClick={() => showMenu(true)}>Bebidas</button>
    <div className=" ">
    {drink.map((element, index) => {
        return(
        <div key={index} className= "w-1/2 p-1 ">
        <button className=" m-2 w-1/5 h-12 bg-yellow-500 text-teal-50 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-yellow-600 " onClick={() => allContext.addProduct(element)}>{element.name} ${element.price}</button>
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