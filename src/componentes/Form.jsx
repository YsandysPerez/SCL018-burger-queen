import React, {useState} from "react";

const Form = () => {
    const [name, changeName] = useState('');
    const [table, changeTable] = useState('');

    return(
        <Form action=''>
            <input 
            type = 'text' 
            name= 'nombre' 
            value={name} 
            onChange={(e) => changeName(e.target.value)} 
            placeholder='Nombre del cliente'/>
            <input 
            type = 'number' 
            name= 'mesa' 
            value={table}
            onChange={(e) => changeTable(e.target.value)} 
            placeholder='Mesa'/>
            <button type= 'submit'>Crear Mesa</button>
        </Form>
    )
}