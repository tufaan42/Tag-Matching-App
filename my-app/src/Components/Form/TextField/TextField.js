import React from 'react';
import '../../../App.css';
const TextField = (props) => {
    return ( 
    < textarea 
        id = "value"
        className = "texta"
        maxLength = "200"
        value = {props.value}
        onChange = {props.handler} 
    >
    </textarea>
    );
}

export default TextField;