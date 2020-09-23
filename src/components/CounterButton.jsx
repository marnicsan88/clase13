import React from 'react'
import {InputGroupAddon, Button} from 'reactstrap'

const CounterButton = (props) => {
    return(
        <InputGroupAddon addonType={props.inputAddOnType}>
            <Button color={props.colorButton}  onClick={props.accion}>{props.text}</Button>
        </InputGroupAddon>
        
    )
}

export default CounterButton