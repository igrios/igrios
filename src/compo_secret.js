import React from 'react';


function Secreto(props){

return(
<label>

    {props.dato} :

<input type="password" name = {props.dato}  placeholder={props.dato}></input>
</label>

);
}

export default Secreto;