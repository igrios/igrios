import React from 'react';


function Telefono(props){

return(
<label>

    {props.dato} :

<input type="number" name = {props.dato}  placeholder={props.dato}></input>
</label>

);
}

export default Telefono;