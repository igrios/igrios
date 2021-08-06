import React from 'react';


function Ingreso(props){

return(
<label>

    {props.dato} :

<input type="text" name = {props.dato}  placeholder={props.dato}></input>
</label>

);
}

export default Ingreso;