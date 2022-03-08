import React from "react"
import styled from "styled-components"

const Input = (props) => {
    return (
        <Inputstyle
            placeholder={props.placeholder}
            onChangeText={props.onChangeText}
            secureTextEntry={props.secu}
            name={props.name}
        />
    )
}

const Inputstyle = styled.TextInput`
    width: 100%;
    border: 1px black;
    color: #7f8c8d;
    background-color: white;
    margin-top: 10px;
    border-radius: 10px;
    padding: 10px;
`

export default Input
