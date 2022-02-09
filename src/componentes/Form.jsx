import React, {useContext} from "react";
import { menuContext } from "../App";

export const Form = () => {
    const allContext = useContext(menuContext);
    return(
        <form action='' class="form">
            <input 
            type = 'text' 
            name= 'nombre' 
            value={allContext.name} 
            onChange={(e) => allContext.changeName(e.target.value)} 
            placeholder='Nombre del cliente'/>
            <input 
            type = 'number' 
            name= 'mesa' 
            value={allContext.table}
            onChange={(e) => allContext.changeTable(e.target.value)} 
            placeholder='Mesa'/>
        </form>
    )
}
