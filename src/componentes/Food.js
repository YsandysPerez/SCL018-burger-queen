import React from "react";
import data from "./../data/data.json";

const Foods = () => {
    const food = data.food;
    return ( 
        
        <div>
        {food.map((element, index) => {
            return(
            <div key={index}>
                <button className="h-10 px-10 font-semibold text-lg text-teal-50 transition-colors duration-150 bg-yellow-500 rounded-lg focus:shadow-outline hover:bg-yellow-600">{element.name}</button>
            </div>
            );
        })}
    </div>
     );
}
 
export default Foods;