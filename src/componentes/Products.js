import React from "react";
import data from "./../data/data.json";

const Products = () => {
    const food = data.food;
    return ( 
        <div>
            {food.map((element, index) => {
				return(
				<div key={index}>
					<p>{element.name}</p>
				</div>
				);
			})}
		</div>
     );
}
 
export default Products;