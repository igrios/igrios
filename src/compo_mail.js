import React from 'react';


function Mail(props){

return(
<label>
    {props.dato} :    
<input type="Email" name = {props.dato}  placeholder={props.dato}></input>
</label>

);
}

export default Mail;