import React from "react";
import data from "./../data/data.json";

const Drinks = () => {
    const drink = data.drinks;
    return ( 
        <div>
        <button className="h-10 px-10 font-semibold text-lg text-teal-50 transition-colors duration-150 bg-yellow-500 rounded-lg focus:shadow-outline hover:bg-yellow-600">Bebidas</button>
        {drink.map((element, index) => {
            return(
            <div key={index} className="place-content-stretch">
                <button className="h-10 px-10 font-semibold text-base text-teal-50 transition-colors duration-150 bg-yellow-500 rounded-lg focus:shadow-outline hover:bg-yellow-600">{element.name} ${element.price}</button>
                {/*<p>{element.name}</p>*/}
            </div>
            );
        })}
    </div>
     );
}
 
export default Drinks;